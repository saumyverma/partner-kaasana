"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

const RecentActivityOne = () => {
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#invoicesRecentActivityTable").DataTable({
          pageLength: 10,
        });
      })
      .catch((error) => {
        console.error("Error loading jQuery or DataTables:", error);
      });

    return () => {
      // Cleanup DataTable instance
      if (table) table.destroy(true);
    };
  }, []);

  return (
    <div className='col-xxl-12'>
      <div className='card h-100 basic-data-table'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
          <h6 className='text-lg fw-semibold mb-0'>Recent Activity</h6>
          <Link
            href='#'
            className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
          >
            View All
            <Icon icon='solar:alt-arrow-right-linear' className='icon' />
          </Link>
        </div>
        <div className='card-body p-0'>
          <div className='table-responsive scroll-sm'>
            <table
              className='table bordered-table mb-0 rounded-0 border-0'
              id='invoicesRecentActivityTable'
              data-page-length={10}
            >
              <thead>
                <tr>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Invoice #
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Customer
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Date
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Due Date
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Amount
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Amount with tax
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Total Tax
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Discount
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Adjustment
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Applied Credits
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Amount open
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#INV-001</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-grid/user-grid-img1.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0'>Kristin Watson</h6>
                        <span className='text-sm text-secondary-light fw-medium'>
                          ulfaha@mail.ru
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2024-01-15</td>
                  <td>2024-02-15</td>
                  <td>$10,000.00</td>
                  <td>$12,000.00</td>
                  <td>$2,000.00</td>
                  <td>$500.00</td>
                  <td>$0.00</td>
                  <td>$0.00</td>
                  <td>$12,000.00</td>
                  <td>
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#INV-002</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-grid/user-grid-img2.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0'>Theresa Webb</h6>
                        <span className='text-sm text-secondary-light fw-medium'>
                          joie@gmail.com
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2024-01-16</td>
                  <td>2024-02-16</td>
                  <td>$8,500.00</td>
                  <td>$10,200.00</td>
                  <td>$1,700.00</td>
                  <td>$300.00</td>
                  <td>$100.00</td>
                  <td>$500.00</td>
                  <td>$9,700.00</td>
                  <td>
                    <span className='bg-warning-focus text-warning-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#INV-003</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-grid/user-grid-img3.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0'>Brooklyn Simmons</h6>
                        <span className='text-sm text-secondary-light fw-medium'>
                          warn@mail.ru
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2024-01-17</td>
                  <td>2024-02-17</td>
                  <td>$15,000.00</td>
                  <td>$18,000.00</td>
                  <td>$3,000.00</td>
                  <td>$1,000.00</td>
                  <td>$0.00</td>
                  <td>$0.00</td>
                  <td>$18,000.00</td>
                  <td>
                    <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Overdue
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#INV-004</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-grid/user-grid-img4.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0'>Robert Fox</h6>
                        <span className='text-sm text-secondary-light fw-medium'>
                          fellora@mail.ru
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2024-01-18</td>
                  <td>2024-02-18</td>
                  <td>$5,000.00</td>
                  <td>$6,000.00</td>
                  <td>$1,000.00</td>
                  <td>$200.00</td>
                  <td>$0.00</td>
                  <td>$0.00</td>
                  <td>$6,000.00</td>
                  <td>
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#INV-005</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-grid/user-grid-img5.png'
                        alt=''
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0'>Jane Cooper</h6>
                        <span className='text-sm text-secondary-light fw-medium'>
                          zitka@mail.ru
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2024-01-19</td>
                  <td>2024-02-19</td>
                  <td>$12,000.00</td>
                  <td>$14,400.00</td>
                  <td>$2,400.00</td>
                  <td>$600.00</td>
                  <td>$200.00</td>
                  <td>$1,000.00</td>
                  <td>$13,200.00</td>
                  <td>
                    <span className='bg-warning-focus text-warning-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityOne;

