"use client";
import PaymentStatusFilter from "./PaymentStatusFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function PaymentStatusLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* PaymentStatusFilter */}
      <PaymentStatusFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
