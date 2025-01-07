"use client";

import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  companyName: string;
  details: string;
  helpNeeded: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    details: "",
    helpNeeded: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const requiredFields = ["name", "email", "companyName", "helpNeeded"];
    requiredFields.forEach((field) => {
      if (!formData[field as keyof FormData].trim()) {
        newErrors[field as keyof FormData] = `${field
          .charAt(0)
          .toUpperCase()}${field.slice(1)} is required`;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-gray-300 bg-gray-900 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500";

  return (
    // Use a solid black background
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {/* Uncomment below for gradient background */}
      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffd319] via-[#ff2975] to-[#8c1eff] p-4"> */}
      <div className="w-full max-w-3xl rounded-xl bg-black p-8 shadow-2xl sm:p-12">
        <h3 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">
          Contact Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)} *
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  value={formData[field as keyof FormData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className={`${inputClasses} ${
                    errors[field as keyof FormData] && "border-red-500"
                  }`}
                  placeholder={`Enter your ${field}`}
                />
                {errors[field as keyof FormData] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors[field as keyof FormData]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {["companyName", "helpNeeded", "details"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                {field === "companyName"
                  ? "Company/Business Name *"
                  : field === "helpNeeded"
                  ? "How can we help? *"
                  : "Additional Details"}
              </label>
              {field === "helpNeeded" || field === "details" ? (
                <textarea
                  id={field}
                  rows={field === "helpNeeded" ? 4 : 3}
                  value={formData[field as keyof FormData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className={`${inputClasses} ${
                    errors[field as keyof FormData] && "border-red-500"
                  }`}
                  placeholder={
                    field === "helpNeeded"
                      ? "Tell us what you're looking for"
                      : "Provide any additional details"
                  }
                />
              ) : (
                <input
                  type="text"
                  id={field}
                  value={formData[field as keyof FormData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className={`${inputClasses} ${
                    errors[field as keyof FormData] && "border-red-500"
                  }`}
                  placeholder={`Enter your ${field}`}
                />
              )}
              {errors[field as keyof FormData] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors[field as keyof FormData]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
