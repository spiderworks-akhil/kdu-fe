import {
  FiTool,
  FiAnchor,
  FiMonitor,
  FiRadio,
  FiShield,
  FiSun,
} from "react-icons/fi";

export const iconMap = {
  services: FiTool,
  "new-building": FiAnchor,
  training: FiMonitor,
  "port-management": FiRadio,
  surveillance: FiShield,
  "green-ship": FiSun,
};

export const solutions = [
  {
    slug: "services",
    title: "Services",
    icon: "services",
    tagline: "Services & Upgrades",
    subtitle: "Maintenance, Retrofit & Upgrades",
    shortDesc:
      "We offer a wide range of ship maintenance services & support for all your Electrical, Automation, Navigation & Communication requirements all-round the year, with our on-call crew available 24/7 in the GCC region, and our main operations out of United Arab Emirates, Saudi Arabia, Nigeria, Ghana & India. KDU Group has catered to every requirement of our customers for the past 15 years focusing on the importance of product preservation, along with the significance of essential technological modifications thus extending its economic life & providing affordable solutions. Retrofits & Conversions are provided for your E&A Systems aboard any vessel, saving cost & time and through effective R&D to suit your requirements & implement bespoke, exclusive solutions.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Solutions-1.png",
    categories: [
      {
        name: "Electrical Systems",
        subcategories: [
          {
            name: null,
            items: [
              "LV Switch Boards – MSB, MCC, Distribution & Starter Panels",
              "Power Panel Integrated Load Management Systems",
              "Variable Frequency Drives",
              "Shore Power Converters",
            ],
          },
          {
            name: "Electrical Systems Desktop Studies and Preventive Maintenance",
            items: [
              "ETAP desktop study for Load flow analysis, short circuit calculation, Harmonics study and Arc Flash",
              "Main switch board & Distribution board protection coordination",
              "Load Analysis",
              "Thermographic survey & Preventive Maintenance Program",
              "Power quality study",
            ],
          },
          {
            name: "Electrical Systems Services",
            items: [
              "MSB & ESB instrumentation calibration and testing",
              "Generator protection devises testing and calibration",
              "Switch gear overhaul and testing",
              "MSB Modification for adding sources/loads",
              "Retrofitting of obsolete breakers and Protection relays",
              "Retrofit/Upgradation of Power Management System (load Sharing)",
              "AVR retrofit solutions for obsolete AVRs",
            ],
          },
          {
            name: "Retrofits & Upgradations",
            items: [
              "Flame – Boiler Control System",
            ],
          },
        ],
      },
      {
        name: "Automation System",
        subcategories: [
          {
            name: null,
            items: [
              "Vessel Management Systems",
              "Engine & Generator control Panels",
              "Ship Machinery Alarm Monitoring & Control System",
              "Main Engine Monitoring Control System",
              "Azimuth thruster control system",
              "Transverse thruster control system",
              "Controllable Pitch Propulsion (CPP) control system",
              "Cargo Monitoring and Control System",
              "Tank Gauging System",
              "Fuel Monitoring and Vessel Optimization Solution",
              "Helideck monitoring system",
            ],
          },
        ],
      },
      {
        name: "Services for All Onboard Navigation Equipment",
        subcategories: [
          {
            name: null,
            items: [
              "Dynamic Positioning System",
              "IMO and non-IMO RADAR/ARPA and MFDs",
              "ECDIS and Chart Plotters",
              "Gyro Compass – FOG, Mechanical and Conventional type",
              "Autopilot, Magnetic Compass and TMC",
              "VDR, (S)VDR, BAMS and BNWAS",
              "AIS, (D)GPS and (D)GNSS",
              "Speed Logs and Echo Sounders",
              "Weather sensors, Whistles and Sound Reception System",
            ],
          },
        ],
      },
      {
        name: "Services for All Types of Communication Equipment",
        subcategories: [
          {
            name: "Onboard External Communication Equipment",
            items: [
              "GMDSS Area A1, A2, A3, A4",
              "MF/HF Radio w/DSC",
              "MINI-C / INMARSAT-C, LRIT",
              "VHF Radio W/DSC",
              "Aero VHF",
              "NAVTEX and SSAS",
              "EPIRB, SART and PLB",
              "Non-Directional Beacon",
            ],
          },
          {
            name: "Onboard Internal Communication Equipment & Monitoring",
            items: [
              "Internal Communication Suite",
              "Public Address and General Alarm system",
              "SPT, Talkback and Handheld Radios",
              "CCTV",
            ],
          },
          {
            name: "Onboard Satellite Communication Equipment",
            items: [
              "VSAT, Airtime and Bundled Solutions",
              "Fleet Broadband",
              "Iridium and Satellite Phones",
              "Satellite TV, TVRO",
            ],
          },
        ],
      },
      {
        name: "Industrial Applications",
        subcategories: [
          {
            name: null,
            items: [
              "Retrofit/Upgradation of EMS",
              "AVR Retrofit Solution of Obsolete AVRs",
              "PV/Hybrid Solutions",
              "Preventive Maintenance Solutions (thermographic Survey)",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "new-building",
    title: "New Building",
    icon: "new-building",
    tagline: "Complete Solutions for New-Built Vessels",
    subtitle: "New Build Vessel Equipment Supply & Services",
    shortDesc:
      "Planning the complete range of solutions and supply for a new built vessel can be challenging and time consuming. Through our association with agencies around the world and our experienced research & development team, we provide quality products.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Solutions-2.png",
    categories: [
      {
        name: "Electrical Solutions",
        subcategories: [
          {
            name: null,
            items: [
              "LV Switchboards with Integrated Power Management Systems",
              "MV Switchboards",
              "MV Protection Relays and Master Control Panels",
            ],
          },
        ],
      },
      {
        name: "Automation Systems",
        subcategories: [
          {
            name: null,
            items: [
              "CMAC 3000 (Integrated Alarm Monitoring System)",
              "Tank Level Gauging",
              "Propulsion & Steering Control Systems",
              "Helideck Monitoring & Lighting Solutions",
              "Flowmetrics+ (Fuel Monitoring System)",
            ],
          },
        ],
      },
      {
        name: "Fleet Compliance & Monitoring",
        subcategories: [
          {
            name: null,
            items: [
              "REGS4SHIPS and Passage Manager",
              "Fleet Tracking and Enviromanager",
              "Digital & Paper Charts and Publications",
              "CCTV Systems",
            ],
          },
        ],
      },
      {
        name: "Navigation Equipment",
        subcategories: [
          {
            name: null,
            items: [
              "Integrated Bridge System",
              "Dynamic Positioning System",
              "RADAR/ARPA and MFDs (IMO and non-IMO)",
              "ECDIS and Chart Plotters",
              "Gyro Compass (FOG, Mechanical, Conventional)",
              "Autopilot, Magnetic Compass, TMC",
              "VDR, (S)VDR, BAMS, BNWAS",
              "AIS, (D)GPS, (D)GNSS",
              "Speed Logs and Echo Sounders",
              "Weather Sensors, Whistles, Sound Reception Systems",
            ],
          },
        ],
      },
      {
        name: "Communication Systems",
        subcategories: [
          {
            name: "Internal Communication",
            items: [
              "Public Address and General Alarm",
              "SPT, Talkback, and Handheld Radios",
            ],
          },
          {
            name: "External Communication",
            items: [
              "GMDSS (A1–A4)",
              "MF/HF Radio",
              "MINI-C, INMARSAT-C",
              "VHF Radio",
              "NAVTEX",
            ],
          },
          {
            name: "Satellite Communication",
            items: [
              "VSAT",
              "Fleet Broadband",
              "Iridium",
              "Satellite TV",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "training",
    title: "Maritime Training Solutions",
    icon: "training",
    tagline: "Certified Marine Simulators & Training",
    subtitle: "Maritime Training Simulators",
    shortDesc:
      "Range of fully certified marine simulators offering ultra-realistic, high intensity training solutions in both single task and fully integrated training cases for marine officers and crew members across the entire range of maritime operations.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Solutions-3.png",
    categories: [
      {
        name: "STCW Training Simulators",
        subcategories: [
          {
            name: "Maritime Navigation Simulators",
            items: [
              "Full Mission Ship Handling Simulator",
              "Full Mission Tug Simulator",
              "RADAR/ARPA/RANSCO Simulator",
              "ECDIS Simulator",
              "GMDSS Simulator",
              "Steering and Mini-Bridge Simulator",
            ],
          },
          {
            name: "Engineering Simulators",
            items: [
              "Full Mission Engine Room Simulator",
              "ERS Simulator",
              "High Voltage Simulator",
            ],
          },
        ],
      },
      {
        name: "Specialized Simulators",
        subcategories: [
          {
            name: null,
            items: [
              "Process & Liquid Cargo Handling Simulator",
              "Crane Simulators",
              "Fishing Simulators",
            ],
          },
        ],
      },
      {
        name: "Offshore Simulators",
        subcategories: [
          {
            name: null,
            items: [
              "DP Class A/B Simulator (NI guidelines)",
              "AHTS Tug Simulator",
              "ROV/Subsea Simulator",
              "Drilling Simulator – Surface Tool & Downhole Operations",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "port-management",
    title: "Port Management",
    icon: "port-management",
    tagline: "Integrated Maritime Data Solutions",
    subtitle: "Maritime Domain Awareness Solutions",
    shortDesc:
      "Our port management solution is a comprehensive, all integrated maritime data solution, providing a complete port control tool with the key focus on situational awareness & for the effective monitoring of vessel traffic. The solution emphasizes safety, structured operations, cost-effectiveness, and compliance with IMO and IALA regulations while providing dynamic marine traffic control information.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Solutions-4.png",
    categories: [
      {
        name: "Port & Coastal Management Systems",
        subcategories: [
          {
            name: null,
            items: [
              "Vessel Traffic Monitoring System (VTS/VTMS)",
              "AIS Network",
              "Fisheries Tracking System",
              "Port Management and Information System (PMIS)",
              "Terminal Operating System (TOS)",
              "Smart Port Solution",
              "Aids to Navigation",
              "Berthing Aid Systems",
            ],
          },
        ],
      },
      {
        name: "Training Simulators",
        subcategories: [
          {
            name: null,
            items: [
              "Process & Liquid Cargo Handling Simulator",
              "Crane & Fishing Simulators",
              "DP Class A/B Simulator (NI guidelines)",
              "AHTS Tug Simulator",
              "ROV/Subsea Simulator",
              "Drilling Simulator (Surface & Downhole Operations)",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "surveillance",
    title: "Surveillance Solutions",
    icon: "surveillance",
    tagline: "Coastal & Maritime Border Protection",
    subtitle: "Coastal & Offshore Surveillance",
    shortDesc:
      "Our surveillance solution assists in the protection of territorial waters, coastlines, and maritime borders, by tracking targets at ranges that surpass the IALA requirements. The solution combines versatile, modular sensor technology designed to meet specific application needs, featuring sophisticated signal processing and performance-optimized antennas tailored for detecting small objects in challenging maritime weather.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Solutions-5.png",
    categories: [
      {
        name: "Surveillance Systems",
        subcategories: [
          {
            name: null,
            items: [
              "Coastal Surveillance Solution (CSS)",
              "Offshore Platform Surveillance Solution",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "green-ship",
    title: "Green Ship Solutions",
    icon: "green-ship",
    tagline: "Eco-Friendly Vessel Management",
    subtitle: "Eco-Friendly Vessel Solutions",
    shortDesc:
      "Environmental management system (EMS) has been widely recognized as an important factor in their business models by many vessel owners these days and with the international Maritime Organisation (IMO) expanding further. The shipbuilding and shipping industry now prioritizes building vessels that reduce fuel consumption, toxic substance emissions, and ballast water impacts — protecting marine ecosystems and complying with international regulations.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Untitled-design-2.png",
    categories: [
      {
        name: "Green Ship Systems",
        subcategories: [
          {
            name: null,
            items: [
              "Fuel Efficiency Monitoring System",
              "Ballast Water Treatment System",
              "Ship Exhaust Gas Treatment System",
            ],
          },
        ],
      },
    ],
  },
];

export const subSolutions = [
  {
    slug: "flame-boiler-control-system",
    parentSlug: "services",
    title: "Flame – Boiler Control System",
    subtitle: "RELIABLE & RETROFIT SOLUTIONS FOR YOUR MARINE REQUIREMENTS",
    logo: "https://kduworld.com/wp-content/uploads/2022/05/flame-logo-1-e1632737825926.png",
    description:
      "Flame is an intuitive automation system developed by KDU to provide cost-effective and high-quality solutions to our customers in the maritime sector. FLAME Boiler control system is a reliable, retrofit solution for the existing obsolete boiler automation systems for every make and model of marine boilers. It is specifically designed for Marine Boiler Management System and complies with Class regulations. With FLAME BCS, we guarantee to provide unmatched aftersales support from UAE and India.",
    withoutFlame: [
      "Adversely affected MTT and MTBF rates",
      "Hardwares are not hot swappable",
      "No proper fault diagnosis available for the ships crew",
      "OEM replacements/upgrades are expensive",
      "Most of the hardwares are obsolete",
    ],
    withFlame: [
      "Higher MTBF rates with minimum to zero service calls",
      "With type approved high performance controllers",
      "Self-diagnosis features",
      "Modular design",
      "Advanced workstation on the ECR for continuous monitoring",
      "Alarm monitoring, process trends and alarm logs",
    ],
    systemDiagram:
      "https://kduworld.com/wp-content/uploads/2022/05/Flame-Boiler-Control-System-1-1-768x432.png",
    brochureUrl:
      "https://dev-risians.com/kdu/wp-content/uploads/2022/05/Flame-Boiler-Control-System.pdf",
    image:
      "https://kduworld.com/wp-content/uploads/2022/05/Solutions-1.png",
  },
];

export function getSolutionBySlug(slug) {
  return solutions.find((s) => s.slug === slug);
}

export function getSubSolutionBySlug(parentSlug, subSlug) {
  return subSolutions.find(
    (s) => s.parentSlug === parentSlug && s.slug === subSlug
  );
}

export function getSubSolutionsByParent(parentSlug) {
  return subSolutions.filter((s) => s.parentSlug === parentSlug);
}
