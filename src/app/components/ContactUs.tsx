"use client";

import { useState, FormEvent, useEffect, useCallback, useRef } from "react";

// Types
type FormData = {
  name: string;
  email: string;
  companyName: string;
  details: string;
  helpNeeded: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

interface StepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: JSX.Element;
  className?: string;
}

// Utilities
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Custom Hook for Intersection Observer
const useIntersectionObserver = (threshold = 0.2) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold });
    const element = elementRef.current;

    if (element) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [callback, threshold]);

  return [elementRef, inView] as const;
};

// Step Component
const Step = ({
  number,
  title,
  description,
  details,
  icon,
  className,
}: StepProps) => {
  const [ref, inView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={cn(
        "sticky top-0 flex h-screen items-center justify-center",
        "transform transition-all duration-1000 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className
      )}
    >
      <div className="grid w-full max-w-7xl grid-cols-12 gap-8 px-6">
        <div className="col-span-4">
          <div className="space-y-4">
            <span className="text-xl font-medium text-white/50">
              Step {number}
            </span>
            <h3 className="text-6xl font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="col-span-5">
          <div className="space-y-8">
            <p className="text-2xl leading-relaxed text-white/90">
              {description}
            </p>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white">
                What to expect
              </h4>
              <ul className="space-y-3">
                {details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-xl text-white/70"
                  >
                    <span className="text-2xl leading-none text-white/30">
                      •
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex items-start justify-end">
          <div className="h-32 w-32 text-white/80">{icon}</div>
        </div>
      </div>
    </div>
  );
};

// Form Component
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
    const fields = {
      name: "Name is required",
      email: "Email is required",
      companyName: "Company/Business name is required",
      helpNeeded: "Please tell us how we can help",
    };

    Object.entries(fields).forEach(([key, message]) => {
      if (!formData[key as keyof FormData].trim()) {
        newErrors[key as keyof FormData] = message;
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
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50";

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <h3 className="mb-6 text-2xl font-bold text-white">Ready to upgrade</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {["name", "email"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="mb-2 block text-sm font-medium text-white/70"
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
                className={cn(
                  inputClasses,
                  errors[field as keyof FormData] && "border-red-500/50"
                )}
              />
              {errors[field as keyof FormData] && (
                <p className="mt-1 text-sm text-red-400">
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
              className="mb-2 block text-sm font-medium text-white/70"
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
                className={cn(
                  inputClasses,
                  errors[field as keyof FormData] && "border-red-500/50"
                )}
              />
            ) : (
              <input
                type="text"
                id={field}
                value={formData[field as keyof FormData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className={cn(
                  inputClasses,
                  errors[field as keyof FormData] && "border-red-500/50"
                )}
              />
            )}
            {errors[field as keyof FormData] && (
              <p className="mt-1 text-sm text-red-400">
                {errors[field as keyof FormData]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// SVG Icons
const Icons = {
  Discovery: (
    <svg
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  Analysis: (
    <svg
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  ),
  Execution: (
    <svg
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
};

// Main Component
export default function ContactUs() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="relative">
        <div className="h-[50vh]" />

        <Step
          number={1}
          title="Discovery"
          description="Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking"
          details={[
            "Identify painpoints",
            "Uncover opportunities",
            "Flag inefficiencies",
          ]}
          icon={Icons.Discovery}
        />

        <Step
          number={2}
          title="Analysis & Planning"
          description="Strategizing every detail, including budget."
          details={[
            "Develop a detailed strategy and budget plan",
            "Outline key deliverables and timelines",
            "Craft a solution tailored to your needs",
          ]}
          icon={Icons.Analysis}
        />

        <Step
          number={3}
          title="Execution"
          description="Sit back as we bring your vision to life."
          details={[
            "Full-service execution, including design, development, and marketing",
            "Implement AI tools and automation as needed",
            "Deliver measurable results that boost your brand",
          ]}
          icon={Icons.Execution}
        />

        <div className="flex min-h-screen items-center justify-center py-20">
          <ContactForm />
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-blue-400/[0.02] blur-[100px]" />
        <div className="absolute top-0 left-0 h-1/3 w-1/3 rounded-full bg-blue-600/[0.02] blur-[100px]" />
      </div>
    </div>
  );
}
