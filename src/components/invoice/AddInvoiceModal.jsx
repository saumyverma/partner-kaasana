"use client";
import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import AddCustomerModal from "./AddCustomerModal";

export default function AddInvoiceModal() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedInvoiceType, setSelectedInvoiceType] = useState(null);
  const [selectedPaymentTerms, setSelectedPaymentTerms] = useState(null);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setMenuPortalTarget(document.body);
    }
  }, []);

  const customerOptions = [
    { value: "kathryn", label: "Kathryn Murphy" },
    { value: "annette", label: "Annette Black" },
    { value: "ronald", label: "Ronald Richards" },
    {
      value: "add_customer",
      label: "+ Add New Customer",
      isAddOption: true,
    },
  ];

  const customerDetails = {
    kathryn: {
      type: "B2B",
      phone: "+1 555-0123",
      email: "kathryn@example.com",
    },
    annette: {
      type: "B2C",
      phone: "+1 555-0456",
      email: "annette@example.com",
    },
    ronald: {
      type: "B2B",
      phone: "+1 555-0789",
      email: "ronald@example.com",
    },
  };

  const invoiceTypeOptions = [
    { value: "standard", label: "Standard" },
    { value: "proforma", label: "Proforma" },
    { value: "credit", label: "Credit" },
  ];

  const paymentTermOptions = [
    { value: "advance", label: "Advance Payment" },
    { value: "on_delivery", label: "On Delivery" },
    { value: "net15", label: "Net 15 Days" },
    { value: "net30", label: "Net 30 Days" },
    { value: "net45", label: "Net 45 Days" },
  ];

  const CustomCustomerOption = (props) => {
    const { data, innerProps } = props;
    const className = data.isAddOption
      ? `${props.className || ""} select__option--add-customer`.trim()
      : props.className;

    if (data.isAddOption) {
      return (
        <div
          {...innerProps}
          className={className}
          style={{
            padding: "12px 16px",
            fontWeight: 600,
            color: "#0d6efd",
            backgroundColor: props.isFocused ? "#e7f1ff" : "#f8f9fa",
            borderTop: "1px solid #dee2e6",
            cursor: "pointer",
            position: "sticky",
            bottom: 0,
            zIndex: 10,
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsAddCustomerModalOpen(true);
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>+</span>
            <span>Add New Customer</span>
          </span>
        </div>
      );
    }

    return (
      <components.Option {...props} className={className}>
        {props.children}
      </components.Option>
    );
  };

  const CustomMenuList = (props) => {
    return (
      <components.MenuList
        {...props}
        className='select__menu-list--custom'
        style={{ paddingBottom: "0" }}
      >
        {props.children}
      </components.MenuList>
    );
  };

  const filterCustomerOptions = (option, inputValue) => {
    if (option.data.isAddOption) return true;
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  return (
    <div
      className='modal fade'
      id='addInvoiceModal'
      tabIndex='-1'
      aria-labelledby='addInvoiceModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-fullscreen modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addInvoiceModalLabel'>
              Add Invoice
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            {/* Customer & Invoice Details */}
            <h6 className='text-md fw-semibold mb-16'>Customer &amp; Invoice Details</h6>
            <div className='row g-3'>
              <div className='col-md-3'>
                <label className='form-label text-sm fw-medium'>Customer Name</label>
                <Select
                  value={selectedCustomer}
                  onChange={(selected) => {
                    if (selected && selected.value === "add_customer") {
                      setIsAddCustomerModalOpen(true);
                    } else {
                      setSelectedCustomer(selected);
                    }
                  }}
                  options={customerOptions}
                  placeholder='Select Customer'
                  isClearable
                  isSearchable
                  classNamePrefix='select'
                  components={{
                    Option: CustomCustomerOption,
                    MenuList: CustomMenuList,
                  }}
                  filterOption={filterCustomerOptions}
                  menuPortalTarget={menuPortalTarget}
                  menuPosition='fixed'
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: "38px",
                    }),
                    menuList: (base) => ({
                      ...base,
                      maxHeight: "260px",
                      paddingBottom: 0,
                    }),
                  }}
                />
              </div>
              {selectedCustomer && selectedCustomer.value !== "add_customer" && (
                <>
                  <div className='col-md-1'>
                    <label className='form-label text-sm fw-medium'>Customer Type</label>
                    <input
                      type='text'
                      className='form-control'
                      value={customerDetails[selectedCustomer.value]?.type || ""}
                      readOnly
                    />
                  </div>
                  <div className='col-md-2'>
                    <label className='form-label text-sm fw-medium'>Customer Phone</label>
                    <input
                      type='text'
                      className='form-control'
                      value={customerDetails[selectedCustomer.value]?.phone || ""}
                      readOnly
                    />
                  </div>
                </>
              )}
              <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>Invoice Type</label>
                <Select
                  value={selectedInvoiceType}
                  onChange={setSelectedInvoiceType}
                  options={invoiceTypeOptions}
                  placeholder='Select'
                  isClearable
                  isSearchable
                  classNamePrefix='select'
                  menuPortalTarget={menuPortalTarget}
                  menuPosition='fixed'
                />
              </div>
              <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>Invoice No</label>
                <div className='d-flex gap-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Pattern (e.g. INV-2025-)'
                  />
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Number (e.g. 0001)'
                  />
                </div>
              </div>
              <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>Invoice Date</label>
                <input type='date' className='form-control' />
              </div>
             
              <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>Due Date</label>
                <input type='date' className='form-control' />
              </div>
              <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>PO No</label>
                <div className='d-flex gap-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Pattern (e.g. PO-2025-)'
                  />
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Number (e.g. 0001)'
                  />
                </div>
              </div>
                <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>PO Date</label>
                <input type='date' className='form-control' />
              </div>
              <div className='col-md-2'>
                <label className='form-label text-sm fw-medium'>Payment Terms</label>
                <Select
                  value={selectedPaymentTerms}
                  onChange={setSelectedPaymentTerms}
                  options={paymentTermOptions}
                  placeholder='Select'
                  isClearable
                  isSearchable
                  classNamePrefix='select'
                  menuPortalTarget={menuPortalTarget}
                  menuPosition='fixed'
                />
              </div>
            </div>

            {/* Invoice Items Section */}
            <hr className='my-24' />
            <h6 className='text-md fw-semibold mb-16'>Invoice Items</h6>
            <div className='table-responsive'>
              <table className='table mb-0 align-middle'>
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>S.L</th>
                    <th style={{ width: "25%" }}>Item</th>
                    <th style={{ width: "30%" }}>Description</th>
                    <th style={{ width: "10%" }}>Qty</th>
                    <th style={{ width: "15%" }}>Rate</th>
                    <th style={{ width: "15%" }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i}>
                      <td>{i.toString().padStart(2, "0")}</td>
                      <td>
                        <input
                          type='text'
                          className='form-control form-control-sm'
                          placeholder='Item name'
                        />
                      </td>
                      <td>
                        <input
                          type='text'
                          className='form-control form-control-sm'
                          placeholder='Short description'
                        />
                      </td>
                      <td>
                        <input
                          type='number'
                          className='form-control form-control-sm'
                          placeholder='0'
                          min='0'
                        />
                      </td>
                      <td>
                        <input
                          type='number'
                          className='form-control form-control-sm'
                          placeholder='0.00'
                          min='0'
                          step='0.01'
                        />
                      </td>
                      <td>
                        <input
                          type='number'
                          className='form-control form-control-sm'
                          placeholder='0.00'
                          min='0'
                          step='0.01'
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals Section */}
            <div className='row justify-content-end mt-24'>
              <div className='col-md-5'>
                <div className='card border-0 bg-primary-50'>
                  <div className='card-body p-16'>
                    <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Subtotal</span>
                      <input
                        type='number'
                        className='form-control form-control-sm w-50 text-end'
                        placeholder='0.00'
                        min='0'
                        step='0.01'
                      />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Tax</span>
                      <input
                        type='number'
                        className='form-control form-control-sm w-50 text-end'
                        placeholder='0.00'
                        min='0'
                        step='0.01'
                      />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Discount</span>
                      <input
                        type='number'
                        className='form-control form-control-sm w-50 text-end'
                        placeholder='0.00'
                        min='0'
                        step='0.01'
                      />
                    </div>
                    <hr className='my-12' />
                    <div className='d-flex justify-content-between align-items-center'>
                      <span className='text-sm fw-semibold text-neutral-800'>Grand Total</span>
                      <input
                        type='number'
                        className='form-control form-control-sm w-50 text-end fw-semibold'
                        placeholder='0.00'
                        min='0'
                        step='0.01'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Notes */}
            <div className='row mt-24 g-3'>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Terms &amp; Conditions</label>
                <textarea
                  className='form-control'
                  rows={3}
                  placeholder='Enter invoice terms and conditions'
                />
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Notes</label>
                <textarea
                  className='form-control'
                  rows={3}
                  placeholder='Additional notes (visible to customer)'
                />
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-sm btn-light'
              data-bs-dismiss='modal'
            >
              Cancel
            </button>
            <button type='button' className='btn btn-sm btn-primary-600'>
              Save Invoice
            </button>
          </div>
        </div>
      </div>

      <AddCustomerModal
        isOpen={isAddCustomerModalOpen}
        onClose={() => setIsAddCustomerModalOpen(false)}
      />
    </div>
  );
}