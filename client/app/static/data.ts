import {
  MdWeb,
  MdQuiz,
  MdPeople,
  MdGroups,
  MdPayment,
  MdCategory,
  MdBarChart,
  MdDashboard,
  MdAnalytics,
  MdVideoCall,
  MdOndemandVideo,
  MdManageHistory,
} from "react-icons/md";
import {
  FaLock,
  FaUserShield,
  FaClipboardList,
  FaRegAddressBook,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";

export const features = [
  {
    icon: "FaChalkboardTeacher",
    title: "Expert Instructors",
    desc: "Learn from passionate mentors and industry professionals who care about your growth.",
  },
  {
    icon: "FaWallet",
    title: "Affordable Access",
    desc: "Unlock high-quality programming courses and resources at prices everyone can afford.",
  },
  {
    icon: "FaUsers",
    title: "Community Support",
    desc: "Join a friendly, supportive network of learners and experts ready to help you succeed.",
  },
];

export const options = [
  "Course Information",
  "Course Options",
  "Course Content",
  "Course Preview",
];

export const menuSections = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: MdDashboard,
        path: "/admin",
      },
    ],
  },
  {
    title: "Data",
    items: [
      {
        title: "Users",
        icon: MdGroups,
        path: "/admin/users",
      },
      {
        title: "Invoices",
        icon: MdPayment,
        path: "/admin/invoices",
      },
    ],
  },
  {
    title: "Content",
    items: [
      {
        title: "Create Course",
        icon: MdVideoCall,
        path: "/admin/create-course",
      },
      {
        title: "Live Courses",
        icon: MdOndemandVideo,
        path: "/admin/courses",
      },
    ],
  },
  {
    title: "Customization",
    items: [
      {
        title: "Hero",
        icon: MdWeb,
        path: "/admin/hero",
      },
      {
        title: "FAQ",
        icon: MdQuiz,
        path: "/admin/faq",
      },
      {
        title: "Categories",
        icon: MdCategory,
        path: "/admin/categories",
      },
    ],
  },
  {
    title: "Controllers",
    items: [
      {
        title: "Manage Team",
        icon: MdPeople,
        path: "/admin/team",
      },
    ],
  },
  {
    title: "Analytics",
    items: [
      {
        title: "Courses Analytics",
        icon: MdBarChart,
        path: "/admin/courses-analytics",
      },
      {
        title: "Orders Analytics",
        icon: MdAnalytics,
        path: "/admin/orders-analytics",
      },
      {
        title: "Users Analytics",
        icon: MdManageHistory,
        path: "/admin/users-analytics",
      },
    ],
  },
];

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

export const tabList = ["Overview", "Resources", "Q&A", "Reviews"];

export const reviews = [
  {
    name: "Gene Bates",
    profession: "Student | Cambridge University",
    comment:
      "LearnX offers a wide range of tech courses for every level. The structure, depth, and clarity make it one of the best learning platforms I've used. Highly recommended for anyone serious about tech.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Marcus Johnson",
    profession: "Full Stack Developer | Quarter Ltd.",
    comment:
      "Absolutely love the tutorials on LearnX! Complex topics are broken down so well, and the real-world examples make everything click. This platform truly stands out in the programming education space.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Jay Gibbs",
    profession: "Computer Systems Engineering Student | Zimbabwe",
    comment:
      "LearnX has completely changed the way I learn programming. The balance between theory and hands-on practice is perfect. It's like having a personal mentor guiding you through every concept.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "David Chen",
    profession: "Junior Web Developer | Indonesia",
    comment:
      "I explored LearnX and was impressed by the course quality and variety. Whether you're just starting or upskilling, it's a great place to learn and grow.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Robert Smith",
    profession: "Full Stack Web Developer | Algeria",
    comment:
      "What I love about LearnX is the depth. The long-form tutorials cover everything in detail, making it beginner-friendly yet comprehensive. Looking forward to more content!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Alex McKenzie",
    profession: "Full Stack Web Developer | Canada",
    comment:
      "LearnX focuses on real-world application. I built a complete web marketplace using React, step by step. It's a game-changer if you want to build projects, not just watch theory.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

export const privacyCards = [
  {
    icon: FaUserShield,
    title: "Information We Collect",
    items: [
      "Account information such as name, email, and profile details",
      "Learning activity including enrolled courses, progress, and assessments",
      "Technical data like device details, IP address, and browser type",
      "Usage data including interaction patterns, preferences, and support logs",
    ],
  },
  {
    icon: FaLock,
    title: "How We Protect Your Data",
    items: [
      "Advanced encryption for data in transit and at rest",
      "Strict internal policies with limited-access control",
      "Regular security audits and vulnerability monitoring",
      "No selling or renting of personal information—ever",
    ],
  },
  {
    icon: FaClipboardList,
    title: "How We Use Your Information",
    items: [
      "To deliver personalized learning experiences",
      "To improve platform performance and course quality",
      "To provide support, notifications, and updates",
      "To ensure platform integrity and prevent misuse",
    ],
  },
  {
    icon: FaRegAddressBook,
    title: "Your Privacy Rights",
    items: [
      "Request access to your stored personal data",
      "Update or correct your information anytime",
      "Request deletion of your account and data",
      "Opt-out of emails and non-essential communication",
    ],
  },
  {
    icon: FaCheckCircle,
    title: "Third-Party Services",
    items: [
      "Used only for secure payments, analytics, and hosting",
      "Integrated with trusted providers like Stripe, Vercel, and AWS",
      "Third parties must comply with strict data protection standards",
      "Your data is never shared for marketing purposes",
    ],
  },
  {
    icon: FaCheckCircle,
    title: "Data Retention & Transparency",
    items: [
      "Data retained only as long as necessary for learning",
      "Clear logs of updates, requests, and account changes",
      "Immediate removal upon account deletion",
      "Transparent communication for any policy changes",
    ],
  },
];

