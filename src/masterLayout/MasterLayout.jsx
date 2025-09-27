"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../helper/ThemeToggleButton";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const MasterLayout = ({ children }) => {
   const dispatch = useDispatch();
  let pathname = usePathname();
  let [sidebarActive, seSidebarActive] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const location = usePathname(); // Hook to get the current route

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleDropdownClick = (event) => {
      event.preventDefault();
      const clickedLink = event.currentTarget;
      const clickedDropdown = clickedLink.closest(".dropdown");

      if (!clickedDropdown) return;

      const isActive = clickedDropdown.classList.contains("open");

      // Close all dropdowns
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        const submenu = dropdown.querySelector(".sidebar-submenu");
        if (submenu) {
          submenu.style.maxHeight = "0px"; // Collapse submenu
        }
      });

      // Toggle the clicked dropdown
      if (!isActive) {
        clickedDropdown.classList.add("open");
        const submenu = clickedDropdown.querySelector(".sidebar-submenu");
        if (submenu) {
          submenu.style.maxHeight = `${submenu.scrollHeight}px`; // Expand submenu
        }
      }
    };

    // Attach click event listeners to all dropdown triggers
    const dropdownTriggers = document.querySelectorAll(
      ".sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link"
    );

    dropdownTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handleDropdownClick);
    });

    const openActiveDropdown = () => {
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        const submenuLinks = dropdown.querySelectorAll(".sidebar-submenu li a");
        submenuLinks.forEach((link) => {
          if (
            link.getAttribute("href") === location ||
            link.getAttribute("to") === location
          ) {
            dropdown.classList.add("open");
            const submenu = dropdown.querySelector(".sidebar-submenu");
            if (submenu) {
              submenu.style.maxHeight = `${submenu.scrollHeight}px`; // Expand submenu
            }
          }
        });
      });
    };

    // Open the submenu that contains the active route
    openActiveDropdown();

    // Cleanup event listeners on unmount
    return () => {
      dropdownTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleDropdownClick);
      });
    };
  }, [location.pathname]);

  let sidebarControl = () => {
    seSidebarActive(!sidebarActive);
  };

  let mobileMenuControl = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <section className={mobileMenu ? "overlay active" : "overlay "}>
      {/* sidebar */}
      <aside
        className={
          sidebarActive
            ? "sidebar active "
            : mobileMenu
            ? "sidebar sidebar-open"
            : "sidebar"
        }
      >
        <button
          onClick={mobileMenuControl}
          type='button'
          className='sidebar-close-btn'
        >
          <Icon icon='radix-icons:cross-2' />
        </button>
        <div>
          <Link href='/' className='sidebar-logo'>
            <img
              src='/assets/images/logo.png'
              alt='site logo'
              className='light-logo'
            />
            <img
              src='/assets/images/logo-light.png'
              alt='site logo'
              className='dark-logo'
            />
            <img
              src='/assets/images/logo-icon.png'
              alt='site logo'
              className='logo-icon'
            />
          </Link>
        </div>
        <div className='sidebar-menu-area'>
          <ul className='sidebar-menu' id='sidebar-menu'>
             <li className='dropdown'>
              <Link href='/'>
                <Icon
                  icon='solar:home-smile-angle-outline'
                  className='menu-icon'
                />
                <span>Dashboard</span>
              </Link>
             
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/'
                    className={pathname === "/" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />
                    AI
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-2'
                    className={pathname === "/index-2" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    CRM
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-3'
                    className={pathname === "/index-3" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-4'
                    className={pathname === "/index-4" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />
                    Cryptocurrency
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-5'
                    className={pathname === "/index-5" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Investment
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-6'
                    className={pathname === "/index-6" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-purple w-auto' />{" "}
                    LMS
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-7'
                    className={pathname === "/index-7" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    NFT &amp; Gaming
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-8'
                    className={pathname === "/index-8" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Medical
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-9'
                    className={pathname === "/index-9" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-10'
                    className={pathname === "/index-10" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    POS & Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    href='/index-11'
                    className={pathname === "/index-11" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Finance & Banking
                  </Link>
                </li>
              </ul>
            </li> 


           <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>CRM</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/crm/leads'
                    className={pathname === "/crm/leads" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Leads
                  </Link>
                </li>
                <li>
                  <Link
                    href="/crm/open-leads"
                    className={
                      pathname === "/crm/open-leads" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                  Open Leads
                  </Link>
                </li>
                <li>
                  <Link
                    href='/crm/confirmed-lead'
                    className={pathname === "/crm/confirmed-lead" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Confirm Leads
                  </Link>
                </li>
                <li>
                  <Link
                    href='/crm/archive-leads'
                    className={pathname === "/crm/archive-leads" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Archive Leads
                  </Link>
                </li>
                 <li>
                  <Link
                    href='/crm/customers'
                    className={pathname === '/crm/customers' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                   Customers
                  </Link>
                </li>
              </ul>
            </li>
             {/* Bookings */}
            <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>Bookings</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/bookings/packages'
                    className={pathname === '/bookings/packages' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bookings/hotels"
                    className={
                      pathname === "/bookings/hotels" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                 Hotels
                  </Link>
                </li>
                <li>
                  <Link
                    href='/bookings/flights'
                    className={pathname === "/bookings/flights" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Flights
                  </Link>
                </li>
                <li>
                  <Link
                    href='/bookings/activities'
                    className={pathname === '/bookings/activities' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                   Activities
                  </Link>
                </li>
                 <li>
                  <Link
                    href='/bookings/transportations'
                    className={pathname === '/bookings/transportations' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                   Transportations
                  </Link>
                </li>
                <li>
                  <Link
                    href='/bookings/visa'
                    className={pathname === '/bookings/visa' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-main w-auto' />{" "}
                   Visa
                  </Link>
                </li>
              </ul>
            </li>

            {/* Inventory */}
            <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>Inventory</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/inventory/hotels'
                    className={pathname === '/inventory/hotels' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inventory/packages"
                    className={
                      pathname === "/inventory/packages" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                 Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href='/inventory/transportations'
                    className={pathname === "/inventory/transportations" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Transportations
                  </Link>
                </li>
                <li>
                  <Link
                    href='/inventory/visa'
                    className={pathname === '/inventory/visa' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                   Visa
                  </Link>
                </li>
                 <li>
                  <Link
                    href='/inventory/activities'
                    className={pathname === '/inventory/activities' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                   Activities
                  </Link>
                </li>
                
              </ul>
            </li>

                {/* Resources */}
            <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>Resources</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/resources/roles'
                    className={pathname === '/resources/roles' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Roles / Permissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/users"
                    className={
                      pathname === "/resources/users" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                 Users
                  </Link>
                </li>
                <li>
                  <Link
                    href='/resources/branches'
                    className={pathname === "/resources/branches" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Branches
                  </Link>
                </li>
                <li>
                  <Link
                    href='/resources/suppliers'
                    className={pathname === '/resources/suppliers' ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                   Suppliers / Partners
                  </Link>
                </li>
                 
                
              </ul>
            </li>


            








            <li className='sidebar-menu-group-title'>Application</li>
            {/* <li>
              <Link
                href='/email'
                className={pathname === "/email" ? "active-page" : ""}
              >
                <Icon icon='mage:email' className='menu-icon' />
                <span>Email</span>
              </Link>
            </li>
            <li>
              <Link
                href='/chat-message'
                className={pathname === "/chat-message" ? "active-page" : ""}
              >
                <Icon icon='bi:chat-dots' className='menu-icon' />
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link
                href='/calendar-main'
                className={pathname === "/calendar-main" ? "active-page" : ""}
              >
                <Icon icon='solar:calendar-outline' className='menu-icon' />
                <span>Calendar</span>
              </Link>
            </li>
            <li>
              <Link
                href='/kanban'
                className={pathname === "/kanban" ? "active-page" : ""}
              >
                <Icon
                  icon='material-symbols:map-outline'
                  className='menu-icon'
                />
                <span>Kanban</span>
              </Link>
            </li> */}

            {/* Invoice Dropdown */}
            <li className='dropdown'>
              <Link href='#'>
                <Icon icon='hugeicons:invoice-03' className='menu-icon' />
                <span>Invoice</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/invoice-list'
                    className={
                      pathname === "/invoice-list" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    href='/invoice-preview'
                    className={
                      pathname === "/invoice-preview" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />
                    Preview
                  </Link>
                </li>
                <li>
                  <Link
                    href='/invoice-add'
                    className={pathname === "/invoice-add" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Add new
                  </Link>
                </li>
                <li>
                  <Link
                    href='/invoice-edit'
                    className={
                      pathname === "/invoice-edit" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Edit
                  </Link>
                </li>
              </ul>
            </li>




















            

            {/* Ai Application Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <i className='ri-robot-2-line mr-10' />

                <span>Ai Application</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/text-generator'
                    className={
                      pathname === "/text-generator" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Text Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href='/code-generator'
                    className={
                      pathname === "/code-generator" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Code Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href='/image-generator'
                    className={
                      pathname === "/image-generator" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Image Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href='/voice-generator'
                    className={
                      pathname === "/voice-generator" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Voice Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href='/video-generator'
                    className={
                      pathname === "/video-generator" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Video Generator
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Crypto Currency Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <i className='ri-robot-2-line mr-10' />
                <span>Crypto Currency</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/wallet'
                    className={pathname === "/wallet" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link
                    href='/marketplace'
                    className={pathname === "/marketplace" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href='/marketplace-details'
                    className={
                      pathname === "/marketplace-details" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />
                    Marketplace Details
                  </Link>
                </li>
                <li>
                  <Link
                    href='/portfolio'
                    className={pathname === "/portfolio" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />
                    Portfolios
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* <li className='sidebar-menu-group-title'>UI Elements</li> */}

            {/* Components Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='solar:document-text-outline'
                  className='menu-icon'
                />
                <span>Components</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/typography'
                    className={pathname === "/typography" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />
                    Typography
                  </Link>
                </li>
                <li>
                  <Link
                    href='/colors'
                    className={pathname === "/colors" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Colors
                  </Link>
                </li>
                <li>
                  <Link
                    href='/button'
                    className={pathname === "/button" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    href='/dropdown'
                    className={pathname === "/dropdown" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-lilac-600 w-auto' />{" "}
                    Dropdown
                  </Link>
                </li>
                <li>
                  <Link
                    href='/alert'
                    className={pathname === "/alert" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Alerts
                  </Link>
                </li>
                <li>
                  <Link
                    href='/card'
                    className={pathname === "/card" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Card
                  </Link>
                </li>
                <li>
                  <Link
                    href='/carousel'
                    className={pathname === "/carousel" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Carousel
                  </Link>
                </li>
                <li>
                  <Link
                    href='/avatar'
                    className={pathname === "/avatar" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Avatars
                  </Link>
                </li>
                <li>
                  <Link
                    href='/progress'
                    className={pathname === "/progress" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Progress bar
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tabs'
                    className={pathname === "/tabs" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Tab &amp; Accordion
                  </Link>
                </li>
                <li>
                  <Link
                    href='/pagination'
                    className={pathname === "/pagination" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link
                    href='/badges'
                    className={pathname === "/badges" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Badges
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tooltip'
                    className={pathname === "/tooltip" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-lilac-600 w-auto' />{" "}
                    Tooltip &amp; Popover
                  </Link>
                </li>
                <li>
                  <Link
                    href='/videos'
                    className={pathname === "/videos" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-cyan w-auto' />{" "}
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href='/star-rating'
                    className={pathname === "/star-rating" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-indigo w-auto' />{" "}
                    Star Ratings
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tags'
                    className={pathname === "/tags" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-purple w-auto' />{" "}
                    Tags
                  </Link>
                </li>
                <li>
                  <Link
                    href='/list'
                    className={pathname === "/list" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-red w-auto' />{" "}
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    href='/calendar'
                    className={pathname === "/calendar" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-yellow w-auto' />{" "}
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    href='/radio'
                    className={pathname === "/radio" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-orange w-auto' />{" "}
                    Radio
                  </Link>
                </li>
                <li>
                  <Link
                    href='/switch'
                    className={pathname === "/switch" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-pink w-auto' />{" "}
                    Switch
                  </Link>
                </li>
                <li>
                  <Link
                    href='/image-upload'
                    className={
                      pathname === "/image-upload" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Upload
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Forms Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon icon='heroicons:document' className='menu-icon' />
                <span>Forms</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/form'
                    className={pathname === "/form" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Input Forms
                  </Link>
                </li>
                <li>
                  <Link
                    href='/form-layout'
                    className={pathname === "/form-layout" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Input Layout
                  </Link>
                </li>
                <li>
                  <Link
                    href='/form-validation'
                    className={
                      pathname === "/form-validation" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Form Validation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/wizard'
                    className={pathname === "/wizard" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Form Wizard
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Table Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon icon='mingcute:storage-line' className='menu-icon' />
                <span>Table</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/table-basic'
                    className={pathname === "/table-basic" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Basic Table
                  </Link>
                </li>
                <li>
                  <Link
                    href='/table-data'
                    className={pathname === "/table-data" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Data Table
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Chart Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon icon='solar:pie-chart-outline' className='menu-icon' />
                <span>Chart</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/line-chart'
                    className={pathname === "/line-chart" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Line Chart
                  </Link>
                </li>
                <li>
                  <Link
                    href='/column-chart'
                    className={
                      pathname === "/column-chart" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Column Chart
                  </Link>
                </li>
                <li>
                  <Link
                    href='/pie-chart'
                    className={pathname === "/pie-chart" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-success-main w-auto' />{" "}
                    Pie Chart
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link
                href='/widgets'
                className={pathname === "/widgets" ? "active-page" : ""}
              >
                <Icon icon='fe:vector' className='menu-icon' />
                <span>Widgets</span>
              </Link>
            </li> */}

            {/* Users Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>Users</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/users-list'
                    className={pathname === "/users-list" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Users List
                  </Link>
                </li>
                <li>
                  <Link
                    href='/users-grid'
                    className={pathname === "/users-grid" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Users Grid
                  </Link>
                </li>
                <li>
                  <Link
                    href='/add-user'
                    className={pathname === "/add-user" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Add User
                  </Link>
                </li>
                <li>
                  <Link
                    href='/view-profile'
                    className={
                      pathname === "/view-profile" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    View Profile
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Role & Access Dropdown */}
            <li className='dropdown'>
              <Link href='#'>
                <i className='ri-user-settings-line' />
                <span>Role &amp; Access</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/role-access'
                    className={pathname === "/role-access" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Role &amp; Access
                  </Link>
                </li>
                <li>
                  <Link
                    href='/assign-role'
                    className={pathname === "/assign-role" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Assign Role
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li className='sidebar-menu-group-title'>Application</li> */}

            {/* Authentication Dropdown */}
            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon icon='simple-line-icons:vector' className='menu-icon' />
                <span>Authentication</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/sign-in'
                    className={pathname === "/sign-in" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sign-up'
                    className={pathname === "/sign-up" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href='/forgot-password'
                    className={
                      pathname === "/forgot-password" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Forgot Password
                  </Link>
                </li>
              </ul>
            </li>

            <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>Gallery</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/gallery-grid'
                    className={
                      pathname === "/gallery-grid" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Gallery Grid
                  </Link>
                </li>
                <li>
                  <Link
                    href='/gallery'
                    className={pathname === "/gallery" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Gallery Grid Desc
                  </Link>
                </li>
                <li>
                  <Link
                    href='/gallery-masonry'
                    className={
                      pathname === "/gallery-masonry" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Gallery Grid
                  </Link>
                </li>
                <li>
                  <Link
                    href='/gallery-hover'
                    className={
                      pathname === "/gallery-hover" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Gallery Hover Effect
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href='/pricing'
                className={pathname === "/pricing" ? "active-page" : ""}
              >
                <Icon
                  icon='hugeicons:money-send-square'
                  className='menu-icon'
                />
                <span>Pricing</span>
              </Link>
            </li> */}

            {/* Blog */}

            {/* <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='flowbite:users-group-outline'
                  className='menu-icon'
                />
                <span>Blog</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/blog'
                    className={pathname === "/blog" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/blog-details'
                    className={
                      pathname === "/blog-details" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Blog Details
                  </Link>
                </li>
                <li>
                  <Link
                    href='/add-blog'
                    className={pathname === "/add-blog" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Add Blog
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href='/testimonials'
                className={pathname === "/testimonials" ? "active-page" : ""}
              >
                <Icon icon='ri-star-line' className='menu-icon' />
                <span>Testimonials</span>
              </Link>
            </li>
            <li>
              <Link
                href='/faq'
                className={pathname === "/faq" ? "active-page" : ""}
              >
                <Icon
                  icon='mage:message-question-mark-round'
                  className='menu-icon'
                />
                <span>FAQs.</span>
              </Link>
            </li>
            <li>
              <Link
                href='/error'
                className={pathname === "/error" ? "active-page" : ""}
              >
                <Icon icon='streamline:straight-face' className='menu-icon' />
                <span>404</span>
              </Link>
            </li>
            <li>
              <Link
                href='/terms-condition'
                className={pathname === "/terms-condition" ? "active-page" : ""}
              >
                <Icon icon='octicon:info-24' className='menu-icon' />
                <span>Terms &amp; Conditions</span>
              </Link>
            </li>
            <li>
              <Link
                href='/coming-soon'
                className={pathname === "/coming-soon" ? "active-page" : ""}
              >
                <i className='ri-rocket-line menu-icon'></i>
                <span>Coming Soon</span>
              </Link>
            </li>
            <li>
              <Link
                href='/access-denied'
                className={pathname === "/access-denied" ? "active-page" : ""}
              >
                <i className='ri-folder-lock-line menu-icon'></i>
                <span>Access Denied</span>
              </Link>
            </li>
            <li>
              <Link
                href='/maintenance'
                className={pathname === "/maintenance" ? "active-page" : ""}
              >
                <i className='ri-hammer-line menu-icon'></i>
                <span>Maintenance</span>
              </Link>
            </li>
            <li>
              <Link
                href='/blank-page'
                className={pathname === "/blank-page" ? "active-page" : ""}
              >
                <i className='ri-checkbox-multiple-blank-line menu-icon'></i>
                <span>Blank Page</span>
              </Link>
            </li> */}

            {/* Settings Dropdown */}
            <li className='dropdown'>
              <Link href='#'>
                <Icon
                  icon='icon-park-outline:setting-two'
                  className='menu-icon'
                />
                <span>Settings</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <Link
                    href='/company'
                    className={pathname === "/company" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-primary-600 w-auto' />{" "}
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href='/notification'
                    className={
                      pathname === "/notification" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-warning-main w-auto' />{" "}
                    Notification
                  </Link>
                </li>
                <li>
                  <Link
                    href='/notification-alert'
                    className={
                      pathname === "/notification-alert" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-info-main w-auto' />{" "}
                    Notification Alert
                  </Link>
                </li>
                <li>
                  <Link
                    href='/theme'
                    className={pathname === "/theme" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Theme
                  </Link>
                </li>
                <li>
                  <Link
                    href='/currencies'
                    className={pathname === "/currencies" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Currencies
                  </Link>
                </li>
                <li>
                  <Link
                    href='/language'
                    className={pathname === "/language" ? "active-page" : ""}
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Languages
                  </Link>
                </li>
                <li>
                  <Link
                    href='/payment-gateway'
                    className={
                      pathname === "/payment-gateway" ? "active-page" : ""
                    }
                  >
                    <i className='ri-circle-fill circle-icon text-danger-main w-auto' />{" "}
                    Payment Gateway
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>

      <main
        className={sidebarActive ? "dashboard-main active" : "dashboard-main"}
      >
        <div className='navbar-header'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-auto'>
              <div className='d-flex flex-wrap align-items-center gap-4'>
                <button
                  type='button'
                  className='sidebar-toggle'
                  onClick={sidebarControl}
                >
                  {sidebarActive ? (
                    <Icon
                      icon='iconoir:arrow-right'
                      className='icon text-2xl non-active'
                    />
                  ) : (
                    <Icon
                      icon='heroicons:bars-3-solid'
                      className='icon text-2xl non-active '
                    />
                  )}
                </button>
                <button
                  onClick={mobileMenuControl}
                  type='button'
                  className='sidebar-mobile-toggle'
                >
                  <Icon icon='heroicons:bars-3-solid' className='icon' />
                </button>
                <form className='navbar-search'>
                  <input type='text' name='search' placeholder='Search' />
                  <Icon icon='ion:search-outline' className='icon' />
                </form>
              </div>
            </div>
            <div className='col-auto'>
              <div className='d-flex flex-wrap align-items-center gap-3'>
                {/* ThemeToggleButton */}
                <ThemeToggleButton />
                <div className='dropdown d-none d-sm-inline-block'>
                  <button
                    className='has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center'
                    type='button'
                    data-bs-toggle='dropdown'
                  >
                    <img
                      src='/assets/images/lang-flag.png'
                      alt='Wowdash'
                      className='w-24 h-24 object-fit-cover rounded-circle'
                    />
                  </button>
                  <div className='dropdown-menu to-top dropdown-menu-sm'>
                    <div className='py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                      <div>
                        <h6 className='text-lg text-primary-light fw-semibold mb-0'>
                          Choose Your Language
                        </h6>
                      </div>
                    </div>
                    <div className='max-h-400-px overflow-y-auto scroll-sm pe-8'>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='english'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag1.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              English
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='english'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='japan'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag2.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              Japan
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='japan'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='france'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag3.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              France
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='france'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='germany'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag4.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              Germany
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='germany'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='korea'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag5.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              South Korea
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='korea'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='bangladesh'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag6.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              Bangladesh
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='bangladesh'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between mb-16'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='india'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag7.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              India
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='india'
                        />
                      </div>
                      <div className='form-check style-check d-flex align-items-center justify-content-between'>
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light'
                          htmlFor='canada'
                        >
                          <span className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                            <img
                              src='/assets/images/flags/flag8.png'
                              alt=''
                              className='w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0'
                            />
                            <span className='text-md fw-semibold mb-0'>
                              Canada
                            </span>
                          </span>
                        </label>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='crypto'
                          id='canada'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Language dropdown end */}
                <div className='dropdown'>
                  <button
                    className='has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center'
                    type='button'
                    data-bs-toggle='dropdown'
                  >
                    <Icon
                      icon='mage:email'
                      className='text-primary-light text-xl'
                    />
                  </button>
                  <div className='dropdown-menu to-top dropdown-menu-lg p-0'>
                    <div className='m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                      <div>
                        <h6 className='text-lg text-primary-light fw-semibold mb-0'>
                          Message
                        </h6>
                      </div>
                      <span className='text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center'>
                        05
                      </span>
                    </div>
                    <div className='max-h-400-px overflow-y-auto scroll-sm pe-4'>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-40-px h-40-px rounded-circle flex-shrink-0 position-relative'>
                            <img
                              src='/assets/images/notification/profile-3.png'
                              alt=''
                            />
                            <span className='w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0' />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Kathryn Murphy
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-100-px'>
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                          <span className='text-sm text-secondary-light flex-shrink-0'>
                            12:30 PM
                          </span>
                          <span className='mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle'>
                            8
                          </span>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-40-px h-40-px rounded-circle flex-shrink-0 position-relative'>
                            <img
                              src='/assets/images/notification/profile-4.png'
                              alt=''
                            />
                            <span className='w-8-px h-8-px  bg-neutral-300 rounded-circle position-absolute end-0 bottom-0' />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Kathryn Murphy
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-100-px'>
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                          <span className='text-sm text-secondary-light flex-shrink-0'>
                            12:30 PM
                          </span>
                          <span className='mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle'>
                            2
                          </span>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-40-px h-40-px rounded-circle flex-shrink-0 position-relative'>
                            <img
                              src='/assets/images/notification/profile-5.png'
                              alt=''
                            />
                            <span className='w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0' />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Kathryn Murphy
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-100-px'>
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                          <span className='text-sm text-secondary-light flex-shrink-0'>
                            12:30 PM
                          </span>
                          <span className='mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle'>
                            0
                          </span>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-40-px h-40-px rounded-circle flex-shrink-0 position-relative'>
                            <img
                              src='/assets/images/notification/profile-6.png'
                              alt=''
                            />
                            <span className='w-8-px h-8-px bg-neutral-300 rounded-circle position-absolute end-0 bottom-0' />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Kathryn Murphy
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-100-px'>
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                          <span className='text-sm text-secondary-light flex-shrink-0'>
                            12:30 PM
                          </span>
                          <span className='mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle'>
                            0
                          </span>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-40-px h-40-px rounded-circle flex-shrink-0 position-relative'>
                            <img
                              src='/assets/images/notification/profile-7.png'
                              alt=''
                            />
                            <span className='w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0' />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Kathryn Murphy
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-100-px'>
                              hey! there i’m...
                            </p>
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                          <span className='text-sm text-secondary-light flex-shrink-0'>
                            12:30 PM
                          </span>
                          <span className='mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle'>
                            8
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className='text-center py-12 px-16'>
                      <Link
                        href='#'
                        className='text-primary-600 fw-semibold text-md'
                      >
                        See All Message
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Message dropdown end */}
                <div className='dropdown'>
                  <button
                    className='has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center'
                    type='button'
                    data-bs-toggle='dropdown'
                  >
                    <Icon
                      icon='iconoir:bell'
                      className='text-primary-light text-xl'
                    />
                  </button>
                  <div className='dropdown-menu to-top dropdown-menu-lg p-0'>
                    <div className='m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                      <div>
                        <h6 className='text-lg text-primary-light fw-semibold mb-0'>
                          Notifications
                        </h6>
                      </div>
                      <span className='text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center'>
                        05
                      </span>
                    </div>
                    <div className='max-h-400-px overflow-y-auto scroll-sm pe-4'>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            <Icon
                              icon='bitcoin-icons:verify-outline'
                              className='icon text-xxl'
                            />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Congratulations
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Your profile has been Verified. Your profile has
                              been Verified
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            <img
                              src='/assets/images/notification/profile-1.png'
                              alt=''
                            />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Ronald Richards
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              You can stitch between artboards
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            AM
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Arlene McCoy
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            <img
                              src='/assets/images/notification/profile-2.png'
                              alt=''
                            />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Annette Black
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        href='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            DR
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Darlene Robertson
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to prototyping
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                    </div>
                    <div className='text-center py-12 px-16'>
                      <Link
                        href='#'
                        className='text-primary-600 fw-semibold text-md'
                      >
                        See All Notification
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Notification dropdown end */}
                <div className='dropdown'>
                  <button
                    className='d-flex justify-content-center align-items-center rounded-circle'
                    type='button'
                    data-bs-toggle='dropdown'
                  >
                    <img
                      src='/assets/images/user.png'
                      alt='image_user'
                      className='w-40-px h-40-px object-fit-cover rounded-circle'
                    />
                  </button>
                  <div className='dropdown-menu to-top dropdown-menu-sm'>
                    <div className='py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                      <div>
                        <h6 className='text-lg text-primary-light fw-semibold mb-2'>
                          Shaidul Islam
                        </h6>
                        <span className='text-secondary-light fw-medium text-sm'>
                          Admin
                        </span>
                      </div>
                      <button type='button' className='hover-text-danger'>
                        <Icon
                          icon='radix-icons:cross-1'
                          className='icon text-xl'
                        />
                      </button>
                    </div>
                    <ul className='to-top-list'>
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'
                          href='/view-profile'
                        >
                          <Icon
                            icon='solar:user-linear'
                            className='icon text-xl'
                          />{" "}
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'
                          href='/email'
                        >
                          <Icon
                            icon='tabler:message-check'
                            className='icon text-xl'
                          />{" "}
                          Inbox
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'
                          href='/company'
                        >
                          <Icon
                            icon='icon-park-outline:setting-two'
                            className='icon text-xl'
                          />
                          Setting
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3'
                          href='#'
                          onClick={() => dispatch(logout())}
                        >
                          <Icon icon='lucide:power' className='icon text-xl' />{" "}
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Profile dropdown end */}
              </div>
            </div>
          </div>
        </div>

        {/* dashboard-main-body */}
        <div className='dashboard-main-body'>{children}</div>

        {/* Footer section */}
        <footer className='d-footer'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-auto'>
              <p className='mb-0'>© 2025 Kaasana . All Rights Reserved.</p>
            </div>
            <div className='col-auto'>
              <p className='mb-0'>
                Made by <span className='text-primary-600'>Kaasana</span>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default MasterLayout;
