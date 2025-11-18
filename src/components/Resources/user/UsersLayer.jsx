"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import AddNewUserModal from "./AddNewUserModal";
import ViewUserDetailsModal from "./ViewUserDetailsModal";
import EditUserModal from "./EditUserModal";

const UsersGridLayer = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState(null);

  // Sample user data - in a real app, this would come from props or API
  const users = [
    {
      id: 1,
      name: "Jacob Jones",
      email: "ifrandom@gmail.com",
      contact: "+1234567890",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer", "Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 2,
      name: "Darrell Steward",
      email: "ifrandom@gmail.com",
      contact: "+1234567891",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 3,
      name: "Jerome Bell",
      email: "ifrandom@gmail.com",
      contact: "+1234567892",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 4,
      name: "Eleanor Pena",
      email: "ifrandom@gmail.com",
      contact: "+1234567893",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer", "Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 5,
      name: "Ralph Edwards",
      email: "ifrandom@gmail.com",
      contact: "+1234567894",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 6,
      name: "Annette Black",
      email: "ifrandom@gmail.com",
      contact: "+1234567895",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 7,
      name: "Robert Fox",
      email: "ifrandom@gmail.com",
      contact: "+1234567896",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer", "Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 8,
      name: "Albert Flores",
      email: "ifrandom@gmail.com",
      contact: "+1234567897",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 9,
      name: "Dianne Russell",
      email: "ifrandom@gmail.com",
      contact: "+1234567898",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 10,
      name: "Esther Howard",
      email: "ifrandom@gmail.com",
      contact: "+1234567899",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer", "Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 11,
      name: "Marvin McKinney",
      email: "ifrandom@gmail.com",
      contact: "+1234567900",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Designer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
    {
      id: 12,
      name: "Guy Hawkins",
      email: "ifrandom@gmail.com",
      contact: "+1234567901",
      designation: "UI UX Designer",
      department: "Design",
      reportingManager: "John Doe",
      branch: "Main Branch",
      roles: ["Developer"],
      profileImage: "/assets/img/user.png",
      coverImage: "/assets/img/coverimages.jpg",
    },
  ];

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    // Trigger modal using Bootstrap
    setTimeout(() => {
      const modalElement = document.getElementById('viewUserDetailsModal');
      if (modalElement) {
        // Check if Bootstrap is available
        if (typeof window !== 'undefined' && window.bootstrap) {
          const modal = new window.bootstrap.Modal(modalElement);
          modal.show();
        } else if (typeof window !== 'undefined' && window.$) {
          // Fallback to jQuery if Bootstrap JS is loaded via jQuery
          window.$(modalElement).modal('show');
        } else {
          // Fallback: manually show modal
          modalElement.classList.add('show');
          modalElement.style.display = 'block';
          document.body.classList.add('modal-open');
          const backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          backdrop.id = 'modalBackdrop';
          document.body.appendChild(backdrop);
        }
      }
    }, 100);
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    // Trigger modal using Bootstrap
    setTimeout(() => {
      const modalElement = document.getElementById('editUserModal');
      if (modalElement) {
        // Check if Bootstrap is available
        if (typeof window !== 'undefined' && window.bootstrap) {
          const modal = new window.bootstrap.Modal(modalElement);
          modal.show();
        } else if (typeof window !== 'undefined' && window.$) {
          // Fallback to jQuery if Bootstrap JS is loaded via jQuery
          window.$(modalElement).modal('show');
        } else {
          // Fallback: manually show modal
          modalElement.classList.add('show');
          modalElement.style.display = 'block';
          document.body.classList.add('modal-open');
          const backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          backdrop.id = 'editModalBackdrop';
          document.body.appendChild(backdrop);
        }
      }
    }, 100);
  };

  return (
    <div className='row gy-4'>
      <div className='col-xxl-3'>
        <div className='card h-100 p-0 radius-12 border shadow-sm'>
          <div className='card-header border-bottom bg-primary-50 py-20 px-24'>
            <div className='d-flex align-items-center gap-10'>
              <Icon icon='solar:filter-bold' className='text-primary-600 text-xl' />
              <h6 className='text-lg fw-bold text-primary-light mb-0'>
                Filters
              </h6>
            </div>
          </div>
          <div className='card-body p-24'>
            <div className='d-flex flex-column gap-20'>
              {/* Branch Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:buildings-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Branch
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Branches</option>
                  <option value='main'>Main Branch</option>
                  <option value='branch2'>Branch 2</option>
                  <option value='branch3'>Branch 3</option>
                </select>
              </div>

              {/* Designation Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:medal-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Designation
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Designations</option>
                  <option value='designer'>UI UX Designer</option>
                  <option value='developer'>Developer</option>
                  <option value='manager'>Manager</option>
                </select>
              </div>

              {/* Roles Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:user-id-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Roles
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Roles</option>
                  <option value='designer'>Designer</option>
                  <option value='developer'>Developer</option>
                  <option value='admin'>Admin</option>
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:case-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Department
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Departments</option>
                  <option value='design'>Design</option>
                  <option value='development'>Development</option>
                  <option value='marketing'>Marketing</option>
                </select>
              </div>

              {/* Reporting Manager Filter */}
              <div>
                <div className='d-flex align-items-center gap-8 mb-12'>
                  <Icon icon='solar:user-speak-bold' className='text-primary-600 text-lg' />
                  <label className='form-label fw-bold text-primary-light text-sm mb-0'>
                    Reporting Manager
                  </label>
                </div>
                <select className='form-select radius-8 border h-44-px'>
                  <option value=''>All Managers</option>
                  <option value='john'>John Doe</option>
                  <option value='jane'>Jane Smith</option>
                  <option value='manager3'>Manager 3</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className='d-flex flex-column gap-12 pt-20 border-top'>
                <button
                  type='button'
                  className='btn btn-primary text-sm fw-semibold px-20 py-12 radius-8 d-flex align-items-center justify-content-center gap-2'
                >
                  <Icon icon='solar:filter-bold' className='text-lg' />
                  Apply Filters
                </button>
                <button
                  type='button'
                  className='btn btn-outline-secondary text-sm fw-semibold px-20 py-12 radius-8 d-flex align-items-center justify-content-center gap-2'
                >
                  <Icon icon='solar:refresh-bold' className='text-lg' />
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-9'>
        <div className='card h-100 p-0 radius-12'>
          <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
            <div className='d-flex align-items-center flex-wrap gap-3'>
              <span className='text-md fw-medium text-secondary-light mb-0'>
                Show
              </span>
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
              data-bs-toggle='modal'
              data-bs-target='#addNewUserModal'
            >
              <Icon
                icon='ic:baseline-plus'
                className='icon text-xl line-height-1'
              />
              Add New User
            </button>
          </div>
          <div className='card-body p-24'>
            <div className='row gy-4'>
              {users.slice(0, 6).map((user) => (
                <div key={user.id} className='col-xxl-4 col-md-6 user-grid-card'>
                  <div className='position-relative border radius-16 overflow-hidden'>
                    <img
                      src={user.coverImage}
                      alt=''
                      className='w-100 object-fit-cover'
                    />
                    <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                      <button
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                        className='bg-neutral-200 w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-secondary-light'
                      >
                        <Icon icon='entypo:dots-three-vertical' className='icon ' />
                      </button>
                      <ul className='dropdown-menu p-12 border bg-base shadow'>
                        <li>
                          <button
                            type='button'
                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10 w-100 border-0 bg-transparent text-start'
                            onClick={() => handleEditUser(user)}
                          >
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type='button'
                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                      />
                      <h6 className='text-lg mb-0 mt-4'>{user.name}</h6>
                      <span className='text-secondary-light mb-16'>
                        {user.email}
                      </span>
                      <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                        <div className='text-center w-50'>
                          <h6 className='text-md mb-0'>{user.department}</h6>
                          <span className='text-secondary-light text-sm mb-0'>
                            Department
                          </span>
                        </div>
                        <div className='text-center w-50'>
                          <h6 className='text-md mb-0'>{user.designation}</h6>
                          <span className='text-secondary-light text-sm mb-0'>
                            Designation
                          </span>
                        </div>
                      </div>
                      <button
                        type='button'
                        className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                        onClick={() => handleViewProfile(user)}
                      >
                        View Profile
                        <Icon
                          icon='solar:alt-arrow-right-linear'
                          className='icon text-xl line-height-1'
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
              <span>Showing 1 to {Math.min(6, users.length)} of {users.length} entries</span>
              <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
                <li className='page-item'>
                  <Link
                    className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
                    href='#'
                  >
                    Previous
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-primary-600 text-white fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                    href='#'
                  >
                    1
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
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
                    {" "}
                    <Icon icon='ep:d-arrow-right' className='' />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Modals */}
        <AddNewUserModal />
        <ViewUserDetailsModal user={selectedUser} onEdit={handleEditUser} />
        <EditUserModal user={editUser} />
        </div>

    </div>

  );
};

export default UsersGridLayer;
