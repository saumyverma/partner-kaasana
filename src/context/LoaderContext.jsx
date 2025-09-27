"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { loaderRef } from "@/utils/loaderRef";

const LoaderContext = createContext({ loading: false, setLoading: () => {} });

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // attach real implementations so non-react code (api.js) can call loaderRef.show/hide()
    loaderRef.show = () => setLoading(true);
    loaderRef.hide = () => setLoading(false);

    // cleanup on unmount
    return () => {
      loaderRef.show = () => {};
      loaderRef.hide = () => {};
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}

      {loading && (
        <>
          {/* overlay */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.45)",
              zIndex: 9999,
            }}
          >
            {/* spinner */}
            <div
              style={{
                width: 48,
                height: 48,
                border: "6px solid #fff",
                borderTop: "6px solid transparent",
                borderRadius: "50%",
                animation: "loader-spin 1s linear infinite",
              }}
            />
          </div>

          {/* keyframes for spinner (works without Tailwind) */}
          <style>{`@keyframes loader-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
        </>
      )}
    </LoaderContext.Provider>
  );
}

export const useLoader = () => useContext(LoaderContext);
