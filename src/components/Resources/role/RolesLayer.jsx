"use client"
import  {useState, useEffect} from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import ShowRolesModal from '@/components/Resources/role/ShowRolesModel';
import AddAndUpdateRolesModal from '@/components/Resources/role/AddAndUpdateRolesModel';
export default function RolesLayer() {

  const [search, setSearch] = useState('');
  const [showRolesModal, setShowRolesModal] = useState(false);
  const [showAddAndUpdateRolesModal, setShowAddAndUpdateRolesModal] = useState(false);
  const [departmentsList, setDepartmentsList] = useState( [
    { "value": "1", "label": "Accounting & Finance" },
    { "value": "2", "label": "Administrative" },
    { "value": "3", "label": "Business Development" },
    { "value": "4", "label": "Customer Service" },
    { "value": "5", "label": "Finance" },
    { "value": "6", "label": "Human Resource" },
    { "value": "7", "label": "IT" },
    { "value": "8", "label": "Legal" },
    { "value": "9", "label": "Marketing" },
    { "value": "10", "label": "Operations" },
    { "value": "11", "label": "Post Sales" },
    { "value": "12", "label": "Purchasing" },
    { "value": "13", "label": "Quality Assurance" },
    { "value": "14", "label": "Risk Management" },
    { "value": "15", "label": "R & D" },
    { "value": "16", "label": "Sales" },
    { "value": "17", "label": "Strategy" },
    { "value": "18", "label": "Purchase" },
    { "value": "19", "label": "demo_saumy" }
  ]);
  const [jobRolesList, setJobRolesList] = useState([
    { "value": "Admin", "label": "Admin" },
    { "value": "Sales", "label": "Sales" },
    { "value": "Operations", "label": "Operations" },
    { "value": "Accounts", "label": "Accounts" },
    { "value": "Product", "label": "Product" }
  ]
);
const [permissionsList, setPermissionsList] = useState([
  {
      "id": 1,
      "parent_id": 0,
      "features": "Dashboard",
      "menu_link": "dashboard",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 2,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 2,
      "parent_id": 0,
      "features": "CRM",
      "menu_link": null,
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 3,
      "parent_id": 0,
      "features": "Bookings",
      "menu_link": null,
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 4,
      "parent_id": 0,
      "features": "Operations",
      "menu_link": null,
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 5,
      "parent_id": 0,
      "features": "Inventory",
      "menu_link": null,
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 6,
      "parent_id": 0,
      "features": "Cost Sheet",
      "menu_link": "cost-sheet",
      "detail": null,
      "menu_order": 6,
      "menu_icon": null,
      "menu_type": 2,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 7,
      "parent_id": 0,
      "features": "Quotes",
      "menu_link": "quotes",
      "detail": null,
      "menu_order": 7,
      "menu_icon": null,
      "menu_type": 2,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 8,
      "parent_id": 0,
      "features": "Invoices",
      "menu_link": "invoices",
      "detail": null,
      "menu_order": 8,
      "menu_icon": null,
      "menu_type": 2,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 9,
      "parent_id": 0,
      "features": "Resources",
      "menu_link": null,
      "detail": null,
      "menu_order": 9,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 10,
      "parent_id": 0,
      "features": "Masters",
      "menu_link": null,
      "detail": null,
      "menu_order": 10,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 11,
      "parent_id": 0,
      "features": "Reports",
      "menu_link": null,
      "detail": null,
      "menu_order": 11,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 12,
      "parent_id": 0,
      "features": "Setting",
      "menu_link": null,
      "detail": null,
      "menu_order": 12,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-03-29T00:57:40.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 13,
      "parent_id": 2,
      "features": "Leads",
      "menu_link": "crm/leads",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 14,
      "parent_id": 2,
      "features": "Open Leads",
      "menu_link": "crm/open-leads",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 15,
      "parent_id": 2,
      "features": "Archive Leads",
      "menu_link": "crm/archive-leads",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 16,
      "parent_id": 2,
      "features": "Customers",
      "menu_link": "crm/customers",
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 17,
      "parent_id": 3,
      "features": "Packages",
      "menu_link": "bookings/packages",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 18,
      "parent_id": 3,
      "features": "Hotels",
      "menu_link": "bookings/hotels",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 19,
      "parent_id": 3,
      "features": "Flights",
      "menu_link": "bookings/flights",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 20,
      "parent_id": 3,
      "features": "Activities",
      "menu_link": "bookings/activities",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 21,
      "parent_id": 3,
      "features": "Transportations",
      "menu_link": "bookings/transportations",
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 22,
      "parent_id": 3,
      "features": "VISA",
      "menu_link": "bookings/visa",
      "detail": null,
      "menu_order": 6,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 23,
      "parent_id": 4,
      "features": "Upcoming Travels",
      "menu_link": "operations/upcoming-travels",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 24,
      "parent_id": 4,
      "features": "Refund & Cancellations",
      "menu_link": "operations/refund-cancellations",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 25,
      "parent_id": 5,
      "features": "Hotels",
      "menu_link": "inventory/hotels",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 26,
      "parent_id": 5,
      "features": "Packages",
      "menu_link": "inventory/packages",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 27,
      "parent_id": 5,
      "features": "Transportations",
      "menu_link": "inventory/transportations",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 28,
      "parent_id": 5,
      "features": "VISA",
      "menu_link": "inventory/visa",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 29,
      "parent_id": 5,
      "features": "Activities",
      "menu_link": "inventory/activities",
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 30,
      "parent_id": 9,
      "features": "Roles / Permissions",
      "menu_link": "resources/roles",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 31,
      "parent_id": 9,
      "features": "Users",
      "menu_link": "resources/users",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 32,
      "parent_id": 9,
      "features": "Branches",
      "menu_link": "resources/branches",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 33,
      "parent_id": 9,
      "features": "Suppliers / Partners",
      "menu_link": "resources/suppliers",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 34,
      "parent_id": 10,
      "features": "Currency",
      "menu_link": "masters/currency",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 35,
      "parent_id": 10,
      "features": "Themes",
      "menu_link": "masters/themes",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 36,
      "parent_id": 10,
      "features": "Package Type",
      "menu_link": "masters/package-type",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 37,
      "parent_id": 10,
      "features": "Package Duration",
      "menu_link": "masters/package-duration",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 38,
      "parent_id": 10,
      "features": "Hotel Type",
      "menu_link": "masters/hotel-type",
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 39,
      "parent_id": 10,
      "features": "Stay Type",
      "menu_link": "masters/stay-type",
      "detail": null,
      "menu_order": 6,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 40,
      "parent_id": 10,
      "features": "Meal Options",
      "menu_link": "masters/meal-options",
      "detail": null,
      "menu_order": 7,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 41,
      "parent_id": 11,
      "features": "Lead Reports",
      "menu_link": "reports/lead-reports",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 42,
      "parent_id": 11,
      "features": "Branch Performance",
      "menu_link": "reports/branch-performance",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 43,
      "parent_id": 11,
      "features": "Agent Performance",
      "menu_link": "reports/agent-performance",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 44,
      "parent_id": 11,
      "features": "Sales",
      "menu_link": "reports/sales",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 45,
      "parent_id": 11,
      "features": "Invoices",
      "menu_link": "reports/invoices",
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 46,
      "parent_id": 11,
      "features": "Payment Status",
      "menu_link": "reports/payment-status",
      "detail": null,
      "menu_order": 6,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 47,
      "parent_id": 12,
      "features": "Profile",
      "menu_link": "setting/profile",
      "detail": null,
      "menu_order": 1,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 48,
      "parent_id": 12,
      "features": "TnC",
      "menu_link": "setting/tnc",
      "detail": null,
      "menu_order": 2,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 49,
      "parent_id": 12,
      "features": "Markups",
      "menu_link": "setting/markups",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 50,
      "parent_id": 12,
      "features": "Notifications",
      "menu_link": "setting/notifications",
      "detail": null,
      "menu_order": 4,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 51,
      "parent_id": 12,
      "features": "Communications",
      "menu_link": "setting/communications",
      "detail": null,
      "menu_order": 5,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 52,
      "parent_id": 12,
      "features": "Subscription Plan",
      "menu_link": "setting/subscription-plan",
      "detail": null,
      "menu_order": 6,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 53,
      "parent_id": 12,
      "features": "Other Settings",
      "menu_link": "setting/other-settings",
      "detail": null,
      "menu_order": 7,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  },
  {
      "id": 54,
      "parent_id": 2,
      "features": "Confirmed Lead",
      "menu_link": "crm/confirmed-lead",
      "detail": null,
      "menu_order": 3,
      "menu_icon": null,
      "menu_type": 1,
      "status": 1,
      "created_at": "2024-04-03T23:35:14.000Z",
      "updated_at": "2024-03-28T01:48:09.000Z"
  }
]
);

  return (
    <>
      {showRolesModal && <ShowRolesModal showRolesModal={showRolesModal} setShowRolesModal={setShowRolesModal} departmentsList={departmentsList} jobRolesList={jobRolesList} permissionsList={permissionsList} />}

      {showAddAndUpdateRolesModal && <AddAndUpdateRolesModal showAddAndUpdateRolesModal={showAddAndUpdateRolesModal} setShowAddAndUpdateRolesModal={setShowAddAndUpdateRolesModal} departments={departmentsList} jobRoles={jobRolesList} permissionsList={permissionsList} />}

      
      <div className='card h-100 p-0 radius-12'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
          <div className='d-flex align-items-center flex-wrap gap-3'>
            
            <form className='navbar-search'>
              <input
                type='text'
                className='bg-base h-40-px w-auto'
                name='search'
                placeholder='Search'
              />
              <Icon icon='ion:search-outline' className='icon' />
            </form>
          </div>
          <button
            type='button'
            className='btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2'
           onClick={() => setShowAddAndUpdateRolesModal(true)}
          >
            <Icon
              icon='ic:baseline-plus'
              className='icon text-xl line-height-1'
            />
            Add New Role
          </button>

        </div>
        <div className='card-body p-24'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table sm-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>
                    <div className='d-flex align-items-center gap-10'>
                      {/* <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border input-form-dark'
                        type='checkbox'
                        name='checkbox'
                        id='selectAll'
                      />
                    </div> */}
                      S.L
                    </div>
                  </th>

                  <th scope='col'>Department </th>
                  <th scope='col'>Job Roles</th>
                  <th scope='col'>Job Title</th>
                  <th scope='col'>Create Date</th>
                  <th scope='col' className='text-center'>
                    Status
                  </th>
                  <th scope='col' className='text-center'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>


                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-10'>
                      {/* <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div> */}
                      01
                    </div>
                  </td>
                  <td>Accounting & Finance</td>
                  <td>Sales</td>
                  <td>Marketing</td>
                  <td>30 April 2024</td>

                  <td className='text-center'>
                    <span className='bg-success-focus text-success-600 border border-success-main px-24 py-4 radius-4 fw-medium text-sm'>
                      Active
                    </span>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-info-focus text-info-600 bg-hover-info-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        onClick={() => setShowRolesModal(true)}
                      >
                        <Icon icon='lucide:eye' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        onClick={() => setShowAddAndUpdateRolesModal(true)}
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-10'>
                      {/* <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div> */}
                      01
                    </div>
                  </td>
                  <td>Accounting & Finance</td>
                  <td>Sales</td>
                  <td>Marketing</td>
                  <td>30 April 2024</td>

                  <td className="text-center">
                    <span className="bg-danger-focus text-danger-600 border border-danger-main px-24 py-4 radius-4 fw-medium text-sm">Inactive</span></td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-info-focus text-info-600 bg-hover-info-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        onClick={() => setShowRolesModal(true)}
                      >
                        <Icon icon='lucide:eye' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        onClick={() => setShowAddAndUpdateRolesModal(true)}
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
            <span>Showing 1 to 10 of 12 entries</span>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  <Icon icon='ep:d-arrow-left' className='' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white'
                  href='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px'
                  href='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  4
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  5
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                  href='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='' />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
