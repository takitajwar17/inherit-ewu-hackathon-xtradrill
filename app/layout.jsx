import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
import { Kanit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <head></head>
        <body className={kanit.className}>
          {/* Retain ClientLayout to manage conditional Sidebar rendering */}
          <ClientLayout>
            <main>
              {/* Keep the new background styling from the incoming changes */}
              <div className="flex items-start justify-center min-h-screen min-w-full">
                <div className="w-full h-full">{children}</div>
              </div>
            </main>
          </ClientLayout>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
