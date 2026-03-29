// Root layout with metadata and providers
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Abledqerm Web V2</title>
        <meta name="description" content="Abledqerm Web Version 2" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
