export const siteConfig = {
  name: "Tasvee Design School",
  tagline: "Where Creativity Becomes Career.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tasveedesignschool.com",
  phone: "+91 70115 61873",
  phoneHref: "tel:+917011561873",
  email: "tasveedesignschool@gmail.com",
  address: "Kanpur, Uttar Pradesh, India",
  fullAddress:
    "Tasvee Design School, Kanpur, Uttar Pradesh, India",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM",
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "500+", label: "Students Trained", icon: "users" as const },
  { value: "6+", label: "Years Experience", icon: "graduation" as const },
  { value: "100+", label: "Live Projects", icon: "briefcase" as const },
  { value: "50+", label: "Hiring Connections", icon: "handshake" as const },
];

export const aboutStats = [
  ...stats,
  { value: "6+", label: "Awards & Recognition", icon: "award" as const },
];

export const courses = [
  {
    slug: "graphic-design",
    title: "Graphic Design",
    duration: "3 Months",
    description:
      "Master visual communication with industry-standard tools and real-world design projects.",
    topics: [
      "Photoshop",
      "Illustrator",
      "Branding",
      "Social Media Creatives",
      "Print Design",
    ],
    tools: ["Ps", "Ai"],
    color: "from-blue-600 to-blue-800",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    duration: "3 Months",
    description:
      "Learn professional video editing for reels, ads, YouTube, and cinematic content.",
    topics: [
      "Premiere Pro",
      "Reels/Ads/YouTube",
      "Cinematic Editing",
      "Color Grading",
    ],
    tools: ["Pr"],
    color: "from-indigo-600 to-indigo-900",
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    duration: "3 Months",
    description:
      "Create stunning animations, logo reveals, and dynamic title sequences.",
    topics: [
      "After Effects",
      "Logo Animation",
      "Title Animation",
      "Typography",
    ],
    tools: ["Ae"],
    color: "from-purple-600 to-purple-900",
  },
  {
    slug: "2d-3d-animation",
    title: "2D / 3D Animation",
    duration: "4-6 Months",
    description:
      "Bring characters and products to life with professional animation techniques.",
    topics: [
      "Character Animation",
      "Product Animation",
      "Explainer Videos",
      "3D Basics",
    ],
    tools: ["3D"],
    color: "from-orange-600 to-red-700",
  },
  {
    slug: "ai-tools",
    title: "AI Tools for Creators",
    duration: "2 Months",
    description:
      "Leverage AI to supercharge your creative workflow and productivity.",
    topics: [
      "AI Image Generation",
      "Design Workflow",
      "Prompting & Automation",
    ],
    tools: ["AI"],
    color: "from-red-600 to-red-800",
  },
];

export const whyChooseItems = [
  {
    title: "Industry Expert Mentorship",
    description: "Learn directly from professionals working in the creative industry.",
  },
  {
    title: "Practical Project-Based Learning",
    description: "Work on real projects that build your skills and confidence.",
  },
  {
    title: "Portfolio Building",
    description: "Create a standout portfolio that impresses employers and clients.",
  },
  {
    title: "Freelancing Guidance",
    description: "Get expert advice on starting and growing your freelance career.",
  },
  {
    title: "Agency Workflow Training",
    description: "Learn how creative agencies operate and deliver client projects.",
  },
  {
    title: "AI-Powered Creative Skills",
    description: "Stay ahead with the latest AI tools transforming the design world.",
  },
];

export const whyChooseDarkItems = [
  {
    title: "Industry-Oriented Curriculum",
    description: "Courses designed around what employers actually need today.",
  },
  {
    title: "Expert Mentorship",
    description: "Personal guidance from experienced creative professionals.",
  },
  {
    title: "Practical Learning",
    description: "Hands-on training with real tools and real projects.",
  },
  {
    title: "Portfolio Development",
    description: "Build a professional portfolio during your course.",
  },
  {
    title: "Placement Support",
    description: "Career guidance and connections to hiring partners.",
  },
  {
    title: "Lifetime Support",
    description: "Continued mentorship even after you complete your course.",
  },
];

export const learningJourney = [
  { step: "Foundation", subtitle: "Build Strong Basics" },
  { step: "Design Principles", subtitle: "Understand Design" },
  { step: "Software Mastery", subtitle: "Industry Standard Tools" },
  { step: "Live Projects", subtitle: "Real World Experience" },
  { step: "Portfolio", subtitle: "Build Your Best Work" },
  { step: "Freelancing / Job", subtitle: "Get Hired. Earn. Grow." },
];

export const coreValues = [
  "Quality Education",
  "Creative Freedom",
  "Practical Approach",
  "Integrity & Respect",
  "Continuous Learning",
  "Student Success",
];

export const mentor = {
  name: "Devesh Kashyap",
  title: "Creative Director | Motion Designer | Educator",
  bio: "With years of hands-on industry experience, Devesh has trained 500+ students and helped them build successful careers in design, motion graphics, and creative entrepreneurship.",
  highlights: [
    "6+ Years Industry Experience",
    "500+ Students Mentored",
    "Expert in Design, Motion & AI Tools",
    "Worked with Global Clients & Brands",
    "Mentor for Freelancers & Entrepreneurs",
  ],
};

export const testimonials = [
  {
    quote:
      "Tasvee Design School ne meri life badal di. Ab main ek professional graphic designer hoon aur apna freelance kaam bhi kar raha hoon.",
    name: "Rahul Sharma",
    role: "Graphic Designer",
    rating: 5,
  },
  {
    quote:
      "The practical approach and live projects at Tasvee gave me the confidence to apply for jobs. I got placed within a month of completing my course!",
    name: "Priya Verma",
    role: "UI/UX Designer",
    rating: 5,
  },
  {
    quote:
      "Best decision I ever made! Devesh sir's mentorship and the industry-focused curriculum helped me land my dream job as a Motion Designer.",
    name: "Amit Kumar",
    role: "Motion Designer",
    rating: 5,
  },
];

export const successStories = [
  {
    name: "Rahul Sharma",
    role: "Graphic Designer",
    company: "Pixel Digitals",
    story:
      "From a complete beginner to a professional graphic designer working with top brands in Kanpur.",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    company: "Brand Studio",
    story:
      "Transformed her passion for design into a full-time career with portfolio projects from Tasvee.",
  },
  {
    name: "Amit Kumar",
    role: "Motion Designer",
    company: "Edit Labs",
    story:
      "Landed his dream job as a motion designer within weeks of completing the motion graphics course.",
  },
  {
    name: "Sneha Gupta",
    role: "Video Editor",
    company: "Freelancer",
    story:
      "Now runs a successful freelance video editing business serving clients across India.",
  },
  {
    name: "Vikram Singh",
    role: "Animator",
    company: "Creative Agency",
    story:
      "Built a strong animation portfolio at Tasvee and got hired by a leading creative agency.",
  },
];

export const hiringPartners = [
  "Pixel Digitals",
  "Brand Studio",
  "Edit Labs",
  "Creative Hub",
  "Design Works",
  "Media Pro",
];

export const faqs = [
  {
    question: "How can I book a demo class?",
    answer:
      "You can book a free demo class by clicking the 'Book Demo Class' button on our website, filling out the contact form, or calling us directly at +91 70115 61873.",
  },
  {
    question: "Are classes available online or offline?",
    answer:
      "Yes! We offer both offline classes at our Kanpur center and online live classes for students across India.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required. Our courses are designed for beginners as well as those looking to upskill.",
  },
  {
    question: "What software will I learn?",
    answer:
      "Depending on your course, you'll learn industry-standard tools like Adobe Photoshop, Illustrator, Premiere Pro, After Effects, and AI creative tools.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide career guidance, portfolio reviews, interview preparation, and connections to our hiring partners.",
  },
  {
    question: "What is the course duration?",
    answer:
      "Course durations range from 2 to 6 months depending on the program. Graphic Design, Video Editing, and Motion Graphics are 3 months each.",
  },
];

export const contactQueryOptions = [
  "Course Inquiry",
  "Admission",
  "Demo Class Booking",
  "Career Guidance",
  "Other",
];
