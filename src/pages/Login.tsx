import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const Login = () => {
  const [role, setRole] = useState<"student" | "teacher" | "admin">("student");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Logged in as ${role}`);
    navigate(`/${role}/dashboard`);
  };
  const nagivateToDashboard = () => {
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Preston Academy"
              className="h-16 w-16 mx-auto mb-3"
            />
            <h1 className="font-display text-2xl font-bold">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your portal
            </p>
          </div>

          {/* Role selector */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {(["student", "teacher", "admin"] as const).map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRole(r);
                  nagivateToDashboard();
                }}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors capitalize ${role === r ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder={`${role === "admin" ? "Admin" : role === "teacher" ? "Faculty" : "Student"} ID or Email`}
              required
            />
            <Input type="password" placeholder="Password" required />
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Sign In
            </Button>
          </form>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Forgot password? Contact the administration office.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
