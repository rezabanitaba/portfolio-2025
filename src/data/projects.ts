export interface Project {
  id: string;
  title: string;
  role: string;
  techStack: string[];
  description: string[];
  impact?: string;
  links?: {
    github?: string;
    live?: string;
  };
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'onecup-ai',
    title: 'OneCup AI – Full Cloud-Based Livestock Monitoring Platform',
    role: 'Resident Cloud Engineer & Full Stack Developer',
    techStack: ['Vue.js', 'Node.js', 'GraphQL', 'AWS', 'PostgreSQL', 'Docker'],
    description: [
      'At OneCup AI, I built an end-to-end platform for monitoring livestock across Canada. The system included a Vue.js-based customer portal and admin dashboard, a custom CDN using AWS CloudFront, and a serverless authentication system with GraphQL APIs.',
      'I developed a comprehensive media ingestion pipeline for hundreds of field cameras, a video processing pipeline from ingest to ML inference to storage, an eCommerce store with React and Stripe, and an SMS/MMS alert system to notify ranchers nationwide.'
    ],
    impact: 'Impact: Enabled scalable, real-time livestock monitoring for Canadian ranches.',
    imageUrl: 'https://i.imgur.com/m0Nu4yu.png'
  },
  {
    id: 'blackout-beacon',
    title: 'BlackoutBeacon – Real-Time Power Outage Alerts for BC',
    role: 'Creator & Developer',
    techStack: ['Next.js', 'AWS SNS', 'AWS Lambda', 'AWS S3', 'REST APIs'],
    description: [
      'BlackoutBeacon alerts BC Hydro customers of outages in real-time. Built with a Next.js frontend and AWS Lambda backend, the system integrates with SNS to send SMS/email alerts.',
      'The platform stores timestamped outage reports in S3 and provides valuable alerts for local communities during unexpected outages.'
    ],
    impact: 'Impact: Provided valuable alerts for local communities during unexpected outages.',
    imageUrl: 'https://i.imgur.com/mh7y06B.png'
  },
  {
    id: 'iss-tracker',
    title: 'ISS Live Tracker',
    role: 'Developer',
    techStack: ['Vanilla JS', 'HTML', 'Leaflet.js', 'APIs'],
    description: [
      'A web application that tracks the International Space Station in real time on a live map using public APIs.',
      'This project helped me understand APIs, asynchronous JavaScript, and frontend rendering while creating an engaging visualization of space exploration.'
    ],
    imageUrl: 'https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'employee-management',
    title: 'Employee Management System (BCIT)',
    role: 'Developer',
    techStack: ['Angular', 'TypeScript', 'REST APIs'],
    description: [
      'A CRUD-based internal tool to manage employee data built with Angular and TypeScript.',
      'The system demonstrated routing, service layers, and form validation while providing a complete solution for employee data management.'
    ],
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'restaurant-manager',
    title: 'Restaurant Manager (BCIT)',
    role: 'Developer',
    techStack: ['Python', 'CLI', 'Data Structures'],
    description: [
      'A system for managing menus, orders, and billing built with Python.',
      'This project helped reinforce control structures, input validation, and object-oriented programming principles while solving real-world business problems.'
    ],
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'messenger-chatbot',
    title: 'Facebook Messenger Chatbot (BCIT)',
    role: 'Developer',
    techStack: ['Python', 'Facebook Messenger API', 'Webhooks'],
    description: [
      'A chatbot that simulates basic customer service interaction for businesses, built with Python, Flask and Facebook Messenger\'s webhook APIs.',
      'The bot handled common customer inquiries and demonstrated natural language processing and API integration skills.'
    ],
    imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'covid-park-map',
    title: 'COVID Park Map – NASA Challenge Project',
    role: 'Developer',
    techStack: ['JavaScript', 'Open Data', 'GIS', 'Data Visualization'],
    description: [
      'Submitted to NASA\'s COVID-19 challenge, this project visualized safe-to-visit parks based on real-time health and population data.',
      'The application combined multiple data sources to help communities make informed decisions about outdoor activities during the pandemic.'
    ],
    imageUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
