"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const defaultNormalize = ({ option, labelKey, valueKey }) => {
  if (option == null) {
    return { label: "", value: "", raw: option };
  }

  if (typeof option === "object") {
    const label =
      option[labelKey] ??
      option.label ??
      option.name ??
      option.title ??
      option.value ??
      "";
    const value = option[valueKey] ?? option.value ?? option.id ?? label;

    return { label, value, raw: option };
  }

  return { label: String(option), value: String(option), raw: option };
};

const MultiSelectDropdown = ({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select options",
  labelKey = "label",
  valueKey = "value",
  emptyMessage = "No options found",
  disabled = false,
  searchable = true,
  className = "",
  dropdownClassName = "",
  maxDropdownHeight = 200,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  const normalizedOptions = useMemo(
    () =>
      options.map((option) =>
        defaultNormalize({ option, labelKey, valueKey })
      ),
    [options, labelKey, valueKey]
  );

  const selectedValues = useMemo(
    () => (Array.isArray(selected) ? selected : []),
    [selected]
  );

  const selectedOptions = useMemo(
    () =>
      normalizedOptions.filter((option) =>
        selectedValues.includes(option.value)
      ),
    [normalizedOptions, selectedValues]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
  };

  const handleOptionToggle = (value) => {
    if (disabled) return;
    const next = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    onChange?.(next);
  };

  const handleRemoveChip = (value) => {
    if (disabled) return;
    const next = selectedValues.filter((item) => item !== value);
    onChange?.(next);
  };

  const handleClear = () => {
    if (disabled) return;
    onChange?.([]);
    setSearch("");
  };

  const filteredOptions = useMemo(() => {
    if (!searchable || !search.trim()) {
      return normalizedOptions;
    }

    const lowerSearch = search.toLowerCase();
    return normalizedOptions.filter((option) =>
      option.label.toLowerCase().includes(lowerSearch)
    );
  }, [normalizedOptions, search, searchable]);

  return (
    <div
      className={`w-100 position-relative ${disabled ? "opacity-75" : ""} ${className}`}
      ref={containerRef}
    >
      <div
        className="form-control d-flex flex-wrap align-items-center gap-2 py-2 px-3"
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleToggle();
          }
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {selectedOptions.length === 0 ? (
          <span className="text-neutral-400">{placeholder}</span>
        ) : (
          selectedOptions.map((option) => (
            <span
              key={option.value}
              className="badge bg-primary-50 text-primary-600 d-inline-flex align-items-center gap-2 px-2 py-1"
            >
              {option.label}
              <button
                type="button"
                className="btn-close btn-close-sm p-0 m-0"
                aria-label={`Remove ${option.label}`}
                onClick={(event) => {
                  event.stopPropagation();
                  handleRemoveChip(option.value);
                }}
                disabled={disabled}
              />
            </span>
          ))
        )}
        <span className="ms-auto text-neutral-300">
          <i className={`ti ti-chevron-${open ? "up" : "down"}`} />
        </span>
      </div>

      {open && !disabled && (
        <div
          className={`shadow-sm bg-white border radius-12 p-3 mt-2 ${dropdownClassName}`}
          style={{
            position: "absolute",
            insetInlineStart: 0,
            insetBlockStart: "100%",
            zIndex: 1051,
            minWidth: "100%",
          }}
        >
          {searchable && (
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              autoFocus
            />
          )}

          <div style={{ maxHeight: maxDropdownHeight, overflowY: "auto" }}>
            {filteredOptions.length === 0 ? (
              <div className="text-neutral-400 text-sm py-2 text-center">
                {emptyMessage}
              </div>
            ) : (
              filteredOptions.map((option) => (
                <label
                  key={option.value}
                  className="d-flex align-items-center gap-2 py-1 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleOptionToggle(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))
            )}
          </div>

          <div className="d-flex justify-content-between pt-2 mt-2 border-top">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;

