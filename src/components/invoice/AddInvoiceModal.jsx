"use client";
import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import AddCustomerModal from "./AddCustomerModal";
import AddItemModal from "./AddItemModal";

export default function AddInvoiceModal() {
  const [selectedCustomerType, setSelectedCustomerType] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedInvoiceType, setSelectedInvoiceType] = useState(null);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  
  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Set default dates
  const today = formatDate(new Date());
  const dueDate = formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  
  const [invoiceDate, setInvoiceDate] = useState(today);
  const [dueDateState, setDueDateState] = useState(dueDate);
  const [quoteReference, setQuoteReference] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      item: null,
      description: "",
      qty: "",
      rate: "",
      discount: "",
      tax: "",
      total: "",
      isCompleted: false,
      isEditing: false,
    },
  ]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setMenuPortalTarget(document.body);
    }
  }, []);

  // Calculate totals whenever items change
  useEffect(() => {
    let subtotalSum = 0;
    let taxSum = 0;
    let discountSum = 0;

    items.forEach((row) => {
      const qty = parseFloat(row.qty) || 0;
      const rate = parseFloat(row.rate) || 0;
      const discount = parseFloat(row.discount) || 0;
      const taxPercent = parseFloat(row.tax) || 0;

      const lineSubtotal = qty * rate;
      const afterDiscount = lineSubtotal - discount;
      const lineTax = (afterDiscount * taxPercent) / 100;

      subtotalSum += lineSubtotal;
      discountSum += discount;
      taxSum += lineTax;
    });

    const grandTotalValue = subtotalSum - discountSum + taxSum;

    setSubtotal(subtotalSum);
    setTotalDiscount(discountSum);
    setTotalTax(taxSum);
    setGrandTotal(grandTotalValue);
  }, [items]);

  // Calculate line total for a specific row
  const calculateLineTotal = (row) => {
    const qty = parseFloat(row.qty) || 0;
    const rate = parseFloat(row.rate) || 0;
    const discount = parseFloat(row.discount) || 0;
    const taxPercent = parseFloat(row.tax) || 0;

    // Calculate subtotal: qty * rate
    const subtotal = qty * rate;

    // Apply discount
    const afterDiscount = subtotal - discount;

    // Apply tax
    const taxAmount = (afterDiscount * taxPercent) / 100;
    const total = afterDiscount + taxAmount;

    return total > 0 ? total.toFixed(2) : "";
  };

  // Filter customer options based on selected customer type
  const getCustomerOptions = () => {
    const allCustomers = [
      { value: "kathryn", label: "Kathryn Murphy" },
      { value: "annette", label: "Annette Black" },
      { value: "ronald", label: "Ronald Richards" },
    ];
    
    if (selectedCustomerType) {
      const filtered = allCustomers.filter(
        (customer) => customerDetails[customer.value]?.type === selectedCustomerType.value
      );
      return [
        ...filtered,
        {
          value: "add_customer",
          label: "+ Add New Customer",
          isAddOption: true,
        },
      ];
    }
    
    return [
      ...allCustomers,
      {
        value: "add_customer",
        label: "+ Add New Customer",
        isAddOption: true,
      },
    ];
  };

  const customerOptions = getCustomerOptions();

  const customerDetails = {
    kathryn: {
      type: "B2B",
      phone: "+1 555-0123",
      email: "kathryn@example.com",
      gstTax: "GST123456789",
      companyName: "Tech Solutions Inc.",
      companyContactName: "Kathryn Murphy",
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
      gstTax: "GST987654321",
      companyName: "Business Corp Ltd.",
      companyContactName: "Ronald Richards",
    },
  };

  const customerTypeOptions = [
    { value: "B2B", label: "B2B" },
    { value: "B2C", label: "B2C" },
  ];

  const invoiceTypeOptions = [
    { value: "standard", label: "Standard" },
    { value: "proforma", label: "Proforma" },
    { value: "credit", label: "Credit" },
  ];

  const [itemMaster, setItemMaster] = useState({
    service_fee: {
      label: "Service Fee",
      description: "Standard service charges",
      rate: 100,
      tax: 10,
      discount: 0,
    },
    consultation: {
      label: "Consultation",
      description: "Professional consultation",
      rate: 200,
      tax: 18,
      discount: 0,
    },
    misc: {
      label: "Miscellaneous",
      description: "Other charges",
      rate: 50,
      tax: 5,
      discount: 0,
    },
  });

  const itemOptions = [
    ...Object.entries(itemMaster).map(([value, data]) => ({
      value,
      label: data.label,
    })),
    {
      value: "add_item",
      label: "+ Add New Item",
      isAddOption: true,
    },
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

  const CustomItemOption = (props) => {
    const { data, innerProps } = props;
    const className = data.isAddOption
      ? `${props.className || ""} select__option--add-item`.trim()
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
            setIsAddItemModalOpen(true);
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>+</span>
            <span>Add New Item</span>
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

  const filterItemOptions = (option, inputValue) => {
    if (option.data.isAddOption) return true;
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  // Check if a row has all required fields filled
  const isRowComplete = (row) => {
    return row.item && row.qty && row.rate;
  };

  const handleAddNewItem = (id) => {
    // Mark current row as completed
    setItems((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, isCompleted: true, isEditing: false }
          : row
      )
    );

    // Add new row
    const nextId =
      items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    setItems((prev) => [
      ...prev,
      {
        id: nextId,
        item: null,
        description: "",
        qty: "",
        rate: "",
        discount: "",
        tax: "",
        total: "",
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const toggleEditRow = (id) => {
    setItems((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, isEditing: !row.isEditing } : row
      )
    );
  };

  const addItemRow = () => {
    const nextId =
      items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    setItems([
      ...items,
      {
        id: nextId,
        item: null,
        description: "",
        qty: "",
        rate: "",
        discount: "",
        tax: "",
        total: "",
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const removeItemRow = (id) => {
    if (items.length === 1) return;
    setItems(items.filter((row) => row.id !== id));
  };

  const updateItemRow = (id, field, value) => {
    setItems((prev) =>
      prev.map((row) => {
        if (row.id === id) {
          const updatedRow = { ...row, [field]: value };
          // Auto-calculate total when qty, rate, discount, or tax changes
          if (["qty", "rate", "discount", "tax"].includes(field)) {
            updatedRow.total = calculateLineTotal(updatedRow);
          }
          return updatedRow;
        }
        return row;
      }),
    );
  };

  const handleItemSelect = (id, selected) => {
    if (!selected) {
      updateItemRow(id, "item", null);
      return;
    }
    if (selected.value === "add_item") {
      setIsAddItemModalOpen(true);
      return;
    }
    const master = itemMaster[selected.value];
    if (master) {
      setItems((prev) =>
        prev.map((row) => {
          if (row.id === id) {
            const updatedRow = {
              ...row,
              item: selected,
              description: master?.description || "",
              rate: master?.rate?.toString() || "",
              tax: master?.tax?.toString() || "",
              discount: master?.discount?.toString() || "",
            };
            updatedRow.total = calculateLineTotal(updatedRow);
            return updatedRow;
          }
          return row;
        }),
      );
    }
  };

  const handleSaveNewItem = (newItem) => {
    // Add new item to itemMaster
    const newValue = newItem.name.toLowerCase().replace(/\s+/g, "_");
    setItemMaster((prev) => ({
      ...prev,
      [newValue]: {
        label: newItem.name,
        description: newItem.description || "",
        rate: newItem.rate || 0,
        tax: newItem.tax || 0,
        discount: newItem.discount || 0,
      },
    }));
    setIsAddItemModalOpen(false);
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
              {/* Left Side - Customer Details */}
              <div className='col-md-6'>
                <h6 className='text-sm fw-semibold mb-16'>Customer Details</h6>
                <div className='row g-3'>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Customer Type</label>
                    <Select
                      value={selectedCustomerType}
                      onChange={(selected) => {
                        setSelectedCustomerType(selected);
                        setSelectedCustomer(null); // Reset customer when type changes
                      }}
                      options={customerTypeOptions}
                      placeholder='Select Customer Type'
                      isClearable
                      isSearchable
                      classNamePrefix='select'
                      menuPortalTarget={menuPortalTarget}
                      menuPosition='fixed'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "38px",
                        }),
                      }}
                    />
                  </div>
                  <div className='col-md-4'>
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
                      isDisabled={!selectedCustomerType}
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
                      <div className='col-md-12'>
                        <label className='form-label text-sm fw-medium'>Customer Mobile</label>
                        <input
                          type='text'
                          className='form-control'
                          value={customerDetails[selectedCustomer.value]?.phone || ""}
                          readOnly
                        />
                      </div>
                      <div className='col-md-12'>
                        <label className='form-label text-sm fw-medium'>Email Address</label>
                        <input
                          type='email'
                          className='form-control'
                          value={customerDetails[selectedCustomer.value]?.email || ""}
                          readOnly
                        />
                      </div>
                      {selectedCustomerType?.value === "B2B" && (
                        <>
                          <div className='col-md-12'>
                            <label className='form-label text-sm fw-medium'>GST/Tax</label>
                            <input
                              type='text'
                              className='form-control'
                              value={customerDetails[selectedCustomer.value]?.gstTax || ""}
                              readOnly
                            />
                          </div>
                          <div className='col-md-12'>
                            <label className='form-label text-sm fw-medium'>Company Name</label>
                            <input
                              type='text'
                              className='form-control'
                              value={customerDetails[selectedCustomer.value]?.companyName || ""}
                              readOnly
                            />
                          </div>
                          <div className='col-md-12'>
                            <label className='form-label text-sm fw-medium'>Company Contact Name</label>
                            <input
                              type='text'
                              className='form-control'
                              value={customerDetails[selectedCustomer.value]?.companyContactName || ""}
                              readOnly
                            />
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Right Side - Invoice Details */}
              <div className='col-md-6'>
                <h6 className='text-sm fw-semibold mb-16'>Invoice Details</h6>
                <div className='row g-3'>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Invoice Type</label>
                    <Select
                      value={selectedInvoiceType}
                      onChange={setSelectedInvoiceType}
                      options={invoiceTypeOptions}
                      placeholder='Select Invoice Type'
                      isClearable
                      isSearchable
                      classNamePrefix='select'
                      menuPortalTarget={menuPortalTarget}
                      menuPosition='fixed'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "38px",
                        }),
                      }}
                    />
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Invoice Number</label>
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
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Invoice Date</label>
                    <input
                      type='date'
                      className='form-control'
                      value={invoiceDate}
                      onChange={(e) => {
                        setInvoiceDate(e.target.value);
                        // Auto-update due date to be 7 days after invoice date
                        const invDate = new Date(e.target.value);
                        const newDueDate = new Date(invDate);
                        newDueDate.setDate(newDueDate.getDate() + 7);
                        setDueDateState(formatDate(newDueDate));
                      }}
                    />
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Invoice Due Date</label>
                    <input
                      type='date'
                      className='form-control'
                      value={dueDateState}
                      onChange={(e) => setDueDateState(e.target.value)}
                    />
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Quote Reference</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter quote reference'
                      value={quoteReference}
                      onChange={(e) => setQuoteReference(e.target.value)}
                    />
                  </div>
                </div>
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
                    <th style={{ width: "23%" }}>Services</th>
                    <th style={{ width: "22%" }}>Description</th>
                    <th style={{ width: "8%" }}>Duration</th>
                    <th style={{ width: "10%" }}>Price/Nights</th>
                    <th style={{ width: "8%" }}>Discount</th>
                    <th style={{ width: "8%" }}>Tax %</th>
                    <th style={{ width: "14%" }}>Total Amount</th>
                    <th style={{ width: "8%" }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((row, index) => {
                    const isDisabled = row.isCompleted && !row.isEditing;
                    const isRowFilled = isRowComplete(row);
                    return (
                      <tr key={row.id}>
                        <td>{(index + 1).toString().padStart(2, "0")}</td>
                        <td>
                          <Select
                            value={row.item}
                            onChange={(selected) => handleItemSelect(row.id, selected)}
                            options={itemOptions}
                            placeholder='Select item'
                            isClearable
                            isSearchable
                            isDisabled={isDisabled}
                            classNamePrefix='select'
                            components={{
                              Option: CustomItemOption,
                              MenuList: CustomMenuList,
                            }}
                            filterOption={filterItemOptions}
                            menuPortalTarget={menuPortalTarget}
                            menuPosition='fixed'
                            styles={{
                              control: (base) => ({
                                ...base,
                                minHeight: "38px",
                                opacity: isDisabled ? 0.6 : 1,
                              }),
                              menuList: (base) => ({
                                ...base,
                                maxHeight: "260px",
                                paddingBottom: 0,
                              }),
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            className='form-control form-control-sm'
                            placeholder='Short description'
                            value={row.description}
                            onChange={(e) =>
                              updateItemRow(row.id, "description", e.target.value)
                            }
                            disabled={isDisabled}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            className='form-control form-control-sm'
                            placeholder='0'
                            min='0'
                            value={row.qty}
                            onChange={(e) =>
                              updateItemRow(row.id, "qty", e.target.value)
                            }
                            disabled={isDisabled}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            className='form-control form-control-sm'
                            placeholder='0.00'
                            min='0'
                            step='0.01'
                            value={row.rate}
                            onChange={(e) =>
                              updateItemRow(row.id, "rate", e.target.value)
                            }
                            disabled={isDisabled}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            className='form-control form-control-sm'
                            placeholder='0.00'
                            min='0'
                            step='0.01'
                            value={row.discount}
                            onChange={(e) =>
                              updateItemRow(row.id, "discount", e.target.value)
                            }
                            disabled={isDisabled}
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            className='form-control form-control-sm'
                            placeholder='0'
                            min='0'
                            step='0.01'
                            value={row.tax}
                            onChange={(e) =>
                              updateItemRow(row.id, "tax", e.target.value)
                            }
                            disabled={isDisabled}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            className='form-control form-control-sm'
                            placeholder='0.00'
                            value={row.total}
                            readOnly
                          />
                        </td>
                        <td className='text-center'>
                          {!row.isCompleted ? (
                            <button
                              type='button'
                              className='btn btn-xs text-success btn-primary-600'
                              onClick={() => handleAddNewItem(row.id)}
                              disabled={!isRowFilled}
                            >
                              +
                            </button>
                          ) : (
                            <div className='d-flex gap-2 justify-content-center'>
                              <button
                                type='button'
                                className='btn btn-xs btn-outline-primary'
                                onClick={() => toggleEditRow(row.id)}
                                title='Edit'
                              >
                                <i className='ri-pencil-line'></i>
                              </button>
                              <button
                                type='button'
                                className='btn btn-xs btn-outline-danger'
                                onClick={() => removeItemRow(row.id)}
                                disabled={items.length === 1}
                                title='Remove'
                              >
                                <i className='ri-close-line'></i>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className='mt-12'>
              <span className='text-xs text-neutral-500'>
                At least one invoice item is required. Fill all fields and click "Add New Item" to add more rows.
              </span>
            </div>

            {/* Totals Section */}
            <div className='row justify-content-end mt-24'>
              <div className='col-md-5'>
                <div className='card border-0 bg-primary-50'>
                  <div className='card-body p-16'>
                    <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Services Total</span>
                      <span className='text-sm text-neutral-800 fw-medium'>
                        {subtotal.toFixed(2)}
                      </span>
                    </div>
                   
                    <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Tax</span>
                      <span className='text-sm text-neutral-800 fw-medium'>
                        {totalTax.toFixed(2)}
                      </span>
                    </div>
                     <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Discount</span>
                      <span className='text-sm text-neutral-800 fw-medium'>
                        {totalDiscount.toFixed(2)}
                      </span>
                    </div>
                    <hr className='my-12' />
                    <div className='d-flex justify-content-between align-items-center'>
                      <span className='text-sm fw-semibold text-neutral-800'>Grand Total</span>
                      <span className='text-sm fw-semibold text-neutral-800'>
                        {grandTotal.toFixed(2)}
                      </span>
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
      <AddItemModal
        isOpen={isAddItemModalOpen}
        onClose={() => setIsAddItemModalOpen(false)}
        onSave={handleSaveNewItem}
      />
    </div>
  );
}