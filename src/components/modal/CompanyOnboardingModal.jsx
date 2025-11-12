"use client";
import Link from "next/link";

const CompanyOnboardingModal = ({ isOpen, companyDetails }) => {
  const companyName = companyDetails?.company_name || "your company";
  const contactEmail = companyDetails?.email || "your team";

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="companyOnboardingModalTitle"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
              <h1 className="modal-title fs-5 mb-0" id="companyOnboardingModalTitle">
                Complete Your Company Profile
              </h1>
            </div>
            <div className="modal-body p-24">
              <p className="text-secondary mb-20">
                We need a few more details to finish setting up {companyName}. Once the company profile is complete, you&apos;ll unlock the full Kaasana experience, including team management, resources, and automation workflows.
              </p>

              <div className="border radius-12 p-20 bg-neutral-50 mb-24">
                <h2 className="text-md fw-semibold text-primary-600 mb-12">
                  What you need to provide
                </h2>
                <ul className="mb-0 ps-18 text-sm text-secondary">
                  <li className="mb-8">Company legal and branding information</li>
                  <li className="mb-8">Primary business contacts and support channels</li>
                  <li className="mb-0">Operational preferences to tailor the platform to your workflow</li>
                </ul>
              </div>

              <div className="alert alert-warning radius-12 mb-0" role="alert">
                The onboarding modal will stay open until your company profile setup is marked as complete. Need help? Reach out to {contactEmail}.
              </div>
            </div>
            <div className="modal-footer px-24 pb-24 border-0">
              <div className="d-flex w-100 flex-column flex-md-row gap-3">
                <Link
                  href="/"
                  className="btn btn-primary radius-12 fw-semibold px-32 py-12 flex-grow-1 d-flex align-items-center justify-content-center"
                >
                  Go to Company Setup
                </Link>
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

