import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const RecentActivityOne = () => {
  return (
    <div className='col-xxl-12'>
      <div className='card h-100'>
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
            <table className='table bordered-table mb-0 rounded-0 border-0'>
              <thead>
                <tr>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Payment #
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Date
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Invoice #
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Customer
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Payment Mode
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Transaction ID
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Note
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#PAY-001</td>
                  <td>2024-01-15</td>
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
                  <td>Credit Card</td>
                  <td>TXN-123456789</td>
                  <td>Payment for invoice #INV-001</td>
                  <td>$12,000.00</td>
                </tr>
                <tr>
                  <td>#PAY-002</td>
                  <td>2024-01-16</td>
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
                  <td>Bank Transfer</td>
                  <td>TXN-987654321</td>
                  <td>Partial payment</td>
                  <td>$5,000.00</td>
                </tr>
                <tr>
                  <td>#PAY-003</td>
                  <td>2024-01-17</td>
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
                  <td>Cash</td>
                  <td>TXN-456789123</td>
                  <td>Full payment received</td>
                  <td>$18,000.00</td>
                </tr>
                <tr>
                  <td>#PAY-004</td>
                  <td>2024-01-18</td>
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
                  <td>PayPal</td>
                  <td>TXN-789123456</td>
                  <td>Online payment</td>
                  <td>$6,000.00</td>
                </tr>
                <tr>
                  <td>#PAY-005</td>
                  <td>2024-01-19</td>
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
                  <td>Debit Card</td>
                  <td>TXN-321654987</td>
                  <td>First installment</td>
                  <td>$7,000.00</td>
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

