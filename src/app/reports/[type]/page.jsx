import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import InvoicesReportLayer from '@/components/reports/invoices/InvoicesReportLayer';
import AgentPerformanceLayer from '@/components/reports/agent-performance/AgentPerformanceLayer';
import BranchPerformanceLayer from '@/components/reports/branch-performance/BranchPerformanceLayer';
import LeadReportsLayer from '@/components/reports/lead-reports/LeadReportsLayer';

export default async function Page({params}) {
  const resolvedParams = await params;
  const pageId = resolvedParams.type;
  
  const getBreadcrumbLabel = (id) => {
    const labels = {
      "invoices": "Invoices Report",
      "agent-performance": "Agent Performance Report",
      "branch-performance": "Branch Performance Report",
      "lead-reports": "Lead Reports"
    };
    return labels[id] || "";
  };
  
  const breadcrumbs = [
    { label: "Reports", href: "#" },
    { 
      label: getBreadcrumbLabel(pageId),
      href: "#" 
    },
  ];
  
  const pageTitle = getBreadcrumbLabel(pageId);
  
  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb title={pageTitle} breadcrumbs={breadcrumbs} />
        {pageId === "invoices" ? (
          <InvoicesReportLayer pageId={pageId}/>
        ) : pageId === "agent-performance" ? (
          <AgentPerformanceLayer pageId={pageId}/>
        ) : pageId === "branch-performance" ? (
          <BranchPerformanceLayer pageId={pageId}/>
        ) : pageId === "lead-reports" ? (
          <LeadReportsLayer pageId={pageId}/>
        ) : (
          null
        )}
      </MasterLayout>
    </ProtectedRoute>
  )
}

