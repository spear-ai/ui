import "./style.css";
import logoIcon from "@spear-ai/logo/assets/logo-icon.svg";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { AppProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Spear UI",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: logoIcon.src,
    },
  ],
  title: "App",
};

export const AppLayout = (properties: { children: ReactNode; direction: "ltr" | "rtl" }) => {
  const { children, direction } = properties;

  return (
    <AppProviders direction={direction}>
      <div className={inter.className}>{children}</div>
    </AppProviders>
  );
};

export default AppLayout;
