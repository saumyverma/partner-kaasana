import PluginInit from "@/helper/PluginInit";
import "./font.css";
import "./globals.css";
import { ReduxProvider } from "../store/Providers";

export const metadata = {
  title: "Kaasana.com | Dashboard Page",
  description:
    "Kaasana.com | Dashboard Page - Partner Portal for Managing Your Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <PluginInit />
      <body suppressHydrationWarning={true}> 
        <ReduxProvider>
          {children}
          </ReduxProvider>
        </body>
    </html>
  );
}
