"use client";
import BranchPerformanceFilter from "./BranchPerformanceFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function BranchPerformanceLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* BranchPerformanceFilter */}
      <BranchPerformanceFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
