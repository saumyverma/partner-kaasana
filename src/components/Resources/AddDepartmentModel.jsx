import { Icon } from "@iconify/react";
import React from "react";

const AddDepartmentModel = ({
  setDepartmentOptionsState,
  setDepartmentSelections,
  setNewDepartment,
  setShowDeptModal,
  newDepartment,
}) => {
  const handleAddDepartment = () => {
    if (!newDepartment.trim()) return;

    const deptOption = {
      value: newDepartment,
      label: newDepartment,
    };

    setDepartmentOptionsState((prev) => [...prev, deptOption]);
    setDepartmentSelections(deptOption);
    setNewDepartment("");
    setShowDeptModal(false);
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">Add Department</h5>
            <button
              className="cursor-pointer text-red"
              onClick={() => setShowDeptModal(false)}
            >
              <Icon icon="hugeicons:cancel-circle" width="24" height="24" />
            </button>
          </div>

          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Enter department name"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
            />
          </div>

          <div className="modal-body d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleAddDepartment}>
              Add Department
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartmentModel;
