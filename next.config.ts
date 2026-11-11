import type { NextConfig } from "next";

// Картинки, загруженные в админке, лежат в хранилище Supabase
const supabaseHost = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SUPABASE_URL || "https://juqwuyhxwzzitzxxscns.supabase.co").hostname;
  } catch {
    return "juqwuyhxwzzitzxxscns.supabase.co";
  }
})();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: supabaseHost, pathname: "/storage/v1/object/public/**" },
    ],
  },
};

export default nextConfig;
