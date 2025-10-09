import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } }
      });
      if (error) throw error;
      toast({ title: "Account created", description: data.user?.email ? `Verification sent to ${data.user.email}` : "Please verify your email." });
      navigate("/login");
    } catch (err) {
      toast({ title: "Signup failed", description: err.message || "Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 pb-8 pt-8 px-8">
              <h3 className="text-3xl font-bold text-gray-900 text-center">
                Create your account
              </h3>
              <p className="text-center text-gray-600 text-lg mt-2">
                Start your journey with N@tcom SkillUp Hub
              </p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                  <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" required />
                </div>
                <Button type="submit" className="w-full btn-brand h-12" disabled={isLoading}>
                  {isLoading ? "Creating..." : "Create account"}
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Already have an account? <Link to="/login" className="text-blue-700 hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


