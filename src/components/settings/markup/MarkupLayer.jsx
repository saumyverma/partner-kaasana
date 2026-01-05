import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import AddMarkupModal from "./AddMarkupModal";

export default function MarkupLayer() {
  return (
    <div className='row gy-4'>
      <div className='col-xxl-3'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <h6 className='text-lg fw-semibold mb-16'>Markup Filters</h6>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Name</label>
              <input
                type='text'
                className='form-control form-control-sm'
                placeholder='Search by name'
              />
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Type</label>
              <select className='form-select form-select-sm'>
                <option value=''>All</option>
                <option value='percentage'>Percentage</option>
                <option value='fixed'>Fixed Amount</option>
                <option value='tiered'>Tiered</option>
              </select>
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Status</label>
              <select className='form-select form-select-sm'>
                <option value=''>All</option>
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
              </select>
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Created Date</label>
              <input type='date' className='form-control form-control-sm' />
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Updated Date</label>
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
                data-bs-target='#addMarkupModal'
              >
                <i className='ri-add-line' /> Create Markup
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
                  <th scope='col'>Name</th>
                  <th scope='col'>Type</th>
                  <th scope='col'>Value</th>
                  <th scope='col'>Created Date</th>
                  <th scope='col'>Updated Date</th>
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
                      Standard Markup
                    </Link>
                  </td>
                  <td>
                    <span className='bg-primary-50 text-primary-600 px-10 py-4 radius-8 fw-medium text-sm'>
                      Percentage
                    </span>
                  </td>
                  <td>15%</td>
                  <td>25 Dec 2024</td>
                  <td>25 Dec 2024</td>
                  <td>
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
                      Premium Markup
                    </Link>
                  </td>
                  <td>
                    <span className='bg-warning-focus text-warning-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Fixed Amount
                    </span>
                  </td>
                  <td>$500.00</td>
                  <td>24 Dec 2024</td>
                  <td>26 Dec 2024</td>
                  <td>
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
                      Volume Discount Markup
                    </Link>
                  </td>
                  <td>
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Tiered
                    </span>
                  </td>
                  <td>10% - 20%</td>
                  <td>23 Dec 2024</td>
                  <td>23 Dec 2024</td>
                  <td>
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
                      Seasonal Markup
                    </Link>
                  </td>
                  <td>
                    <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Percentage
                    </span>
                  </td>
                  <td>25%</td>
                  <td>22 Dec 2024</td>
                  <td>27 Dec 2024</td>
                  <td>
                    <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Inactive
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
              <span>Showing 1 to 4 of 4 entries</span>
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
                    className='page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px  me-8 w-32-px bg-base'
                    href='#'
                  >
                    <Icon icon='ep:d-arrow-right' className='text-xl' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddMarkupModal />
    </div>
  );
}

