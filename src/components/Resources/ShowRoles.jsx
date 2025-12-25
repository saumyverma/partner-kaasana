"use client";
import { Icon } from "@iconify/react";
import React, { useMemo, useState } from "react";
import Select from "react-select";
import RolePermissions from "./RolePermissions";
import DepartmentMenu from "./DepartmentMenu";
import AddDepartmentModel from "./AddDepartmentModel";

const departmentOptions = [
  "Accounting & Finance",
  "Administrative",
  "Business Development",
  "Customer Service",
  "Finance",
  "Human Resource",
  "Legal",
  "Marketing",
  "Operations",
  "Post Sales",
  "Purchasing",
  "Quality Assurance",
  "Risk Management",
  "Sales",
  "Strategy",
  "Purchase",
];
const jobRoleOptions = ["Admin", "Sales", "Operations", "Accounts", "Product"];

const mapToOptions = (values) =>
  values.map((value) => ({ value, label: value }));

const ShowRoles = ({ setShowRoles }) => {
  const [departmentOptionsState, setDepartmentOptionsState] = useState(
    mapToOptions(departmentOptions)
  );
  const [departmentSelections, setDepartmentSelections] = useState(null);
  const [jobRoleSelctions, setJobRoleSelctions] = useState([]);
  const [showDeptModal, setShowDeptModal] = useState(false);
  const [newDepartment, setNewDepartment] = useState("");

  const jobRolesSelectOptions = useMemo(() => mapToOptions(jobRoleOptions), []);

  return (
    <>
      <div
        className="modal fade show d-block position-fixed top-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contactDetailsSection"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl z-index-2 my-1">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0 ">
              <div className="d-flex justify-content-between w-100 align-items-center">
                <h1 className="modal-title fs-5 mb-0">Roles</h1>
                <Icon
                  className="cursor-pointer text-red"
                  onClick={() => setShowRoles(false)}
                  icon="hugeicons:cancel-circle"
                  width="24"
                  height="24"
                />
              </div>
            </div>
            <div
              className="modal-body p-24 table-responsive"
              style={{
                maxHeight: "90vh",
              }}
            >
              <div className="col-md-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Manage Roles</h5>
                    <div className="form-wizard">
                      <form action="#">
                        <fieldset>
                          <div className="row gy-3">
                            <div className="col-md-6 col-lg-4">
                              <label className="form-label">Department</label>
                              <Select
                                inputId="department"
                                isClearable
                                isSearchable
                                options={departmentOptionsState}
                                placeholder="Select Department"
                                value={departmentSelections}
                                onChange={setDepartmentSelections}
                                components={{ Menu: DepartmentMenu }}
                                openAddDepartmentModal={() =>
                                  setShowDeptModal(true)
                                }
                              />
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <label className="form-label">Job Roles</label>
                              <Select
                                inputId="jobRoles"
                                isClearable
                                isSearchable
                                options={jobRolesSelectOptions}
                                placeholder="Select Job Role"
                                closeMenuOnSelect={true}
                                value={
                                  jobRolesSelectOptions.find(
                                    (option) =>
                                      option.value === jobRoleSelctions
                                  ) || null
                                }
                                onChange={(selected) =>
                                  setJobRoleSelctions(
                                    selected ? selected.value : ""
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <label className="form-label">
                                Job Title
                                <span className="text-danger-600">*</span>
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Your Job Title"
                              />
                            </div>
                          </div>

                          <div className="form-group d-flex align-items-center justify-content-end gap-8 mt-3">
                            <button
                              type="button"
                              className="form-wizard-submit btn btn-primary-600 px-32"
                            >
                              Save
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <RolePermissions />
            </div>
          </div>
        </div>
      </div>
      {showDeptModal && (
        <AddDepartmentModel
          setShowDeptModal={setShowDeptModal}
          setDepartmentOptionsState={setDepartmentOptionsState}
          setDepartmentSelections={setDepartmentSelections}
          setNewDepartment={setNewDepartment}
          newDepartment={newDepartment}
        />
      )}
    </>
  );
};

export default ShowRoles;
