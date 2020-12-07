module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.js',
      './node_modules/flatpickr/**/*.js'
    ]
  },
  theme: {
    fontFamily: {
      sans: ['"Titillium Web"']
    },
    extend: {
      colors: {
        orange: '#F05E7B'
      }
    }
  }
}
