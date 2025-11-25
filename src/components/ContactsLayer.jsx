import { Icon } from "@iconify/react";
import React from "react";

const ContactsLayer = ({ contacts, handleEditContacts }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <div className="radius-16 bg-base mb-3" key={index}>
          <div className="modal-body">
            <div className="card">
              <div className="d-flex justify-content-between w-100 align-items-center border-bottom mb-1 p-3">
                <h5 className="card-title mb-0 text-capitalize">
                  contact Details #{index + 1}
                </h5>

                <button
                  onClick={() => handleEditContacts(index)}
                  type="button"
                  className="text-warning-600 border-0"
                >
                  <Icon
                    icon="hugeicons:pencil-edit-02"
                    width="24"
                    height="24"
                  />
                </button>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Full name
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {contact?.full_name}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Email
                    </span>
                    <span className="w-50 text-secondary-light fw-medium text-lowercase">
                      : {contact?.email}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      designation
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {contact?.designation}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      contact number
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {contact?.contact_number}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Whatsapp Number
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {contact?.whatsapp_number}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactsLayer;
