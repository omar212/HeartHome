import "@/assests/styles/globals.css";

export const metadata = {
  title: "HeartHome",
  keywords: "rental, property, real estate",
  description: "Home is where the heart is, find your home!",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
