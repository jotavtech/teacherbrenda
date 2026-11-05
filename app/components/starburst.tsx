/** An SVG keeps decorative stars monochrome on iOS instead of becoming emoji. */
export default function Starburst() {
  return <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M13 0h6v9l6.4-6.4 4.2 4.2L23.2 13H32v6h-8.8l6.4 6.4-4.2 4.2L19 23.2V32h-6v-8.8l-6.4 6.4-4.2-4.2L8.8 19H0v-6h8.8L2.4 6.6l4.2-4.2L13 8.8Z" />
  </svg>;
}
