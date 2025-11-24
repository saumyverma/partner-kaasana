"use client";
import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderSpinner}></div>
    </div>
  );
}

