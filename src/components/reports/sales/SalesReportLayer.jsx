"use client";
import SalesReportFilter from "./SalesReportFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function SalesReportLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* SalesReportFilter */}
      <SalesReportFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
