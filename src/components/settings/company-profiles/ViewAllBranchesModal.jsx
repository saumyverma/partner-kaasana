"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const ViewAllBranchesModal = () => {
  const branches = [
    {
      id: 1,
      code: 'BR001',
      name: 'New York Branch',
      address: '456 Branch Avenue, New York, NY 10002',
      email: 'ny.branch@travelagency.com',
      phone: '+1 (212) 555-1234',
      year: '2015',
      taxNumber: 'TAX-NY-2015-789012',
      createdOn: 'January 15, 2015'
    },
    {
      id: 2,
      code: 'BR002',
      name: 'Los Angeles Branch',
      address: '789 Sunset Boulevard, Los Angeles, CA 90028',
      email: 'la.branch@travelagency.com',
      phone: '+1 (323) 555-5678',
      year: '2018',
      taxNumber: 'TAX-LA-2018-345678',
      createdOn: 'March 22, 2018'
    },
    {
      id: 3,
      code: 'BR003',
      name: 'Chicago Branch',
      address: '321 Michigan Avenue, Chicago, IL 60601',
      email: 'chicago.branch@travelagency.com',
      phone: '+1 (312) 555-9012',
      year: '2020',
      taxNumber: 'TAX-CH-2020-456789',
      createdOn: 'June 10, 2020'
    }
  ];

  return (
    <div
      className='modal fade'
      id='viewAllBranchesModal'
      tabIndex={-1}
      aria-labelledby='viewAllBranchesModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='viewAllBranchesModalLabel'>
              All Branches
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
              {branches.map((branch, index) => (
                <div key={branch.id} className={`border radius-8 p-16 ${index < branches.length - 1 ? 'mb-16' : 'mb-0'}`}>
                  <div className='d-flex align-items-center justify-content-between mb-16'>
                    <div>
                      <h6 className='text-lg mb-0 text-primary-light'>
                        {branch.code} - {branch.name}
                      </h6>
                    </div>
                    <button
                      type='button'
                      className='btn p-0 border-0 bg-transparent'
                      data-bs-toggle='modal'
                      data-bs-target='#editBranchModal'
                      aria-label='Edit Branch'
                    >
                      <Icon icon='solar:pen-bold' className='text-primary-600 text-md cursor-pointer' />
                    </button>
                  </div>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-start mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Address
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {branch.address}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {branch.email}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Phone
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {branch.phone}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Year of Corporation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {branch.year}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Tax & Trade Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {branch.taxNumber}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Created On
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {branch.createdOn}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBranchesModal;

