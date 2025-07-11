import NPrepImage from "@/public/NPrep.png";
import FarmBridgeImage from "@/public/Farmbridge.jpg";
import EcomBackendImage from "@/public/Ecommerce.jpg";

export const navItems = [
  { name: "ABOUT", link: "#about" },
  { name: "PROJECTS", link: "#Projects" },
  { name: "TESTIMONIALS", link: "#testimonials" },
  { name: "CONTACT", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    // title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/backg.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    // spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const projects = [
  {
    id: 1,
    title: "NPrep Official Website",
    des: "Developed and maintained the official NPrep web platform from scratch using NestJS, React, and MUI, optimized for 20,000+ monthly users.",
    img: NPrepImage,
    iconLists: ["/next.svg", "/nestjs.svg", "/material-ui.svg", "/ts.svg"],
    link: "https://nprep.in",
  },
  {
    id: 2,
    title: "FarmBridge App",
    des: "Farmer-to-consumer marketplace app built using React Native, Node.js, and PostgreSQL, with authentication, cart, and order flows.",
    img: FarmBridgeImage,
    iconLists: ["/react.svg", "/node.png", "/postgresql.svg", "/sequelize.svg"],
    link: "https://github.com/sahil-soni18/Farm-Bridge-App",
  },
  {
    id: 3,
    title: "E-Commerce Backend System",
    des: "Designed scalable backend APIs for cart, product, and payment modules using FastAPI and PostgreSQL, improving query efficiency by 40%.",
    img: EcomBackendImage,
    iconLists: ["/fastapi.svg", "/postgresql.svg", "/ts.svg"],
    link: "https://github.com/sahil-soni18/StepWiseMart",
  },
  // {
  //   id: 4,
  //   title: "Chat App",
  //   des: "Real-time chat and file-sharing app developed with Firebase and React. Allows secure communication between multiple users.",
  //   img: "/chat.png",
  //   iconLists: ["/react.svg", "/tail.svg", "/firebase.png", "/js.png"],
  //   link: "https://sourabh-react-chat-app.netlify.app/",
  // },
];
export const testimonials = [
  {
    quote:
      "Sahil has been instrumental in scaling and maintaining our core education platform. His attention to detail, deep understanding of modern frameworks, and ability to take ownership of modules make him a standout contributor.",
    name: "Satyam Lohiya",
    title: "Tech Lead at NPrep Edtech",
  },
  {
    quote:
      "Sahil demonstrated a solid grip on backend development and testing frameworks. He played a vital role in optimizing our dashboard APIs and increasing the test coverage. A quick learner and problem-solver.",
    name: "Raj Sibal",
    title: "Team Manager at Ciena India",
  },
  {
    quote:
      "During his time with us, Sahil built and delivered reliable full-stack features with impressive efficiency. He also helped us adopt Docker workflows, improving our setup pipelines. Highly dependable and sharp.",
    name: "Manish Kumar",
    title: "Project Manager at Good Tech Mind",
  },
  {
    quote:
      "Sahil brought creative and performance-focused thinking to our web development team. His strong foundation in system design and modern JS frameworks helped streamline complex workflows.",
    name: "Richa Sharma",
    title: "HR at DotSquare",
  },
];
export const skills = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/next.svg",
    url: "https://nextjs.org",
  },
  {
    id: 3,
    name: "React",
    img: "/re.svg",
    url: "https://reactjs.org",
  },
  {
    id: 4,
    name: "Node.js",
    img: "/node.png",
    url: "https://nodejs.org",
  },
  {
    id: 5,
    name: "Express.js",
    img: "/ex.png",
    url: "https://expressjs.com",
  },
  {
    id: 6,
    name: "NestJS",
    img: "/nestjs.svg",
    url: "https://nestjs.com",
  },
  {
    id: 7,
    name: "FastAPI",
    img: "/fastapi.svg",
    url: "https://fastapi.tiangolo.com",
  },
  {
    id: 8,
    name: "JavaScript",
    img: "/js.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 9,
    name: "TypeScript",
    img: "/ts.svg",
    url: "https://www.typescriptlang.org",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    img: "/tail.svg",
    url: "https://tailwindcss.com",
  },
  {
    id: 11,
    name: "MUI",
    img: "/material-ui.svg",
    url: "https://mui.com",
  },
  {
    id: 12,
    name: "Formik",
    img: "/Formik.svg",
    url: "https://formik.org",
  },
  {
    id: 13,
    name: "Redux Toolkit",
    img: "/redux.svg",
    url: "https://redux-toolkit.js.org",
  },
  {
    id: 14,
    name: "Firebase",
    img: "/firebase.png",
    url: "https://firebase.google.com",
  },
  {
    id: 15,
    name: "MongoDB",
    img: "/mongo.png",
    url: "https://www.mongodb.com",
  },
  {
    id: 16,
    name: "PostgreSQL",
    img: "/postgresql.svg",
    url: "https://www.postgresql.org",
  },
  {
    id: 17,
    name: "Docker",
    img: "/dock.svg",
    url: "https://www.docker.com",
  },
  {
    id: 18,
    name: "AWS",
    img: "/aws.svg",
    url: "https://aws.amazon.com",
  },
  {
    id: 19,
    name: "Figma",
    img: "/figma.png",
    url: "https://www.figma.com",
  },
  {
    id: 20,
    name: "Linux",
    img: "/linux.png",
    url: "https://www.kernel.org",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer Intern",
    desc: "Assisted in the development of website for GoodTechMind.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    desc: "Designed and developed website for both Desktop & Mobile platforms for Goameonglow.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    desc: "Developed and maintained user-facing features using modern web technologies for Dotsquare company.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sahil-soni18",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Sahil_a18?t=NRbmB2_q__AvZ0JjbGW2Hw&s=08",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sahil-soni-b64a75241/",
  },
];
