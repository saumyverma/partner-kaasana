"use client";

import Link from "next/link";
import OnboardingPopupForm from "@/components/child/OnboardingPopupForm";

const CompanyOnboardingModal = ({ isOpen, companyDetails }) => {
  const contactEmail = companyDetails?.email || "your team";

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show d-block"
        role="dialog"
        aria-modal="true"
        aria-labelledby="companyOnboardingModalTitle"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
              <h1
                className="modal-title fs-5 mb-0"
                id="companyOnboardingModalTitle"
              >
                Complete Your Company Profile
              </h1>
            </div>
            <div className="modal-body p-24">
              <OnboardingPopupForm />
            </div>
            <div className="modal-footer px-24 pb-24 border-0">
              <div className="d-flex w-100 flex-column flex-md-row gap-3">
                <div
                  className="alert alert-warning radius-12 mb-0"
                  role="alert"
                >
                  The onboarding modal will stay open until your company profile
                  setup is marked as complete. Need help? Reach out to{" "}
                  {contactEmail}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.65)" }}
      />
    </>
  );
};

export default CompanyOnboardingModal;
