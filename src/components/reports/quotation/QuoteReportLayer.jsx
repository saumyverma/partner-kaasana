"use client";
import QuoteReportFilter from "./QuoteReportFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function QuoteReportLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* QuoteReportFilter */}
      <QuoteReportFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
