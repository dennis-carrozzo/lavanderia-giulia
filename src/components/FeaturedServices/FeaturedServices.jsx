import { storyblokEditable } from '@storyblok/react'
import Variant1 from './Variant1'

/**
 * This function returns a React component based on the variant specified in the `blok` object.
 * @returns a React component based on the value of the `blok.variant` property. `
 */
export default function FeaturedServices ({ blok }) {
  switch (blok.variant) {
    case 'variant1':
    default:
      return <Variant1 blok={blok} {...storyblokEditable(blok)} />
  }
}
