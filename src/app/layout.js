import "./globals.scss";
import NavBar from "@/components/navbar/NavBar";

export const metadata = {
  title: "Littrisha Pillay - Portfolio",
  description: "Littrish Pillay's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
