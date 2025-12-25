import RevenueReportOne from "./RevenueReportOne";
import CustomersStatisticsOne from "./CustomersStatisticsOne";
import RecentOrdersOne from "./RecentOrdersOne";
import TransactionsOne from "./TransactionsOne";
import RecentOrdersTwo from "./RecentOrdersTwo";
import DistributionMapsOne from "./DistributionMapsOne";
import TopCustomersOne from "./TopCustomersOne";
import TopSellingProductOne from "./TopSellingProductOne";
import StockReportOne from "./StockReportOne";

const DashBoardLayerThree = () => {
  return (
    <section className='row gy-4'>
      {/* RevenueReportOne */}
      <RevenueReportOne />

      {/* CustomersStatisticsOne */}
      <CustomersStatisticsOne />

      {/* RecentOrdersOne */}
      <RecentOrdersOne />

      {/* TransactionsOne */}
      <TransactionsOne />

      {/* RecentOrdersTwo */}
      <RecentOrdersTwo />

      {/* DistributionMapsOne */}
      <DistributionMapsOne />

      {/* TopCustomersOne */}
      <TopCustomersOne />

      {/* TopSellingProductOne */}
      <TopSellingProductOne />

      {/* StockReportOne */}
      <StockReportOne />
    </section>
  );
};

export default DashBoardLayerThree;
