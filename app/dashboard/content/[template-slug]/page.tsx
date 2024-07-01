'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { PgVarchar } from 'drizzle-orm/pg-core'

interface PROPS{
    params:{
        'template-slug':string
    }
}

export default function CreateNewContent(props:PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
    const [loading,setLoading]=useState(false);
    const [aiOutput,setaiouput]=useState<string>('');
    const {user}=useUser();
    const GenerateAIcontent=async(formData:any)=>{
      setLoading(true);
      const SelectedPrompt=selectedTemplate?.aiPrompt;
      const FinalAIprompt=JSON.stringify(formData)+", "+SelectedPrompt;
      const result=await chatSession.sendMessage(FinalAIprompt);
      console.log(result.response.text());
      setaiouput(result?.response.text);
      await SaveIndata(formData,selectedTemplate?.slug,result?.response.text());
      setLoading(false);
    }
    const SaveIndata=async(formData:any,slug:any,aiResp:string)=>{
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        airesponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress||'',//vkfjnvkljfnkj
        CreatedAt: moment().format('YYYY-MM-DD'), 
      });
      console.log(result);
    }
  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button ><ArrowBigLeft/>Back</Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>GenerateAIcontent(v)}
        loading={loading}/>
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>
    </div>
    </div>
  
    
  )
}


