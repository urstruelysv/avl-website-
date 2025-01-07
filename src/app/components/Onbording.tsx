"use client"; // Ensures client-side rendering

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
  return (
    <div className="bg-black text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-16">How We Do It</h1>
      <div className="space-y-16 max-w-6xl mx-auto">
        {onboardingSteps.map((step, index) => (
          <div
            key={index}
            className="rounded-xl bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] p-1 shadow-lg"
          >
            <div className="bg-black p-8 rounded-xl">
              <div className="flex items-center space-x-6 mb-6">
                <span className="text-5xl">{step.icon}</span>
                <h2 className="text-4xl font-bold">{step.title}</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">{step.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {step.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
