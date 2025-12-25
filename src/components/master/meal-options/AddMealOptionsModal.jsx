"use client";
import React, { useState } from "react";
import Select from "react-select";

export default function AddMealOptionsModal() {
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [mealOptionName, setMealOptionName] = useState("");
  const [description, setDescription] = useState("");
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
      mealOptionName,
      description,
      status: status.value,
    });
  };

  return (
    <div
      className='modal fade'
      id='addMealOptionsModal'
      tabIndex='-1'
      aria-labelledby='addMealOptionsModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addMealOptionsModalLabel'>
              Add Meal Option
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
                    Meal Option Name <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter meal option name'
                    value={mealOptionName}
                    onChange={(e) => setMealOptionName(e.target.value)}
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
                <div className='col-md-12'>
                  <label className='form-label text-sm fw-medium'>
                    Description
                  </label>
                  <textarea
                    className='form-control'
                    rows={4}
                    placeholder='Enter meal option description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
              Save Meal Option
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

