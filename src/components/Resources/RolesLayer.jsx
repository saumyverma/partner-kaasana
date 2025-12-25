"use client";
import React, { useState } from "react";
import ShowRoles from "./ShowRoles";

const detailsData = [
  {
    user: {
      name: "Dianne Russell",
      image: "/assets/Avatar.png",
    },
    invoice: "#6352148",
    item: "iPhone 14 max",
    qty: 2,
    amount: "$5,000.00",
    status: "Paid",
  },
  {
    user: {
      name: "Wade Warren",
      image: "/assets/Avatar.png",
    },
    invoice: "#6352148",
    item: "Laptop HPH",
    qty: 3,
    amount: "$1,000.00",
    status: "Pending",
  },
  {
    user: {
      name: "Albert Flores",
      image: "/assets/Avatar.png",
    },
    invoice: "#6352148",
    item: "Smart Watch",
    qty: 7,
    amount: "$1,000.00",
    status: "Shipped",
  },
  {
    user: {
      name: "Bessie Cooper",
      image: "/assets/Avatar.png",
    },
    invoice: "#6352148",
    item: "Nike Air Shoe",
    qty: 1,
    amount: "$3,000.00",
    status: "Canceled",
  },
  {
    user: {
      name: "Arlene McCoy",
      image: "/assets/Avatar.png",
    },
    invoice: "#6352148",
    item: "New Headphone",
    qty: 5,
    amount: "$4,000.00",
    status: "Canceled",
  },
];

const statusColors = {
  Paid: {
    background: "bg-success-focus",
    text: "text-success-main",
  },

  Pending: {
    background: "bg-warning-focus",
    text: "text-warning-main",
  },

  Shipped: {
    background: "bg-info-focus",
    text: "text-info-main",
  },

  Canceled: {
    background: "bg-danger-focus",
    text: "text-danger-main",
  },
};

export default function RolesLayer() {
  const [showRoles, setShowRoles] = useState(false);

  const getTextAndBgColor = (status) => {
    const colors = statusColors[status];
    if (!colors) return "";
    return `${colors.text} ${colors.background}`;
  };
  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">Tables Border Colors</h5>
          <button
            className="btn btn-primary rounded"
            onClick={() => setShowRoles(true)}
          >
            Add Roles
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table bordered-table mb-0">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Users
                  </th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Items</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Amount</th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {detailsData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={data.user.image}
                          alt=""
                          className="shrink-0 me-12 radius-8"
                        />
                        <span className="text-lg text-secondary-light fw-semibold grow">
                          {data.user.name}
                        </span>
                      </div>
                    </td>
                    <td>{data.invoice}</td>
                    <td>{data.item}</td>
                    <td>{data.qty}</td>
                    <td>{data.amount}</td>
                    <td className="text-center">
                      <span
                        className={`${getTextAndBgColor(
                          data.status
                        )} px-24 py-4 rounded-pill fw-medium text-sm`}
                      >
                        {data.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* card end */}
      {showRoles && <ShowRoles setShowRoles={setShowRoles} />}
    </div>
  );
}
