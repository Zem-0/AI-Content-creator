import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PROPS{
  aiOutput:string;
}

export default function OutputSection({aiOutput}:PROPS) {
  const editorRef:any=useRef()
  useEffect(()=>{
    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  return (
    <div className='bg-white whadoe=lg border rounded-xl'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-xl'>
          Your result
        </h2>
        <Button className='flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
      </div>
        <Editor
        ref={editorRef}
          initialValue="hello react editor world!"
          initialEditType="wysiwyg"
          height="600px"
          useCommandShortcut={true}
          onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
        />
    </div>
  )
}

