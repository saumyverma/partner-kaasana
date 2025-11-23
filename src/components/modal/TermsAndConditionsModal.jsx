'use client'
import React, { useEffect } from 'react'
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
                    <h1  className="modal-title fs-5" id='TermsAndConditions'>
                        Terms and Conditions
                    </h1>
                    <button
                        type='button'
                        className={styles.closeButton}
                         onClick={handleClose}
                        aria-label='Close'
                    >
                        <Icon icon='mdi:close' className={`text-secondary-light ${styles.closeIcon}`} />
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <form action='#' onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}