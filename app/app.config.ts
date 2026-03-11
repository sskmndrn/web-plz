export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    disableTransition: true  // отключаем анимацию смены тем
  }
})