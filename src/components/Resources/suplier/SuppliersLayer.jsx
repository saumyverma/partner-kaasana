"use client";

import React from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import AddSupplierModal from "./AddSupplierModal";
import ViewSupplierModal from "./ViewSupplierModal";
import EditSupplierModal from "./EditSupplierModal";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

export default function SuppliersLayer() {
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [editSupplier, setEditSupplier] = useState(null);

  // Sample supplier data
  const suppliers = [
    {
      id: 1,
      companyName: "ABC Company",
      country: "USA",
      state: "California",
      city: "Los Angeles",
      zipcode: "90001",
      address: "123 Main Street, Los Angeles, CA 90001",
      bookingMethod: "Online",
      productServices: "Product A, Product B",
      locationOfOperation: "Location 1",
      locationOperationCity: "City 1",
      status: "Active",
      contactDetails: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "+1234567890",
          designation: "Manager",
          whatsappPhone: "+1234567890",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+1234567891",
          designation: "Sales Executive",
          whatsappPhone: "+1234567891",
        },
      ],
    },
    {
      id: 2,
      companyName: "XYZ Corporation",
      country: "UK",
      state: "London",
      city: "London",
      zipcode: "SW1A 1AA",
      address: "456 High Street, London, UK",
      bookingMethod: "Both",
      productServices: "Product C, Product D",
      locationOfOperation: "Location 2",
      locationOperationCity: "City 2",
      status: "Active",
      contactDetails: [
        {
          id: 1,
          name: "Robert Johnson",
          email: "robert@example.com",
          phone: "+441234567890",
          designation: "Director",
          whatsappPhone: "+441234567890",
        },
      ],
    },
    {
      id: 3,
      companyName: "Global Supplies Inc",
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      zipcode: "400001",
      address: "789 Business Park, Mumbai, India",
      bookingMethod: "Offline",
      productServices: "Product E",
      locationOfOperation: "Location 3",
      locationOperationCity: "City 3",
      status: "Inactive",
      contactDetails: [
        {
          id: 1,
          name: "Priya Patel",
          email: "priya@example.com",
          phone: "+919876543210",
          designation: "Operations Manager",
          whatsappPhone: "+919876543210",
        },
      ],
    },
  ];

  const handleViewSupplier = (supplier) => {
    setSelectedSupplier(supplier);
    // Trigger modal using Bootstrap
    setTimeout(() => {
      const modalElement = document.getElementById('viewSupplierModal');
      if (modalElement) {
        // Check if Bootstrap is available
        if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Modal) {
          const modal = new window.bootstrap.Modal(modalElement);
          modal.show();
        } else {
          // Fallback: manually show modal
          modalElement.classList.add('show');
          modalElement.style.display = 'block';
          document.body.classList.add('modal-open');
          const backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          backdrop.id = 'modalBackdrop';
          document.body.appendChild(backdrop);
        }
      }
    }, 100);
  };

  const handleEditSupplier = (supplier) => {
    setEditSupplier(supplier);
    // Trigger modal using Bootstrap
    setTimeout(() => {
      const modalElement = document.getElementById('editSupplierModal');
      if (modalElement) {
        // Check if Bootstrap is available
        if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Modal) {
          const modal = new window.bootstrap.Modal(modalElement);
          modal.show();
        } else {
          // Fallback: manually show modal
          modalElement.classList.add('show');
          modalElement.style.display = 'block';
          document.body.classList.add('modal-open');
          const backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          backdrop.id = 'editModalBackdrop';
          document.body.appendChild(backdrop);
        }
      }
    }, 100);
  };

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
              {/* Product Services Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:box-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Product Services
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Product Services</option>
                  <option value='product-a'>Product A</option>
                  <option value='product-b'>Product B</option>
                  <option value='product-c'>Product C</option>
                </select>
              </div>

              {/* Location of Operation Country Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:global-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Location of Operation Country
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Countries</option>
                  <option value='usa'>USA</option>
                  <option value='uk'>UK</option>
                  <option value='india'>India</option>
                  <option value='canada'>Canada</option>
                </select>
              </div>

              {/* Location of Operation City Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:city-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Location of Operation City
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Cities</option>
                  <option value='city1'>City 1</option>
                  <option value='city2'>City 2</option>
                  <option value='city3'>City 3</option>
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
                  <option value='state1'>State 1</option>
                  <option value='state2'>State 2</option>
                  <option value='state3'>State 3</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className='d-flex flex-column gap-12 pt-20 border-top'>
                <button
                  type='button'
                  className='btn btn-primary text-sm fw-semibold px-20 py-12 radius-8 d-flex align-items-center justify-content-center gap-8'
                >
                  <Icon icon='solar:filter-bold' className='text-lg' />
                  Apply Filters
                </button>
                <button
                  type='button'
                  className='btn btn-outline-secondary text-sm fw-semibold px-20 py-12 radius-8 d-flex align-items-center justify-content-center gap-8'
                >
                  <Icon icon='solar:refresh-bold' className='text-lg' />
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-9'>
        <div className='card h-100 p-0 basic-data-table'>
          <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
            <h5 className='card-title mb-0 text-lg fw-semibold text-primary-light'>Supplier List</h5>
            <button
              type='button'
              className='btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2'
              data-bs-toggle='modal'
              data-bs-target='#addSupplierModal'
            >
              <Icon
                icon='ic:baseline-plus'
                className='icon text-xl line-height-1'
              />
              Add New Supplier
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
                  <th scope='col'>Company Name</th>
                  <th scope='col'>Country</th>
                  <th scope='col'>State</th>
                  <th scope='col'>City</th>
                  <th scope='col'>Product Services</th>
                  <th scope='col' className='text-center'>Status</th>
                  <th scope='col' className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier) => (
                  <tr key={supplier.id}>
                    <td>
                      <span className='text-md mb-0 fw-normal text-primary-light'>
                        {supplier.companyName}
                      </span>
                    </td>
                    <td>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        {supplier.country}
                      </span>
                    </td>
                    <td>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        {supplier.state}
                      </span>
                    </td>
                    <td>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        {supplier.city}
                      </span>
                    </td>
                    <td>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        {supplier.productServices}
                      </span>
                    </td>
                    <td className='text-center'>
                      <span
                        className={`${
                          supplier.status === 'Active'
                            ? 'bg-success-focus text-success-600 border border-success-main'
                            : 'bg-neutral-200 text-neutral-600 border border-neutral-400'
                        } px-24 py-4 radius-4 fw-medium text-sm`}
                      >
                        {supplier.status}
                      </span>
                    </td>
                    <td className='text-center'>
                      <div className='d-flex align-items-center gap-10 justify-content-center'>
                        <button
                          type='button'
                          className='bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                          onClick={() => handleViewSupplier(supplier)}
                        >
                          <Icon
                            icon='majesticons:eye-line'
                            className='icon text-xl'
                          />
                        </button>
                        <button
                          type='button'
                          className='bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                          onClick={() => handleEditSupplier(supplier)}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        <AddSupplierModal />
        <ViewSupplierModal supplier={selectedSupplier} onEdit={handleEditSupplier} />
        <EditSupplierModal supplier={editSupplier} />
      </div>
    </div>
  );
}
