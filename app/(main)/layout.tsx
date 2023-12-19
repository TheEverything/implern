import AppBar from "@/components/AppBar";
import ListCard from "@/components/ListCard";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <AppBar className="flex just h-[450px] right-0 left-0 bottom-0 justify-center items-end " />
    </div>
  );
}

export default Layout;
