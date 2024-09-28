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
      title: "Media Content Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Marketing Head",
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
      name: "C++",
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
      title: "Media Content Developer",
      company_name: "NSDC-(PMKVY)",
      icon: web,
      iconBg: "#383E56",
      date: "March 2023-June 2023",
      points: [
        "Build web applications for various projects using HTML, CSS, JavaScript, Bootstrap, and PHP.",
        "Collaborated with a team to implement and maintain websites, including the TCET website and others.",
        "Implementing responsive design.",
        "Participated in the full lifecycle of website development, from initial planning to deployment.",
      ],
    },
    {
      title: "AWS Internship",
      company_name: "Internship Studio",
      icon: mobile,
      iconBg: "#383E56",
      date: "August 2024-September 2024.",
      points: [
        "Gained foundational knowledge of AWS services, including EC2 (Elastic Compute Cloud) for virtual servers.",
        "Learned to work with AWS S3 (Simple Storage Service) for scalable storage solutions.",
        "Acquired a basic understanding of cloud infrastructure and management through hands-on experience with key AWS services.",
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
      name: "MY-BOOKS",
      description:
        "Deployed an interactive library management system enabling users to preview book descriptions, Implemented using a comprehensive dataset.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Abid1404/BookManagementSystem",
    },
    {
      name: "Go-Flix",
      description:
        "Developed a Netflix Clone using the MERN stack with a focus on replicating the Netflix interface, Implemented a user-friendly UI featuring a variety of movies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Firewall",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://drive.google.com/file/d/1mamDdW1F2lS0hNpOvewZ0VcR3eKW2D_N/view",
    },
    {
      name: "Simple-Pdf Converter",
      description:
        "Converts PDF documents into text and provides a concise summary of the entire document, Extracts and summarizes key information from individual pages of the PDF.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "OCR",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://drive.google.com/file/d/1F3DNUntmMc4nMewZHfqvRmaTN3V8DYFW/view",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };