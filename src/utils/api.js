const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

/**
 * Core request function
 */
async function request(url, method = "GET", data = null, customHeaders = {}) {
  try {
    // ✅ token handling (after login)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...customHeaders,
    };

    const options = { method, headers };
    if (data) options.body = JSON.stringify(data);

    const res = await fetch(`${API_BASE_URL}${url}`, options);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
}

/**
 * Export simple methods
 */
export const api = {
  get: (url, headers) => request(url, "GET", null, headers),
  post: (url, data, headers) => request(url, "POST", data, headers),
  put: (url, data, headers) => request(url, "PUT", data, headers),
  delete: (url, headers) => request(url, "DELETE", null, headers),
};
