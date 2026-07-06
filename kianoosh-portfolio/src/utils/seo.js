export function updateMetaThemeColor(theme) {
  const meta = document.querySelector('meta[name="theme-color"]')

  if (!meta) return

  meta.setAttribute('content', theme === 'dark' ? '#00FFCC' : '#008F7A')
}
