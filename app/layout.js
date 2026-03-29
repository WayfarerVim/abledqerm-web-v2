export const metadata = {
  title: 'My App',
  description: 'This is my app layout.'
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}