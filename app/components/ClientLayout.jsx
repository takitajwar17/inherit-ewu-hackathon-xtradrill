"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const normalizedPath = pathname.replace(/\/+$/, "");
  const isHomePage = normalizedPath === "" || normalizedPath === "/";

  // Define paths where Sidebar should not be rendered
  const excludedPaths = ["/sign-in", "/sign-up"];
  const isExcludedPath =
    excludedPaths.includes(normalizedPath) || pathname === "/not-found";

  const shouldRenderSidebar = !isHomePage && !isExcludedPath;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* jodi home page e thake tahole header ashbe na */}
      {!isHomePage && <Header />}

      {/* excluded paths na hoile sidebar ashbe */}
      {shouldRenderSidebar && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}

      <main
        className={`w-full transition-all duration-300 ${
          !isHomePage ? "pt-20" : ""
        } ${
          shouldRenderSidebar && isOpen && window.innerWidth >= 768
            ? "pl-56"
            : ""
        }`}
      >
        <div className="flex items-start justify-center min-h-screen w-full">
          <div className="w-full bg-white">{children}</div>
        </div>
      </main>
    </>
  );
}
