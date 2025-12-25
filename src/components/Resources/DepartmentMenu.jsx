import { components } from "react-select";

const DepartmentMenu = (props) => {
  return (
    <components.Menu {...props}>
      {props.children}

      <div className="border-top p-2">
        <button
          type="button"
          className="btn btn-sm btn-outline-primary w-100"
          onClick={() => props.selectProps.openAddDepartmentModal()}
        >
          + Add Department
        </button>
      </div>
    </components.Menu>
  );
};

export default DepartmentMenu;
