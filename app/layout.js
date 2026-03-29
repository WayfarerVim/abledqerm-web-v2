export const metadata = {
  title: "ableDERM | Dermatology & Clinical Skin Services",
  description: "Premium, clinically trustworthy dermatology services."
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