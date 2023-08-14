/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lavanderia-giulia.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/config']
}
