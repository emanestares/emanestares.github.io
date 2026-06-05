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
    description: "Working as a Java developer embedded in client-facing delivery teams, building and maintaining enterprise-grade backend systems across diverse industries. Responsibilities span requirements analysis, solution design, and hands-on development — translating complex business logic into clean, maintainable Java code. Collaborating closely with analysts and QA to ensure deliverables are robust, scalable, and aligned with client specifications.",
    tech: ["Java"],
    iconKey: "briefcase",
    color: "#3b82f6",
  },
  {
    id: 2,
    company: "Freelance 3D Printing",
    role: "3D Printing Service Provider",
    period: "Feb 2026 – Present",
    type: "Freelance",
    description: "Running an on-demand 3D printing service using a Bambu Lab X1 Carbon, delivering everything from rapid functional prototypes to display-quality finished parts for clients in engineering, design, and education. Manages the full workflow end-to-end: client briefing, model evaluation, Bambu Studio slicing with optimized layer, support, and material settings, print monitoring, post-processing, and delivery. Comfortable with multi-material and multi-color prints across PLA, PETG, and TPU.",
    tech: ["Bambu Lab", "Bambu Studio", "FDM Printing", "Rapid Prototyping"],
    iconKey: "printer",
    color: "#f97316",
  },
  {
    id: 3,
    company: "University of the Philippines – Resilience Institute",
    role: "Full-stack Mobile Developer",
    period: "Sept 2025 – Jan 2026",
    type: "Contract",
    description: "Contracted to build mission-critical mobile applications for disaster response and drill assessment under UPRI and UPM-DRRMH. Engineered multiple Flutter-based tallying systems used by field personnel during live emergency drills and actual disaster events, enabling real-time headcount, damage assessment, and resource tracking. Designed for offline-first reliability, low-bandwidth environments, and rapid data entry under pressure — directly contributing to faster institutional response times.",
    tech: ["Flutter", "Dart"],
    iconKey: "shield",
    color: "#22d3a0",
  },
  {
    id: 4,
    company: "Liquigaz Philippines Corporation",
    role: "Web Developer Intern",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    description: "Developed a full-featured internal procurement portal for Liquigaz and its network of partner distributors. Built reusable UI widgets and integrated server-side business logic using CakePHP, with a ReactJS front end served over Apache. Worked within a team of co-interns under direct supervision, practicing agile workflows, code review, and structured QA. The system streamlined purchase order tracking and vendor communication across the company's supply chain.",
    tech: ["PHP", "CakePHP", "ReactJS", "Apache", "HeidiDB"],
    iconKey: "globe",
    color: "#a78bfa",
  },
  {
    id: 5,
    company: "Freelance",
    role: "Computer Science Tutor",
    period: "Aug 2021 – Jan 2022",
    type: "Freelance",
    description: "Provided one-on-one Python programming tutoring to a Computer Engineering student at UP Diliman, building lessons from the ground up — covering variables, control flow, functions, OOP, and algorithm design. Tailored the pace and approach to the student's learning style, resulting in a final course grade of 1.00 (highest distinction in the Philippine academic system). Also helped the student develop strong debugging habits and problem-solving intuition that carry beyond any single course.",
    tech: ["Python"],
    iconKey: "book",
    color: "#f59e0b",
  },
];

const projects = [
  {
    name: "MicroCodex",
    description:
      "A CNN-based android application created using Flutter, YOLOv10, and TFLite. It automatically detects, classifies, and provide information about microbes in a prepared slide through Makerocope and front camera. The applicatoin can classify within 16 phylum classifications and store the detections.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient", path: "/assets/tech/flutter.png" },
      { name: "YOLO", color: "green-text-gradient", path: "/assets/tech/yolo.png" },
      { name: "TensorFlow Lite", color: "pink-text-gradient", path: "/assets/tech/tflite.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/microcodex.mp4',
    logo:'/assets/microcodex-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
    displayType: 'phone',
  },
  {
    name: "NameBot",
    description:
      "A Discord Bot that gives random recipes, fun fact, bible verse, movie recommendation, and coded responses to certain catchphrases. Created using Python and served using Replit.",
    tags: [
      { name: "Python", color: "blue-text-gradient", path: "/assets/tech/python.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/namebot.mp4',
    logo:'/assets/namebot-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "Galaan",
    description:
      "A trip planner / social media site for sharing and inviting groups for a travel plan. Can easily add people through QR and share your expeditions.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient", path: "/assets/tech/flutter.png" },
      { name: "Firebase", color: "green-text-gradient", path: "/assets/tech/firebase.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo:'/assets/galaan-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
    displayType: 'phone',
  },
  {
    name: "JPEG Steganography CLI App",
    description:
      "A python CLI application that takes a JPEG as an input, encrypts a message and a key, then put the encrypted message and key inside the RGB band values by turning ASCII values to binary (LSB). This message can then be decrypted by inputting the key.",
    tags: [
      { name: "Python", color: "blue-text-gradient", path: "/assets/tech/python.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/galaan.mp4',
    logo:'/assets/steg-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "8 Puzzle Game Solver",
    description:
      "A 8 game program created using Python and Custom Tkinter with weak AI solver for. It can use Breadth-first Search (BFS), Depth-first Search (DFS), or A-star algorithms.",
    tags: [
      { name: "Python", color: "blue-text-gradient", path: "/assets/tech/python.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/8puzzle.mkv',
    logo:'/assets/8puzzle-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "Spam message filter using Naive Bayse Classifier",
    description:
      "A python program that filters out spam messages by feeding training set of both Spam and non spam messages.",
    tags: [
      { name: "Python", color: "blue-text-gradient", path: "/assets/tech/python.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/spamfilter.mkv',
    logo:'/assets/spamfilter-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "K means clustering visualizer for Wine composition",
    description:
      "A python program that visualizes K mean clustering for different parameters for wine.",
    tags: [
      { name: "Python", color: "blue-text-gradient", path: "/assets/tech/python.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/kMeans.mkv',
    logo:'/assets/kMeans-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "IChoose",
    description:
      "ICS Room Reservation. Provides a way for the building admins & ICS director to track the room reservations in the institute. Helped in both back & front end of the project.",
    tags: [
      { name: "MongoDB", color: "blue-text-gradient", path: "/assets/tech/mongodb.png" },
      { name: "ExpressJS", color: "blue-text-gradient", path: "/assets/tech/express.png" },
      { name: "ReactJS", color: "blue-text-gradient", path: "/assets/tech/reactjs.png" },
      { name: "NodeJS", color: "blue-text-gradient", path: "/assets/tech/nodejs.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/ichoose.mkv',
    logo:'/assets/ichoose-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
  {
    name: "Robotics",
    description:
      "Created various autonomous robots using Arduino and LEGO MindStorm. Learned about using actuators and sensors in programming and creating actual robots.",
    tags: [
      { name: "Arduino", color: "blue-text-gradient", path: "/assets/tech/arduino.png" },
    ],
    className: 'animatedText3',
    texture: 'textures/robotics.mp4',
    logo:'/assets/robotics-logo.png',
    logoStyle: { bakcgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight:"/assets/spotlight.png",
  },
];

export { projects };
