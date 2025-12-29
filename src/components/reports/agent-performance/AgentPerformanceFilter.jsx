import { useState } from "react";
import Select from "react-select";

// Date Range Options
const dateRangeOptions = [
  { value: "", label: "All Data" },
  { value: "24h", label: "Last 24 Hours" },
  { value: "7d", label: "Last 7 Days" },
  { value: "15d", label: "Last 15 Days" },
  { value: "28d", label: "Last 28 Days" },
  { value: "3m", label: "Last 3 Months" },
  { value: "6m", label: "Last 6 Months" },
  { value: "1y", label: "Last 1 Year" },
  { value: "custom", label: "Custom Date Range" },
];

// Branch Options
const branchOptions = [
  { value: "", label: "All Branches" },
  { value: "branch1", label: "Branch 1" },
  { value: "branch2", label: "Branch 2" },
  { value: "branch3", label: "Branch 3" },
];

// User Options
const userOptions = [
  { value: "", label: "All Users" },
  { value: "user1", label: "User 1" },
  { value: "user2", label: "User 2" },
  { value: "user3", label: "User 3" },
];

// Lead Status Options
const leadStatusOptions = [
  { value: "", label: "All Status" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "converted", label: "Converted" },
];

// Destination Options
const destinationOptions = [
  { value: "", label: "All Destinations" },
  { value: "dest1", label: "Destination 1" },
  { value: "dest2", label: "Destination 2" },
  { value: "dest3", label: "Destination 3" },
];

const AgentPerformanceFilter = () => {
  const [dateRangeType, setDateRangeType] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedLeadStatus, setSelectedLeadStatus] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className='col-xxl-12'>
      <div className='card h-100'>
        <div className='card-body p-12'>
          {/* Filter Row */}
          <div className='mb-0'>
            <div className='row g-3 align-items-center'>
              {/* Date Range - col-md-3 */}
              <div className='col-md-3'>
                <h6 className='mb-16 fw-bold text-lg'>Select your choice</h6>
                <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                  Date Range
                </label>
                <Select
                  value={dateRangeType}
                  onChange={(selected) => setDateRangeType(selected)}
                  options={dateRangeOptions}
                  placeholder='Select Date Range'
                  isClearable
                  isSearchable
                  classNamePrefix='select'
                  className='mb-2'
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: "32px",
                      fontSize: "14px",
                    }),
                    menuList: (base) => ({
                      ...base,
                      maxHeight: "200px",
                    }),
                  }}
                />
                {dateRangeType?.value === "custom" && (
                  <div className='d-flex gap-2'>
                    <input
                      type='date'
                      className='form-control form-control-sm'
                      placeholder='From'
                    />
                    <input
                      type='date'
                      className='form-control form-control-sm'
                      placeholder='To'
                    />
                  </div>
                )}
              </div>

              {/* Vertical Separator */}
              <div className='col-md-1 d-flex justify-content-center align-items-center'>
                <div className='vr' style={{ minHeight: '100px' }}></div>
              </div>

              {/* Other Filters - col-md-8 */}
              <div className='col-md-8'>
                <h6 className='mb-16 fw-bold text-lg'>Filters</h6>
                <div className='row g-3'>
                  {/* Branch Dropdown */}
                  <div className='col-md-3'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Branch
                    </label>
                    <Select
                      value={selectedBranch}
                      onChange={(selected) => setSelectedBranch(selected)}
                      options={branchOptions}
                      placeholder='Select Branch'
                      isClearable
                      isSearchable
                      classNamePrefix='select'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "32px",
                          fontSize: "14px",
                        }),
                        menuList: (base) => ({
                          ...base,
                          maxHeight: "200px",
                        }),
                      }}
                    />
                  </div>

                  {/* User Dropdown */}
                  <div className='col-md-3'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      User
                    </label>
                    <Select
                      value={selectedUser}
                      onChange={(selected) => setSelectedUser(selected)}
                      options={userOptions}
                      placeholder='Select User'
                      isClearable
                      isSearchable
                      classNamePrefix='select'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "32px",
                          fontSize: "14px",
                        }),
                        menuList: (base) => ({
                          ...base,
                          maxHeight: "200px",
                        }),
                      }}
                    />
                  </div>

                  {/* Lead Status Type Dropdown */}
                  <div className='col-md-3'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Lead Status
                    </label>
                    <Select
                      value={selectedLeadStatus}
                      onChange={(selected) => setSelectedLeadStatus(selected)}
                      options={leadStatusOptions}
                      placeholder='Select Status'
                      isClearable
                      isSearchable
                      classNamePrefix='select'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "32px",
                          fontSize: "14px",
                        }),
                        menuList: (base) => ({
                          ...base,
                          maxHeight: "200px",
                        }),
                      }}
                    />
                  </div>

                  {/* Destination Dropdown */}
                  <div className='col-md-3'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Destination
                    </label>
                    <Select
                      value={selectedDestination}
                      onChange={(selected) => setSelectedDestination(selected)}
                      options={destinationOptions}
                      placeholder='Select Destination'
                      isClearable
                      isSearchable
                      classNamePrefix='select'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "32px",
                          fontSize: "14px",
                        }),
                        menuList: (base) => ({
                          ...base,
                          maxHeight: "200px",
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPerformanceFilter;
