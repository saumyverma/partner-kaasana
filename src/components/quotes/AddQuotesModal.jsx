"use client";
import React, { useState, useEffect, useMemo } from "react";
import Select, { components } from "react-select";
import AddCustomerModal from "./AddCustomerModal";
import AddItemModal from "./AddItemModal";
import AddDiscountModal from "../invoice/AddDiscountModal";
import AddMarkupModal from "../invoice/AddMarkupModal";

export default function AddQuotesModal() {
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
  const validTillDate = formatDate(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedCustomerType, setSelectedCustomerType] = useState({ value: "B2C", label: "B2C" });
  const [selectedTripDuration, setSelectedTripDuration] = useState(null);
  const [selectedQuoteCreatedBy, setSelectedQuoteCreatedBy] = useState(null);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isAddDiscountModalOpen, setIsAddDiscountModalOpen] = useState(false);
  const [isAddMarkupModalOpen, setIsAddMarkupModalOpen] = useState(false);
  const [quoteDiscount, setQuoteDiscount] = useState(null);
  const [quoteMarkup, setQuoteMarkup] = useState(null);
  const [currentItemRowId, setCurrentItemRowId] = useState(null);
  const [currentServiceForItem, setCurrentServiceForItem] = useState(null);
  const [issuedDate, setIssuedDate] = useState(today);
  const [validTill, setValidTill] = useState(validTillDate);
  const [totalPax, setTotalPax] = useState(1);
  const [items, setItems] = useState([
    {
      id: 1,
      service: null,
      item: null,
      description: "",
      qty: "",
      rate: "",
      tax: "",
      total: "",
      isCompleted: false,
      isEditing: false,
    },
  ]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalMarkup, setTotalMarkup] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setMenuPortalTarget(document.body);
    }
  }, []);

  // Calculate totals whenever items, discount, or markup change
  useEffect(() => {
    let subtotalSum = 0;
    let taxSum = 0;

    const paxMultiplier = parseFloat(totalPax) || 1;

    items.forEach((row) => {
      const qty = parseFloat(row.qty) || 0;
      const rate = parseFloat(row.rate) || 0;
      const taxPercent = parseFloat(row.tax) || 0;

      const lineSubtotal = qty * rate * paxMultiplier;
      const lineTax = (lineSubtotal * taxPercent) / 100;

      subtotalSum += lineSubtotal;
      taxSum += lineTax;
    });

    // Calculate discount based on type
    let discountAmount = 0;
    if (quoteDiscount) {
      if (quoteDiscount.type === "percentage") {
        discountAmount = (subtotalSum * quoteDiscount.value) / 100;
      } else {
        discountAmount = quoteDiscount.value;
      }
    }

    // Calculate markup based on type (applied to subtotal)
    let markupAmount = 0;
    if (quoteMarkup) {
      if (quoteMarkup.type === "percentage") {
        markupAmount = (subtotalSum * quoteMarkup.value) / 100;
      } else {
        markupAmount = quoteMarkup.value;
      }
    }

    const grandTotalValue = subtotalSum - discountAmount + markupAmount + taxSum;

    setSubtotal(subtotalSum);
    setTotalDiscount(discountAmount);
    setTotalMarkup(markupAmount);
    setTotalTax(taxSum);
    setGrandTotal(grandTotalValue);
  }, [items, quoteDiscount, quoteMarkup, totalPax]);

  // Calculate line total for a specific row
  const calculateLineTotal = (row) => {
    const qty = parseFloat(row.qty) || 0;
    const rate = parseFloat(row.rate) || 0;
    const taxPercent = parseFloat(row.tax) || 0;
    const paxMultiplier = parseFloat(totalPax) || 1;

    // Calculate subtotal: qty * rate * totalPax
    const subtotal = qty * rate * paxMultiplier;

    // Apply tax
    const taxAmount = (subtotal * taxPercent) / 100;
    const total = subtotal + taxAmount;

    return total > 0 ? total.toFixed(2) : "";
  };

  // Recalculate all line totals when totalPax changes
  useEffect(() => {
    const paxMultiplier = parseFloat(totalPax) || 1;
    setItems((prev) =>
      prev.map((row) => {
        if (row.qty && row.rate) {
          const qty = parseFloat(row.qty) || 0;
          const rate = parseFloat(row.rate) || 0;
          const taxPercent = parseFloat(row.tax) || 0;
          const subtotal = qty * rate * paxMultiplier;
          const taxAmount = (subtotal * taxPercent) / 100;
          const total = subtotal + taxAmount;
          return {
            ...row,
            total: total > 0 ? total.toFixed(2) : "",
          };
        }
        return row;
      })
    );
  }, [totalPax]);

  const customerDetails = {
    kathryn: {
      type: "B2B",
      phone: "+1 555-0123",
      email: "kathryn@example.com",
      address: "123 Business Park, Suite 400, New York, NY 10001",
      gstTax: "GST123456789",
      companyName: "Tech Solutions Inc.",
      companyContactName: "Kathryn Murphy",
    },
    annette: {
      type: "B2C",
      phone: "+1 555-0456",
      email: "annette@example.com",
      address: "456 Residential Street, Los Angeles, CA 90001",
    },
    ronald: {
      type: "B2B",
      phone: "+1 555-0789",
      email: "ronald@example.com",
      address: "789 Corporate Avenue, Chicago, IL 60601",
      gstTax: "GST987654321",
      companyName: "Business Corp Ltd.",
      companyContactName: "Ronald Richards",
    },
  };

  // Filter customer options based on selected customer type
  const customerOptions = useMemo(() => {
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
  }, [selectedCustomerType]);

  const customerTypeOptions = [
    { value: "B2B", label: "B2B" },
    { value: "B2C", label: "B2C" },
  ];

  const tripDurationOptions = [
    { value: "2_nights", label: "2 Nights" },
    { value: "3_nights", label: "3 Nights" },
    { value: "4_nights", label: "4 Nights" },
    { value: "5_nights", label: "5 Nights" },
  ];

  const quoteCreatedByOptions = [
    { value: "manish", label: "Manish" },
    { value: "john_doe", label: "John Doe" },
  ];

  const [itemMaster, setItemMaster] = useState({
    service_fee: {
      label: "Service Fee",
      description: "Standard service charges",
      rate: 100,
      tax: 10,
      service: "hotel",
    },
    consultation: {
      label: "Consultation",
      description: "Professional consultation",
      rate: 200,
      tax: 18,
      service: "packages",
    },
    misc: {
      label: "Miscellaneous",
      description: "Other charges",
      rate: 50,
      tax: 5,
      service: "transport",
    },
  });

  // Get item options filtered by selected service
  const getItemOptions = (selectedService) => {
    if (!selectedService) {
      return [];
    }
    const filteredItems = Object.entries(itemMaster)
      .filter(([value, data]) => data.service === selectedService.value)
      .map(([value, data]) => ({
        value,
        label: data.label,
      }));
    
    return [
      ...filteredItems,
      {
        value: "add_item",
        label: `+ Add New Item`,
        isAddOption: true,
        serviceLabel: selectedService.label, // Store service label for display
        service: selectedService.value, // Store service value for reference
      },
    ];
  };

  const serviceOptions = [
    { value: "hotel", label: "Hotel" },
    { value: "packages", label: "Packages" },
    { value: "transport", label: "Transport" },
    { value: "visa", label: "Visa" },
    { value: "flights", label: "Flights" },
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
      // Get service label from the option data, or fallback to "Item"
      const serviceName = data.serviceLabel || "Item";
      
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
            // Find the row ID for the current context (we'll use the last row or a default)
            const rowId = items.length > 0 ? items[items.length - 1].id : 1;
            const currentRow = items.find(row => row.id === rowId);
            setCurrentItemRowId(rowId);
            setCurrentServiceForItem(currentRow?.service || null);
            setIsAddItemModalOpen(true);
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>+</span>
            <span>Add {serviceName}</span>
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
        service: null,
        item: null,
        description: "",
        qty: "",
        rate: "",
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

  const removeItemRow = (id) => {
    if (items.length === 1) return;
    setItems(items.filter((row) => row.id !== id));
  };

  const updateItemRow = (id, field, value) => {
    setItems((prev) =>
      prev.map((row) => {
        if (row.id === id) {
          const updatedRow = { ...row, [field]: value };
          // Auto-calculate total when qty, rate, or tax changes
          if (["qty", "rate", "tax"].includes(field)) {
            updatedRow.total = calculateLineTotal(updatedRow);
          }
          // When service changes, clear item and reset related fields
          if (field === "service") {
            updatedRow.item = null;
            updatedRow.description = "";
            updatedRow.rate = "";
            updatedRow.tax = "";
            updatedRow.qty = "";
            updatedRow.total = "";
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
      const currentRow = items.find(row => row.id === id);
      setCurrentItemRowId(id);
      setCurrentServiceForItem(currentRow?.service || null);
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
    // Use the service that was captured when opening the modal
    const selectedService = currentServiceForItem;
    
    // Add new item to itemMaster
    const newValue = newItem.name.toLowerCase().replace(/\s+/g, "_");
    setItemMaster((prev) => ({
      ...prev,
      [newValue]: {
        label: newItem.name,
        description: newItem.description || "",
        rate: newItem.rate || 0,
        tax: newItem.tax || 0,
        service: selectedService?.value || "hotel", // Default to hotel if no service selected
      },
    }));
    setIsAddItemModalOpen(false);
    setCurrentItemRowId(null);
    setCurrentServiceForItem(null);
  };

  const handleSaveDiscount = (discount) => {
    setQuoteDiscount(discount);
    setIsAddDiscountModalOpen(false);
  };

  const handleSaveMarkup = (markup) => {
    setQuoteMarkup(markup);
    setIsAddMarkupModalOpen(false);
  };

  return (
    <div
      className='modal fade'
      id='addQuotesModal'
      tabIndex='-1'
      aria-labelledby='addQuotesModalLabel'
      aria-hidden='true'
    >
      <div 
        className='modal-dialog modal-fullscreen modal-dialog-centered'
        style={{ margin: '20px', maxWidth: 'calc(100% - 40px)', maxHeight: 'calc(100% - 40px)' }}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addQuotesModalLabel'>
              Add Quotes
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            {/* Customer & Quote Details */}
            <div className='row g-3'>
              {/* Left Side - Customer Details */}
              <div className='col-md-6 border-end pe-5'>
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
                      <div className='col-md-4'>
                        <label className='form-label text-sm fw-medium'>Customer Mobile</label>
                        <input
                          type='text'
                          className='form-control'
                          value={customerDetails[selectedCustomer.value]?.phone || ""}
                          readOnly
                        />
                      </div>
                      <div className='col-md-4'>
                        <label className='form-label text-sm fw-medium'>Email Address</label>
                        <input
                          type='email'
                          className='form-control'
                          value={customerDetails[selectedCustomer.value]?.email || ""}
                          readOnly
                        />
                      </div>
                      <div className='col-md-6'>
                        <label className='form-label text-sm fw-medium'>Address</label>
                        <textarea
                          className='form-control'
                          rows={2}
                          value={customerDetails[selectedCustomer.value]?.address || ""}
                          readOnly
                        />
                      </div>
                      {selectedCustomerType?.value === "B2B" && (
                        <>
                          <div className='col-md-4'>
                            <label className='form-label text-sm fw-medium'>GST/Tax</label>
                            <input
                              type='text'
                              className='form-control'
                              value={customerDetails[selectedCustomer.value]?.gstTax || ""}
                              readOnly
                            />
                          </div>
                          <div className='col-md-4'>
                            <label className='form-label text-sm fw-medium'>Company Name</label>
                            <input
                              type='text'
                              className='form-control'
                              value={customerDetails[selectedCustomer.value]?.companyName || ""}
                              readOnly
                            />
                          </div>
                          <div className='col-md-4'>
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

              {/* Right Side - Quote Details */}
              <div className='col-md-6 ps-5'>
                <h6 className='text-sm fw-semibold mb-16'>Quote Details</h6>
                <div className='row g-3'>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Quotes No</label>
                    <div className='d-flex gap-2'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Pattern (e.g. QT-2025-)'
                      />
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Number (e.g. 0001)'
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Issued Date</label>
                    <input
                      type='date'
                      className='form-control'
                      value={issuedDate}
                      onChange={(e) => {
                        setIssuedDate(e.target.value);
                        // Auto-update valid till to be 3 days after issued date
                        const issuedDateObj = new Date(e.target.value);
                        const newValidTill = new Date(issuedDateObj);
                        newValidTill.setDate(newValidTill.getDate() + 3);
                        setValidTill(formatDate(newValidTill));
                      }}
                    />
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Valid Till</label>
                    <input
                      type='date'
                      className='form-control'
                      value={validTill}
                      onChange={(e) => setValidTill(e.target.value)}
                    />
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label text-sm fw-medium'>Total Pax</label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder='1'
                      min='1'
                      value={totalPax}
                      onChange={(e) => setTotalPax(e.target.value || 1)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Items Section */}
            <hr className='my-24' />
            <h6 className='text-md fw-semibold mb-16'>Quote Items</h6>
            <div className='table-responsive'>
              <table className='table mb-0 align-middle'>
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>S.L</th>
                    <th style={{ width: "15%" }}>Services</th>
                    <th style={{ width: "20%" }}>Service Items</th>
                    <th style={{ width: "20%" }}>Description</th>
                    <th style={{ width: "8%" }}>Qty</th>
                    <th style={{ width: "10%" }}>Unit Price</th>
                    <th style={{ width: "7%" }}>Tax %</th>
                    <th style={{ width: "13%" }}>Total Amount</th>
                    <th style={{ width: "8%" }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((row, index) => {
                    const isDisabled = row.isCompleted && !row.isEditing;
                    const isRowFilled = isRowComplete(row);
                    // Services dropdown is always enabled (unless row is completed and not editing)
                    const isServiceDisabled = isDisabled;
                    // Service Items dropdown is disabled if no service is selected or row is disabled
                    const isItemDisabled = isDisabled || !row.service;
                    // Other fields are disabled if no item is selected or row is disabled
                    const areOtherFieldsDisabled = isDisabled || !row.item;
                    const rowItemOptions = getItemOptions(row.service);
                    
                    return (
                      <tr key={row.id}>
                        <td>{(index + 1).toString().padStart(2, "0")}</td>
                        <td>
                          <Select
                            value={row.service}
                            onChange={(selected) => updateItemRow(row.id, "service", selected)}
                            options={serviceOptions}
                            placeholder='Select service'
                            isClearable
                            isSearchable
                            isDisabled={isServiceDisabled}
                            classNamePrefix='select'
                            menuPortalTarget={menuPortalTarget}
                            menuPosition='fixed'
                            styles={{
                              control: (base) => ({
                                ...base,
                                minHeight: "38px",
                                opacity: isServiceDisabled ? 0.6 : 1,
                              }),
                            }}
                          />
                        </td>
                        <td>
                          <Select
                            value={row.item}
                            onChange={(selected) => handleItemSelect(row.id, selected)}
                            options={rowItemOptions}
                            placeholder='Select item'
                            isClearable
                            isSearchable
                            isDisabled={isItemDisabled}
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
                                opacity: isItemDisabled ? 0.6 : 1,
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
                            disabled={areOtherFieldsDisabled}
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
                            disabled={areOtherFieldsDisabled}
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
                            disabled={areOtherFieldsDisabled}
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
                            disabled={areOtherFieldsDisabled}
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
                At least one quote item is required. Fill all fields and click "Add New Item" to add more rows.
              </span>
            </div>

            {/* Totals Section */}
            <div className='row justify-content-end mt-24'>
              <div className='col-md-5'>
                <div className='card border-0 bg-primary-50'>
                  <div className='card-body p-16'>
                    <div className='d-flex justify-content-between align-items-center mb-10'>
                      <span className='text-sm text-neutral-600'>Subtotal</span>
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
                    <div className='mb-10'>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='d-flex align-items-center gap-2'>
                          <span className='text-sm text-neutral-600'>Discount</span>
                          <button
                            type='button'
                            className='btn btn-xs btn-primary-600 p-0'
                            style={{ 
                              width: '20px', 
                              height: '20px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              opacity: subtotal > 0 ? 1 : 0.5,
                              cursor: subtotal > 0 ? 'pointer' : 'not-allowed'
                            }}
                            onClick={() => setIsAddDiscountModalOpen(true)}
                            disabled={subtotal <= 0}
                            title={subtotal > 0 ? 'Add/Edit Discount' : 'Add items to enable discount'}
                          >
                            {quoteDiscount ? <i className='ri-pencil-line' style={{ fontSize: '10px' }}></i> : '+'}
                          </button>
                        </div>
                        <span className='text-sm text-neutral-800 fw-medium'>
                          {quoteDiscount ? totalDiscount.toFixed(2) : "0.00"}
                        </span>
                      </div>
                      {quoteDiscount && (
                        <div className='text-xs text-neutral-500 text-end'>
                          {quoteDiscount.type === "percentage" 
                            ? `${quoteDiscount.value}% of ${subtotal.toFixed(2)}` 
                            : `Fixed: ${quoteDiscount.value.toFixed(2)}`}
                        </div>
                      )}
                    </div>
                    <div className='mb-10'>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='d-flex align-items-center gap-2'>
                          <span className='text-sm text-neutral-600'>Markup</span>
                          <button
                            type='button'
                            className='btn btn-xs btn-primary-600 p-0'
                            style={{ 
                              width: '20px', 
                              height: '20px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              opacity: subtotal > 0 ? 1 : 0.5,
                              cursor: subtotal > 0 ? 'pointer' : 'not-allowed'
                            }}
                            onClick={() => setIsAddMarkupModalOpen(true)}
                            disabled={subtotal <= 0}
                            title={subtotal > 0 ? 'Add/Edit Markup' : 'Add items to enable markup'}
                          >
                            {quoteMarkup ? <i className='ri-pencil-line' style={{ fontSize: '10px' }}></i> : '+'}
                          </button>
                        </div>
                        <span className='text-sm text-neutral-800 fw-medium'>
                          {quoteMarkup ? totalMarkup.toFixed(2) : "0.00"}
                        </span>
                      </div>
                      {quoteMarkup && (
                        <div className='text-xs text-neutral-500 text-end'>
                          {quoteMarkup.type === "percentage" 
                            ? `${quoteMarkup.value}% of ${subtotal.toFixed(2)}` 
                            : `Fixed: ${quoteMarkup.value.toFixed(2)}`}
                        </div>
                      )}
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
                  placeholder='Enter quote terms and conditions'
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
              Save Quotes
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
        onClose={() => {
          setIsAddItemModalOpen(false);
          setCurrentServiceForItem(null);
        }}
        onSave={handleSaveNewItem}
        selectedService={currentServiceForItem}
      />
      <AddDiscountModal
        isOpen={isAddDiscountModalOpen}
        onClose={() => setIsAddDiscountModalOpen(false)}
        onSave={handleSaveDiscount}
        currentDiscount={quoteDiscount}
        menuPortalTarget={menuPortalTarget}
      />
      <AddMarkupModal
        isOpen={isAddMarkupModalOpen}
        onClose={() => setIsAddMarkupModalOpen(false)}
        onSave={handleSaveMarkup}
        currentMarkup={quoteMarkup}
        menuPortalTarget={menuPortalTarget}
      />
    </div>
  );
}
