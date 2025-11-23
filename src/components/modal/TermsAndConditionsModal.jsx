'use client'
import React from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from './TermsAndConditionsModal.module.css';

export default function TermsAndConditionsModal({ showTermsAndConditionsModal, setShowTermsAndConditionsModal }) {
    if (!showTermsAndConditionsModal) return null;

     const handleClose = () => {
        setShowTermsAndConditionsModal(false);
     };
     const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className={styles.modalOverlay}
            onClick={(e) => {
                e.stopPropagation();
                handleBackdropClick(e);
            }}
        >
            {/* Modal Content */}
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <div className={styles.headerContent}>
                        <h1 className="modal-title fs-5 mb-0" id='PlatformPolicies'>
                            Platform Policies
                        </h1>
                        <p className={styles.lastUpdated}>Last updated: 4 March, 2025</p>
                    </div>
                    <button
                        type='button'
                        className={styles.closeButton}
                        onClick={handleClose}
                        aria-label='Close'
                    >
                        <Icon icon='mdi:close' className={styles.closeIcon} />
                    </button>
                </div>
                <ul className={`nav border-gradient-tab nav-tabs ${styles.tabsContainer}`} id='policy-tab' role='tablist'>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link active'
                            id='terms-tab'
                            data-bs-toggle='tab'
                            data-bs-target='#terms'
                            type='button'
                            role='tab'
                            aria-controls='terms'
                            aria-selected='true'
                        >
                            Terms and Conditions
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link'
                            id='privacy-tab'
                            data-bs-toggle='tab'
                            data-bs-target='#privacy'
                            type='button'
                            role='tab'
                            aria-controls='privacy'
                            aria-selected='false'
                            tabIndex={-1}
                        >
                            Privacy Policy
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link'
                            id='usage-tab'
                            data-bs-toggle='tab'
                            data-bs-target='#usage'
                            type='button'
                            role='tab'
                            aria-controls='usage'
                            aria-selected='false'
                            tabIndex={-1}
                        >
                            Platform Usage Policy
                        </button>
                    </li>
                </ul>
                <div className={styles.modalBody}>
                    <div className='tab-content' id='policy-tabContent'>
                        <div
                            className='tab-pane fade show active'
                            id='terms'
                            role='tabpanel'
                            aria-labelledby='terms-tab'
                            tabIndex={0}
                        >
                            <div className={styles.tabContent}>
                                <h2 className='fs-6 fw-bold text-primary-light mb-3'>Terms and Conditions</h2>
                                <div className={styles.contentSection}>
                                    <ul className={styles.list}>
                                        <li>Do not upload or share content that is illegal, offensive, or infringes on intellectual property rights.</li>
                                        <li>Do not attempt to hack, disrupt, or misuse the Platform.</li>
                                        <li>Do not upload or share content that is illegal, offensive, or infringes on intellectual property rights.</li>
                                        <li>Do not attempt to hack, disrupt, or misuse the Platform.</li>
                                        <li>Do not upload or share content that is illegal, offensive, or infringes on intellectual property rights.</li>
                                        <li>Do not attempt to hack, disrupt, or misuse the Platform.</li>
                                    </ul>
                                    <h3 className='fs-6 fw-semibold text-primary-light mt-4 mb-2'>6. Data Privacy and Security</h3>
                                    <ul className={styles.list}>
                                        <li>We are committed to protecting your data as per Indian data protection laws.</li>
                                        <li>We do not sell or share your personal information with third parties except as required by law.</li>
                                        <li>Users are responsible for backing up their own content.</li>
                                    </ul>
                                    <h3 className='fs-6 fw-semibold text-primary-light mt-4 mb-2'>7. Service Availability and Support</h3>
                                    <ul className={styles.list}>
                                        <li>We strive to ensure 99.9% uptime but do not guarantee uninterrupted access.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='privacy'
                            role='tabpanel'
                            aria-labelledby='privacy-tab'
                            tabIndex={0}
                        >
                            <div className={styles.tabContent}>
                                <h2 className='fs-6 fw-bold text-primary-light mb-3'>Privacy Policy</h2>
                                <div className={styles.contentSection}>
                                    <p>This Privacy Policy describes how we collect, use, and protect your personal information when you use our platform.</p>
                                    <h3 className='fs-6 fw-semibold text-primary-light mt-4 mb-2'>Information We Collect</h3>
                                    <ul className={styles.list}>
                                        <li>Personal information you provide during registration</li>
                                        <li>Usage data and analytics</li>
                                        <li>Cookies and tracking technologies</li>
                                    </ul>
                                    <h3 className='fs-6 fw-semibold text-primary-light mt-4 mb-2'>How We Use Your Information</h3>
                                    <ul className={styles.list}>
                                        <li>To provide and improve our services</li>
                                        <li>To communicate with you about your account</li>
                                        <li>To comply with legal obligations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='usage'
                            role='tabpanel'
                            aria-labelledby='usage-tab'
                            tabIndex={0}
                        >
                            <div className={styles.tabContent}>
                                <h2 className='fs-6 fw-bold text-primary-light mb-3'>Platform Usage Policy</h2>
                                <div className={styles.contentSection}>
                                    <p>This policy outlines the acceptable use of our platform and the rules you must follow.</p>
                                    <h3 className='fs-6 fw-semibold text-primary-light mt-4 mb-2'>Acceptable Use</h3>
                                    <ul className={styles.list}>
                                        <li>Use the platform only for lawful purposes</li>
                                        <li>Respect other users and their content</li>
                                        <li>Maintain the security of your account</li>
                                    </ul>
                                    <h3 className='fs-6 fw-semibold text-primary-light mt-4 mb-2'>Prohibited Activities</h3>
                                    <ul className={styles.list}>
                                        <li>Unauthorized access to other accounts</li>
                                        <li>Spreading malware or viruses</li>
                                        <li>Violating intellectual property rights</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}