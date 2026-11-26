import React from "react";

const foundersData = [
  {
    id: 1,
    name: "Sai Vamshi Gannoju",
    role: "Founder & CEO",
    image: "/sai.svg",
    bio: "Passionate about transforming ideas into reality. With expertise in AI and automation, I help businesses thrive in the modern digital world.",

    expertise: [
      "Artificial Intelligence",
      "System Architecture",
      "Product Strategy",
      "Design",
    ],
  },
  {
    id: 2,
    name: "Sharth Reddy Thandra",
    role: "Co-Founder",
    image: "/sharath.jpg",
    alt: "founder img",
    bio: "Leading innovation through technology. Specialized in video and content .",

    expertise: ["video", "Team Leadership"],
  },
];

const FounderCard = ({ founder }: { founder: (typeof foundersData)[0] }) => {
  return (
    <div className="relative group">
      {/* Floating effect background */}
      <div className="absolute -inset-0.5 border border-white/10 rounded-lg opacity-100 group-hover:border-blue-400/30 transition duration-300"></div>

      <div className="relative h-full flex flex-col bg-zinc-950 p-5 sm:p-8 rounded-lg hover:bg-zinc-900/90 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-6 relative">
            <img
              src={founder.image}
              alt={`${founder.name} - ${founder.role}`}
              className="w-full h-full object-cover ring-1 ring-white/20 group-hover:ring-blue-400/50 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/30 transition-all duration-300"></div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {founder.name}
            </h2>
            <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
              {founder.role}
            </p>
          </div>
        </div>

        <div className="flex-grow">
          <p className="text-gray-300 mb-6 text-center leading-relaxed">{founder.bio}</p>

          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-medium">
              Areas of Expertise:
            </p>
            <div className="flex flex-wrap gap-2">
              {founder.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-700 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Founders = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
          <span className="text-white">
            Meet Our Founders
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {foundersData.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
