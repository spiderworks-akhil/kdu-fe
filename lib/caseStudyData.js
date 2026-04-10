export const caseStudyCategories = [
  "All",
  "Navigation",
  "Communication",
  "Electrical",
  "Automation",
  "Retrofit",
];

export const caseStudies = [
  {
    slug: "integrated-bridge-retrofit-bulk-carrier",
    title: "Integrated Bridge System Retrofit for a Bulk Carrier Fleet",
    category: "Navigation",
    client: "Leading Middle Eastern Shipping Company",
    location: "Dubai, UAE",
    duration: "6 Months",
    image: "https://kduworld.com/wp-content/uploads/2022/08/Maritime-2.jpg",
    excerpt:
      "Complete bridge system modernization across a fleet of 12 bulk carriers, replacing obsolete navigation equipment with Sperry Marine VisionMaster systems.",
    challenge:
      "The client operated a fleet of 12 bulk carriers with aging bridge equipment from multiple manufacturers. Frequent breakdowns, lack of spare parts for discontinued models, and non-compliance with the latest IMO regulations were causing costly delays and safety concerns. The fleet needed a unified, modern bridge solution without extended dry-dock periods.",
    solution:
      "KDU designed a phased retrofit program using Sperry Marine VisionMaster integrated bridge systems. Each vessel was upgraded during scheduled port calls and short maintenance windows, minimizing downtime. The scope included RADAR/ARPA, ECDIS, gyro compass, autopilot, VDR, and AIS installations. Our engineers coordinated with classification societies for type approval and provided crew training at each port.",
    results: [
      "100% fleet compliance with latest IMO navigation regulations",
      "60% reduction in bridge equipment-related downtime",
      "Unified bridge interface across all 12 vessels, simplifying crew rotation",
      "Estimated annual savings of $180,000 in maintenance and spare parts",
      "Zero operational days lost during the retrofit process",
    ],
    systems: ["RADAR/ARPA", "ECDIS", "Gyro Compass", "Autopilot", "VDR", "AIS"],
    partners: ["Sperry Marine"],
  },
  {
    slug: "gmdss-upgrade-offshore-fleet",
    title: "GMDSS Communication Upgrade for Offshore Support Vessels",
    category: "Communication",
    client: "International Offshore Services Provider",
    location: "Abu Dhabi, UAE",
    duration: "4 Months",
    image: "https://kduworld.com/wp-content/uploads/2022/08/Naval2.jpg",
    excerpt:
      "Full GMDSS Area A3 compliance upgrade for 8 offshore support vessels, including VSAT integration and satellite communication systems.",
    challenge:
      "The client's fleet of 8 OSVs operating in the Arabian Gulf and Indian Ocean required GMDSS Area A3 compliance upgrades. Existing communication equipment was a mix of legacy systems with limited interoperability. The vessels also needed reliable broadband connectivity for crew welfare and operational data transfer.",
    solution:
      "KDU provided a turnkey communication upgrade package including Cobham Sailor GMDSS equipment, Jotron EPIRB and SART units, and integrated VSAT solutions with bundled airtime. We also installed Zenitel internal communication suites and public address systems. All work was completed during scheduled maintenance windows across multiple ports.",
    results: [
      "Full GMDSS Area A3 compliance achieved for all 8 vessels",
      "Seamless broadband connectivity with 99.7% uptime",
      "Integrated voice and data communication across the fleet",
      "30% reduction in communication-related operational costs",
      "Enhanced crew welfare with reliable internet access",
    ],
    systems: ["GMDSS", "VSAT", "MF/HF Radio", "VHF", "EPIRB", "SART", "Internal Communication"],
    partners: ["Cobham", "Jotron", "Zenitel"],
  },
  {
    slug: "power-management-retrofit-container-vessels",
    title: "Power Management System Retrofit for Container Vessels",
    category: "Electrical",
    client: "Regional Container Shipping Line",
    location: "Jebel Ali, UAE",
    duration: "8 Months",
    image: "https://kduworld.com/wp-content/uploads/2022/08/Industrial2.jpg",
    excerpt:
      "Complete power management system upgrade including MSB retrofits, VFD installations, and ETAP studies for a fleet of 6 container vessels.",
    challenge:
      "The client's container vessel fleet suffered from frequent blackouts, inefficient power distribution, and aging switchboards with obsolete protection relays. ETAP studies revealed critical gaps in short circuit protection and load coordination. The vessels needed modern power management without major structural modifications.",
    solution:
      "KDU performed comprehensive ETAP desktop studies covering load flow analysis, short circuit calculations, harmonics study, and arc flash analysis for each vessel. Based on the findings, we retrofitted main switchboards with modern protection relays, installed DEIF power management systems, and added variable frequency drives for major consumers. Shore power converters were installed for cold ironing compliance.",
    results: [
      "Zero blackout incidents in the 12 months following retrofit",
      "25% improvement in fuel efficiency through optimized load management",
      "Full compliance with shore power / cold ironing requirements",
      "Modernized MSB protection coordination across all vessels",
      "Annual fuel savings estimated at $320,000 across the fleet",
    ],
    systems: ["Power Management", "MSB Retrofit", "VFD", "Shore Power Converter", "Protection Relays"],
    partners: ["DEIF", "EMRI"],
  },
  {
    slug: "vessel-management-system-tanker-fleet",
    title: "Vessel Management System Installation for Chemical Tankers",
    category: "Automation",
    client: "Chemical Tanker Operator",
    location: "Fujairah, UAE",
    duration: "5 Months",
    image: "https://kduworld.com/wp-content/uploads/2022/08/Maritime-Training2.jpg",
    excerpt:
      "Design, supply, and commissioning of integrated vessel management and cargo monitoring systems for 4 new-build chemical tankers.",
    challenge:
      "A fleet of 4 new-build chemical tankers required integrated automation systems that could handle complex cargo operations involving multiple chemical grades with strict safety requirements. The systems needed to interface with existing engine room controls and provide real-time monitoring for shore-based fleet managers.",
    solution:
      "KDU supplied and commissioned Hanla IAS (Integrated Automation System) for all 4 vessels, covering vessel management, engine and generator control, machinery alarm monitoring, cargo monitoring and control, and tank gauging. We integrated fuel monitoring solutions for vessel optimization and connected the systems to the client's shore-based fleet management platform for real-time oversight.",
    results: [
      "Seamless cargo operations with automated grade segregation",
      "Real-time shore-based monitoring of all vessel systems",
      "40% reduction in manual monitoring workload",
      "Full classification society approval (DNV GL)",
      "Zero cargo contamination incidents since commissioning",
    ],
    systems: ["Vessel Management", "Cargo Monitoring", "Tank Gauging", "Engine Control", "Fuel Monitoring"],
    partners: ["Hanla"],
  },
  {
    slug: "dp-system-retrofit-ahts-vessels",
    title: "Dynamic Positioning System Retrofit for AHTS Vessels",
    category: "Retrofit",
    client: "Offshore Marine Services Company",
    location: "Dubai & Sharjah, UAE",
    duration: "10 Months",
    image: "https://kduworld.com/wp-content/uploads/2022/08/Ports-Harbours2.jpg",
    excerpt:
      "DP2 system retrofit and complete navigation suite upgrade for 3 anchor handling tug supply vessels operating in the Arabian Gulf.",
    challenge:
      "Three AHTS vessels needed DP2 classification upgrade to qualify for new charter contracts in the offshore oil & gas sector. The existing DP1 systems were outdated and the navigation suites required modernization to support DP2 operations. The project had a tight deadline aligned with charter contract dates.",
    solution:
      "KDU managed the complete DP2 retrofit project including Sperry Marine DP systems, redundant gyro compasses, DGPS reference systems, wind sensors, and motion reference units. The navigation suite was upgraded with new RADAR, ECDIS, and autopilot systems. Our project team coordinated with the classification society throughout, managing sea trials and DP proving trials for each vessel.",
    results: [
      "All 3 vessels achieved DP2 classification on schedule",
      "Successful charter contracts secured worth $12M annually",
      "Enhanced positioning accuracy and redundancy",
      "Comprehensive crew training completed for DP operations",
      "All sea trials and DP proving trials passed on first attempt",
    ],
    systems: ["Dynamic Positioning", "Gyro Compass", "DGPS", "RADAR", "ECDIS", "Autopilot", "Wind Sensors"],
    partners: ["Sperry Marine"],
  },
  {
    slug: "fleet-compliance-monitoring-solution",
    title: "Fleet-Wide Compliance & Fuel Monitoring Solution",
    category: "Automation",
    client: "International Ship Management Company",
    location: "Dubai, UAE",
    duration: "3 Months",
    image: "https://kduworld.com/wp-content/uploads/2022/07/1.-Navigation-1.jpg",
    excerpt:
      "Implementation of REGS4SHIPS regulatory compliance platform and fuel monitoring solution across a managed fleet of 45 vessels.",
    challenge:
      "Managing regulatory compliance across a diverse fleet of 45 vessels spanning multiple flag states and classification societies was becoming increasingly complex. Manual tracking of certificates, inspections, and regulatory changes led to compliance gaps. Additionally, the client needed better visibility into fuel consumption patterns to meet IMO 2023 CII rating targets.",
    solution:
      "KDU deployed One Ocean's REGS4SHIPS and Passage Manager across the entire fleet, providing automated regulatory tracking, certificate management, and voyage optimization. Fuel monitoring systems were installed on each vessel to capture real-time consumption data, enabling shore-based analysis of CII ratings and identifying optimization opportunities.",
    results: [
      "100% regulatory compliance maintained across 45 vessels",
      "Automated tracking of 2,000+ certificates and documents",
      "15% average improvement in CII ratings fleet-wide",
      "Real-time fuel consumption visibility for all vessels",
      "Estimated annual savings of $500,000 in fuel optimization",
    ],
    systems: ["REGS4SHIPS", "Passage Manager", "Fuel Monitoring", "Fleet Tracking"],
    partners: ["One Ocean"],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByCategory(category) {
  if (category === "All") return caseStudies;
  return caseStudies.filter((cs) => cs.category === category);
}

export function getRelatedCaseStudies(currentSlug, count = 3) {
  const current = getCaseStudyBySlug(currentSlug);
  if (!current) return [];
  const sameCategory = caseStudies.filter(
    (cs) => cs.slug !== currentSlug && cs.category === current.category
  );
  const others = caseStudies.filter(
    (cs) => cs.slug !== currentSlug && cs.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
