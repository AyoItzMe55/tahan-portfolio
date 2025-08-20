export interface Project {
  slug: string;
  title: string;
  summary: string;
  date: string;
  coverImage: string;
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  content: {
    overview: string;
    role: string;
    tools: string[];
    process: string;
    results: string;
    impact: string;
    reflections: string;
  };
}

export const projects: Project[] = [
  {
    slug: "coral-reef-ml",
    title: "Coral Reef Health Detection with ML",
    summary: "Built a CNN pipeline on satellite imagery to detect coral bleaching trends and predict reef health outcomes.",
    date: "2025-05-10",
    coverImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    tags: ["Computer Science", "Sustainability", "Research"],
    links: {
      github: "https://github.com/student/coral-reef-ml",
      demo: "https://coral-health-demo.netlify.app"
    },
    content: {
      overview: "Developed a machine learning system to analyze satellite imagery and assess coral reef health across the Pacific Ocean. The project combines computer vision techniques with environmental data to create an early warning system for coral bleaching events.",
      role: "Lead developer and researcher. Designed the neural network architecture, collected and preprocessed satellite data, and created the web dashboard for visualizing results.",
      tools: ["Python", "TensorFlow", "OpenCV", "Google Earth Engine", "React", "D3.js"],
      process: "Started by analyzing existing research on coral bleaching indicators. Collected satellite imagery from NOAA and processed it using Google Earth Engine. Built and trained a CNN model to classify reef health states. Created a real-time monitoring dashboard.",
      results: "Achieved 87% accuracy in predicting coral bleaching events 2-3 weeks before visible signs appear. The model successfully identified at-risk reef areas across 500+ square kilometers of ocean.",
      impact: "This early warning system could help marine biologists and conservation organizations respond more quickly to bleaching events. The project has potential applications in reef management and climate change research.",
      reflections: "This project taught me how AI can be a powerful tool for environmental conservation. I learned the importance of domain expertise when applying ML to real-world problems and how to work with large geospatial datasets."
    }
  },
  {
    slug: "ocean-plastic-tracker",
    title: "Ocean Plastic Debris Tracking System",
    summary: "Created an IoT sensor network to track plastic debris movement in coastal waters using GPS-enabled sensors.",
    date: "2025-03-15",
    coverImage: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e9?w=400&h=300&fit=crop",
    tags: ["Computer Science", "Sustainability", "Robotics"],
    links: {
      github: "https://github.com/student/ocean-plastic-tracker"
    },
    content: {
      overview: "Designed and deployed a network of GPS-enabled sensors to track the movement of plastic debris in ocean currents. The system provides real-time data on pollution patterns to support cleanup efforts.",
      role: "Full-stack developer and hardware engineer. Designed the sensor hardware, developed the data collection system, and built the web interface for tracking debris movement.",
      tools: ["Arduino", "LoRaWAN", "GPS modules", "Node.js", "MongoDB", "Leaflet.js"],
      process: "Researched ocean current patterns and plastic pollution. Designed waterproof sensor housings and programmed microcontrollers. Set up a LoRaWAN network for data transmission. Built a web dashboard for visualization.",
      results: "Successfully deployed 25 sensors across 15 km of coastline. Collected over 10,000 data points showing debris accumulation patterns. Data helped local cleanup organizations optimize their efforts.",
      impact: "The tracking data revealed previously unknown plastic accumulation zones, leading to more targeted cleanup efforts. The project demonstrates how IoT can support environmental monitoring.",
      reflections: "Working on hardware in marine environments taught me about the challenges of environmental sensing. I gained experience in wireless communication protocols and learned to design robust systems for harsh conditions."
    }
  },
  {
    slug: "sustainable-campus-app",
    title: "Sustainable Campus Navigation App",
    summary: "Developed a mobile app that helps students find the most eco-friendly routes around campus and track their carbon footprint.",
    date: "2025-01-20",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Sustainability", "Education"],
    links: {
      github: "https://github.com/student/sustainable-campus",
      demo: "https://sustainable-campus.app"
    },
    content: {
      overview: "Built a React Native app that calculates eco-friendly routes around campus, incorporating bike paths, electric shuttle schedules, and walking routes while tracking users' carbon savings.",
      role: "Solo developer. Designed the user experience, implemented routing algorithms, and created the carbon footprint calculation system.",
      tools: ["React Native", "Expo", "Mapbox", "Firebase", "Node.js"],
      process: "Surveyed campus transportation options and calculated carbon emissions for different travel methods. Integrated with mapping APIs and campus shuttle data. Designed gamification features to encourage sustainable choices.",
      results: "Over 200 students downloaded the app in the first month. Users reported 30% reduction in car usage for campus trips. The app helped save an estimated 500 kg of CO2 emissions.",
      impact: "The app raised awareness about sustainable transportation choices and provided actionable alternatives to driving. It demonstrated how technology can nudge behavior toward more sustainable practices.",
      reflections: "This project showed me how user experience design can influence environmental behavior. I learned about mobile development and the importance of making sustainability convenient and engaging."
    }
  },
  {
    slug: "ai-powered-recycling",
    title: "AI-Powered Recycling Sorting System",
    summary: "Built a computer vision system to automatically sort recyclable materials with 95% accuracy using a robotic arm.",
    date: "2024-11-08",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Robotics", "Sustainability"],
    links: {
      github: "https://github.com/student/ai-recycling-sorter"
    },
    content: {
      overview: "Developed an autonomous recycling system that uses computer vision to identify and sort different types of recyclable materials. The system combines object detection with robotic manipulation.",
      role: "Team lead for software development. Designed the computer vision pipeline, trained the object detection model, and integrated it with the robotic control system.",
      tools: ["Python", "YOLO", "OpenCV", "ROS", "Arduino", "3D printing"],
      process: "Collected and labeled thousands of images of recyclable materials. Trained a YOLO model for real-time object detection. Programmed a robotic arm to sort items based on model predictions. Built a conveyor belt system.",
      results: "Achieved 95% accuracy in sorting common recyclables (plastic bottles, aluminum cans, paper, cardboard). System can process 60 items per minute. Won 1st place at the regional robotics competition.",
      impact: "The system could significantly improve recycling efficiency and reduce contamination in recycling streams. The project demonstrates practical applications of AI in waste management.",
      reflections: "This project taught me about the complexities of real-world AI deployment. I learned about robotics, computer vision, and the importance of robust testing in automated systems."
    }
  },
  {
    slug: "marine-life-database",
    title: "Collaborative Marine Life Database",
    summary: "Created a citizen science platform where divers and marine biologists can contribute to a comprehensive database of ocean species.",
    date: "2024-09-12",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Sustainability", "Community Service"],
    links: {
      github: "https://github.com/student/marine-life-db",
      demo: "https://marinelife-database.org"
    },
    content: {
      overview: "Built a web platform that allows citizen scientists to upload photos and data about marine life encounters, contributing to a crowdsourced database for marine research.",
      role: "Full-stack developer and product designer. Created the user interface, backend API, and data validation systems.",
      tools: ["React", "Node.js", "PostgreSQL", "AWS S3", "TensorFlow.js"],
      process: "Researched existing marine databases and identified gaps in citizen science tools. Designed an intuitive upload interface and implemented automatic species detection. Created data quality controls and researcher tools.",
      results: "Platform has 500+ registered users who have uploaded 3,000+ marine life observations. Data has been used by 5 research institutions for biodiversity studies.",
      impact: "The platform democratizes marine research and engages the public in ocean conservation. It provides valuable data for scientists studying marine biodiversity and climate change impacts.",
      reflections: "This project taught me about building platforms that serve both citizen scientists and researchers. I learned about data quality challenges and the importance of community engagement in scientific projects."
    }
  },
  {
    slug: "climate-data-visualization",
    title: "Interactive Climate Data Visualization",
    summary: "Developed an interactive web app that visualizes 50 years of ocean temperature data to show climate change impacts.",
    date: "2024-07-25",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Research", "Education"],
    links: {
      github: "https://github.com/student/climate-viz",
      demo: "https://ocean-climate-viz.netlify.app"
    },
    content: {
      overview: "Created an interactive visualization tool that makes complex climate data accessible to students and the general public, focusing on ocean temperature changes over the past 50 years.",
      role: "Solo developer and data analyst. Processed raw climate datasets, designed interactive visualizations, and created educational content.",
      tools: ["D3.js", "React", "Python", "Pandas", "NOAA Climate Data"],
      process: "Downloaded and cleaned 50 years of ocean temperature data from NOAA. Created various interactive charts and maps. Added educational tooltips and explanations for non-technical users.",
      results: "The visualization has been viewed by over 5,000 people and is used by 3 local schools in their environmental science curricula. Featured in the school science fair.",
      impact: "The tool makes climate science more accessible and helps people understand the reality of ocean warming. It supports environmental education and climate awareness.",
      reflections: "This project taught me the power of data visualization in science communication. I learned how to make complex data understandable and engaging for diverse audiences."
    }
  },
  {
    slug: "underwater-drone-mapping",
    title: "Underwater Drone for Reef Mapping",
    summary: "Built and programmed an autonomous underwater drone to create 3D maps of coral reef structures.",
    date: "2024-05-18",
    coverImage: "/api/placeholder/400/300",
    tags: ["Robotics", "Computer Science", "Sustainability"],
    links: {
      github: "https://github.com/student/underwater-drone"
    },
    content: {
      overview: "Designed and built an autonomous underwater vehicle capable of mapping coral reef structures in 3D, providing valuable data for marine conservation efforts.",
      role: "Lead engineer and programmer. Designed the drone hardware, implemented autonomous navigation, and created the 3D mapping algorithms.",
      tools: ["Arduino", "ROS", "Stereo cameras", "IMU sensors", "3D printing", "PCL"],
      process: "Researched underwater robotics and designed a waterproof frame. Implemented autonomous navigation using computer vision. Developed algorithms for 3D reconstruction from stereo camera data.",
      results: "Successfully mapped 500 square meters of reef area with centimeter-level accuracy. Generated detailed 3D models used by marine biologists for reef health assessment.",
      impact: "The 3D maps provide baseline data for monitoring reef changes over time. The low-cost design makes the technology accessible to more research organizations.",
      reflections: "This project combined my interests in robotics and marine conservation. I learned about underwater engineering challenges and the importance of robust systems in harsh environments."
    }
  },
  {
    slug: "green-energy-optimizer",
    title: "Smart Grid Energy Optimization",
    summary: "Created an AI system to optimize renewable energy distribution in a simulated smart grid network.",
    date: "2024-03-10",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Sustainability", "Research"],
    links: {
      github: "https://github.com/student/green-energy-optimizer"
    },
    content: {
      overview: "Developed a machine learning system to optimize the distribution of renewable energy in a smart grid, balancing supply and demand while minimizing waste.",
      role: "Algorithm developer and data analyst. Designed the optimization algorithms, trained ML models, and created the simulation environment.",
      tools: ["Python", "Scikit-learn", "Matplotlib", "NetworkX", "Pandas"],
      process: "Studied smart grid architectures and energy distribution challenges. Created a simulation environment with renewable energy sources. Implemented reinforcement learning for optimization.",
      results: "Achieved 23% improvement in energy efficiency compared to traditional distribution methods. System successfully balanced supply and demand across 100+ grid nodes.",
      impact: "The optimization algorithms could help reduce energy waste and increase the viability of renewable energy systems. The research contributes to sustainable energy infrastructure.",
      reflections: "This project deepened my understanding of energy systems and optimization problems. I learned about the complexity of balancing supply and demand in renewable energy networks."
    }
  },
  {
    slug: "microplastic-detection",
    title: "Microplastic Detection in Water Samples",
    summary: "Developed a machine learning model to automatically detect and count microplastics in water samples using microscopy images.",
    date: "2024-01-15",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Research", "Sustainability"],
    links: {
      github: "https://github.com/student/microplastic-detection"
    },
    content: {
      overview: "Created an automated system for detecting and quantifying microplastics in water samples using computer vision and machine learning techniques.",
      role: "Research developer. Designed the image processing pipeline, trained the detection model, and validated results with laboratory samples.",
      tools: ["Python", "OpenCV", "TensorFlow", "ImageJ", "Microscopy"],
      process: "Collected microscopy images of water samples containing microplastics. Developed image preprocessing techniques and trained a CNN for particle detection. Validated accuracy against manual counting.",
      results: "Achieved 91% accuracy in microplastic detection and reduced analysis time from 2 hours to 5 minutes per sample. System can detect particles as small as 10 micrometers.",
      impact: "The automated system could accelerate microplastic research and enable more comprehensive monitoring of plastic pollution in water bodies.",
      reflections: "This project showed me how AI can accelerate scientific research. I learned about the challenges of working with microscopy data and the importance of validation in scientific applications."
    }
  },
  {
    slug: "eco-friendly-pathfinding",
    title: "Eco-Friendly Route Planning Algorithm",
    summary: "Designed a pathfinding algorithm that optimizes routes based on carbon footprint rather than just travel time.",
    date: "2023-11-20",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Sustainability", "Research"],
    links: {
      github: "https://github.com/student/eco-pathfinding"
    },
    content: {
      overview: "Developed a novel pathfinding algorithm that considers environmental impact alongside traditional metrics like time and distance when calculating optimal routes.",
      role: "Algorithm designer and researcher. Implemented various pathfinding approaches, collected environmental data, and conducted performance comparisons.",
      tools: ["Python", "NetworkX", "OSMnx", "Matplotlib", "Graph algorithms"],
      process: "Researched existing pathfinding algorithms and environmental routing. Collected data on transportation emissions and energy consumption. Implemented and tested multiple algorithm variants.",
      results: "Algorithm reduces average route carbon footprint by 34% with only 12% increase in travel time. Successfully optimized routes across 5 major city datasets.",
      impact: "The algorithm could be integrated into navigation apps to promote more sustainable transportation choices. It demonstrates how algorithms can support environmental goals.",
      reflections: "This project taught me about multi-objective optimization and the trade-offs between efficiency and sustainability. I learned to balance competing priorities in algorithm design."
    }
  },
  {
    slug: "water-quality-monitoring",
    title: "IoT Water Quality Monitoring Network",
    summary: "Built a network of IoT sensors to continuously monitor water quality parameters in local streams and lakes.",
    date: "2023-09-08",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Sustainability", "Community Service"],
    links: {
      github: "https://github.com/student/water-quality-iot"
    },
    content: {
      overview: "Deployed a network of low-cost IoT sensors to monitor pH, dissolved oxygen, temperature, and turbidity in local water bodies, providing real-time environmental data.",
      role: "System architect and embedded programmer. Designed the sensor nodes, implemented wireless communication, and created the data visualization dashboard.",
      tools: ["Arduino", "ESP32", "pH sensors", "LoRaWAN", "Node.js", "InfluxDB"],
      process: "Researched water quality parameters and sensor technologies. Designed weatherproof sensor housings and programmed microcontrollers. Set up a wireless network and cloud database.",
      results: "Deployed 15 sensors across 8 water bodies, collecting 50,000+ measurements over 6 months. Data helped identify pollution sources affecting local streams.",
      impact: "The monitoring network provides continuous environmental data to local authorities and raises awareness about water quality issues in the community.",
      reflections: "This project taught me about environmental sensing and the challenges of long-term field deployments. I learned about wireless communication protocols and data reliability."
    }
  },
  {
    slug: "solar-panel-optimizer",
    title: "Solar Panel Efficiency Optimization",
    summary: "Created an AI system to predict and optimize solar panel performance based on weather and environmental conditions.",
    date: "2023-07-12",
    coverImage: "/api/placeholder/400/300",
    tags: ["Computer Science", "Sustainability", "Research"],
    links: {
      github: "https://github.com/student/solar-optimizer"
    },
    content: {
      overview: "Developed a machine learning system that predicts solar panel efficiency and suggests optimal positioning and maintenance schedules to maximize energy output.",
      role: "ML engineer and data scientist. Collected solar panel performance data, developed predictive models, and created optimization algorithms.",
      tools: ["Python", "Scikit-learn", "Weather APIs", "Pandas", "Solar irradiance data"],
      process: "Gathered data from local solar installations and weather stations. Trained models to predict panel efficiency based on environmental conditions. Developed optimization recommendations.",
      results: "Predicted solar output with 94% accuracy and identified maintenance needs 2 weeks in advance. System improved overall panel efficiency by 18% through optimized positioning.",
      impact: "The optimization system could help solar installations generate more renewable energy and reduce maintenance costs, supporting wider adoption of solar power.",
      reflections: "This project showed me how predictive analytics can improve renewable energy systems. I learned about the factors affecting solar efficiency and the importance of maintenance in energy production."
    }
  }
];

export const awards = [
  {
    title: "FTC Hawaii State Champion",
    org: "FIRST Tech Challenge",
    year: 2025,
    image: "/api/placeholder/100/100",
    summary: "Lead AI/CAD engineer; advanced to division semifinals at World Championship; Think Award (3rd place).",
    link: "https://www.firstinspires.org/robotics/ftc"
  },
  {
    title: "Intel ISEF Finalist",
    org: "Intel International Science and Engineering Fair",
    year: 2025,
    image: "/api/placeholder/100/100", 
    summary: "Advanced to international finals with coral reef health detection project.",
    link: "https://www.societyforscience.org/isef/"
  },
  {
    title: "Congressional App Challenge Winner",
    org: "U.S. House of Representatives",
    year: 2024,
    image: "/api/placeholder/100/100",
    summary: "Won district competition for sustainable campus navigation app.",
    link: "https://www.congressionalappchallenge.us/"
  },
  {
    title: "USACO Gold Division",
    org: "USA Computing Olympiad",
    year: 2024,
    image: "/api/placeholder/100/100",
    summary: "Achieved Gold level in competitive programming competition.",
    link: "http://www.usaco.org/"
  },
  {
    title: "NASA HUNCH Selection",
    org: "NASA",
    year: 2024,
    image: "/api/placeholder/100/100",
    summary: "Selected for High School Students United with NASA to Create Hardware program.",
    link: "https://nasahunch.com/"
  },
  {
    title: "Ocean Science Bowl Regional Champions",
    org: "National Ocean Sciences Bowl",
    year: 2024,
    image: "/api/placeholder/100/100",
    summary: "Led team to regional championship and advanced to national competition.",
    link: "https://www.nosb.org/"
  },
  {
    title: "Google Code-in Grand Prize",
    org: "Google",
    year: 2023,
    image: "/api/placeholder/100/100",
    summary: "Grand prize winner for contributions to open source sustainability projects.",
    link: "https://codein.withgoogle.com/"
  },
  {
    title: "National Merit Scholarship Semifinalist",
    org: "National Merit Scholarship Corporation",
    year: 2023,
    image: "/api/placeholder/100/100",
    summary: "Semifinalist recognition for academic achievement.",
    link: "https://www.nationalmerit.org/"
  },
  {
    title: "Regeneron Science Talent Search",
    org: "Regeneron",
    year: 2023,
    image: "/api/placeholder/100/100",
    summary: "Selected as one of 300 semifinalists nationwide for microplastic detection research.",
    link: "https://www.societyforscience.org/regeneron-sts/"
  },
  {
    title: "MIT THINK Scholar",
    org: "Massachusetts Institute of Technology",
    year: 2023,
    image: "/api/placeholder/100/100",
    summary: "Selected for prestigious summer research program in environmental engineering.",
    link: "https://think.mit.edu/"
  }
];