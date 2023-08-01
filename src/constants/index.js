import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unity,
  java,
  csharp,
  android,
  vstudio,
  unreal,
  Gits,
  blend,
  ps,
  ui,
  cpp,
  react,
  js,
  forhonor,
  rickshaw,
  fruit,
  mindstorm,
  tts,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity Developer",
    icon: web,
  },
  {
    title: "Hyper Casual Games Developer",
    icon: mobile,
  },
  {
    title: "3D Modeling",
    icon: backend,
  },
  {
    title: "UI Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "VS Code",
    icon: vstudio,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Photoshop",
    icon: ps,
  },
  {
    name: "Blender",
    icon: blend,
  },
  {
    name: "Ui",
    icon: ui,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Git",
    icon: Gits,
  },
];

const experiences = [
  {
    title: "Unity Game Developer",
    company_name: "Team Tech Studios,",
    icon: tts,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developed and maintained Unity-based games for Android platforms.",
      "Collaborated with cross-functional teams to implement gameplay mechanics, UI elements, and in-game features.",
      "Participated in game design discussions, contributing ideas and solutions to enhance player engagement and satisfaction.",
      "Conducted regular testing and debugging to ensure high-quality and bug-free gameplay experiences.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "Tyconz Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2023",
    points: [
      "Collaborated with cross-functional teams to implement gameplay mechanics, UI elements, and in-game features.",
      "Developed and maintained Unity-based games for Android platforms.",
      "Participated in game design discussions, contributing ideas and solutions to enhance player engagement and satisfaction.",
      ],
  },
  {
    title: "Game Developer Intern",
    company_name: "Mindstorm Studios",
    icon: mindstorm,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Feb 2022",
    points: [
      "Developed a Hyper Casual Game named Kill Hit for RookieGame Jam 2021' while working in a team of 4 members including developers, designers & artists",
      "Learned 3D Modeling, Texturing, Shading & tools such as 3D Max, Character Animations and developed soft skills.",
      "Explored Game Development/Design/Art training module in Mentorship sessions",
      ],
  },
  
];
const testimonials = [ ] 
/*const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
*/
const projects = [
  {
    name: "Hyper Casual Game",
    description:
      "Developed hyper-casual games at Team Tech Studios, including popular titles like Gun Sprint Clone, Crazy fruit Sort Game, Gun Fest, and Little Kitty Doctor, among many others. These engaging games are available for download on the Play Store.",
    tags: [
      {
        name: "TeamTecStudios",
        color: "blue-text-gradient",
      },
      {
        name: "HyperCasualGaming",
        color: "green-text-gradient",
      },
      {
        name: "MobileGaming",
        color: "pink-text-gradient",
      },
    ],
    image: fruit,
    source_code_link: "https://play.google.com/store/apps/details?id=com.crazy.fruit.sort.challenge.games",
  },
  {
    name: "Casual Games",
    description:
      "Worked on casual games at Team Tech Studios, contributing to titles like Tuk Tuk Auto Garbage Truck 3D and 911 Ambulance Rescue Game. These games showcase the use of the Realistic Car Controller and have been successfully uploaded to the Play Store.",
    tags: [
      {
        name: "CasualGames",
        color: "blue-text-gradient",
      },
      {
        name: "TeamTecStudios",
        color: "green-text-gradient",
      },
      {
        name: "RealisticCarController",
        color: "pink-text-gradient",
      },
    ],
    image: rickshaw,
    source_code_link: "https://play.google.com/store/apps/details?id=com.artixson.tuk.tuk.rickshaw.garbage.truck.driving.Simulator",
  },
  {
    name: "For Honor",
    description:
      "For Honor is a Unity-based FPS multiplayer game where players battle in teams across three dynamic maps. Using Photon PUN2, one player creates server while rest joins the server as client. The game ensures seamless online connectivity, enabling thrilling matches with friends.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "multiplayer",
        color: "green-text-gradient",
      },
      {
        name: "shooting",
        color: "pink-text-gradient",
      },
    ],
    image: forhonor,
    source_code_link: "https://github.com/JunaidAhmad22?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
