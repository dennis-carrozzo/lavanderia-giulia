import { storyblokInit, apiPlugin } from '@storyblok/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ContentSection1 from '@/components/ContentSection1'
import ContentSection2 from '@/components/ContentSection2'
import FAQSection from '@/components/FAQSection'
import FeaturedServices from '@/components/FeaturedServices'
import Features from '@/components/Features'
import GoogleMapsIFrame from '@/components/GoogleMapsIFrame'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import MenuLink from '@/components/MenuLink'
import Page from '@/components/Page'
import PricingSection from '@/components/PricingSection'
import ReviewsSection from '@/components/ReviewsSection'
import Spacer from '@/components/Spacer'
import theme from '@/theme'
import ConfigContext from '@/context/config'

const components = {
  ContentSection1,
  ContentSection2,
  FAQSection,
  FeaturedServices,
  Features,
  GoogleMapsIFrame,
  Hero,
  MenuLink,
  Page,
  PricingSection,
  ReviewsSection,
  Spacer
}

// initialize the storyblok SDK
storyblokInit({
  accessToken: process.env.storyblokPreviewToken,
  use: [apiPlugin],
  components
})

/**
 * The function `MyApp` is a React component that wraps the provided `Component` with a config provider
 * theme provider, CSS baseline, and a layout component.
 */
function MyApp ({ Component, pageProps }) {
  return (
    <ConfigContext.Provider value={pageProps.config}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ConfigContext.Provider>
  )
}

export default MyApp
