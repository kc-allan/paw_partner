import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import dogWalking from "../../assets/images/dog-walking.jpg";
import pamperedPet from "../../assets/images/pampered-pet.jpg";
import logo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  id?: string;
  name: string;
  required?: boolean;
}

const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  id,
  name,
  required
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      <input
        required={required}
        id={id}
        name={name}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        value={value}
        autoComplete={name}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200
          ${error ? "border-red-500" : "border-gray-300"}
          ${error ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ email: "", password: "", confirmPassword: "" });
  
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});
  const [signupErrors, setSignupErrors] = useState<Record<string, string>>({});

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
    if (signupErrors[name]) {
      setSignupErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateLoginForm = () => {
    const newErrors: Record<string, string> = {};

    if (!loginForm.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!loginForm.password) {
      newErrors.password = "Password is required";
    } else if (loginForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignupForm = () => {
    const newErrors: Record<string, string> = {};

    if (!signupForm.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signupForm.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!signupForm.password) {
      newErrors.password = "Password is required";
    } else if (signupForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setSignupErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent, isSignUp: boolean) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      if (isSignUp) {
        if (validateSignupForm()) {
          console.log("Signup form submitted:", signupForm);
        }
      } else {
        if (validateLoginForm()) {
          console.log("Login form submitted:", loginForm);
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSwitchForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  const AuthForm = ({ isSignUp = false }) => {
    const currentForm = isSignUp ? signupForm : loginForm;
    const currentErrors = isSignUp ? signupErrors : loginErrors;
    const handleChange = isSignUp ? handleSignupChange : handleLoginChange;
    const confirmPasswordValue = isSignUp ? signupForm.confirmPassword : "";

    return (
      <div
        className={`w-full h-full flex flex-col p-8 transition-all duration-500 ${
          isSignUp ? "bg-white" : "bg-blue-50"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isSignUp
            ? "Sign up to get started with our service"
            : "Enter your credentials to access your account"}
        </p>
        <form
          onSubmit={(e) => handleSubmit(e, isSignUp)}
          className="space-y-4 flex flex-col items-center"
        >
          <div className="space-y-2 w-full">
            <label
              htmlFor={`email-${isSignUp ? "signup" : "login"}`}
              className="text-sm font-medium"
            >
              Email
            </label>
            <InputField
              id={`email-${isSignUp ? "signup" : "login"}`}
              name="email"
              type="email"
              value={currentForm.email}
              onChange={handleChange}
              placeholder="Enter your email"
              error={currentErrors.email}
              required
            />
          </div>

          <div className="space-y-2 w-full">
            <label
              htmlFor={`${isSignUp ? "password-signup" : "password-login"}`}
              className="text-sm font-medium"
            >
              Password {isSignUp && "(min. 6 characters)"}
            </label>
            <InputField
              id={`password-${isSignUp ? "signup" : "login"}`}
              name="password"
              type="password"
              value={currentForm.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={currentErrors.password}
              required
            />
          </div>

          {isSignUp && (
            <div className="space-y-2 w-full">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <InputField
                required
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPasswordValue}
                onChange={handleChange}
                placeholder="Confirm your password"
                error={currentErrors.confirmPassword}
              />
            </div>
          )}

          <button
            type="submit"
            className={`relative flex items-center justify-center transition-all duration-500 w-full md:w-3/4 lg:w-1/2
                      ${
                        submitting
                          ? "w-12 h-12 rounded-full bg-orange-500 opacity-70"
                          : "bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full"
                      }
                    `}
          >
            {submitting ? (
              <Loader2 className="w-6 h-6 text-white animate-spin" />
            ) : (
              <span className="text-white">
                {isSignUp ? "Sign Up" : "Sign In"}
              </span>
            )}
          </button>
        </form>
      </div>
    );
  };

  const OverlayContent = ({ isSignUp = false }) => (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            isSignUp ? dogWalking : pamperedPet
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 bg-cover bg-center w-full h-full z-0"
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 w-full h-full z-10" />
      <div className="text-center text-white space-y-4 h-full w-full relative z-20">
        <h3 className="text-2xl font-bold z-20">
          {!isSignUp ? "Already have an account?" : "New here?"}
        </h3>
        <p className="max-w-xs mx-auto">
          {!isSignUp
            ? "Sign in to continue your journey with us"
            : "Join us and discover a world of possibilities"}
        </p>
        <button
          onClick={handleSwitchForm}
          className={`${
            !isSignUp ? "bg-orange-400" : "bg-blue-400"
          } p-2 px-4 rounded-lg font-medium z-20`}
        >
          {!isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 onClick={() => navigate('/dashboard')} className="cursor-pointer flex items-center justify-center gap-2 text-3xl font-bold text-orange-500 mt-4 py-6">
        <img
          src={logo}
          alt="React Logo"
          className="h-12 w-12 stroke-orange-500"
        />
        <span id="logo" className="font-bold italic">
          Paw Partner
        </span>
      </h1>
      <div className="flex items-center justify-center p-4">
        {/* Mobile View */}
        <div className="lg:hidden w-full max-w-md">
          <div
            className={`transform transition-transform duration-300 ${
              isAnimating
                ? isLogin
                  ? "translate-x-full"
                  : "-translate-x-full"
                : "translate-x-0"
            }`}
          >
            <AuthForm isSignUp={!isLogin} />
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={handleSwitchForm}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex w-full max-w-5xl h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Forms Container */}
          <div className="flex w-full relative">
            {/* Sign In Section */}
            <div
              className={`w-1/2 h-full transform transition-transform duration-500 ease-in-out absolute ${
                isLogin ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <AuthForm isSignUp={false} />
            </div>

            {/* Sign Up Section */}
            <div
              className={`w-1/2 transform transition-transform duration-500 ease-in-out absolute ${
                isLogin ? "translate-x-full" : "translate-x-0"
              } right-0`}
            >
              <AuthForm isSignUp={true} />
            </div>

            {/* Sliding Overlay */}
            <div
              className={`absolute w-1/2 h-full transition-transform duration-500 ease-in-out flex items-center justify-center
              ${isLogin ? "translate-x-full" : "translate-x-0"}`}
            >
              <OverlayContent isSignUp={isLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;