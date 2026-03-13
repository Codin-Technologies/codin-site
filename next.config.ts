import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    domains: ['img.freepik.com','images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        search: '',
      },
    ],
  },
}
 
export default config