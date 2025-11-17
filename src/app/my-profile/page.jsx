"use client";
import Breadcrumb from "@/components/Breadcrumb";
import ViewProfileLayer from "@/components/myprofile/ViewProfileLayer";
import MasterLayout from "@/masterLayout/MasterLayout";
import { useSelector } from "react-redux";

const Page = () => {
  const { user } = useSelector((state) => state.auth);
  
  // Get user name and format it
  const getUserName = () => {
    if (!user?.userDetails) {
      return "View Profile";
    }
    
    // Try different possible name fields
    const userName = 
      user.userDetails.name || 
      user.userDetails.fullName || 
      user.userDetails.firstName ||
      user.userDetails.userName ||
      "";
    
    if (!userName) {
      return "View Profile";
    }
    
    // Split name and get first name
    const nameParts = userName.trim().split(/\s+/);
    const firstName = nameParts[0] || userName;
    
    // Capitalize first letter
    const capitalizedFirstName = 
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    
    return `${capitalizedFirstName}'s Profile`;
  };

  const breadcrumbTitle = getUserName();
  const breadcrumbs = [{ label: breadcrumbTitle }];

  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title={breadcrumbTitle} breadcrumbs={breadcrumbs} />

        {/* ViewProfileLayer */}
        <ViewProfileLayer />
      </MasterLayout>
    </>
  );
};

export default Page;
