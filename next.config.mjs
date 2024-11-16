// next.config.mjs
const nextConfig = {
    output: 'export',  // Add this line
    images: {
      unoptimized: true  // Add this for static image exports
    }
  };
  export default nextConfig;