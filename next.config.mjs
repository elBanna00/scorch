/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nnkmsozfxadunqngssge.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
