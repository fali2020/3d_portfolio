import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    postman,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    bbandb,
    mimik,
    dotmov,
    webdev,
    parstagram,
    prototype,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AWS Certified",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "html 5",
      icon: html,
    },
    {
      name: "css 3",
      icon: css,
    },
    {
      name: "javaScript",
      icon: javascript,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "react js",
      icon: reactjs,
    },
    {
      name: "tailwind css",
      icon: tailwind,
    },
    {
      name: "node js",
      icon: nodejs,
    },
    {
      name: "mongoDB",
      icon: mongodb,
    },
    {
      name: "three js",
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
      name: "postman",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "Sales Associate",
      company_name: "Bed, Bath & Beyond",
      icon: bbandb,
      iconBg: "#fff",
      date: "September 2019 - January 2020",
      points: [
        "Successfully resolved over 200 customer complaints by implementing effective solutions, resulting in positive customer feedback, and honed problem-solving abilities.",
        "Proficiently utilized software systems and tools to ensure accuracy and maintain quality control standards.",
        "Provided exceptional customer service to an average of 20 customers per day, offering product knowledge and assisting with transactions, resulting in high levels of customer satisfaction.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    
  ];
  
  const projects = [
    {
      name: "DotMOV",
      description:
        "Web application that enables users to browse through different genres of movies, search, and keep track of their favorite movies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
      ],
      image: dotmov,
      source_code_link: "https://github.com/cop4808-spring-2023-fullstack-web/final-project-group8",
    },
    {
      name: "Web Dev Projects",
      description:
        "Within this collection, you will find five distinct projects that include webpages and programs like tic-tac-toe, as part of a portfolio made for a class.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: webdev,
      source_code_link: "https://github.com/fali2020/portfolio/tree/main",
    },
    {
      name: "Parstagram",
      description:
        "An Instagram clone with a custom Parse backend that allows a user to post, view, and add comments to photos. Similar projects like this on my GitHub.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "ruby",
          color: "green-text-gradient",
        },
      ],
      image: parstagram,
      source_code_link: "https://github.com/fali2020/parstagram",
    },
    {
      name: "Mimik",
      description:
        "Web-based Speech-to-Speech model for voice imitation using deep learning and machine learning techniques.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: mimik,
      source_code_link: "https://github.com/mrashid2019/Mimik/tree/main",
    },
    {
      name: "Prototype",
      description:
        "A website prototype of a property management system, designed for smooth user experience.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: prototype,
      source_code_link: "https://www.figma.com/file/BwC2puMVC0bALrVh5NcrKU/CITY-OF-HAPPY-CITIZENS-PROPERTY-WEBSITE?type=design&node-id=0-1&mode=design",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };