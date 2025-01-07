"use client"; // Mark the file as a client-side component

import { useState } from "react";

const onboardingSteps = [
  {
    title: "Step 1: Discovery",
    description: `Where your vision meets our creativity. 
    In this phase, we immerse ourselves in understanding your brand and goals. Through in-depth conversations, we uncover what makes your business unique and explore the impact you want to make.`,
    tasks: [
      "Listen to your ideas and objectives",
      "Identify challenges and opportunities",
      "Set a foundation for a customized approach",
    ],
    icon: "💡", // Light bulb
  },
  {
    title: "Step 2: Analysis & Planning",
    description: `Strategizing every detail, including budget.
    Here, we dig into the specifics. We create a tailored roadmap that fits your budget, timeline, and objectives, ensuring every aspect is accounted for, from brand messaging to AI solutions.`,
    tasks: [
      "Develop a detailed strategy and budget plan",
      "Outline key deliverables and timelines",
      "Craft a solution tailored to your needs",
    ],
    icon: "📋", // Checklist
  },
  {
    title: "Step 3: Execution",
    description: `Sit back as we bring your vision to life.
    This is where the magic happens. Our team goes into full execution mode, handling everything from design to implementation. You get to watch as your brand comes alive, with AVL managing every detail to perfection.`,
    tasks: [
      "Full-service execution, including design, development, and marketing",
      "Implement AI tools and automation as needed",
      "Deliver measurable results that boost your brand",
    ],
    icon: "✨", // Magic wand
  },
];

export default function OnboardingProcess() {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        AVL Onboarding Process
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {onboardingSteps.map((step, index) => (
          <div
            key={index}
            className="border border-transparent rounded-lg bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] p-1"
          >
            <div
              className="flex items-center justify-between px-6 py-4 bg-black rounded-lg cursor-pointer"
              onClick={() => toggleStep(index)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{step.icon}</span>
                <h2 className="text-2xl font-semibold">{step.title}</h2>
              </div>
              <span className="text-xl">
                {activeStep === index ? "-" : "+"}
              </span>
            </div>
            {activeStep === index && (
              <div className="px-6 py-4 space-y-4 bg-[#1a1a1a] rounded-b-lg">
                <p className="text-gray-300">{step.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {step.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
