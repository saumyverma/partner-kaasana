"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import CKEditor to avoid SSR issues
const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);

let ClassicEditor;
if (typeof window !== "undefined") {
  try {
    ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
  } catch (error) {
    console.warn("CKEditor load error:", error);
  }
}

export default function CKEditorComponent({ value, onChange, placeholder = "Enter text here..." }) {
  const [editorData, setEditorData] = useState(value || "");
  const [isMounted, setIsMounted] = useState(false);
  const [editorError, setEditorError] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    // Suppress license key warnings in console and catch global errors
    if (typeof window !== "undefined") {
      // Suppress console errors for license key
      const originalError = console.error;
      console.error = (...args) => {
        const errorMessage = args[0]?.toString() || "";
        if (errorMessage.includes("license-key-missing") || 
            errorMessage.includes("license-key") ||
            (args[0]?.name === "CKEditorError" && args[0]?.message?.includes("license"))) {
          // Suppress license key warnings
          return;
        }
        originalError.apply(console, args);
      };

      // Catch unhandled promise rejections for license key errors
      const originalUnhandledRejection = window.onunhandledrejection;
      window.addEventListener("unhandledrejection", (event) => {
        if (event.reason && 
            (event.reason.message?.includes("license-key") || 
             event.reason.name === "CKEditorError")) {
          event.preventDefault();
          return;
        }
      });
    }
  }, []);

  useEffect(() => {
    if (value !== undefined && value !== editorData) {
      setEditorData(value);
    }
  }, [value]);

  const handleChange = (event, editor) => {
    try {
      const data = editor.getData();
      setEditorData(data);
      if (onChange) {
        onChange(data);
      }
    } catch (error) {
      console.warn("CKEditor change error:", error);
    }
  };

  const handleError = (error, { willEditorRestart }) => {
    // Suppress license key errors
    if (error && error.message && error.message.includes("license-key")) {
      setEditorError(null); // Don't show error for license key
      return;
    }
    setEditorError(error);
    console.warn("CKEditor error:", error);
  };

  if (!isMounted || !ClassicEditor) {
    return (
      <div className="ckeditor-wrapper">
        <div className="form-control" style={{ minHeight: "150px", padding: "12px" }}>
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className="ckeditor-wrapper">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleChange}
        onError={handleError}
        config={{
          // License key - set via environment variable or leave empty for development
          licenseKey: process.env.NEXT_PUBLIC_CKEDITOR_LICENSE_KEY || "",
          placeholder: placeholder,
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "outdent",
              "indent",
              "|",
              "blockQuote",
              "insertTable",
              "|",
              "link",
              "|",
              "undo",
              "redo",
            ],
            shouldNotGroupWhenFull: true,
          },
          heading: {
            options: [
              { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
              { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
              { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
              { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
            ],
          },
        }}
        onReady={(editor) => {
          editorRef.current = editor;
        }}
      />
      {editorError && (
        <div className="alert alert-warning mt-2" role="alert">
          Editor error occurred. Please refresh the page.
        </div>
      )}
      <style jsx global>{`
        .ckeditor-wrapper .ck-content {
          height: 300px;
        }
      `}</style>
    </div>
  );
}
