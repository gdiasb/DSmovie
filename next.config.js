/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  async redirects() {
    return [
      {
        source: '/any:*',
        destination: '/index.html',
      },
    ]
  },
}

