import "@/app/global.css";
import "@/app/storybook.css";
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
  title: "Spear UI",
};

export const AppLayout = (properties: {
  background: string | null;
  children: ReactNode;
  direction: "ltr" | "rtl";
  layout: string;
  product: string;
}) => {
  const { background, children, direction, layout, product } = properties;
  let backgroundClassName = "bg-transparent";
  let layoutClassName = "";

  switch (background) {
    case "canvas-1": {
      backgroundClassName = "bg-canvas-1";
      break;
    }
    case "canvas-2": {
      backgroundClassName = "bg-canvas-2";
      break;
    }
    default: {
      break;
    }
  }

  switch (layout) {
    case "centered": {
      layoutClassName = "flex items-center justify-center";
      break;
    }
    case "padded": {
      layoutClassName = "p-4";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <div
      className={`size-full ${backgroundClassName} ${layoutClassName} ${inter.className} selection:bg-primary-9 selection:text-primary-contrast theme-dfs:selection:bg-black theme-dfs:selection:text-white theme-forerunner:selection:bg-black theme-forerunner:selection:text-white theme-dfs:dark:selection:bg-primary-9 theme-dfs:dark:selection:text-primary-contrast theme-forerunner:dark:selection:bg-white theme-forerunner:dark:selection:text-black`}
      lang="en-US"
    >
      <AppProviders direction={direction} product={product}>
        {children}
      </AppProviders>
      <div id="storybook-portal" />
    </div>
  );
};

export default AppLayout;
