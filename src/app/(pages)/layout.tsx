import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
