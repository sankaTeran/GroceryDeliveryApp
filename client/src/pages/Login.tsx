import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import {
  BikeIcon,
  MailIcon,
  UserIcon,
  LockIcon,
  Loader2Icon,
} from "lucide-react"; 
import { heroSectionData } from "../assets/assets";

function Login() {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    
    e.preventDefault();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    
    <div className="min-h-screen flex w-full">
      {/* ------ Left Side (Image) ------ */}
      <div className="hidden lg:flex lg:w-1/2 bg-zinc-900 relative items-center justify-center overflow-hidden">
        <img
          src={heroSectionData.hero_background}
          alt="CraftCeylon Background"
          className="absolute inset-0 object-cover w-full h-full bg-center opacity-20" // ✅ opacity-20 ලෙස නිවැරදි කළා
        />
        <div className="relative text-center px-12 z-10">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-wide">
            Welcome back to CraftCeylon
          </h2>
          <p className="font-light text-zinc-300 max-w-md mx-auto">
            Authentic Sri Lankan handicrafts and traditional arts, delivered to
            your doorstep.
          </p>
        </div>
      </div>

      {/* ------ Right Side (Form) ------ */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm">
          {/* form header message */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <BikeIcon className="size-8 text-zinc-600" />
              <span className="text-2xl font-bold text-zinc-600 tracking-wide">
                CraftCeylon
              </span>
            </Link>

            <h1 className="text-2xl font-semibold text-zinc-600">
              {isLoginState
                ? "Sign in to your account "
                : "Sign up for an account"}
            </h1>
            <p className="text-sm text-zinc-500 mt-6 text-center">
              {isLoginState
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLoginState(!isLoginState)}
                className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors"
              >
                {isLoginState ? "Create one" : "Sign in"}
              </button>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* isLoginState when false, (In Registration) Name can be seen*/}
            {!isLoginState && (
              <label className="text-sm flex flex-col gap-1 text-zinc-600">
                <span>Name</span>
                <div className="relative">
                  {/* User Icon*/}
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border focus:outline-none focus:border-app-border transition-all"
                  />
                </div>
              </label>
            )}
            <label className="text-sm flex flex-col gap-1 text-zinc-600">
              <span>Email</span>
              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email"
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border focus:outline-none focus:border-app-border transition-all"
                />
              </div>
            </label>

            <label className="text-sm flex flex-col gap-1 text-zinc-600">
              <span>Password</span>
              <div className="relative">
                <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Your password"
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border focus:outline-none focus:border-app-border transition-all"
                />
              </div>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2Icon className="size-5 animate-spin" />
              ) : isLoginState ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
