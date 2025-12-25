"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import AddPackageTypeModal from "./AddPackageTypeModal";

export default function PackageTypeLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      <div className='col-xxl-3'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <h6 className='text-lg fw-semibold mb-16'>Package Type Filters</h6>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Package Type Name</label>
              <input
                type='text'
                className='form-control form-control-sm'
                placeholder='Search by package type'
              />
            </div>
            <div className='mb-16'>
              <label className='form-label text-sm fw-medium'>Status</label>
              <select className='form-select form-select-sm'>
                <option value=''>All</option>
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
              </select>
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
                  name='search'
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
                data-bs-target='#addPackageTypeModal'
              >
                <i className='ri-add-line' /> Create Package Type
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
                  <th scope='col'>Package Type Name</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Created Date</th>
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
                    <Link href='#' className='text-primary-600 fw-medium'>
                      Family Package
                    </Link>
                  </td>
                  <td>Family-friendly package type</td>
                  <td>
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                  <td>25 Jan 2024</td>
                  <td>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                      data-bs-toggle='modal'
                      data-bs-target='#addPackageTypeModal'
                      title='View'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                      data-bs-toggle='modal'
                      data-bs-target='#addPackageTypeModal'
                      title='Edit'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                      title='Delete'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-2 mt-24'>
              <span>Showing 1 to 1 of 1 entries</span>
              <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
                <li className='page-item'>
                  <Link
                    className='page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px me-8 w-32-px bg-base'
                    href='#'
                  >
                    <Icon icon='ep:d-arrow-left' className='text-xl' />
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-primary-600 text-white fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px me-8 w-32-px'
                    href='#'
                  >
                    1
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <AddPackageTypeModal />
      </div>
    </div>
  );
}

