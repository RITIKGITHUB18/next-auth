import { Button } from "@/components/ui/button";
import { IoLockOpen } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-800">
      <div className="space-y-6 flex flex-col items-center justify-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md shadow-white flex",
            font.className
          )}
        >
          <IoLockOpen /> Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button
              className="flex items-center justify-center"
              variant="secondary"
              size="lg"
            >
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
