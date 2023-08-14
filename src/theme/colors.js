const palette = {
  primary: {
    main: '#6BD71B',
    light: '#DDF2CD'
  },
  secondary: {
    main: '#F2C24F'
  },
  dark: {
    main: '#333333',
    dark: '#000000',
    light: '#666666'
  },
  light: {
    main: '#FFFFFF',
    dark: '#b2b2b2'
  }
}
palette.text = {}
palette.text.primary = palette.dark.main
palette.text.secondary = palette.dark.light

export default palette
