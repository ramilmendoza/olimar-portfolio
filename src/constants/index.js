import {
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  threejs,
  mathwork,
  eduskill,
  ncc,
  cissp,
  ceh,
  pcnse,
  securityplus,
  junos,
  csqp,
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

export const services = [
  { title: "CISSP", icon: cissp },
  { title: "CEH", icon: ceh },
  { title: "PCNSE", icon: pcnse },
  { title: "Security+", icon: securityplus },
  { title: "JUNOS", icon: junos },
  { title: "CSQP", icon: csqp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "IT/OT Cybersecurity Consultant & Software Engineer",
    company_name: "National Grid SA | Saudi Electricity Company",
    icon: eduskill,
    iconBg: "#161329",
    date: "2012 - Present",
    points: [
      "Led cybersecurity initiatives for national critical infrastructure projects, securing smart grid and energy management systems for large-scale digital transformation initiatives.",
      "Designed and implemented security frameworks for IT/OT integration, securing industrial control systems (ICS), IoT networks, and cloud-based smart city platforms.",
      "Developed and deployed security solutions in line with ISO 27001, NERC-CIP, and NCA standards, reducing cybersecurity risks and strengthening national-scale digital infrastructure",
      "Managed and maintained advanced security infrastructures including Palo Alto, Fortigate, Barracuda, and Cisco firewalls, ensuring high availability, performance, and secure operations of mission-critical systems.",
      "Provided expert consultation on AI-driven security solutions, automated threat detection, and zero-trust architecture, enhancing Neom-aligned smart city cybersecurity strategies. ",
    ],
  },
  {
    title: "Software Senior Engineer",
    company_name: "Philippine Electricity Market Corporation | IOMD",
    icon: mathwork,
    iconBg: "#161329",
    date: "2005 - 2012",
    points: [
      "Supervised and led software development teams, overseeing the design, development, and deployment of secure energy market applications.",
      "Provided 24/7 technical support and rapid incident response for the Market Management System (MMS) on Unix AIX, Tru64, and Oracle 9i platforms",
      "Enhanced system security by contributing to ISO 27001 certification processes and implementing security best practices.",
    ],
  },
  {
    title: "Senior Programmer",
    company_name: "National Power Corporation | Materials Management Department",
    icon: edunet,
    iconBg: "#161329",
    date: "1995 - 2005",
    points: [
      "Developed and maintained secure business applications, ensuring compliance with industry best practices for data protection and cybersecurity.",
      "Optimized application security by performing thorough testing, debugging, and system hardening.",
    ],
  },
];

export const projects = [
  {
    name: "National Control Center Project",
    description:
      "The National Control Center is at the top of the hierarchy of Control Centers with inter‐computer links provided to the four regional control centers.",
    tags: [
      { name: "Grid Control", color: "blue-text-gradient" },
    ],
    image: ncc,
  },
 
];
