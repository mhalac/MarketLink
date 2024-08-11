/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/index.html',
          permanent: true, // Use `true` for permanent (301) redirects, `false` for temporary (302)
        },
      ];
    },
  };
  
  export default nextConfig;
