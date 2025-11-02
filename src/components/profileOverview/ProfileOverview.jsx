"use client"
import React from 'react'
import { api } from "@/utils/api";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function ProfileOverview({pageId}) {
     const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Feature sections configuration
  const featureSections = [
    // CRM Section
    {
      category: "CRM Management",
      categoryIcon: "solar:users-group-rounded-bold",
      categoryColor: "primary",
      features: [
        {
          title: "Leads",
          icon: "solar:user-id-bold",
          description: "Capture, track, and convert potential customers through your entire sales pipeline. Organize leads by status, assign to team members, and never miss a follow-up opportunity.",
          benefits: ["Lead Scoring", "Pipeline Tracking", "Activity Logging", "Conversion Analytics"],
          link: "/crm/leads",
          color: "primary"
        },
        {
          title: "Customers",
          icon: "solar:user-check-rounded-bold",
          description: "Manage your complete customer database with detailed profiles, purchase history, communication logs, and relationship insights for personalized service delivery.",
          benefits: ["Customer Profiles", "Purchase History", "Communication Logs", "Lifetime Value"],
          link: "/crm/customers",
          color: "success"
        }
      ]
    },
    // Bookings Section
    {
      category: "Bookings",
      categoryIcon: "solar:calendar-mark-bold",
      categoryColor: "info",
      features: [
        {
          title: "Packages",
          icon: "solar:case-round-bold",
          description: "Manage comprehensive travel packages from creation to completion. Track bookings, manage availability, handle payments, and coordinate all package components seamlessly.",
          benefits: ["Booking Management", "Availability Control", "Payment Processing", "Component Coordination"],
          link: "/bookings/packages",
          color: "info"
        },
        {
          title: "Hotels",
          icon: "solar:home-smile-bold",
          description: "Handle hotel reservations efficiently with room management, check-in/out tracking, special requests, and seamless integration with hotel partners and suppliers.",
          benefits: ["Reservation Management", "Room Inventory", "Guest Services", "Partner Integration"],
          link: "/bookings/hotels",
          color: "warning"
        },
        {
          title: "Flights",
          icon: "solar:airplane-bold",
          description: "Manage flight bookings with seat selection, meal preferences, baggage tracking, and real-time flight status updates for a smooth travel experience.",
          benefits: ["Flight Reservations", "Seat Management", "Baggage Tracking", "Real-time Updates"],
          link: "/bookings/flights",
          color: "primary"
        },
        {
          title: "Transportations",
          icon: "solar:car-bold",
          description: "Coordinate ground transportation including airport transfers, car rentals, and local transport. Manage fleets, drivers, and routes for optimal logistics.",
          benefits: ["Fleet Management", "Route Optimization", "Driver Assignment", "Real-time Tracking"],
          link: "/bookings/transportations",
          color: "danger"
        },
        {
          title: "Visa",
          icon: "solar:document-text-bold",
          description: "Streamline visa processing with document management, status tracking, deadline reminders, and embassy coordination for efficient visa services.",
          benefits: ["Document Management", "Status Tracking", "Deadline Alerts", "Embassy Coordination"],
          link: "/bookings/visa",
          color: "success"
        },
        {
          title: "Activities",
          icon: "solar:mountain-bold",
          description: "Organize and manage tours, excursions, and activities. Handle bookings, capacity management, guide assignments, and customer preferences.",
          benefits: ["Activity Booking", "Capacity Management", "Guide Scheduling", "Customer Preferences"],
          link: "/bookings/activities",
          color: "info"
        }
      ]
    },
    // Inventory Section
    {
      category: "Inventory Management",
      categoryIcon: "solar:box-bold",
      categoryColor: "warning",
      features: [
        {
          title: "Hotels",
          icon: "solar:home-smile-bold",
          description: "Maintain comprehensive hotel inventory with room types, pricing, amenities, availability calendars, and partnership agreements all in one centralized system.",
          benefits: ["Room Inventory", "Pricing Management", "Availability Calendar", "Partner Agreements"],
          link: "/inventory/hotels",
          color: "warning"
        },
        {
          title: "Packages",
          icon: "solar:case-round-bold",
          description: "Create and manage travel package inventory with components, pricing tiers, seasonal variations, and package bundling options for flexible offerings.",
          benefits: ["Package Creation", "Component Management", "Pricing Tiers", "Seasonal Pricing"],
          link: "/inventory/packages",
          color: "info"
        },
        {
          title: "Transportations",
          icon: "solar:car-bold",
          description: "Manage transportation inventory including vehicle types, capacities, pricing structures, and availability across different routes and destinations.",
          benefits: ["Vehicle Inventory", "Route Management", "Pricing Structures", "Availability Control"],
          link: "/inventory/transportations",
          color: "danger"
        },
        {
          title: "Visa",
          icon: "solar:document-text-bold",
          description: "Track visa inventory, requirements, processing times, and embassy partnerships. Manage visa types, fees, and document requirements efficiently.",
          benefits: ["Visa Types", "Processing Times", "Embassy Partners", "Document Requirements"],
          link: "/inventory/visa",
          color: "success"
        },
        {
          title: "Activities",
          icon: "solar:mountain-bold",
          description: "Manage activity inventory with descriptions, pricing, schedules, capacity limits, and supplier relationships for diverse travel experiences.",
          benefits: ["Activity Catalog", "Schedule Management", "Capacity Planning", "Supplier Relations"],
          link: "/inventory/activities",
          color: "primary"
        }
      ]
    },
    // Resources Section
    {
      category: "Resources & Organization",
      categoryIcon: "solar:settings-bold",
      categoryColor: "success",
      features: [
        {
          title: "Users",
          icon: "solar:users-group-two-rounded-bold",
          description: "Manage your team members, their roles, permissions, and access levels. Track user activity, performance, and ensure proper security across your organization.",
          benefits: ["User Management", "Role Assignment", "Permission Control", "Activity Tracking"],
          link: "/resources/users",
          color: "primary"
        },
        {
          title: "Roles",
          icon: "solar:shield-user-bold",
          description: "Define and customize roles with specific permissions and access rights. Create role-based workflows and ensure appropriate access control throughout your system.",
          benefits: ["Role Definition", "Permission Management", "Access Control", "Workflow Creation"],
          link: "/resources/roles",
          color: "success"
        },
        {
          title: "Branches",
          icon: "solar:shop-2-bold",
          description: "Manage multiple office locations, branches, and regional operations. Track branch performance, assign resources, and coordinate multi-location activities.",
          benefits: ["Branch Management", "Location Tracking", "Performance Metrics", "Resource Allocation"],
          link: "/resources/branches",
          color: "info"
        },
        {
          title: "Suppliers",
          icon: "solar:handshake-circle-bold",
          description: "Maintain supplier relationships, contracts, performance metrics, and payment terms. Build a network of reliable partners for your travel services.",
          benefits: ["Supplier Database", "Contract Management", "Performance Tracking", "Payment Terms"],
          link: "/resources/suppliers",
          color: "warning"
        }
      ]
    },
    // Financial Section
    {
      category: "Financial Management",
      categoryIcon: "solar:wallet-money-bold",
      categoryColor: "danger",
      features: [
        {
          title: "Invoice",
          icon: "solar:bill-list-bold",
          description: "Generate, send, and track invoices seamlessly. Manage billing cycles, payment reminders, and maintain accurate financial records with automated invoice processing.",
          benefits: ["Invoice Generation", "Payment Tracking", "Automated Reminders", "Financial Reports"],
          link: "#",
          color: "primary"
        },
        {
          title: "Cost Sheet",
          icon: "solar:calculator-bold",
          description: "Create detailed cost breakdowns for packages and services. Track expenses, margins, profitability analysis, and ensure accurate pricing for your offerings.",
          benefits: ["Cost Breakdown", "Expense Tracking", "Margin Analysis", "Profitability Reports"],
          link: "#",
          color: "danger"
        }
      ]
    }
  ];

  return (
    <div className="container-fluid py-24">
      {/* Hero Section */}
      <section className="mb-48">
        <div className="text-center mb-40">
          <h1 className="text-4xl fw-bold mb-16 text-primary-600">
            Kaasana Travel CRM
          </h1>
          <p className="text-xl text-secondary-light mb-16 fw-semibold">
            Complete Travel Business Management Platform
          </p>
          <p className="text-md text-secondary mb-0 max-w-800-px mx-auto">
            Manage your entire travel business from leads to bookings, inventory to financials. Everything you need in one powerful, integrated CRM system designed for the travel industry.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-56">
          {/* Category Header */}
          <div className="d-flex align-items-center gap-3 mb-32">
            <div className={`bg-${section.categoryColor}-50 radius-12 p-16`}>
              <Icon 
                icon={section.categoryIcon} 
                className={`text-${section.categoryColor}-600 text-2xl`}
              />
            </div>
            <div>
              <h2 className="text-2xl fw-bold mb-0 text-primary-600">
                {section.category}
              </h2>
              <p className="text-sm text-secondary mb-0">
                Comprehensive tools for {section.category.toLowerCase()}
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="row gy-4">
            {section.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="col-xl-4 col-lg-6 col-md-6">
                <div className="h-100 border radius-16 overflow-hidden bg-base shadow-sm" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}>
                  {/* Card Header with Icon */}
                  <div className={`bg-${feature.color}-600 p-24 text-white`}>
                    <div className="d-flex align-items-center justify-content-between mb-16">
                      <div className={`bg-white bg-opacity-20 radius-12 p-16`}>
                        <Icon 
                          icon={feature.icon} 
                          className="text-white text-2xl"
                        />
                      </div>
                      <span className={`badge bg-white bg-opacity-20 text-white border-0`}>
                        {section.category.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-xl fw-bold mb-0 text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-24">
                    <p className="text-sm text-secondary mb-20 line-height-1-7">
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <div className="mb-24">
                      <div className="row gy-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="col-6">
                            <div className="d-flex align-items-center gap-2">
                              <Icon 
                                icon="solar:check-circle-bold" 
                                className={`text-${feature.color}-600 text-sm`}
                              />
                              <span className="text-xs text-secondary">
                                {benefit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href={feature.link}
                      className={`btn btn-${feature.color} w-100 radius-8 py-12 fw-semibold d-flex align-items-center justify-content-center gap-2`}
                    >
                      <span>Explore {feature.title}</span>
                      <Icon icon="solar:arrow-right-linear" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="mt-56 mb-48">
        <div className="text-center bg-primary-600 radius-20 p-48 text-white position-relative overflow-hidden">
          {/* Background Pattern */}
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
            <div className="position-absolute" style={{ top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            <div className="position-absolute" style={{ bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          </div>
          
          <div className="position-relative">
            <Icon 
              icon="solar:rocket-2-bold" 
              className="text-6xl mb-24"
            />
            <h2 className="text-3xl fw-bold mb-16">
              Ready to Transform Your Travel Business?
            </h2>
            <p className="text-lg mb-32 max-w-600-px mx-auto opacity-90">
              Get started with Kaasana CRM today and streamline your entire travel business operations. From leads to bookings, everything is just a click away.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
              <Link 
                href="/dashboard"
                className="btn btn-light btn-lg px-32 py-16 radius-12 fw-semibold"
              >
                Explore Dashboard
                <Icon icon="solar:arrow-right-linear" className="ms-8" />
              </Link>
              <Link 
                href="/crm/leads"
                className="btn btn-outline-light btn-lg px-32 py-16 radius-12 fw-semibold border-2"
              >
                Start with CRM
                <Icon icon="solar:users-group-rounded-bold" className="ms-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
