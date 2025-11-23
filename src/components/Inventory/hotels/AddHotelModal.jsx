"use client";

import AddNewHotelForm from "@/components/Inventory/hotels/addNewhotelForm";

const AddHotelModal = () => {
  return (
    <div
      className='modal fade'
      id='addHotelModal'
      tabIndex={-1}
      aria-labelledby='addHotelModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addHotelModalLabel'>
              Add New Hotel
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <AddNewHotelForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotelModal;

