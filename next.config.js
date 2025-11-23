/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // Handle CKEditor 5
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Ignore CKEditor license key warnings
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /ckeditor5/ },
      { message: /license-key/ },
    ];

    return config;
  },
};

module.exports = nextConfig;
