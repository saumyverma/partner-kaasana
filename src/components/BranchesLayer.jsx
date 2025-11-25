import { Icon } from "@iconify/react";
import React from "react";

const BranchesLayer = ({ branches, handleEditBranches }) => {
  return (
    <>
      {branches.map((branch, index) => (
        <div className="radius-16 bg-base mb-3" key={index}>
          <div className="modal-body">
            <div className="card">
              <div className="d-flex justify-content-between w-100 align-items-center border-bottom mb-1 p-3">
                <h5 className="card-title mb-0">Branch Details #{index + 1}</h5>

                <button
                  onClick={() => handleEditBranches(index)}
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
                      Branch Code
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.branch_code}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Branch Name
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.company_name}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Branch Email
                    </span>
                    <span className="w-50 text-secondary-light fw-medium text-lowercase">
                      : {branch.branch_email}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Branch Phone
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.branch_phone}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Year of Incorporation
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.year_of_incorporation}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Tax or Trade Licence Number
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.tax_trade_licence_number}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      City
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.city}
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      State
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.state}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-1 mb-3 text-capitalize">
                    <span className="w-50 text-md fw-semibold text-primary-light">
                      Country
                    </span>
                    <span className="w-50 text-secondary-light fw-medium">
                      : {branch.country}
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

export default BranchesLayer;
