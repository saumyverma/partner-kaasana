import { useState } from "react";

const SalesReportFilter = () => {
  const [dateRangeType, setDateRangeType] = useState("");

  return (
    <div className='col-xxl-12'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          {/* Filter Row */}
          <div className='mb-24'>
            <div className='row g-3 align-items-center'>
              {/* Date Range - col-md-3 */}
              <div className='col-md-3'>
                <h6 className='mb-16 fw-bold text-lg'>Select your choice</h6>
                <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                  Date Range
                </label>
                <select
                  className='form-select form-select-sm mb-2'
                  value={dateRangeType}
                  onChange={(e) => setDateRangeType(e.target.value)}
                >
                  <option value=''>All Data</option>
                  <option value='24h'>Last 24 Hours</option>
                  <option value='7d'>Last 7 Days</option>
                  <option value='15d'>Last 15 Days</option>
                  <option value='28d'>Last 28 Days</option>
                  <option value='3m'>Last 3 Months</option>
                  <option value='6m'>Last 6 Months</option>
                  <option value='1y'>Last 1 Year</option>
                  <option value='custom'>Custom Date Range</option>
                </select>
                {dateRangeType === "custom" && (
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
                <div className='border rounded p-3 bg-light'>
                  <div className='row g-3'>
                    {/* Branch Dropdown */}
                    <div className='col-md-3'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        Branch
                      </label>
                      <select className='form-select form-select-sm'>
                        <option value=''>All Branches</option>
                        <option value='branch1'>Branch 1</option>
                        <option value='branch2'>Branch 2</option>
                        <option value='branch3'>Branch 3</option>
                      </select>
                    </div>

                    {/* User Dropdown */}
                    <div className='col-md-3'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        User
                      </label>
                      <select className='form-select form-select-sm'>
                        <option value=''>All Users</option>
                        <option value='user1'>User 1</option>
                        <option value='user2'>User 2</option>
                        <option value='user3'>User 3</option>
                      </select>
                    </div>

                    {/* Lead Status Type Dropdown */}
                    <div className='col-md-3'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        Lead Status
                      </label>
                      <select className='form-select form-select-sm'>
                        <option value=''>All Status</option>
                        <option value='new'>New</option>
                        <option value='contacted'>Contacted</option>
                        <option value='qualified'>Qualified</option>
                        <option value='converted'>Converted</option>
                      </select>
                    </div>

                    {/* Destination Dropdown */}
                    <div className='col-md-3'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        Destination
                      </label>
                      <select className='form-select form-select-sm'>
                        <option value=''>All Destinations</option>
                        <option value='dest1'>Destination 1</option>
                        <option value='dest2'>Destination 2</option>
                        <option value='dest3'>Destination 3</option>
                      </select>
                    </div>
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

export default SalesReportFilter;

