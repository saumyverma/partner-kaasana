"use client";
import { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import AddNotificationModal from "./AddNotificationModal";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

export default function NotificationLayer() {
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#notificationDataTable").DataTable({
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
      <div className='col-12'>
        <div className='card h-100 p-0 basic-data-table'>
          <div className='card-header d-flex flex-wrap align-items-center justify-content-between gap-3'>
            <div className='d-flex flex-wrap align-items-center gap-3'>
            </div>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <button
                type='button'
                className='btn btn-sm btn-primary-600'
                data-bs-toggle='modal'
                data-bs-target='#addNotificationModal'
              >
                <i className='ri-add-line' /> Create Notification
              </button>
            </div>
          </div>
          <div className='card-body table-responsive'>
            <table
              className='table bordered-table mb-0'
              id='notificationDataTable'
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
                  <th scope='col'>Title</th>
                  <th scope='col'>Type</th>
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
                      Booking Confirmation
                    </Link>
                  </td>
                  <td>
                    <span className='bg-primary-50 text-primary-600 px-10 py-4 radius-8 fw-medium text-sm'>
                      Email
                    </span>
                  </td>
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
                      Payment Reminder
                    </Link>
                  </td>
                  <td>
                    <span className='bg-warning-focus text-warning-main px-10 py-4 radius-8 fw-medium text-sm'>
                      SMS
                    </span>
                  </td>
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
                      New Lead Alert
                    </Link>
                  </td>
                  <td>
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Push Notification
                    </span>
                  </td>
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
                      Cancellation Notice
                    </Link>
                  </td>
                  <td>
                    <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                      In-App
                    </span>
                  </td>
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
          </div>
        </div>
      </div>
      <AddNotificationModal />
    </div>
  );
}

