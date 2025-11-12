"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Breadcrumb({
  title = "Dashboard",
  breadcrumbs = [],
}) {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
      <h6 className="fw-semibold mb-0">{title}</h6>

      <ul className="d-flex align-items-center gap-2">
        <li className="fw-medium">
          <Link
            href="/dashboard"
            className="d-flex align-items-center gap-1 hover-text-primary"
          >
            <Icon
              icon="solar:home-smile-angle-outline"
              className="icon text-lg"
            />
            Dashboard
          </Link>
        </li>

        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            <li aria-hidden="true"> - </li>
            <li className="fw-medium">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover-text-primary text-secondary-light fw-medium"
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
