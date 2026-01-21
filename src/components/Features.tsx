
// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Users, Play, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface FeatureCardProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   icon: React.ReactNode;
//   image: string;
//   imageAlt: string;
//   color: 'purple' | 'blue' | 'orange' | 'green';
//   expandedContent?: React.ReactNode;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   title,
//   subtitle,
//   description,
//   icon,
//   image,
//   imageAlt,
//   color
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const colors = {
//     purple: { text: 'text-rebuttl-purple', iconBg: 'bg-rebuttl-purple/10', border: 'border-rebuttl-purple/20' },
//     blue: { text: 'text-rebuttl-blue', iconBg: 'bg-rebuttl-blue/10', border: 'border-rebuttl-blue/20' },
//     orange: { text: 'text-rebuttl-orange', iconBg: 'bg-rebuttl-orange/10', border: 'border-rebuttl-orange/20' },
//     green: { text: 'text-green-600', iconBg: 'bg-green-100', border: 'border-green-200' },
//   }[color];

//   return (
//     <div className="group h-[340px] relative"> {/* Fixed Height Container */}
//       <Card className={`h-full bg-white ${colors.border} transition-all duration-300 overflow-hidden flex flex-col border shadow-sm hover:shadow-md`}>
//         <CardContent className="p-6 h-full flex flex-col relative">

//           {/* Header Section */}
//           <div className="flex items-center gap-4 mb-4 relative min-h-[48px]">
//             <div className={`p-3 rounded-xl ${colors.iconBg} ${colors.text} shrink-0`}>
//               {icon}
//             </div>

//             <div className="flex items-center gap-2 flex-1 relative min-w-0">
//               <h3 className="text-xl font-bold text-gray-900 whitespace-nowrap">
//                 {title}
//               </h3>

//               {/* Sliding Arrow (revealed on expand) */}
//               <div
//                 className={`transition-all duration-[200ms] flex items-center ${isExpanded
//                     ? 'translate-x-0 opacity-100 rotate-90'
//                     : '-translate-x-4 opacity-0 pointer-events-none rotate-0'
//                   }`}
//                 style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
//               >
//                 <ChevronDown className={`w-5 h-5 ${colors.text}`} />
//               </div>

//               {/* Inline Bullet Section (revealed on expand) */}
//               <div
//                 className={`flex-1 transition-all duration-[200ms] ${isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 pointer-events-none'
//                   }`}
//                 style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
//               >
//                 <div className={`text-sm font-semibold ${colors.text} flex items-center gap-2 italic`}>
//                   <div className={`w-1 h-1 rounded-full ${colors.text} bg-current`} />
//                   {subtitle}
//                 </div>
//               </div>
//             </div>

//             {/* Expand Trigger Arrow (Collapses on expand) */}
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className={`p-2 transition-all duration-[200ms] ${isExpanded ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100 text-gray-400 hover:text-rebuttl-blue'
//                 }`}
//               style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
//               aria-label="Expand Feature"
//             >
//               <ChevronDown className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Description Section (Fades Out) */}
//           <div className="relative h-20 mb-4">
//             <div
//               className={`absolute inset-0 transition-all duration-[150ms] ${isExpanded ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
//                 }`}
//               style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
//             >
//               <p className="text-gray-600 line-clamp-3">
//                 {description}
//               </p>
//             </div>

//             {/* Detailed Bullets (Fades In) */}
//             <div
//               className={`absolute inset-0 transition-all duration-[150ms] flex flex-col justify-start gap-2 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
//                 }`}
//               style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '50ms' }}
//             >
//               <div className="flex items-center gap-2 text-sm text-gray-700">
//                 <div className={`w-1.5 h-1.5 rounded-full ${colors.text} shrink-0 bg-current`} />
//                 <span>Personalized EQ roadmap</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-gray-700">
//                 <div className={`w-1.5 h-1.5 rounded-full ${colors.text} shrink-0 bg-current`} />
//                 <span>Team velocity tracking</span>
//               </div>
//               <button
//                 className={`text-sm font-bold mt-1 text-left ${colors.text} hover:underline w-fit`}
//                 onClick={(e) => { e.stopPropagation(); }}
//               >
//                 Learn more
//               </button>
//             </div>
//           </div>

//           {/* Fixed Bottom Graphic */}
//           <div className="mt-auto relative w-full h-32 md:h-36 flex items-end justify-center">
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none z-10" />
//             <img
//               src={image}
//               alt={imageAlt}
//               className="w-full h-full object-contain object-bottom transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Invisible overlay to allow clicking anywhere on the card to expand if not and collapse if expanded */}
//       <button
//         className="absolute inset-0 z-0"
//         onClick={() => setIsExpanded(!isExpanded)}
//         aria-hidden="true"
//       />
//     </div>
//   );
// };

// const Features: React.FC = () => {
//   return (
//     <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-lightBg to-white">
//       <div className="container mx-auto px-4">
//         <div id="explainer" className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
//             The Complete EQ Platform for Modern Teams
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Complete emotional intelligence platform for modern teams.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
//           {/* A. Lumi6 Discover */}
//           <FeatureCard
//             title="Discover"
//             subtitle="Assessment"
//             description="Assessments that reveal strengths and gaps with precision."
//             icon={<Users className="w-8 h-8 text-rebuttl-purple" />}
//             image="/images/optimized/lumi6-discover.webp"
//             imageAlt="Lumi6 Discover - Assessment"
//             color="purple"
//             expandedContent={
//               <div className="space-y-2 text-sm text-gray-600">
//                 <p className="font-semibold text-gray-800 mb-2">Key Features:</p>
//                 <ul className="space-y-1">
//                   <li>• Industry-specific scenarios</li>
//                   <li>• 12-competency EQ model</li>
//                   <li>• Real-time insights</li>
//                   <li>• Team benchmarking</li>
//                 </ul>
//               </div>
//             }
//           />

//           {/* B. Lumi6 Insights */}
//           <FeatureCard
//             title="Insights"
//             subtitle="Reports & Analysis"
//             description="Reports that turn data into clear growth paths."
//             icon={<Play className="w-8 h-8 text-rebuttl-blue" />}
//             image="/images/optimized/lumi6-insights.webp"
//             imageAlt="Lumi6 Insights - Reports & Analysis"
//             color="blue"
//             expandedContent={
//               <div className="space-y-2 text-sm text-gray-600">
//                 <p className="font-semibold text-gray-800 mb-2">Key Features:</p>
//                 <ul className="space-y-1">
//                   <li>• Personalized reports</li>
//                   <li>• Team dashboards</li>
//                   <li>• Progress tracking</li>
//                   <li>• ROI measurement</li>
//                 </ul>
//               </div>
//             }
//           />

//           {/* C. Lumi6 Grow */}
//           <FeatureCard
//             title="Grow"
//             subtitle="Learning Plan"
//             description="Personalized learning plans that build habits over time."
//             icon={<MessageSquare className="w-8 h-8 text-rebuttl-orange" />}
//             image="/images/optimized/lumi6-grow.webp"
//             imageAlt="Lumi6 Grow - Learning Plan"
//             color="orange"
//             expandedContent={
//               <div className="space-y-2 text-sm text-gray-600">
//                 <p className="font-semibold text-gray-800 mb-2">Key Features:</p>
//                 <ul className="space-y-1">
//                   <li>• Micro-learning modules</li>
//                   <li>• Adaptive curriculum</li>
//                   <li>• Progress milestones</li>
//                   <li>• Multi-format content</li>
//                 </ul>
//               </div>
//             }
//           />

//           {/* D. Lumi6 Flow */}
//           <FeatureCard
//             title="Flow"
//             subtitle="Workplace Nudges"
//             description="Real-time nudges that reinforce EQ where work happens."
//             icon={<MessageSquare className="w-8 h-8 text-green-600" />}
//             image="/images/optimized/lumi6-flow.webp"
//             imageAlt="Lumi6 Flow - Workplace Nudges"
//             color="green"
//             expandedContent={
//               <div className="space-y-2 text-sm text-gray-600">
//                 <p className="font-semibold text-gray-800 mb-2">Key Features:</p>
//                 <ul className="space-y-1">
//                   <li>• Context-aware nudges</li>
//                   <li>• Meeting preparation</li>
//                   <li>• Conflict resolution</li>
//                   <li>• Team dynamics</li>
//                 </ul>
//               </div>
//             }
//           />
//         </div>

//         <div className="text-center mt-12">
//           <a
//             href="https://app.lumi6.com/signup"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-rebuttl-blue text-white px-6 py-3 rounded-md hover:bg-rebuttl-blue/90 transition-colors"
//           >
//             Start Your Free EQ Report
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


// import React, { useState } from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Users, Play, MessageSquare, ChevronRight } from 'lucide-react'

// interface FeatureCardProps {
//   title: string
//   description: string
//   icon: React.ReactNode
//   image: string
//   imageAlt: string
//   color: 'purple' | 'blue' | 'orange' | 'green'
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   title,
//   description,
//   icon,
//   image,
//   imageAlt,
//   color
// }) => {
//   const [expanded, setExpanded] = useState(false)

//   const palette = {
//     purple: {
//       text: 'text-rebuttl-purple',
//       border: 'border-rebuttl-purple/20',
//       bg: 'bg-rebuttl-purple/10'
//     },
//     blue: {
//       text: 'text-rebuttl-blue',
//       border: 'border-rebuttl-blue/20',
//       bg: 'bg-rebuttl-blue/10'
//     },
//     orange: {
//       text: 'text-rebuttl-orange',
//       border: 'border-rebuttl-orange/20',
//       bg: 'bg-rebuttl-orange/10'
//     },
//     green: {
//       text: 'text-green-600',
//       border: 'border-green-200',
//       bg: 'bg-green-100'
//     }
//   }[color]

//   return (
//     <div className="relative h-[420px] group">
//       <Card className={`h-full bg-white ${palette.border} border overflow-hidden`}>
//         <CardContent className="p-6 h-full relative flex flex-col">

//           {/* HEADER ROW */}
//           <div className="relative flex items-center gap-4 min-h-[56px]">
//             <div className={`p-3 rounded-xl ${palette.bg} ${palette.text}`}>
//               {icon}
//             </div>

//             <div className="relative">
//               <h3 className="text-xl font-bold text-gray-900">
//                 {title}
//               </h3>
//               {/* colored subtitle restored */}
//               <span className={`text-sm font-medium ${palette.text}`}>
//                 Assessment
//               </span>
//             </div>

//             {/* ARROW – slides LEFT to title */}
//             <ChevronRight
//               className={`
//                 absolute right-0 top-1/2 -translate-y-1/2
//                 w-5 h-5 ${palette.text}
//                 transition-transform duration-300
//                 ${expanded ? '-translate-x-[220px]' : 'translate-x-0'}
//               `}
//             />
//           </div>

//           {/* DESCRIPTION (disappears but keeps space) */}
//           <div className="relative h-[48px] mt-3">
//             <p
//               className={`
//                 absolute inset-0 text-gray-600 transition-all duration-200
//                 ${expanded ? 'opacity-0 -translate-y-2' : 'opacity-100'}
//               `}
//             >
//               {description}
//             </p>
//           </div>

//           {/* TOP-RIGHT BULLETS (aligned with header) */}
//           <div
//             className={`
//               absolute top-6 right-6 w-[40%]
//               transition-all duration-300
//               ${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 pointer-events-none'}
//             `}
//           >
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-center gap-2">
//                 <span className={`w-1.5 h-1.5 rounded-full bg-current ${palette.text}`} />
//                 Personalized EQ roadmap
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className={`w-1.5 h-1.5 rounded-full bg-current ${palette.text}`} />
//                 Team velocity tracking
//               </li>
//             </ul>

//             <button className={`mt-2 text-sm font-semibold ${palette.text} hover:underline`}>
//               Learn more
//             </button>
//           </div>

//           {/* IMAGE – restored size */}
//           <div className="mt-auto h-[190px] flex items-end justify-center">
//             <img
//               src={image}
//               alt={imageAlt}
//               className="h-full object-cover grayscale opacity-60
//                 transition-all duration-500
//                 group-hover:grayscale-0 group-hover:opacity-100"
//             />
//           </div>

//           {/* CLICK OVERLAY */}
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="absolute inset-0"
//             aria-label="Toggle feature"
//           />
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


// const Features: React.FC = () => {
//   return (
//     <section
//       id="features"
//       className="py-20 bg-gradient-to-b from-rebuttl-lightBg to-white"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
//             The Complete EQ Platform for Modern Teams
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Complete emotional intelligence platform for modern teams.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <FeatureCard
//             title="Discover"
//             description="Assessments that reveal strengths and gaps with precision."
//             icon={<Users className="w-8 h-8" />}
//             image="/images/optimized/lumi6-discover.webp"
//             imageAlt="Discover"
//             color="purple"
//           />

//           <FeatureCard
//             title="Insights"
//             description="Reports that turn data into clear growth paths."
//             icon={<Play className="w-8 h-8" />}
//             image="/images/optimized/lumi6-insights.webp"
//             imageAlt="Insights"
//             color="blue"
//           />

//           <FeatureCard
//             title="Grow"
//             description="Personalized learning plans that build habits over time."
//             icon={<MessageSquare className="w-8 h-8" />}
//             image="/images/optimized/lumi6-grow.webp"
//             imageAlt="Grow"
//             color="orange"
//           />

//           <FeatureCard
//             title="Flow"
//             description="Real-time nudges that reinforce EQ where work happens."
//             icon={<MessageSquare className="w-8 h-8" />}
//             image="/images/optimized/lumi6-flow.webp"
//             imageAlt="Flow"
//             color="green"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Features


// import React, { useState } from "react";
// import { Users, Play, MessageSquare, ChevronDown } from "lucide-react";

// type Feature = {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   bullets: string[];
//   image: string;
//   icon: React.ReactNode;
//   accent: string;
// };

// const FEATURES: Feature[] = [
//   {
//     id: "discover",
//     title: "Discover",
//     subtitle: "Assessment",
//     description: "Assessments that reveal strengths and gaps with precision.",
//     bullets: [
//       "Industry-specific scenarios",
//       "12-competency EQ model",
//       "Real-time insights",
//     ],
//     image: "/images/optimized/lumi6-discover.webp",
//     icon: <Users className="w-6 h-6" />,
//     accent: "text-rebuttl-purple",
//   },
//   {
//     id: "insights",
//     title: "Insights",
//     subtitle: "Reports & Analysis",
//     description: "Reports that turn data into clear growth paths.",
//     bullets: ["Personalized reports", "Team dashboards", "ROI tracking"],
//     image: "/images/optimized/lumi6-insights.webp",
//     icon: <Play className="w-6 h-6" />,
//     accent: "text-rebuttl-blue",
//   },
//   {
//     id: "grow",
//     title: "Grow",
//     subtitle: "Learning Plan",
//     description: "Personalized learning plans that build habits over time.",
//     bullets: ["Micro-learning modules", "Adaptive curriculum", "Milestones"],
//     image: "/images/optimized/lumi6-grow.webp",
//     icon: <MessageSquare className="w-6 h-6" />,
//     accent: "text-rebuttl-orange",
//   },
//   {
//     id: "flow",
//     title: "Flow",
//     subtitle: "Workplace Nudges",
//     description: "Real-time nudges that reinforce EQ where work happens.",
//     bullets: ["Context-aware nudges", "Meeting prep", "Conflict resolution"],
//     image: "/images/optimized/lumi6-flow.webp",
//     icon: <MessageSquare className="w-6 h-6" />,
//     accent: "text-green-600",
//   },
// ];

// export default function Features() {
//   const [open, setOpen] = useState<string | null>(null);

//   return (
//     <section id="features" className="py-20 bg-gradient-to-b from-rebuttl-lightBg to-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {FEATURES.map((f) => {
//             const isOpen = open === f.id;

//             return (
//               <div
//                 key={f.id}
//                 onClick={() => setOpen(isOpen ? null : f.id)}
//                 className="relative rounded-xl border bg-white p-6 cursor-pointer overflow-hidden"
//               >
//                 {/* HEADER */}
//                 <div className="flex items-start justify-between">
//                   <div className="flex gap-4">
//                     <div className={`p-3 rounded-lg bg-gray-100 ${f.accent}`}>
//                       {f.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold">
//                         {f.title}</h3>
//                       <p className={`text-sm ${f.accent}`}>{f.subtitle}</p>
//                     </div>
//                   </div>

//                   {/* ARROW */}
//                   <ChevronDown
//                     className={`w-5 h-5 transition-all duration-300
//                       ${isOpen ? "rotate-90 translate-x-[-8px]" : ""}
//                     `}
//                   />
//                 </div>

//                 {/* BODY */}
//                 <div className="relative mt-4 min-h-[220px]">
//                   {/* DESCRIPTION */}
//                   <p
//                     className={`text-gray-600 transition-opacity duration-300
//                       ${isOpen ? "opacity-0" : "opacity-100"}
//                     `}
//                   >
//                     {f.description}
//                   </p>

//                   {/* IMAGE */}
//                   <div className="mt-4 relative w-full aspect-[4/3]">
//                     <img
//                       src={f.image}
//                       alt={f.title}
//                       className={`w-full h-full object-contain transition-all duration-300 absolute inset-0 grayscale group-hover:grayscale-0`}
//                     />

//                     {/* MICRO TAG */}
//                     {/* <span
//                       className={`absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-white shadow ${f.accent}`}
//                     >
//                       Interactive
//                     </span> */}
//                     <div className="
//   absolute bottom-4 left-4
//   flex gap-2
//   opacity-0 translate-y-2
//   transition-all duration-300
//   group-hover:opacity-100 group-hover:translate-y-0
// ">
//                       <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
//                         EQ Assessment
//                       </span>
//                       <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
//                         Interactive
//                       </span>
//                     </div>

//                   </div>

//                   {/* BULLET OVERLAY (RIGHT SIDE) */}
//                   <ul
//                     className={`absolute top-0 right-0 w-[45%] space-y-3 text-sm
//                       transition-all duration-300
//                       ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
//                       hidden md:block
//                     `}
//                   >
//                     {f.bullets.map((b) => (
//                       <li key={b} className="flex gap-2">
//                         <span className={`w-1.5 h-1.5 mt-2 rounded-full ${f.accent}`} />
//                         {b}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             href="https://app.lumi6.com/signup"
//             className="inline-block bg-rebuttl-blue text-white px-6 py-3 rounded-md hover:bg-rebuttl-blue/90"
//           >
//             Start Your Free EQ Report
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Play, MessageSquare, ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  color: 'purple' | 'blue' | 'orange' | 'green';
  bullets: string[];
  tags: { text: string; position: 'top' | 'bottom' }[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  image,
  imageAlt,
  color,
  bullets,
  tags
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    purple: {
      text: 'text-rebuttl-purple',
      iconBg: 'bg-rebuttl-purple/10',
      border: 'border-rebuttl-purple/30',
      hoverBorder: 'hover:border-rebuttl-purple',
      tagBg: 'bg-rebuttl-purple',
      bgGradient: 'from-white to-gray-50',
      imageBg: 'bg-rebuttl-purple/5',
      imageHoverBg: 'group-hover:bg-rebuttl-purple/10'
    },
    blue: {
      text: 'text-rebuttl-blue',
      iconBg: 'bg-rebuttl-blue/10',
      border: 'border-rebuttl-blue/30',
      hoverBorder: 'hover:border-rebuttl-blue',
      tagBg: 'bg-rebuttl-blue',
      bgGradient: 'from-white to-gray-50',
      imageBg: 'bg-rebuttl-blue/5',
      imageHoverBg: 'group-hover:bg-rebuttl-blue/10'
    },
    orange: {
      text: 'text-rebuttl-orange',
      iconBg: 'bg-rebuttl-orange/10',
      border: 'border-rebuttl-orange/30',
      hoverBorder: 'hover:border-rebuttl-orange',
      tagBg: 'bg-rebuttl-orange',
      bgGradient: 'from-white to-gray-50',
      imageBg: 'bg-rebuttl-orange/5',
      imageHoverBg: 'group-hover:bg-rebuttl-orange/10'
    },
    green: {
      text: 'text-green-600',
      iconBg: 'bg-green-100',
      border: 'border-green-300',
      hoverBorder: 'hover:border-green-400',
      tagBg: 'bg-green-600',
      bgGradient: 'from-white to-gray-50',
      imageBg: 'bg-green-50',
      imageHoverBg: 'group-hover:bg-green-100'
    },
  }[color];

  return (
    <div className="group relative h-full">
      <Card className={`feature-card bg-gradient-to-b ${colors.bgGradient} ${colors.border} ${colors.hoverBorder} transition-all duration-300 h-full pointer-events-none overflow-visible`}>
        <CardContent className="p-0 h-full flex flex-col relative">
          <div className="p-6 relative">
            <div className="flex items-center gap-4 mb-4">
              {/* Icon */}
              <div className={`${colors.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:${colors.iconBg.replace('/10', '/20')} transition-all duration-300 flex-shrink-0`}>
                {icon}
              </div>

              {/* Title and subtitle section */}
              <div className="flex-1 min-w-0 relative">
                <div className="flex items-center gap-2 mb-2 relative">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <div className={`text-sm font-medium ${colors.text} whitespace-nowrap`}>{subtitle}</div>

                  {/* Arrow - slides left toward subtitle on expand */}
                  <ChevronRight
                    className={`w-5 h-5 ${colors.text} ml-auto transition-all duration-500 ease-out flex-shrink-0 ${isExpanded ? '-translate-x-[180px] opacity-0' : 'translate-x-0 opacity-100'
                      }`}
                  />
                </div>

                {/* Description - fixed height container to prevent layout shift */}
                <div className="h-10 relative overflow-hidden">
                  <p className={`text-gray-600 text-sm absolute inset-0 transition-all duration-300 ${isExpanded ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                    }`}>
                    {description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bullets - positioned absolutely in top-right corner */}
            <div className={`absolute top-6 right-6 w-[45%] transition-all duration-500 ease-out ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
              }`}>
              <ul className="space-y-2">
                {bullets.slice(0, 3).map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-700"
                    style={{
                      transitionDelay: `${idx * 100}ms`,
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'all 0.4s ease-out'
                    }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${colors.text} bg-current shrink-0`} />
                    <span className="leading-tight">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image section - fixed size, not affected by expand */}
          <div className={`mt-auto ${colors.imageBg} p-2 rounded-b-2xl ${colors.imageHoverBg} transition-all duration-300`}>
            <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-lg">
              {/* Fallback placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-sm font-medium">{title}</div>
                </div>
              </div>

              {/* Actual image */}
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${colors.text.replace('text-', 'from-')}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Tags appear on hover */}
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className={`absolute ${tag.position === 'top' ? 'top-2 right-2' : 'bottom-2 left-2'
                    } ${colors.tagBg} text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}
                  style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Click overlay */}
      <button
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={`Toggle ${title} details`}
      />
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-lightBg to-white">
      <div className="container mx-auto px-4">
        <div id="explainer" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
              The Complete EQ Platform for Modern Teams
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Complete emotional intelligence platform for modern teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* A. Lumi6 Discover */}
          <FeatureCard
            title="Discover"
            subtitle="Assessment"
            description="Assessments that reveal strengths and gaps with precision."
            icon={<Users className="w-8 h-8 text-rebuttl-purple" />}
            image="/images/optimized/lumi6-discover.webp"
            imageAlt="Lumi6 Discover - Assessment"
            color="purple"
            bullets={[
              "Industry-specific scenarios",
              "12-competency EQ model",
              "Real-time insights"
            ]}
            tags={[
              { text: "Interactive", position: "top" },
              { text: "EQ Assessment", position: "bottom" }
            ]}
          />

          {/* B. Lumi6 Insights */}
          <FeatureCard
            title="Insights"
            subtitle="Reports & Analysis"
            description="Reports that turn data into clear growth paths."
            icon={<Play className="w-8 h-8 text-rebuttl-blue" />}
            image="/images/optimized/lumi6-insights.webp"
            imageAlt="Lumi6 Insights - Reports & Analysis"
            color="blue"
            bullets={[
              "Personalized reports",
              "Team dashboards",
              "Progress tracking"
            ]}
            tags={[
              { text: "Analytics", position: "top" },
              { text: "EQ Report", position: "bottom" }
            ]}
          />

          {/* C. Lumi6 Grow */}
          <FeatureCard
            title="Grow"
            subtitle="Learning Plan"
            description="Personalized learning plans that build habits over time."
            icon={<MessageSquare className="w-8 h-8 text-rebuttl-orange" />}
            image="/images/optimized/lumi6-grow.webp"
            imageAlt="Lumi6 Grow - Learning Plan"
            color="orange"
            bullets={[
              "Micro-learning modules",
              "Adaptive curriculum",
              "Progress milestones"
            ]}
            tags={[
              { text: "Learning", position: "top" },
              { text: "Development", position: "bottom" }
            ]}
          />

          {/* D. Lumi6 Flow */}
          <FeatureCard
            title="Flow"
            subtitle="Workplace Nudges"
            description="Real-time nudges that reinforce EQ where work happens."
            icon={<MessageSquare className="w-8 h-8 text-green-600" />}
            image="/images/optimized/lumi6-flow.webp"
            imageAlt="Lumi6 Flow - Workplace Nudges"
            color="green"
            bullets={[
              "Context-aware nudges",
              "Meeting preparation",
              "Conflict resolution"
            ]}
            tags={[
              { text: "Smart", position: "top" },
              { text: "Nudges", position: "bottom" }
            ]}
          />
        </div>

        <div className="text-center mt-12">
          <a
            href="https://app.lumi6.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rebuttl-blue text-white px-6 py-3 rounded-md hover:bg-rebuttl-blue/90 transition-colors"
          >
            Start Your Free EQ Report
          </a>
        </div>
      </div>

      {/* <style>{`
        @keyframes drawUnderline {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style> */}
    </section>
  );
};

export default Features;