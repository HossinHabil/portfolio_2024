import HeaderComponent from "@/components/HeaderComponent";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      {children}
    </div>
  );
}
