import { Navbar } from "./_components/navbar";

interface protectedLayoutProps {
  children: React.ReactNode;
}

const protectedLayout = ({ children }: protectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-b from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  );
};

export default protectedLayout;
