import { toast } from "react-toastify";
import { loaderRef } from "@/utils/loaderRef";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

/**
 * Core request function
 */
async function request(url, method = "GET", data = null, customHeaders = {},options = {}) {
  console.log("options",options);
  const { showLoader , showToast  } = options
  console.log("showLoader",showLoader);
  console.log("showToast",showToast);
  try {
     if (showLoader) loaderRef.show();
    // ✅ token handling (after login)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
      console.log("token", token);

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...customHeaders,
    };

    const options = { method, headers };
    if (data) options.body = JSON.stringify(data);

    const res = await fetch(`${API_BASE_URL}${url}`, options);
    // console.log("res=========>",await res.json());

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const msg = errorData.message || `API error: ${res.status}`;
      // toast.error(msg); // ❌ Show error toast
      throw new Error(msg)
    }
    const responseData = await res.json();
    //  console.log(showToast)
      if(showToast){
        toast.success( responseData?.message || "Operation successful");
      }

      return responseData;
  } catch (err) {
    console.error("API Error:", err.message);
    toast.error(err?.message);
    throw err;
  } finally {
    if (showLoader) loaderRef.hide();
  }
}

/**
 * Export simple methods
 */
export const api = {
  get: (url, headers = {}, options = {}) => request(url, "GET", null, headers, options),
  post: (url, data, headers = {}, options = {}) => request(url, "POST", data, headers, options),
  put: (url, data, headers = {}, options = {}) => request(url, "PUT", data, headers, options),
  delete: (url, headers = {}, options = {}) => request(url, "DELETE", null, headers, options),
};
