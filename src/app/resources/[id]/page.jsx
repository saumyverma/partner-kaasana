import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import RolesLayer from '@/components/Resources/RolesLayer';
import UsersLayer from '@/components/Resources/UsersLayer';
import BranchesLayer from '@/components/Resources/BranchesLayer';
import SuppliersLayer from '@/components/Resources/SuppliersLayer';

export default async function Page({params}) {
     const resolvedParams = await params;
      const pageId = resolvedParams.id;
  return (
     <MasterLayout>
       <Breadcrumb title={pageId} />

       {pageId === "roles" ? (
         <RolesLayer/>
      ) : pageId === "users" ? (
        <UsersLayer/>
      ) : pageId === "branches" ? (
        <BranchesLayer/>
      ) : pageId === "suppliers" ? (
         <SuppliersLayer/>
      ) : (
       null
      )}
   </MasterLayout>
  )
}
