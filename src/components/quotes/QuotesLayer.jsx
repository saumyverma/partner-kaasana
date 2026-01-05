"use client";
import { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import AddQuotesModal from "./AddQuotesModal";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

export default function QuotesLayer({pageId}) {
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#quotesDataTable").DataTable({
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
    <div className='row gy-4'>
    <div className='col-xxl-3'>
      <div className='card h-100 p-0'>
        <div className='card-body p-24'>
          <h6 className='text-lg fw-semibold mb-16'>Quotes Filters</h6>
          <div className='mb-16'>
            <label className='form-label text-sm fw-medium'>Quotes No</label>
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Search by quotes number'
            />
          </div>
          <div className='mb-16'>
            <label className='form-label text-sm fw-medium'>Customer Type</label>
            <input
              type='text'
              className='form-control form-control-sm'
              placeholder='Search by customer type'
            />
          </div>
          <div className='mb-16'>
            <label className='form-label text-sm fw-medium'>Status</label>
            <select className='form-select form-select-sm'>
              <option value=''>All</option>
              <option value='B2B'>B2B</option>
              <option value='B2C'>B2C</option>
            </select>
          </div>
          <div className='mb-16'>
            <label className='form-label text-sm fw-medium'>Quote Date</label>
            <input type='date' className='form-control form-control-sm' />
          </div>
          <div className='mb-16'>
            <label className='form-label text-sm fw-medium'>Valid Till</label>
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
      <div className='card h-100 p-0 basic-data-table'>
        <div className='card-header d-flex flex-wrap align-items-center justify-content-between gap-3'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
          </div>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='btn btn-sm btn-primary-600'
              data-bs-toggle='modal'
              data-bs-target='#addQuotesModal'
            >
              <i className='ri-add-line' /> Create Quotes
            </button>
          </div>
        </div>
        <div className='card-body table-responsive'>
          <table
            className='table bordered-table mb-0'
            id='quotesDataTable'
            data-page-length={10}
          >
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
                <th scope='col'>Quotes</th>
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
                    #Q000001
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
                      B2B
                    </h6>
                  </div>
                </td>
                  <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000002
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
                      B2C
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000003
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
                      B2B
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000004
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
                          B2C
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000005
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
                      B2B
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000006
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
                      B2C
                    </h6>
                  </div>
                </td>
                        <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000007
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
                      B2B
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000008
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
                      B2C
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                    #Q000009
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
                      B2B
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                    Active
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
                        #Q000010
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
                      B2C
                    </h6>
                  </div>
                </td>
                <td>25 Dec 2025</td>
                <td>10000</td>
                <td>
                  {" "}
                  <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
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
        </div>
      </div>
      <AddQuotesModal />
    </div>
  </div>
  )
}