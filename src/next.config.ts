import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    // agar cloudinary se le rhe he tb res.cloudinary.com
    domains:['images.unsplash.com','res.cloudinary.com']
  }
  /* config options here */
};

export default nextConfig;
