import { texture } from "three/tsl";
export const navLinks = [
  { id: "about", title: "About", href: '#about' },
  { id: "experience", title: "Experience", href: '#experience' },
  { id: "work", title: "Projects", href: '#work' },
  { id: "certifications", title: "Certifications", href: '#certifications' },
  { id: "contact", title: "Contact", href: '#contact' },
];

export const workExperiences = [
  {
    id: 1,
    company: "Vertere Global Solutions",
    role: "Java Programmer / Analyst",
    period: "March 2026 – Present",
    type: "Full-time",
    description: "Working as a Java developer to provide solutions for different clients in various industries.",
    tech: ["Java"],
    icon: "💼",
    color: "#3b82f6",
  },
  {
    id: 2,
    company: "Freelance 3D Printing",
    role: "3D Printing Service Provider",
    period: "Feb 2026 – Present",
    type: "Freelance",
    description: "Providing on-demand 3D printing services for clients — from rapid prototypes to finished parts. Using a Bambu Lab printer and Bambu Studio for slicing, optimizing print settings, and managing multi-material prints.",
    tech: ["Bambu Lab", "Bambu Studio", "FDM Printing", "Rapid Prototyping"],
    icon: "🖨️",
    color: "#f97316",
  },
  {
    id: 3,
    company: "University of the Philippines – Resilience Institute",
    role: "Full-stack Mobile Developer",
    period: "Sept 2025 – Jan 2026",
    type: "Contract",
    description: "Worked as a full-stack Flutter developer, developing multiple tallying systems during drills and actual disasters for quick response and assessment (UPRI & UPM-DRRMH).",
    tech: ["Flutter", "Dart"],
    icon: "🛡️",
    color: "#22d3a0",
  },
  {
    id: 4,
    company: "Liquigaz Philippines Corporation",
    role: "Web Developer Intern",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    description: "Developed a procurement website for the company and its partners' internal use. Built widgets and functions integrated into the system alongside co-interns and supervisor.",
    tech: ["PHP", "CakePHP", "ReactJS", "Apache", "HeidiDB"],
    icon: "🌐",
    color: "#a78bfa",
  },
  {
    id: 5,
    company: "Freelance",
    role: "Computer Science Tutor",
    period: "Aug 2021 – Jan 2022",
    type: "Freelance",
    description: "Tutored a computer engineering student at UP Diliman in Python programming fundamentals, helping them achieve a final grade of 1.00.",
    tech: ["Python"],
    icon: "📚",
    color: "#f59e0b",
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
        path: "/assets/tech/flutter.png"
      },
      {
        name: "YOLO",
        color: "green-text-gradient",
        path: "/assets/tech/yolo.png"
      },
      {
        name: "TensorFlow Lite",
        color: "pink-text-gradient",
        path: "/assets/tech/tflite.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/microcodex.mp4',
    logo:'/assets/microcodex-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
    displayType: 'phone',
  },
  {
    name: "NameBot",
    description:
      "A Discord Bot that gives random recipes, fun fact, bible verse, movie recommendation, and coded responses to certain catchphrases. Created using Python and served using Replit.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/namebot.mp4',
    logo:'/assets/namebot-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "Galaan",
    description:
      "A trip planner / social media site for sharing and inviting groups for a travel plan. Can easily add people through QR and share your expeditions.",
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
    logo:'/assets/galaan-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
    displayType: 'phone',
  },
  {
    name: "JPEG Steganography CLI App ",
    description:
      "A python CLI application that takes a JPEG as an input, encrypts a message and a key, then put the encrypted message and key inside the RGB band values by turning ASCII values to binary (LSB). This message can then be decrypted by inputting the key.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo:'/assets/steg-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "8 Puzzle Game Solver",
    description:
      "A 8 game program created using Python and Custom Tkinter with weak AI solver for. It can use Breadth-first Search (BFS), Depth-first Search (DFS), or A-star algorithms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/8puzzle.mkv',
    logo:'/assets/8puzzle-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "Spam message filter using Naive Bayse Classifier",
    description:
      "A python program that filters out spam messages by feeding training set of both Spam and non spam messages.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/spamfilter.mkv',
    logo:'/assets/spamfilter-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "K means clustering visualizer for Wine composition",
    description:
      "A python program that visualizes K mean clustering for different parameters for wine.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        path: "/assets/tech/python.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/kMeans.mkv',
    logo:'/assets/kMeans-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "IChoose",
    description:
      "ICS Room Reservation. Provides a way for the building admins & ICS director to track the room reservations in the institute. Helped in both back & front end of the project.",
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
    logo:'/assets/ichoose-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "Robotics",
    description:
      "Created various autonomous robots using Arduino and LEGO MindStorm. Learned about using actuators and sensors in programming and creating actual robots.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
        path: "/assets/tech/arduino.png"
      },
    ],
    className: 'animatedText3',
    texture: 'textures/robotics.mp4',
    logo:'/assets/robotics-logo.png',
    logoStyle: {
      bakcgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D'
    },
    spotlight:"/assets/spotlight.png",
  },
];

export { projects };