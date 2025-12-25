"use client";
import React, { useState } from "react";
import Select from "react-select";

export default function AddCurrencyModal() {
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [currencyName, setCurrencyName] = useState("");
  const [code, setCode] = useState("");
  const [symbol, setSymbol] = useState("");
  const [conversionRate, setConversionRate] = useState("");
  const [status, setStatus] = useState({ value: "active", label: "Active" });

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      setMenuPortalTarget(document.body);
    }
  }, []);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      currencyName,
      code,
      symbol,
      conversionRate: parseFloat(conversionRate) || 0,
      status: status.value,
    });
  };

  return (
    <div
      className='modal fade'
      id='addCurrencyModal'
      tabIndex='-1'
      aria-labelledby='addCurrencyModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addCurrencyModalLabel'>
              Add Currency
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <div className='row g-3'>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Currency Name <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter currency name'
                    value={currencyName}
                    onChange={(e) => setCurrencyName(e.target.value)}
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Status <span className='text-danger'>*</span>
                  </label>
                  <Select
                    value={status}
                    onChange={setStatus}
                    options={statusOptions}
                    placeholder='Select status'
                    isClearable={false}
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
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Code <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter currency code (e.g., USD)'
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    maxLength={3}
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Symbol <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter currency symbol (e.g., $)'
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Conversion Rate <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Enter conversion rate (e.g., 1.00)'
                    value={conversionRate}
                    onChange={(e) => setConversionRate(e.target.value)}
                    min='0'
                    step='0.0001'
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-sm btn-light'
              data-bs-dismiss='modal'
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-sm btn-primary-600'
              onClick={handleSubmit}
            >
              Save Currency
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

