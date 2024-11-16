const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    // Skip building API routes for static export
    skipMiddlewareUrlNormalize: true,
    skipTrailingSlashRedirect: true,
    // Disable API routes in static export
    rewrites: () => [],
  };
  
  export default nextConfig;