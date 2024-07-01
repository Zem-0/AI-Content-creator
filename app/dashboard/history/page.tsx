'use client'
import React, { useEffect, useState } from 'react'
interface DataRow {
    id: number;
    formData: string;
    airesponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
}

 export default function history() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://console.neon.tech/app/projects/sweet-frost-08272694/branches/br-aged-math-a5rq9zyr/tables')
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='p-5 shadow-md rounded-md border bg-slate-100 flex flex-col gap-3 cursor-pointer  transition-all'>
      <h2 className='text-3xl font-bold '>History</h2>
      <h3>search you previously generated content here</h3>
      <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Form Data</th>
                        <th>AI Response</th>
                        <th>Template Slug</th>
                        <th>Created By</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                
      </table>


      </div>

  )
}
