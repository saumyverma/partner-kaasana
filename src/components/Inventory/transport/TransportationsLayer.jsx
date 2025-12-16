"use client";
import { useEffect,React } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import AddTransportationModal from "./AddTransportationModal";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

export default function TransportationsLayer() {
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#dataTable").DataTable({
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
        <div className='card h-100 p-0 radius-12 border shadow-sm'>
          <div className='card-header border-bottom bg-primary-50 py-20 px-24'>
            <div className='d-flex align-items-center gap-10'>
              <Icon icon='solar:filter-bold' className='text-primary-600 text-xl' />
              <h6 className='text-lg fw-bold text-primary-light mb-0'>
                Filters
              </h6>
            </div>
          </div>
          <div className='card-body p-24'>
            <div className='d-flex flex-column gap-20'>
              {/* Country Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:global-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Country
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Countries</option>
                  <option value='usa'>USA</option>
                  <option value='uk'>UK</option>
                  <option value='india'>India</option>
                  <option value='canada'>Canada</option>
                  <option value='australia'>Australia</option>
                  <option value='germany'>Germany</option>
                  <option value='france'>France</option>
                </select>
              </div>

              {/* State Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:map-point-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    State
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All States</option>
                  <option value='california'>California</option>
                  <option value='new-york'>New York</option>
                  <option value='texas'>Texas</option>
                  <option value='florida'>Florida</option>
                  <option value='london'>London</option>
                  <option value='maharashtra'>Maharashtra</option>
                  <option value='karnataka'>Karnataka</option>
                </select>
              </div>

              {/* City Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:city-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    City
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Cities</option>
                  <option value='los-angeles'>Los Angeles</option>
                  <option value='new-york-city'>New York City</option>
                  <option value='miami'>Miami</option>
                  <option value='san-francisco'>San Francisco</option>
                  <option value='london'>London</option>
                  <option value='mumbai'>Mumbai</option>
                  <option value='bangalore'>Bangalore</option>
                  <option value='delhi'>Delhi</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:star-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Rating
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Ratings</option>
                  <option value='5'>5 Stars</option>
                  <option value='4'>4 Stars</option>
                  <option value='3'>3 Stars</option>
                  <option value='2'>2 Stars</option>
                  <option value='1'>1 Star</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className='d-flex flex-column gap-12 mt-8'>
                <button
                  type='button'
                  className='btn btn-primary w-100 py-12 radius-8 fw-semibold text-sm d-flex align-items-center justify-content-center gap-8'
                >
                  <Icon icon='solar:filter-bold' className='text-lg' />
                  Apply Filters
                </button>
                <button
                  type='button'
                  className='btn btn-outline-secondary w-100 py-12 radius-8 fw-semibold text-sm d-flex align-items-center justify-content-center gap-8'
                >
                  <Icon icon='solar:refresh-bold' className='text-lg' />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-9'>
        <div className='card h-100 p-0 basic-data-table'>
          <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
            <h5 className='card-title mb-0 text-lg fw-semibold text-primary-light'>Transportations List</h5>
            <button
              type='button'
              className='btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2'
              data-bs-toggle='modal'
              data-bs-target='#addTransportationModal'
            >
              <Icon
                icon='ic:baseline-plus'
                className='icon text-xl line-height-1'
              />
              Add New Transportation
            </button>
          </div>
          <div className='card-body table-responsive'>
            <table
              className='table bordered-table mb-0'
              id='dataTable'
              data-page-length={10}
            >
              <thead>
                <tr>
                  <th scope='col'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>S.L</label>
                    </div>
                  </th>
                  <th scope='col'>Invoice</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Issued Date</th>
                  <th scope='col' className='dt-orderable-asc dt-orderable-desc'>
                    Amount
                  </th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>01</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>02</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>03</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>04</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>05</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>06</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>07</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>08</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>09</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>10</label>
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
                      className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='lucide:edit' />
                    </Link>
                    <Link
                      href='#'
                      className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                    >
                      <Icon icon='mingcute:delete-2-line' />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        <AddTransportationModal />
      </div>
    </div>
  );
}
