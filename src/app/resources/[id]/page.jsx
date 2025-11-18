import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import RolesLayer from '@/components/Resources/RolesLayer';
import UsersLayer from '@/components/Resources/user/UsersLayer';
import BranchesLayer from '@/components/Resources/BranchesLayer';
import SuppliersLayer from '@/components/Resources/SuppliersLayer';
import ProtectedRoute from "@/components/ProtectedRoute";

export default async function Page({params}) {
     const resolvedParams = await params;
     const pageId = resolvedParams.id;
     const breadcrumbs = [
    {  label: "Resources",  href: "#"},
    {  label: pageId === "roles" ? "Roles" : pageId === "users" ? "Users" : pageId === "branches" ? "Branches" : pageId === "suppliers" ? "Suppliers" : "",  href: "#"},
  
  ];
  return (
     <ProtectedRoute>
     <MasterLayout>
       <Breadcrumb breadcrumbs={breadcrumbs} />

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
   </ProtectedRoute>
  )
}
