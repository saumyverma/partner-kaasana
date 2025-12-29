"use client";
import InvoiceReportFilter from "./InvoiceReportFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function InvoiceReportLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* InvoiceReportFilter */}
      <InvoiceReportFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
