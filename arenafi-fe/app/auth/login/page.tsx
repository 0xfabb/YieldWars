import { LoginForm } from "@/components/login-form";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-svh arena-gradient flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {/* ArenaFi Branding */}
        <div className="flex items-center justify-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center arena-glow">
              <Gamepad2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold arena-text-glow">ArenaFi</span>
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
