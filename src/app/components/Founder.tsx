// // import React from "react";

// // const foundersData = [
// //   {
// //     id: 1,
// //     name: "Sai Vamshi Gannoju",
// //     role: "Technical Founder & CEO",
// //     image: "/sai.svg",
// //     bio: "Passionate about transforming ideas into reality. With expertise in AI and automation, I help businesses thrive in the modern digital world.",
// //     email: "john@domain.com",
// //     expertise: [
// //       "Artificial Intelligence",
// //       "System Architecture",
// //       "Product Strategy",
// //     ],
// //   },
// //   {
// //     id: 2,
// //     name: "Sharth Reddy Thandra",
// //     role: "Co-Founder & CTO",
// //     image: "/api/placeholder/160/160",
// //     bio: "Leading innovation through technology. Specialized in scalable architecture and blockchain solutions with 10+ years of experience.",
// //     email: "jane@domain.com",
// //     expertise: ["Cloud Infrastructure", "Team Leadership"],
// //   },
// // ];

// // const FounderCard = ({ founder }) => {
// //   return (
// //     <div className="relative group">
// //       {/* Floating effect background */}
// //       <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>

// //       <div className="relative h-full flex flex-col bg-gray-900 p-8 rounded-lg hover:bg-gray-800/90 transition-all duration-300 transform hover:-translate-y-1">
// //         <div className="flex flex-col items-center">
// //           <div className="w-32 h-32 mb-6 relative">
// //             <img
// //               src={founder.image}
// //               alt={`${founder.name} - ${founder.role}`}
// //               className="w-full h-full object-cover ring-2 ring-blue-500 group-hover:ring-purple-500 transition-all duration-300"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/30 transition-all duration-300"></div>
// //           </div>

// //           <div className="text-center mb-6">
// //             <h2 className="text-2xl font-bold text-white mb-2">
// //               {founder.name}
// //             </h2>
// //             <p className="text-blue-400 font-medium group-hover:text-purple-400 transition-colors duration-300">
// //               {founder.role}
// //             </p>
// //           </div>
// //         </div>

// //         <div className="flex-grow">
// //           <p className="text-gray-300 mb-6 text-center">{founder.bio}</p>

// //           <div className="space-y-2">
// //             <p className="text-sm text-gray-400 font-medium">
// //               Areas of Expertise:
// //             </p>
// //             <div className="flex flex-wrap gap-2">
// //               {founder.expertise.map((skill, index) => (
// //                 <span
// //                   key={index}
// //                   className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-700 transition-colors duration-300"
// //                 >
// //                   {skill}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-6 text-center">
// //           <a
// //             href={`mailto:${founder.email}`}
// //             className="inline-flex items-center justify-center bg-blue-600/80 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
// //           >
// //             Connect via Email
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Founders = () => {
// //   return (
// //     <div className="min-h-screen bg-black text-white">
// //       <div className="max-w-7xl mx-auto px-6 py-20">
// //         <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
// //           <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //             Meet Our Founders
// //           </span>
// //         </h1>

// //         <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
// //           {foundersData.map((founder) => (
// //             <FounderCard key={founder.id} founder={founder} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Founders;
// import Image from "next/image";
// import { FC } from "react";

// const WhoAreWe: FC = () => {
//   return (
//     <div className={`${s.container} who-we-are-main`} data-aos="who-we-are">
//       <div className={s.team}>
//         <div
//           className={s.thumnailWrapper}
//           data-aos="fade-in"
//           data-aos-delay="0"
//           data-aos-anchor=".who-we-are-main"
//         >
//           <Image
//             src="/sai.svg"
//             width={1300}
//             height={770}
//             objectFit="cover"
//             alt=""
//           />
//         </div>
//         <div className={`${s.titleWrapper} titleWrapper`}>
//           {Array(4)
//             .fill("WHO ARE WE")
//             .map((item, i) => (
//               <span className={`${s.title} title blockRevealer`} key={i}>
//                 {item}
//               </span>
//             ))}
//         </div>
//       </div>
//       <div className="container">
//         <div className={`${s.intro} who-are-we-intro`}>
//           <span data-aos="fade-up" data-aos-anchor=".who-are-we-intro">
//             {`We are everywhere.`}
//           </span>
//           <span
//             data-aos="fade-up"
//             data-aos-delay="50"
//             data-aos-anchor=".who-are-we-intro"
//           >
//             We want to build a new world, with you in the middle.
//             <br /> Self, Sovereign, Custodian.
//           </span>
//           <span
//             data-aos="fade-up"
//             data-aos-delay="100"
//             data-aos-anchor=".who-are-we-intro"
//           >
//             {`Also, we speak satire, house & techno.`}
//           </span>
//         </div>
//         <div className={s.details}>
//           <div className="row">
//             <div className="col-md-6">
//               <p data-aos="fade-up">
//                 Permissionless is committed to build public infrastructure for
//                 the new web. We advocate technology as a medium for solving the
//                 most complex problems of mankind. Annoyed that instead of using
//                 this to enable various efficient trustless systems with open
//                 access, profit making become the main focus. We would like to
//                 change that, now.
//               </p>
//             </div>
//             <div className="col-md-6" data-aos="fade-up">
//               <span className={s.quote}>
//                 “The Internet is freedom from the limitations of land.”
//               </span>
//               {/* <p>
//                 Eu viverra morbi nec enim. Amet integer lobortis vitae velit id
//                 tincidunt. Nulla pellentesque aliquet at volutpat. Ut tortor
//                 est, at blandit et pellentesque. Urna ut nulla leo vel
//                 suspendisse id platea id lorem.
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoAreWe;
import React from "react";

const foundersData = [
  {
    id: 1,
    name: "Sai Vamshi Gannoju",
    role: "Technical Founder & CEO",
    image: "/sai.svg",
    bio: "Passionate about transforming ideas into reality. With expertise in AI and automation, I help businesses thrive in the modern digital world.",
    expertise: [
      "Artificial Intelligence",
      "System Architecture",
      "Product Strategy",
    ],
  },
  {
    id: 2,
    name: "Sharth Reddy Thandra",
    role: "Co-Founder & CTO",
    image: "/sharth.svg",
    bio: "Leading innovation through technology. Specialized in scalable architecture and blockchain solutions with 10+ years of experience.",
    expertise: ["Cloud Infrastructure", "Team Leadership"],
  },
];

const Founders = () => {
  return (
    <div
      className="founders-main relative min-h-screen bg-black text-white"
      data-aos="fade-in"
    >
      {/* First Founder Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto">
          <div className="team mb-20">
            <div
              className="thumbnail-wrapper relative w-full h-[70vh] overflow-hidden"
              data-aos="fade-in"
              data-aos-delay="0"
              data-aos-anchor=".founders-main"
            >
              <img
                src={foundersData[0].image}
                alt={foundersData[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="title-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {Array(4)
                .fill(foundersData[0].name.toUpperCase())
                .map((item, i) => (
                  <span
                    className="title block text-4xl md:text-6xl font-bold text-white mb-2 text-center"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="intro-section max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <span className="block text-xl mb-4" data-aos="fade-up">
                {foundersData[0].role}
              </span>
              <span
                className="block text-lg mb-6"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {foundersData[0].bio}
              </span>
              <div
                className="flex flex-wrap gap-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {foundersData[0].expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Founder Section */}
      <div className="relative overflow-hidden mt-32">
        <div className="container mx-auto">
          <div className="team mb-20">
            <div
              className="thumbnail-wrapper relative w-full h-[70vh] overflow-hidden"
              data-aos="fade-in"
              data-aos-delay="0"
              data-aos-anchor=".founders-main"
            >
              <img
                src={foundersData[1].image}
                alt={foundersData[1].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="title-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {Array(4)
                .fill(foundersData[1].name.toUpperCase())
                .map((item, i) => (
                  <span
                    className="title block text-4xl md:text-6xl font-bold text-white mb-2 text-center"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="intro-section max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <span className="block text-xl mb-4" data-aos="fade-up">
                {foundersData[1].role}
              </span>
              <span
                className="block text-lg mb-6"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {foundersData[1].bio}
              </span>
              <div
                className="flex flex-wrap gap-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {foundersData[1].expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
