import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import AddInvoiceModal from "./AddInvoiceModal";

export default function InvoiceLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      <div className='col-xxl-3'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <h6 className='text-lg fw-semibold mb-16'>Invoice Filters</h6>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Invoice No</label>
              <input
                type='text'
                className='form-control form-control-sm'
                placeholder='Search by invoice no'
              />
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Customer Name</label>
              <input
                type='text'
                className='form-control form-control-sm'
                placeholder='Search by customer'
              />
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Status</label>
              <select className='form-select form-select-sm'>
                <option value=''>All</option>
                <option value='paid'>Paid</option>
                <option value='pending'>Pending</option>
                <option value='overdue'>Overdue</option>
              </select>
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>From Date</label>
              <input type='date' className='form-control form-control-sm' />
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>To Date</label>
              <input type='date' className='form-control form-control-sm' />
            </div>
            <div className='d-flex flex-column gap-2 mt-16'>
              <button type='button' className='btn btn-sm btn-primary-600 w-100'>
                Apply Filter
              </button>
              <button type='button' className='btn btn-sm btn-outline-light w-100'>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-9'>
        <div className='card h-100 p-0'>
          <div className='card-header d-flex flex-wrap align-items-center justify-content-between gap-3'>
            <div className='d-flex flex-wrap align-items-center gap-3'>
            
              <div className='icon-field'>
                <input
                  type='text'
                  name='#0'
                  className='form-control form-control-sm w-auto'
                  placeholder='Search'
                />
                <span className='icon'>
                  <Icon icon='ion:search-outline' />
                </span>
              </div>
            </div>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <button
                type='button'
                className='btn btn-sm btn-primary-600'
                data-bs-toggle='modal'
                data-bs-target='#addInvoiceModal'
              >
                <i className='ri-add-line' /> Create Invoice
              </button>
            </div>
          </div>
          <div className='card-body table-responsive'>
            <table className='table bordered-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='checkAll'
                      />
                      <label className='form-check-label' htmlFor='checkAll'>
                        S.L
                      </label>
                    </div>
                  </th>
                  <th scope='col'>Invoice</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Issued Date</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check1'
                      />
                      <label className='form-check-label' htmlFor='check1'>
                        01
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #526534
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list1.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Kathryn Murphy
                      </h6>
                    </div>
                  </td>
                  <td>25 Jan 2024</td>
                  <td>$200.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check2'
                      />
                      <label className='form-check-label' htmlFor='check2'>
                        02
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #696589
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list2.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Annette Black
                      </h6>
                    </div>
                  </td>
                  <td>25 Jan 2024</td>
                  <td>$200.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check3'
                      />
                      <label className='form-check-label' htmlFor='check3'>
                        03
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #256584
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list3.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Ronald Richards
                      </h6>
                    </div>
                  </td>
                  <td>10 Feb 2024</td>
                  <td>$200.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check4'
                      />
                      <label className='form-check-label' htmlFor='check4'>
                        04
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #526587
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list4.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Eleanor Pena
                      </h6>
                    </div>
                  </td>
                  <td>10 Feb 2024</td>
                  <td>$150.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check5'
                      />
                      <label className='form-check-label' htmlFor='check5'>
                        05
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #105986
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list5.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Leslie Alexander
                      </h6>
                    </div>
                  </td>
                  <td>15 March 2024</td>
                  <td>$150.00</td>
                  <td>
                    {" "}
                    <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check6'
                      />
                      <label className='form-check-label' htmlFor='check6'>
                        06
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #526589
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list6.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Albert Flores
                      </h6>
                    </div>
                  </td>
                  <td>15 March 2024</td>
                  <td>$150.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check7'
                      />
                      <label className='form-check-label' htmlFor='check7'>
                        07
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #526520
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list7.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Jacob Jones
                      </h6>
                    </div>
                  </td>
                  <td>27 April 2024</td>
                  <td>$250.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check8'
                      />
                      <label className='form-check-label' htmlFor='check8'>
                        08
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #256584
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list8.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Jerome Bell
                      </h6>
                    </div>
                  </td>
                  <td>27 April 2024</td>
                  <td>$250.00</td>
                  <td>
                    {" "}
                    <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check9'
                      />
                      <label className='form-check-label' htmlFor='check9'>
                        09
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #200257
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list9.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Marvin McKinney
                      </h6>
                    </div>
                  </td>
                  <td>30 April 2024</td>
                  <td>$250.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                        id='check110'
                      />
                      <label className='form-check-label' htmlFor='check110'>
                        10
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href='#' className='text-primary-600'>
                      #526525
                    </Link>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/user-list/user-list10.png'
                        alt=''
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Cameron Williamson
                      </h6>
                    </div>
                  </td>
                  <td>30 April 2024</td>
                  <td>$250.00</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px  me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 mt-24'>
              <span>Showing 1 to 10 of 12 entries</span>
              <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
                <li className='page-item'>
                  <Link
                    className='page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px  me-8 w-32-px bg-base'
                    href='#'
                  >
                    <Icon icon='ep:d-arrow-left' className='text-xl' />
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-primary-600 text-white fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px  me-8 w-32-px'
                    href='#'
                  >
                    1
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-primary-50 text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px  me-8 w-32-px'
                    href='#'
                  >
                    2
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-primary-50 text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px  me-8 w-32-px'
                    href='#'
                  >
                    3
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px  me-8 w-32-px bg-base'
                    href='#'
                  >
                    {" "}
                    <Icon icon='ep:d-arrow-right' className='text-xl' />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <AddInvoiceModal />
      </div>
    </div>
  )
}