import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import SalesReportWrapper from '@/components/reports/sales/SalesReportWrapper';
import AgentPerformanceLayer from '@/components/reports/agent-performance/AgentPerformanceLayer';
import BranchPerformanceLayer from '@/components/reports/branch-performance/BranchPerformanceLayer';
import LeadReportsLayer from '@/components/reports/lead-reports/LeadReportsLayer';

export default async function Page({params}) {
  const resolvedParams = await params;
  const pageId = resolvedParams.type;
  
  const getBreadcrumbLabel = (id) => {
    const labels = {
      "sales": "Sales Report",
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
        {pageId === "sales" ? (
          <SalesReportWrapper initialTitle={pageTitle} initialBreadcrumbs={breadcrumbs} />
        ) : (
          <>
            <Breadcrumb title={pageTitle} breadcrumbs={breadcrumbs} />
            {pageId === "agent-performance" ? (
              <AgentPerformanceLayer pageId={pageId}/>
            ) : pageId === "branch-performance" ? (
              <BranchPerformanceLayer pageId={pageId}/>
            ) : pageId === "lead-reports" ? (
              <LeadReportsLayer pageId={pageId}/>
            ) : (
              null
            )}
          </>
        )}
      </MasterLayout>
    </ProtectedRoute>
  )
}

