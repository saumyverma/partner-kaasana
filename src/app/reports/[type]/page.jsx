import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import SalesReportLayer from '@/components/reports/sales/SalesReportLayer';
import InvoicesReportLayer from '@/components/reports/invoices/InvoicesReportLayer';
import AgentPerformanceLayer from '@/components/reports/agent-performance/AgentPerformanceLayer';
import BranchPerformanceLayer from '@/components/reports/branch-performance/BranchPerformanceLayer';
import LeadReportsLayer from '@/components/reports/lead-reports/LeadReportsLayer';
import PaymentStatusLayer from '@/components/reports/payment-status/PaymentStatusLayer';

export default async function Page({params}) {
  const resolvedParams = await params;
  const pageId = resolvedParams.type;
  
  const getBreadcrumbLabel = (id) => {
    const labels = {
      "sales": "Sales Report",
      "invoices": "Invoices Report",
      "agent-performance": "Agent Performance Report",
      "branch-performance": "Branch Performance Report",
      "lead-reports": "Lead Reports",
      "payment-status": "Payment Status Report"
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
  
  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        {pageId === "sales" ? (
          <SalesReportLayer pageId={pageId}/>
        ) : pageId === "invoices" ? (
          <InvoicesReportLayer pageId={pageId}/>
        ) : pageId === "agent-performance" ? (
          <AgentPerformanceLayer pageId={pageId}/>
        ) : pageId === "branch-performance" ? (
          <BranchPerformanceLayer pageId={pageId}/>
        ) : pageId === "lead-reports" ? (
          <LeadReportsLayer pageId={pageId}/>
        ) : pageId === "payment-status" ? (
          <PaymentStatusLayer pageId={pageId}/>
        ) : (
          null
        )}
      </MasterLayout>
    </ProtectedRoute>
  )
}

