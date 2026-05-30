export const navLinks = [
  { id: "about", title: "About", href: '#about' },
  { id: "work", title: "Work", href: '#work' },
  { id: "certifications", title: "Certifications", href: '#certifications' },
  { id: "contact", title: "Contact", href: '#contact' },
];

const projects = [
  {
    name: "MicroCodex",
    description:
      "A CNN-based Android application built with Flutter, YOLOv10, and TFLite. It automatically detects, classifies, and provides information about microbes in a prepared slide through a microscope and front camera — classifying across 16 phylum categories.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
        path: "/assets/tech/flutter.png"
      },
      {
        name: "TensorFlow Lite",
        color: "pink-text-gradient",
        path: "/assets/tech/tflite.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/microcodex.mp4',
    logo: '/assets/microcodex-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "NameBot",
    description:
      "A Discord Bot that serves random recipes, fun facts, bible verses, movie recommendations, and coded responses to catchphrases. Created using Python and hosted on Replit.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/namebot.mp4',
    logo: '/assets/namebot-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "Galaan",
    description:
      "A trip planner and social media site for sharing and inviting groups on travel plans. Easily add people via QR code and share your expeditions.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
        path: "/assets/tech/flutter.png"
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
        path: "/assets/tech/firebase.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo: '/assets/galaan-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "JPEG Steganography CLI",
    description:
      "A Python CLI app that encrypts a message and key, then hides the encrypted data inside JPEG RGB band values using LSB encoding. The message can be decrypted by providing the original key.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo: '/assets/steg-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "8 Puzzle Game Solver",
    description:
      "An 8-puzzle game built with Python and CustomTkinter featuring an AI solver. Supports Breadth-First Search (BFS), Depth-First Search (DFS), and A* algorithms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/8puzzle.mkv',
    logo: '/assets/8puzzle-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "Spam Filter — Naive Bayes",
    description:
      "A Python program that classifies spam messages using a Naive Bayes Classifier trained on a labeled dataset of spam and non-spam messages.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/spamfilter.mkv',
    logo: '/assets/spamfilter-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "K-Means Wine Clustering",
    description:
      "A Python visualization tool that applies K-Means clustering to wine composition data, allowing interactive exploration of how different chemical parameters group wines.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/kMeans.mkv',
    logo: '/assets/kMeans-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "IChoose — Room Reservation",
    description:
      "An ICS Room Reservation system that allows building admins and the ICS director to track room bookings in the institute. Contributed to both front-end and back-end development.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
        path: "/assets/tech/mongodb.png"
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
        path: "/assets/tech/express.png"
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
        path: "/assets/tech/reactjs.png"
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
        path: "/assets/tech/nodejs.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/ichoose.mkv',
    logo: '/assets/ichoose-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
  {
    name: "Robotics Projects",
    description:
      "Built various autonomous robots using Arduino and LEGO Mindstorms. Applied sensors and actuators in real programming challenges to create functional autonomous systems.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
        path: "/assets/tech/arduino.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/robotics.mp4',
    logo: '/assets/robotics-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight: "/assets/spotlight.png",
    link: "https://github.com/emanestares",
  },
];

export { projects };