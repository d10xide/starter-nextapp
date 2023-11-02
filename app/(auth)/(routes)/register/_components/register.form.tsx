"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Logo from "@/components/logo";

const RegisterForm = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.post("/api/users", inputs);
      toast({
        title: "Registered.",
      });

      router.push("/login");
    } catch (error) {
      toast({
        title: "Register failed",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto">
          <Logo />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={registerUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
