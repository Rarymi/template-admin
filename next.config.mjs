/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 10 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1,
  },
};

export default nextConfig;
