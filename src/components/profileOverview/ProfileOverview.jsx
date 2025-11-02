"use client"
import React from 'react'
import { api } from "@/utils/api";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function ProfileOverview({pageId}) {
     const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Feature sections configuration - ORDERED as requested with consistent primary theme
  const featureSections = [
    // 1. Profiles Section
    {
      category: "Profiles",
      categoryIcon: "solar:user-circle-bold",
      features: [
        {
          title: "User Profile",
          icon: "solar:user-bold",
          description: "Manage your personal profile information, preferences, and account settings. Update contact details, change password, and customize your dashboard experience.",
          benefits: ["Profile Management", "Settings Configuration", "Account Security", "Preferences"],
          link: "#"
        },
        {
          title: "Company Profile",
          icon: "solar:buildings-bold",
          description: "Configure your company information, branding, contact details, and organizational settings. Manage company-wide preferences and business information.",
          benefits: ["Company Details", "Branding Settings", "Contact Information", "Business Configuration"],
          link: "#"
        }
      ]
    },
    // 2. Resources & Organization
    {
      category: "Resources & Organization",
      categoryIcon: "solar:settings-bold",
      features: [
        {
          title: "Users",
          icon: "solar:users-group-two-rounded-bold",
          description: "Manage your team members, their roles, permissions, and access levels. Track user activity, performance, and ensure proper security across your organization.",
          benefits: ["User Management", "Role Assignment", "Permission Control", "Activity Tracking"],
          link: "/resources/users"
        },
        {
          title: "Roles",
          icon: "solar:shield-user-bold",
          description: "Define and customize roles with specific permissions and access rights. Create role-based workflows and ensure appropriate access control throughout your system.",
          benefits: ["Role Definition", "Permission Management", "Access Control", "Workflow Creation"],
          link: "/resources/roles"
        },
        {
          title: "Branches",
          icon: "solar:shop-2-bold",
          description: "Manage multiple office locations, branches, and regional operations. Track branch performance, assign resources, and coordinate multi-location activities.",
          benefits: ["Branch Management", "Location Tracking", "Performance Metrics", "Resource Allocation"],
          link: "/resources/branches"
        },
        {
          title: "Suppliers",
          icon: "solar:handshake-circle-bold",
          description: "Maintain supplier relationships, contracts, performance metrics, and payment terms. Build a network of reliable partners for your travel services.",
          benefits: ["Supplier Database", "Contract Management", "Performance Tracking", "Payment Terms"],
          link: "/resources/suppliers"
        }
      ]
    },
    // 3. Inventory Management
    {
      category: "Inventory Management",
      categoryIcon: "solar:box-bold",
      features: [
        {
          title: "Hotels",
          icon: "solar:home-smile-bold",
          description: "Maintain comprehensive hotel inventory with room types, pricing, amenities, availability calendars, and partnership agreements all in one centralized system.",
          benefits: ["Room Inventory", "Pricing Management", "Availability Calendar", "Partner Agreements"],
          link: "/inventory/hotels"
        },
        {
          title: "Packages",
          icon: "solar:case-round-bold",
          description: "Create and manage travel package inventory with components, pricing tiers, seasonal variations, and package bundling options for flexible offerings.",
          benefits: ["Package Creation", "Component Management", "Pricing Tiers", "Seasonal Pricing"],
          link: "/inventory/packages"
        },
        {
          title: "Transportations",
          icon: "solar:car-bold",
          description: "Manage transportation inventory including vehicle types, capacities, pricing structures, and availability across different routes and destinations.",
          benefits: ["Vehicle Inventory", "Route Management", "Pricing Structures", "Availability Control"],
          link: "/inventory/transportations"
        },
        {
          title: "Visa",
          icon: "solar:document-text-bold",
          description: "Track visa inventory, requirements, processing times, and embassy partnerships. Manage visa types, fees, and document requirements efficiently.",
          benefits: ["Visa Types", "Processing Times", "Embassy Partners", "Document Requirements"],
          link: "/inventory/visa"
        },
        {
          title: "Activities",
          icon: "solar:mountain-bold",
          description: "Manage activity inventory with descriptions, pricing, schedules, capacity limits, and supplier relationships for diverse travel experiences.",
          benefits: ["Activity Catalog", "Schedule Management", "Capacity Planning", "Supplier Relations"],
          link: "/inventory/activities"
        }
      ]
    },
    // 4. CRM Management
    {
      category: "CRM Management",
      categoryIcon: "solar:users-group-rounded-bold",
      features: [
        {
          title: "Leads",
          icon: "solar:user-id-bold",
          description: "Capture, track, and convert potential customers through your entire sales pipeline. Organize leads by status, assign to team members, and never miss a follow-up opportunity.",
          benefits: ["Lead Scoring", "Pipeline Tracking", "Activity Logging", "Conversion Analytics"],
          link: "/crm/leads"
        },
        {
          title: "Customers",
          icon: "solar:user-check-rounded-bold",
          description: "Manage your complete customer database with detailed profiles, purchase history, communication logs, and relationship insights for personalized service delivery.",
          benefits: ["Customer Profiles", "Purchase History", "Communication Logs", "Lifetime Value"],
          link: "/crm/customers"
        }
      ]
    },
    // 5. Financial Management
    {
      category: "Financial Management",
      categoryIcon: "solar:wallet-money-bold",
      features: [
        {
          title: "Invoice",
          icon: "solar:bill-list-bold",
          description: "Generate, send, and track invoices seamlessly. Manage billing cycles, payment reminders, and maintain accurate financial records with automated invoice processing.",
          benefits: ["Invoice Generation", "Payment Tracking", "Automated Reminders", "Financial Reports"],
          link: "#"
        },
        {
          title: "Quotes",
          icon: "solar:document-medicine-bold",
          description: "Create and manage professional quotes and proposals for your travel packages and services. Track quote status, conversions, and follow-ups to close more deals.",
          benefits: ["Quote Creation", "Status Tracking", "Conversion Analytics", "Follow-up Management"],
          link: "#"
        },
        {
          title: "Cost Sheet",
          icon: "solar:calculator-bold",
          description: "Create detailed cost breakdowns for packages and services. Track expenses, margins, profitability analysis, and ensure accurate pricing for your offerings.",
          benefits: ["Cost Breakdown", "Expense Tracking", "Margin Analysis", "Profitability Reports"],
          link: "#"
        }
      ]
    },
    // 6. Bookings
    {
      category: "Bookings",
      categoryIcon: "solar:calendar-mark-bold",
      features: [
        {
          title: "Packages",
          icon: "solar:case-round-bold",
          description: "Manage comprehensive travel packages from creation to completion. Track bookings, manage availability, handle payments, and coordinate all package components seamlessly.",
          benefits: ["Booking Management", "Availability Control", "Payment Processing", "Component Coordination"],
          link: "/bookings/packages"
        },
        {
          title: "Hotels",
          icon: "solar:home-smile-bold",
          description: "Handle hotel reservations efficiently with room management, check-in/out tracking, special requests, and seamless integration with hotel partners and suppliers.",
          benefits: ["Reservation Management", "Room Inventory", "Guest Services", "Partner Integration"],
          link: "/bookings/hotels"
        },
        {
          title: "Flights",
          icon: "solar:airplane-bold",
          description: "Manage flight bookings with seat selection, meal preferences, baggage tracking, and real-time flight status updates for a smooth travel experience.",
          benefits: ["Flight Reservations", "Seat Management", "Baggage Tracking", "Real-time Updates"],
          link: "/bookings/flights"
        },
        {
          title: "Transportations",
          icon: "solar:car-bold",
          description: "Coordinate ground transportation including airport transfers, car rentals, and local transport. Manage fleets, drivers, and routes for optimal logistics.",
          benefits: ["Fleet Management", "Route Optimization", "Driver Assignment", "Real-time Tracking"],
          link: "/bookings/transportations"
        },
        {
          title: "Visa",
          icon: "solar:document-text-bold",
          description: "Streamline visa processing with document management, status tracking, deadline reminders, and embassy coordination for efficient visa services.",
          benefits: ["Document Management", "Status Tracking", "Deadline Alerts", "Embassy Coordination"],
          link: "/bookings/visa"
        },
        {
          title: "Activities",
          icon: "solar:mountain-bold",
          description: "Organize and manage tours, excursions, and activities. Handle bookings, capacity management, guide assignments, and customer preferences.",
          benefits: ["Activity Booking", "Capacity Management", "Guide Scheduling", "Customer Preferences"],
          link: "/bookings/activities"
        }
      ]
    }
  ];

  // Explore More Section - Remaining menu items
  const exploreMoreItems = [
    { title: "Reports", icon: "solar:chart-2-bold", link: "#" },
    { title: "Analytics", icon: "solar:graph-up-bold", link: "#" },
    { title: "Notifications", icon: "solar:bell-bold", link: "#" },
    { title: "Messages", icon: "solar:chat-round-bold", link: "#" },
    { title: "Calendar", icon: "solar:calendar-bold", link: "#" },
    { title: "Tasks", icon: "solar:checklist-bold", link: "#" },
    { title: "Settings", icon: "solar:settings-bold", link: "#" },
    { title: "Help & Support", icon: "solar:question-circle-bold", link: "#" }
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
            <div className="bg-primary-100 radius-12 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
              <Icon 
                icon={section.categoryIcon} 
                className="text-primary-600"
                width="28"
                height="28"
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
                <div className="h-100 border radius-16 overflow-hidden bg-base shadow-sm d-flex flex-column feature-card" 
                     onMouseEnter={(e) => { 
                       e.currentTarget.classList.add('shadow-lg'); 
                       e.currentTarget.style.transform = 'translateY(-4px)';
                     }} 
                     onMouseLeave={(e) => { 
                       e.currentTarget.classList.remove('shadow-lg'); 
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                  {/* Card Header with Icon */}
                  <div className="bg-primary-600 p-24 text-white position-relative">
                    <div className="d-flex align-items-center justify-content-between mb-16">
                      <div className="radius-12 d-flex align-items-center justify-content-center bg-primary-700" style={{ width: '56px', height: '56px' }}>
                        <Icon 
                          icon={feature.icon} 
                          className="text-white"
                          width="28"
                          height="28"
                        />
                      </div>
                      <span className="badge bg-primary-700 text-white border-0 radius-8 px-12 py-4 fw-medium">
                        {section.category.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-xl fw-bold mb-0 text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-24 d-flex flex-column flex-grow-1">
                    <p className="text-sm text-secondary mb-20 line-height-1-7">
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <div className="mb-24 flex-grow-1">
                      <div className="row gy-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="col-6">
                            <div className="d-flex align-items-center gap-2">
                              <Icon 
                                icon="solar:check-circle-bold" 
                                className="text-primary-600"
                                width="16"
                                height="16"
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
                      className="btn btn-primary w-100 radius-8 py-12 px-16 fw-semibold d-flex align-items-center justify-content-center gap-2 text-white text-decoration-none border-0 mt-auto"
                    >
                      <span>Explore {feature.title}</span>
                      <Icon 
                        icon="solar:arrow-right-linear" 
                        width="18"
                        height="18"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Explore More Section */}
      <section className="mb-56">
        <div className="d-flex align-items-center gap-3 mb-32">
          <div className="bg-primary-100 radius-12 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
            <Icon 
              icon="solar:widget-5-bold" 
              className="text-primary-600"
              width="28"
              height="28"
            />
          </div>
          <div>
            <h2 className="text-2xl fw-bold mb-0 text-primary-600">
              Explore More
            </h2>
            <p className="text-sm text-secondary mb-0">
              Additional features and tools for your travel business
            </p>
          </div>
        </div>

        <div className="row gy-3">
          {exploreMoreItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <Link 
                href={item.link}
                className="d-flex align-items-center gap-3 p-20 border radius-12 bg-base hover-bg-neutral-50 transition-all text-decoration-none explore-item"
              >
                <div className="bg-primary-100 radius-8 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <Icon 
                    icon={item.icon} 
                    className="text-primary-600"
                    width="20"
                    height="20"
                  />
                </div>
                <span className="text-md fw-medium text-primary-600 flex-grow-1">
                  {item.title}
                </span>
                <Icon 
                  icon="solar:arrow-right-linear" 
                  className="text-secondary"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

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
              width="64"
              height="64"
            />
            <h2 className="text-3xl fw-bold mb-16 text-white">
              Ready to Transform Your Travel Business?
            </h2>
            <p className="text-lg mb-32 max-w-600-px mx-auto opacity-90 text-white">
              Get started with Kaasana CRM today and streamline your entire travel business operations. From leads to bookings, everything is just a click away.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
              <Link 
                href="/dashboard"
                className="btn btn-light btn-lg px-32 py-16 radius-12 fw-semibold text-primary-600"
              >
                Explore Dashboard
                <Icon icon="solar:arrow-right-linear" className="ms-8" width="18" height="18" />
              </Link>
              <Link 
                href="/crm/leads"
                className="btn btn-outline-light btn-lg px-32 py-16 radius-12 fw-semibold border-2"
              >
                Start with CRM
                <Icon icon="solar:users-group-rounded-bold" className="ms-8" width="18" height="18" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
