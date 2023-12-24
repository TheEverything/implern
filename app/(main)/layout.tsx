import AppBar from "@/components/AppBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="select-none h-svh">
      {children}
      <AppBar className="fixed right-0 left-0 bottom-0" />
    </div>
  );
}

export default Layout;
