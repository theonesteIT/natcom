import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality would connect to your Supabase auth here!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Header with Logo */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            {/* N@tcom Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">
                  N<span className="text-cyan-400">@</span>tcom
                </h1>
                <p className="text-sm text-blue-200">Embracing the possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left Side - Welcome Content */}
          <div className="text-white space-y-8 lg:pr-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome Back to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                  SkillUp Hub
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Continue your journey in mastering digital skills and advancing your career with Rwanda's premier ICT education platform.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-100">Access to premium TVET programs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-100">Industry-recognized certifications</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-100">Direct internship placements</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">3,250+</div>
                <p className="text-blue-200 text-sm">Students</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">180+</div>
                <p className="text-blue-200 text-sm">Partners</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">92%</div>
                <p className="text-blue-200 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 pb-8 pt-8 px-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center">
                  Sign In
                </h3>
                <p className="text-center text-gray-600 text-lg mt-2">
                  Access your learning dashboard
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 h-12 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••"
                        className="w-full pl-12 pr-12 py-3 h-12 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Forgot your password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Signing in...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        Sign In
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      New to N@tcom?
                    </span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Start your digital transformation journey
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    Create your account
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8">
        <p className="text-blue-200 text-sm">
          © 2025 N@tcom. Embracing the possibilities of digital education.
        </p>
      </div>
    </div>
  );
};

export default Login;