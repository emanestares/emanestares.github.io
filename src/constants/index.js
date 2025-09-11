import { texture } from "three/tsl";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: '#about'
  },
  {
    id: "work",
    title: "Work",
    href: '#work'
  },
  {
    id: "contact",
    title: "Contact",
    href: '#contact'
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "MicroCodex",
    description:
      "A CNN-based android application created using Flutter, YOLOv10, and TFLite. It automatically detects, classifies, and provide information about microbes in a prepared slide through Makerocope and front camera. The applicatoin can classify within 16 phylum classifications and store the detections.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
        path: "../src/assets/tech/flutter.png"
      },
      {
        name: "YOLO",
        color: "green-text-gradient",
        path: "../src/assets/tech/yolo.png"
      },
      {
        name: "TensorFlow Lite",
        color: "pink-text-gradient",
        path: "../src/assets/tech/tflite.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/microcodex.mp4',
    logo:'../src/assets/microcodex-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "NameBot",
    description:
      "A Discord Bot that gives random recipes, fun fact, bible verse, movie recommendation, and coded responses to certain catchphrases. Created using Python and served using Replit.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "../src/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/namebot.mp4',
    logo:'../src/assets/namebot-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "Galaan",
    description:
      "A trip planner / social media site for sharing and inviting groups for a travel plan. Can easily add people through QR and share your expeditions.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
        path: "../src/assets/tech/flutter.png"
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
        path: "../src/assets/tech/firebase.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo:'../src/assets/galaan-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "JPEG Steganography CLI App ",
    description:
      "A python CLI application that takes a JPEG as an input, encrypts a message and a key, then put the encrypted message and key inside the RGB band values by turning ASCII values to binary (LSB). This message can then be decrypted by inputting the key.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "../src/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo:'../src/assets/steg-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "8 Puzzle Game Solver",
    description:
      "A 8 game program created using Python and Custom Tkinter with weak AI solver for. It can use Breadth-first Search (BFS), Depth-first Search (DFS), or A-star algorithms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "../src/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/8puzzle.mkv',
    logo:'../src/assets/8puzzle-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "Spam message filter using Naive Bayse Classifier",
    description:
      "A python program that filters out spam messages by feeding training set of both Spam and non spam messages.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "../src/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/spamfilter.mkv',
    logo:'../src/assets/spamfilter-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "K means clustering visualizer for Wine composition",
    description:
      "A python program that visualizes K mean clustering for different parameters for wine.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "../src/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/kMeans.mkv',
    logo:'../src/assets/kMeans-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "IChoose",
    description:
      "ICS Room Reservation.  Seeks to provide a way for the building administrator and ICS director to keep track of the room reservations in the institute. Helped in both backend and front end of the project.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
        path: "../src/assets/tech/mongodb.png"
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
        path: "../src/assets/tech/express.png"
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
        path: "../src/assets/tech/reactjs.png"
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
        path: "../src/assets/tech/nodejs.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/ichoose.mkv',
    logo:'../src/assets/ichoose-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
  {
    name: "Robotics",
    description:
      "Created various autonomous robots using Arduino and LEGO MindStorm. Learned about using actuators and sensors in programming and creating actual robots.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
        path: "../src/assets/tech/arduino.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/robotics.mp4',
    logo:'../src/assets/robotics-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"../src/assets/spotlight.png",
  },
];

export { services, technologies, experiences, testimonials, projects };