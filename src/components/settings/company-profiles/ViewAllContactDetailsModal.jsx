"use client";

const ViewAllContactDetailsModal = () => {
  const contacts = [
    {
      id: 1,
      fullName: 'The Article Guru',
      email: 'anshrajgkp8765@gmail.com',
      designation: 'Customer Service Representative',
      contactNumber: '+918765867589',
      whatsappNumber: '+919936396851'
    },
    {
      id: 2,
      fullName: 'John Smith',
      email: 'john.smith@example.com',
      designation: 'Sales Manager',
      contactNumber: '+919876543210',
      whatsappNumber: '+919876543210'
    },
    {
      id: 3,
      fullName: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      designation: 'Operations Manager',
      contactNumber: '+919988776655',
      whatsappNumber: '+919988776655'
    },
    {
      id: 4,
      fullName: 'Michael Brown',
      email: 'michael.brown@example.com',
      designation: 'Finance Manager',
      contactNumber: '+919988776644',
      whatsappNumber: '+919988776644'
    }
  ];

  return (
    <div
      className='modal fade'
      id='viewAllContactDetailsModal'
      tabIndex={-1}
      aria-labelledby='viewAllContactDetailsModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='viewAllContactDetailsModalLabel'>
              All Contact Details
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
              {contacts.map((contact, index) => (
                <div key={contact.id} className={`border radius-8 p-16 ${index < contacts.length - 1 ? 'mb-16' : 'mb-0'}`}>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Full Name
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {contact.fullName}
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
                        {contact.email}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Designation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {contact.designation}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Contact Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {contact.contactNumber}
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        WhatsApp Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        {contact.whatsappNumber}
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

export default ViewAllContactDetailsModal;

