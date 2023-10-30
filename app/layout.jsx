export const metadata = {
  title: 'Home Page',
  description: 'MUI + Next.js Playground',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
