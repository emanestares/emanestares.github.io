import { texture } from "three/tsl";
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

export {  projects };