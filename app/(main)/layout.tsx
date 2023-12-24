import AppBar from "@/components/AppBar";
import initialProfile from "@/lib/initial-profile";

async function Layout({ children }: { children: React.ReactNode }) {
  const profile = await initialProfile();

  return (
    <div className="select-none h-svh">
      {children}
      <AppBar className="fixed right-0 left-0 bottom-0" />
    </div>
  );
}

export default Layout;
