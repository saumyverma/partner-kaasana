"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import QuoteReportLayer from "../quotation/QuoteReportLayer";
import InvoiceReportLayer from "../invoices/InvoiceReportLayer";
import SalesReportLayer from "./SalesReportLayer";
import PaymentStatusLayer from "../payment-status/PaymentStatusLayer";

export default function SalesReportWrapper({ initialTitle, initialBreadcrumbs }) {
  const [activeTab, setActiveTab] = useState("sales-report");
  const [pageTitle, setPageTitle] = useState(initialTitle);
  const [breadcrumbs, setBreadcrumbs] = useState(initialBreadcrumbs);

  const getTabLabel = (tabId) => {
    const labels = {
      "sales-report": "Cost Sheet Report",
      "quote-report": "Quote Report",
      "invoice-report": "Invoice Report",
      "payment-status-report": "Payment Status Report"
    };
    return labels[tabId] || "Cost Sheet Report";
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const tabLabel = getTabLabel(tabId);
    setPageTitle(tabLabel);
    setBreadcrumbs([
      { label: "Reports", href: "#" },
      { label: tabLabel, href: "#" }
    ]);
  };

  return (
    <>
      <Breadcrumb title={pageTitle} breadcrumbs={breadcrumbs} />
      <div>
        <div className="card mb-4">
          <div className="card-body p-0">
            <ul
              className="nav border-gradient-tab nav-pills mb-0"
              id="sales-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link d-flex align-items-center ${
                    activeTab === "sales-report" ? "active" : ""
                  }`}
                  id="sales-report-tab"
                  onClick={() => handleTabChange("sales-report")}
                  type="button"
                  role="tab"
                  aria-controls="sales-report"
                  aria-selected={activeTab === "sales-report"}
                >
                  Cost Sheet Report
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link d-flex align-items-center ${
                    activeTab === "quote-report" ? "active" : ""
                  }`}
                  id="quote-report-tab"
                  onClick={() => handleTabChange("quote-report")}
                  type="button"
                  role="tab"
                  aria-controls="quote-report"
                  aria-selected={activeTab === "quote-report"}
                >
                  Quote Report
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link d-flex align-items-center ${
                    activeTab === "invoice-report" ? "active" : ""
                  }`}
                  id="invoice-report-tab"
                  onClick={() => handleTabChange("invoice-report")}
                  type="button"
                  role="tab"
                  aria-controls="invoice-report"
                  aria-selected={activeTab === "invoice-report"}
                >
                  Invoice Report
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link d-flex align-items-center ${
                    activeTab === "payment-status-report" ? "active" : ""
                  }`}
                  id="payment-status-report-tab"
                  onClick={() => handleTabChange("payment-status-report")}
                  type="button"
                  role="tab"
                  aria-controls="payment-status-report"
                  aria-selected={activeTab === "payment-status-report"}
                >
                  Payment Status Report
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="sales-tabContent">
          {activeTab === "sales-report" && (
            <div
              className="tab-pane fade show active"
              id="sales-report"
              role="tabpanel"
              aria-labelledby="sales-report-tab"
            >
              <SalesReportLayer pageId="sales-report" />
            </div>
          )}
          {activeTab === "quote-report" && (
            <div
              className="tab-pane fade show active"
              id="quote-report"
              role="tabpanel"
              aria-labelledby="quote-report-tab"
            >
              <QuoteReportLayer pageId="quote-report" />
            </div>
          )}
          {activeTab === "invoice-report" && (
            <div
              className="tab-pane fade show active"
              id="invoice-report"
              role="tabpanel"
              aria-labelledby="invoice-report-tab"
            >
              <InvoiceReportLayer pageId="invoice-report" />
            </div>
          )}
          {activeTab === "payment-status-report" && (
            <div
              className="tab-pane fade show active"
              id="payment-status-report"
              role="tabpanel"
              aria-labelledby="payment-status-report-tab"
            >
              <PaymentStatusLayer pageId="payment-status-report" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

