import React from 'react'
import LeadsLayer from '@/components/crm/LeadsLayer'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default async  function Page({params}) {
   const resolvedParams = await params;
   const pageId = resolvedParams.id;
   return (
    <MasterLayout>
   <Breadcrumb title={pageId} />
   <LeadsLayer pageId={pageId}/>
   </MasterLayout>
  )
}
