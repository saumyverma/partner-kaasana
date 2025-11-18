import React from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import ShowRoles from '@/components/modal/ShowRoles';
import AddAndUpdateRoles from '@/components/modal/AddAndUpdateRoles';
export default function RolesLayer() {

  let departments = [
    { "value": "1", "label": "Accounting & Finance" },
    { "value": "2", "label": "Administrative" },
    { "value": "3", "label": "Business Development" },
    { "value": "4", "label": "Customer Service" },
    { "value": "5", "label": "Finance" },
    { "value": "6", "label": "Human Resource" },
    { "value": "7", "label": "IT" },
    { "value": "8", "label": "Legal" },
    { "value": "9", "label": "Marketing" },
    { "value": "10", "label": "Operations" },
    { "value": "11", "label": "Post Sales" },
    { "value": "12", "label": "Purchasing" },
    { "value": "13", "label": "Quality Assurance" },
    { "value": "14", "label": "Risk Management" },
    { "value": "15", "label": "R & D" },
    { "value": "16", "label": "Sales" },
    { "value": "17", "label": "Strategy" },
    { "value": "18", "label": "Purchase" },
    { "value": "19", "label": "demo_saumy" }
  ]

  let jobRoles = [
    { "value": "Admin", "label": "Admin" },
    { "value": "Sales", "label": "Sales" },
    { "value": "Operations", "label": "Operations" },
    { "value": "Accounts", "label": "Accounts" },
    { "value": "Product", "label": "Product" }
  ]

  return (
    <>
      <ShowRoles departments={departments} jobRoles={jobRoles} />
      <AddAndUpdateRoles departments={departments} jobRoles={jobRoles} />
      <div className='card h-100 p-0 radius-12'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
          <div className='d-flex align-items-center flex-wrap gap-3'>
            <span className='text-md fw-medium text-secondary-light mb-0'>
              Show
            </span>
            <select
              className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
              defaultValue='Select Number'
            >
              <option value='Select Number' disabled>
                Select Number
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <form className='navbar-search'>
              <input
                type='text'
                className='bg-base h-40-px w-auto'
                name='search'
                placeholder='Search'
              />
              <Icon icon='ion:search-outline' className='icon' />
            </form>
            <select
              className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
              defaultValue='Select Status'
            >
              <option value='Select Status' disabled>
                Select Status
              </option>
              <option value='Active'>Active</option>
              <option value='Inactive'>Inactive</option>
            </select>
          </div>

        </div>
        <div className='card-body p-24'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table sm-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>
                    <div className='d-flex align-items-center gap-10'>
                      {/* <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border input-form-dark'
                        type='checkbox'
                        name='checkbox'
                        id='selectAll'
                      />
                    </div> */}
                      S.L
                    </div>
                  </th>

                  <th scope='col'>Department </th>
                  <th scope='col'>Job Roles</th>
                  <th scope='col'>Job Title</th>
                  <th scope='col'>Create Date</th>
                  <th scope='col' className='text-center'>
                    Status
                  </th>
                  <th scope='col' className='text-center'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>


                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-10'>
                      {/* <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div> */}
                      01
                    </div>
                  </td>
                  <td>Accounting & Finance</td>
                  <td>Sales</td>
                  <td>Marketing</td>
                  <td>30 April 2024</td>

                  <td className='text-center'>
                    <span className='bg-success-focus text-success-600 border border-success-main px-24 py-4 radius-4 fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-info-focus text-info-600 bg-hover-info-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#ShowRoles'
                      >
                        <Icon icon='lucide:eye' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#AddAndUpdateRoles'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
            <span>Showing 1 to 10 of 12 entries</span>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  <Icon icon='ep:d-arrow-left' className='' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white'
                  href='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px'
                  href='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  4
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  5
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='' />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
