"use client";

import React, { useState } from "react";

const permissionsData = [
  {
    section: "Dashboard",
    items: ["Dashboard"],
  },
  {
    section: "CRM",
    items: [
      "Leads",
      "Open Leads",
      "Confirmed Lead",
      "Archive Leads",
      "Customers",
    ],
  },
  {
    section: "Bookings",
    items: [
      "Packages",
      "Hotels",
      "Flights",
      "Activities",
      "Transportations",
      "VISA",
    ],
  },
  {
    section: "Operations",
    items: ["Upcoming Travels", "Refund & Cancellations"],
  },
  {
    section: "Inventory",
    items: [
      "Hotels",
      "Packages",
      "Transportations",
      "VISA",
      "Activities",
      "Cost Sheet",
      "Quotes",
      "Invoices",
    ],
  },
  {
    section: "Resources",
    items: ["Roles / Permissions", "Users", "Branches", "Suppliers / Partners"],
  },
  {
    section: "Masters",
    items: [
      "Currency",
      "Themes",
      "Package Type",
      "Package Duration",
      "Hotel Type",
      "Stay Type",
      "Meal Options",
    ],
  },
  {
    section: "Reports",
    items: [
      "Lead Reports",
      "Branch Performance",
      "Agent Performance",
      "Sales",
      "Invoices",
      "Payment Status",
    ],
  },
  {
    section: "Setting",
    items: [
      "Profile",
      "Tnc",
      "Markups",
      "Notifications",
      "Communications",
      "Subscription Plan",
      "Other Settings",
    ],
  },
];

const RolePermissions = () => {
  const [permissions, setPermissions] = useState({});

  const allItems = permissionsData.flatMap((g) => g.items);

  const handleChange = (module, type) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        [type]: !prev[module]?.[type],
      },
    }));
  };

  // 🔥 TOP MASTER CHECKBOX LOGIC
  const handleAllChange = (type) => {
    const allChecked = allItems.every((item) => permissions[item]?.[type]);

    setPermissions((prev) => {
      const updated = { ...prev };
      allItems.forEach((item) => {
        updated[item] = {
          ...updated[item],
          [type]: !allChecked,
        };
      });
      return updated;
    });
  };

  const isAllChecked = (type) =>
    allItems.length && allItems.every((item) => permissions[item]?.[type]);

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body table-responsive">
          <h5 className="card-title mb-3">Permissions</h5>

          <table className="table border-2 align-middle">
            <thead className="table-light">
              <tr>
                <th className="text-dark" style={{ fontSize: "14px" }}>
                  Module
                </th>

                {/* 🔥 MASTER CHECKBOXES */}
                <th>
                  <div className="d-flex align-items-center gap-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-0 cursor-pointer border-2"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      checked={isAllChecked("read")}
                      onChange={() => handleAllChange("read")}
                    />
                    <span className="text-dark" style={{ fontSize: "14px" }}>
                      Read
                    </span>
                  </div>
                </th>

                <th>
                  <div className="d-flex align-items-center gap-3">
                    <input
                      type="checkbox"
                      className="form-check-input cursor-pointer border-2 mt-0"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      checked={isAllChecked("write")}
                      onChange={() => handleAllChange("write")}
                    />
                    <span className="text-dark" style={{ fontSize: "14px" }}>
                      Write
                    </span>
                  </div>
                </th>

                <th>
                  <div className="d-flex align-items-center gap-3">
                    <input
                      type="checkbox"
                      className="form-check-input cursor-pointer border-2 mt-0"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      checked={isAllChecked("both")}
                      onChange={() => handleAllChange("both")}
                    />
                    <span className="text-dark" style={{ fontSize: "14px" }}>
                      Both
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {permissionsData.map((group) => (
                <React.Fragment key={group.section}>
                  {group.section !== "Dashboard" && (
                    <tr>
                      <td
                        colSpan="4"
                        className="fw-bold bg-light"
                        style={{ fontSize: "14px" }}
                      >
                        {group.section}
                      </td>
                    </tr>
                  )}

                  {group.items.map((item) => (
                    <tr key={item}>
                      <td style={{ fontSize: "14px" }} className="text-dark">{item}</td>

                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input cursor-pointer border-2"
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          checked={permissions[item]?.read || false}
                          onChange={() => handleChange(item, "read")}
                        />
                      </td>

                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input cursor-pointer border-2"
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          checked={permissions[item]?.write || false}
                          onChange={() => handleChange(item, "write")}
                        />
                      </td>

                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input cursor-pointer border-2"
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          checked={permissions[item]?.both || false}
                          onChange={() => handleChange(item, "both")}
                        />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolePermissions;
