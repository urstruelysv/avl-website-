"use client";

import { useEffect, useState, FormEvent, useRef, useCallback } from "react";

// Simple className utility to replace cn from @/lib/utils
const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  className?: string;
}

// Custom hook to replace react-intersection-observer
const useIntersectionObserver = (options = {}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.2,
      ...options,
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback, options]);

  return [elementRef, inView] as const;
};

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
      className={classNames(
        "h-screen flex items-center justify-center sticky top-0",
        "transform transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className="max-w-7xl w-full px-6 grid grid-cols-12 gap-8">
        {/* Left side - Step number and title */}
        <div className="col-span-4">
          <div className="space-y-4">
            <div className="text-white/50 text-xl font-medium">
              Step {number}
            </div>
            <h3 className="text-6xl font-bold text-white tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Middle - Description and details */}
        <div className="col-span-5">
          <div className="space-y-8">
            <p className="text-2xl text-white/90 leading-relaxed">
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
                    className="text-xl text-white/70 flex items-start gap-3"
                  >
                    <span className="text-white/30 text-2xl leading-none">
                      •
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right side - Icon */}
        <div className="col-span-3 flex justify-end items-start">
          <div className="w-32 h-32 text-white/80">{icon}</div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    details: "",
    helpNeeded: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company/Business name is required";
    }

    if (!formData.helpNeeded.trim()) {
      newErrors.helpNeeded = "Please tell us how we can help";
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

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">Ready to upgrade</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={classNames(
                "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50",
                errors.name && "border-red-500/50"
              )}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={classNames(
                "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50",
                errors.email && "border-red-500/50"
              )}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Company/Business Name *
          </label>
          <input
            type="text"
            id="companyName"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            className={classNames(
              "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50",
              errors.companyName && "border-red-500/50"
            )}
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-400">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="helpNeeded"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            How can we help? *
          </label>
          <textarea
            id="helpNeeded"
            rows={4}
            value={formData.helpNeeded}
            onChange={(e) =>
              setFormData({ ...formData, helpNeeded: e.target.value })
            }
            className={classNames(
              "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50",
              errors.helpNeeded && "border-red-500/50"
            )}
          />
          {errors.helpNeeded && (
            <p className="mt-1 text-sm text-red-400">{errors.helpNeeded}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="details"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Additional Details
          </label>
          <textarea
            id="details"
            rows={3}
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default function ContactUs() {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="relative">
        {/* Initial spacer */}
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
          icon={
            <svg
              className="w-full h-full"
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
          }
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
          icon={
            <svg
              className="w-full h-full"
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
          }
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
          icon={
            <svg
              className="w-full h-full"
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
          }
        />

        {/* Contact form section */}
        <div className="min-h-screen flex items-center justify-center py-20">
          <ContactForm />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-400/[0.02] blur-[100px] rounded-full" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-600/[0.02] blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
