import {
  FiNavigation,
  FiRadio,
  FiZap,
  FiCpu,
  FiShield,
  FiSun,
} from "react-icons/fi";

export const iconMap = {
  navigation: FiNavigation,
  communication: FiRadio,
  electrical: FiZap,
  automation: FiCpu,
  "fleet-compliance": FiShield,
  "aids-to-navigation": FiSun,
};

export const productCategories = [
  {
    slug: "navigation",
    title: "Navigation",
    icon: "navigation",
    desc: "Gyrocompasses, radar systems, ECDIS, autopilots, voyage data recorders, speed logs, echo sounders, and integrated bridge systems.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/07/1.-Navigation-1.jpg",
    intro:
      "KDU supplies and services a comprehensive range of navigation equipment from world-leading manufacturers. Our navigation solutions cover everything from basic positioning to fully integrated bridge systems for vessels of all sizes and types.",
    subcategories: [
      {
        name: "Radar",
        items: [
          { product: "VisionMaster Net Radar", manufacturer: "Sperry Marine", images: ["https://kduworld.com/wp-content/uploads/2025/02/Vision-Master-Radar.jpg", "https://kduworld.com/wp-content/uploads/2025/02/VisionMaster-Radar-1.jpg"], brochures: [{ name: "VisionMaster Net Radar Brochure", url: "/downloads/brochures/visionmaster-net-radar.pdf" }, { name: "Sperry Marine Product Catalog", url: "/downloads/brochures/sperry-marine-catalog.pdf" }] },
          { product: "ARGUS X Band & S Band", manufacturer: "SIMRAD" },
          { product: "HALO Radar", manufacturer: "SIMRAD" },
          { product: "R5000 Radar", manufacturer: "SIMRAD" },
        ],
      },
      {
        name: "Gyro Compass System",
        items: [
          { product: "NAVIGAT 100", manufacturer: "Sperry Marine" },
          { product: "NAVIGAT 200", manufacturer: "Sperry Marine" },
          { product: "NAVIGAT 2500", manufacturer: "Sperry Marine" },
          { product: "NAVIGAT 3500", manufacturer: "Sperry Marine" },
          { product: "FW7701 / FW7702 / FW7703 Sestral Navigator", manufacturer: "Lilley & Gillie" },
          { product: "Mk2000S / Mk2020S", manufacturer: "Lilley & Gillie" },
          { product: "GC80 / GC85 Expanded Gyro", manufacturer: "SIMRAD" },
          { product: "NEMAcourse Digital / Analog Heading Display", manufacturer: "Cassens & Plath" },
        ],
      },
      {
        name: "ECDIS",
        items: [
          { product: "VisionMaster Net ECDIS", manufacturer: "Sperry Marine" },
          { product: "ECDIS900 MK5 / MK15", manufacturer: "SIMRAD" },
        ],
      },
      {
        name: "Speed Logs",
        items: [
          { product: "NAVIKNOT Speed Log", manufacturer: "Sperry Marine" },
          { product: "DL1 / DL2 / DL21", manufacturer: "Skipper" },
          { product: "SD21", manufacturer: "Skipper" },
          { product: "SATLOG SL1200", manufacturer: "Skipper" },
          { product: "EML224 Series", manufacturer: "Skipper" },
          { product: "4020 / 7070 / 7080 Type Approved", manufacturer: "Lilley & Gillie" },
        ],
      },
      {
        name: "Autopilots",
        items: [
          { product: "NAVIPILOT 4500N", manufacturer: "Sperry Marine" },
          { product: "NT888G / NT1050", manufacturer: "Navitron" },
          { product: "AP70 / AP80", manufacturer: "SIMRAD" },
        ],
      },
      {
        name: "VDR / S-VDR",
        items: [
          { product: "DM100 VDR G3", manufacturer: "Danelec" },
          { product: "DM100 S-VDR G3", manufacturer: "Danelec" },
        ],
      },
      {
        name: "AIS",
        items: [
          { product: "Maritime AIS Transponder", manufacturer: "Sperry Marine" },
          { product: "AIS System", manufacturer: "SIMRAD" },
        ],
      },
      {
        name: "Echo Sounders",
        items: [
          { product: "Echo Sounder", manufacturer: "Sperry Marine" },
          { product: "Echo Sounder", manufacturer: "Skipper" },
        ],
      },
      {
        name: "GPS / DGPS",
        items: [
          { product: "GPS Navigator", manufacturer: "Sperry Marine" },
          { product: "GPS System", manufacturer: "SIMRAD" },
        ],
      },
      {
        name: "NAVTEX",
        items: [
          { product: "NAVTEX Receiver", manufacturer: "SIMRAD" },
          { product: "NAVTEX Receiver", manufacturer: "Jotron" },
        ],
      },
      {
        name: "BNWAS",
        items: [
          { product: "Bridge Navigational Watch Alarm System", manufacturer: "Sperry Marine" },
          { product: "BNWAS", manufacturer: "Danelec" },
        ],
      },
      {
        name: "Dynamic Positioning",
        items: [
          { product: "DP System", manufacturer: "Sperry Marine" },
        ],
      },
      {
        name: "Integrated Bridge Systems",
        items: [
          { product: "VisionMaster Integrated Bridge", manufacturer: "Sperry Marine" },
        ],
      },
      {
        name: "EPIRB / SART",
        items: [
          { product: "EPIRB Emergency Beacon", manufacturer: "Jotron" },
          { product: "SART Transponder", manufacturer: "Jotron" },
          { product: "EPIRB", manufacturer: "Cobham" },
        ],
      },
      {
        name: "Weather & Wind Systems",
        items: [
          { product: "Wind Sensor Systems", manufacturer: "Sperry Marine" },
        ],
      },
    ],
  },
  {
    slug: "communication",
    title: "Communication",
    icon: "communication",
    desc: "GMDSS, VSAT, VHF, MF/HF radio, satellite communication, public address, and internal communication systems.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/07/2.-Communication.jpg",
    intro:
      "KDU provides complete communication solutions for maritime and offshore applications. From mandatory GMDSS equipment to advanced satellite broadband systems, we ensure vessels maintain reliable communication links at all times.",
    subcategories: [
      {
        name: "Internal Communication - Intercom",
        items: [
          { product: "ICX-AlphaCom Platform", manufacturer: "Zenitel" },
          { product: "ACM AlphaCom for Maritime", manufacturer: "Zenitel" },
          { product: "ICS 6200 Communication System", manufacturer: "Zenitel" },
          { product: "Batteryless Telephone", manufacturer: "Zenitel" },
          { product: "Hospital & Refrigerator Alarm System", manufacturer: "Zenitel" },
          { product: "CIS Talk-Back System", manufacturer: "Zenitel" },
          { product: "SPA PA GA System", manufacturer: "Zenitel" },
        ],
      },
      {
        name: "VHF Radios",
        items: [
          { product: "Sailor 6210 VHF", manufacturer: "Cobham" },
          { product: "Sailor 6248 VHF", manufacturer: "Cobham" },
          { product: "Sailor 6249 VHF Survival Craft", manufacturer: "Cobham" },
          { product: "Sailor 7222 VHF DSC Class A", manufacturer: "Cobham" },
        ],
      },
      {
        name: "MF/HF Radios",
        items: [
          { product: "Sailor 6310 MF/HF DSC Class A 150W", manufacturer: "Cobham" },
          { product: "Sailor 6320 MF/HF DSC Class A 250W", manufacturer: "Cobham" },
          { product: "Sailor 6350 MF/HF DSC Class A 500W", manufacturer: "Cobham" },
        ],
      },
      {
        name: "Handheld Radios",
        items: [
          { product: "Tron TR30 AIR Emergency VHF AM", manufacturer: "Jotron" },
          { product: "Tron TR30 GMDSS Maritime VHF", manufacturer: "Jotron" },
          { product: "Sailor SP3500 Series", manufacturer: "Cobham" },
          { product: "Sailor 3965 UHF Fire Fighter", manufacturer: "Cobham" },
          { product: "HT644 / HT649 / HT844", manufacturer: "Entel" },
          { product: "DT542 / DT544 / DT582M / DT585M", manufacturer: "Entel" },
          { product: "DT842 / DT844FF / DT944 / DT944FF", manufacturer: "Entel" },
          { product: "DT982M / DT985FF / DT882M / DT885FF", manufacturer: "Entel" },
          { product: "DP 4000e / DP2000e / DP 1400 Series", manufacturer: "Motorola" },
          { product: "SL2600 / DP 3000e", manufacturer: "Motorola" },
        ],
      },
      {
        name: "SAT C System",
        items: [
          { product: "Sailor 6110 GMDSS System", manufacturer: "Cobham" },
          { product: "Sailor 6120 SSAS System", manufacturer: "Cobham" },
          { product: "Sailor 6130 LRIT System", manufacturer: "Cobham" },
          { product: "Sailor 6140 Maritime System", manufacturer: "Cobham" },
          { product: "Sailor 6150 Non-SOLAS Distress System", manufacturer: "Cobham" },
        ],
      },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    icon: "electrical",
    desc: "Switchboards, power management, protection relays, distribution systems, shore power converters, and VFDs.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/04/3.-Electrical.png",
    intro:
      "KDU designs, manufactures, and services electrical systems for marine and industrial applications. Our electrical solutions range from individual components to complete turnkey power distribution and management systems.",
    subcategories: [
      {
        name: "Maritime Controllers",
        items: [
          { product: "Delomatic 4", manufacturer: "DEIF" },
          { product: "PPU-300 Paralleling & Protection Unit", manufacturer: "DEIF" },
          { product: "PPM-300 Power Management System", manufacturer: "DEIF" },
          { product: "GPU-300 Generator Protection Unit", manufacturer: "DEIF" },
          { product: "PPU-3 / PPM-3 / GPU-3", manufacturer: "DEIF" },
          { product: "iE 250 Marine / iE 150 Marine", manufacturer: "DEIF" },
        ],
      },
      {
        name: "Industrial Controllers",
        items: [
          { product: "AGC-4 Diesel Controller", manufacturer: "DEIF" },
          { product: "ASC-4 / GPC-3", manufacturer: "DEIF" },
          { product: "APU-4 / ALC-4", manufacturer: "DEIF" },
          { product: "AGC-150 / AGC-150 ATS Controller", manufacturer: "DEIF" },
          { product: "ECU-100 Engine Control", manufacturer: "DEIF" },
          { product: "SGC / CGC 400 / SGC 420 MK II", manufacturer: "DEIF" },
          { product: "TDU-107 / AGI 400 / MDR-2", manufacturer: "DEIF" },
        ],
      },
      {
        name: "Voltage Regulators",
        items: [
          { product: "LXCOS / TAIYO / LX4", manufacturer: "EMRI" },
          { product: "LX10.2 / LX20 / LX449", manufacturer: "EMRI" },
          { product: "ASR35 / ASR Series / EVA / CATAVR", manufacturer: "EMRI" },
          { product: "LX321 / LX341 / LX342", manufacturer: "EMRI" },
        ],
      },
      {
        name: "Energy Solutions",
        items: [
          { product: "WE Drive", manufacturer: "Wetech" },
          { product: "Variable Speed Generator", manufacturer: "Wetech" },
          { product: "Shore Power Solutions", manufacturer: "Wetech" },
          { product: "Energy Storage Solutions", manufacturer: "Wetech" },
        ],
      },
      {
        name: "Azimuth Propulsion",
        items: [
          { product: "Steerprop CRP / CRP ECO", manufacturer: "Steerprop" },
          { product: "Steerprop W Series", manufacturer: "Steerprop" },
        ],
      },
      {
        name: "Lighting",
        items: [
          { product: "TL40L / TL40S / DE38L / DE38S", manufacturer: "LightPartner" },
          { product: "TL Vario L / TL Vario M / DL Vario L", manufacturer: "LightPartner" },
          { product: "EX40 S / EX40 L", manufacturer: "LightPartner" },
        ],
      },
      {
        name: "Instruments & Protection",
        items: [
          { product: "EPN-110DN Single Function Components", manufacturer: "DEIF" },
          { product: "CSQ-3 Synchronising Instruments", manufacturer: "DEIF" },
          { product: "SIM-Q MK II / AAL-2 Insulation Monitoring", manufacturer: "DEIF" },
          { product: "MIC-2 / MIC / MIB Multi-function Meters", manufacturer: "DEIF" },
          { product: "XDI / HC36/24 Digital Meters", manufacturer: "DEIF" },
          { product: "MVR 200 Protection Relays", manufacturer: "DEIF" },
        ],
      },
      {
        name: "PLC & Remote Monitoring",
        items: [
          { product: "AMC300 / AMC600 / AWC500 PLC", manufacturer: "DEIF" },
          { product: "CODESYS Runtime", manufacturer: "DEIF" },
          { product: "Insight FX30 Remote Monitoring", manufacturer: "DEIF" },
        ],
      },
    ],
  },
  {
    slug: "automation",
    title: "Automation",
    icon: "automation",
    desc: "Alarm monitoring, power management, engine room automation, propulsion control, and vessel management systems.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/07/4.-Automation.jpg",
    intro:
      "KDU delivers advanced automation solutions for engine room monitoring, propulsion control, and vessel-wide management. Our systems enable efficient, safe operation with reduced crew workload and optimized performance.",
    subcategories: [
      {
        name: "Alarm Monitoring Systems",
        items: [
          { product: "Evolution V5 Integrated Alarm & Monitoring", manufacturer: "Rockson Automation" },
          { product: "CMAC-3000 Vessel Management System", manufacturer: "KDU" },
        ],
      },
      {
        name: "Boiler Control Systems",
        items: [
          { product: "FLAME Boiler Control System", manufacturer: "KDU" },
        ],
      },
      {
        name: "Level Gauges",
        items: [
          { product: "Flat Type Glass Level Gauge", manufacturer: "Hanla" },
          { product: "Tubular Type Glass", manufacturer: "Hanla" },
          { product: "Marine Float Type", manufacturer: "Hanla" },
          { product: "Magnetic Float Type", manufacturer: "Hanla" },
          { product: "Self-powered Content Gauge", manufacturer: "Hanla" },
          { product: "Dial Type Float Gauge", manufacturer: "Hanla" },
        ],
      },
      {
        name: "Level Transmitters",
        items: [
          { product: "Electric Pressure Type", manufacturer: "Hanla" },
          { product: "Microwave Type", manufacturer: "Hanla" },
          { product: "Capacitive Type", manufacturer: "Hanla" },
          { product: "Magnetic Float Type Transmitter", manufacturer: "Hanla" },
        ],
      },
      {
        name: "Level Switches",
        items: [
          { product: "Micro Switch Type Float", manufacturer: "Hanla" },
          { product: "Displacement Type", manufacturer: "Hanla" },
          { product: "Float Operated Type", manufacturer: "Hanla" },
          { product: "Reed Switch Type", manufacturer: "Hanla" },
          { product: "Flow Detection Type", manufacturer: "Hanla" },
          { product: "Quick Float Type", manufacturer: "Hanla" },
          { product: "Capacitance Type Oil Detector", manufacturer: "Hanla" },
          { product: "Vibration Type (Liquid & Solid)", manufacturer: "Hanla" },
          { product: "Paddle Type (Solid)", manufacturer: "Hanla" },
        ],
      },
      {
        name: "Loading Computer",
        items: [
          { product: "LoadPlus Loading Computer", manufacturer: "Hanla" },
        ],
      },
      {
        name: "Safety & Monitoring Systems",
        items: [
          { product: "Water Ingress Detection", manufacturer: "Hanla" },
          { product: "Vapour Emission Control", manufacturer: "Hanla" },
          { product: "Fixed Gas Sampling System", manufacturer: "Hanla" },
          { product: "Cargo Tank High / Overfill Alarm", manufacturer: "Hanla" },
          { product: "Valve Remote Control System", manufacturer: "Hanla" },
          { product: "Ballast Water Treatment System", manufacturer: "Hanla" },
        ],
      },
      {
        name: "Fuel & Hull Monitoring",
        items: [
          { product: "Flowmetrics+ Fuel Monitoring Solution", manufacturer: "KDU" },
          { product: "Hull Stress Monitoring System", manufacturer: "Hullmos" },
          { product: "Dead Man Alarm for ER", manufacturer: "SM Electrics" },
        ],
      },
      {
        name: "Oil Discharge & Emissions",
        items: [
          { product: "SMART ODME (Oil Discharge Monitoring)", manufacturer: "Rivertrace" },
          { product: "COMD / AOMD / BWM / SPM / SHaPoLi", manufacturer: "SpecsVision" },
        ],
      },
    ],
  },
  {
    slug: "fleet-compliance",
    title: "Fleet Compliance",
    icon: "fleet-compliance",
    desc: "Regulatory compliance solutions, digital chart supply, fleet performance monitoring, and management systems.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/07/6.-Fleet-Compliance.jpg",
    intro:
      "KDU supports fleet operators in meeting regulatory obligations and optimizing vessel performance through digital compliance management, chart supply services, and performance monitoring solutions.",
    subcategories: [
      {
        name: "Fleet Compliance Solutions",
        items: [
          { product: "Regs4Ships", manufacturer: "One Ocean" },
          { product: "Passage Manager", manufacturer: "One Ocean" },
          { product: "Fleet Manager", manufacturer: "One Ocean" },
          { product: "EnviroManager+", manufacturer: "One Ocean" },
        ],
      },
      {
        name: "Publications - IMO",
        items: [
          { product: "SOLAS Consolidated Edition", manufacturer: "IMO" },
          { product: "International Medical Guide", manufacturer: "IMO" },
          { product: "Security Guide & ISPS Code", manufacturer: "IMO" },
          { product: "ISM Code & Guidelines", manufacturer: "IMO" },
          { product: "Fire Safety Systems (FSS)", manufacturer: "IMO" },
          { product: "IMDG Code and Supplement", manufacturer: "IMO" },
          { product: "IMSBC Code and Supplement", manufacturer: "IMO" },
          { product: "MARPOL Consolidated Edition", manufacturer: "IMO" },
          { product: "Procedures for Port State Control", manufacturer: "IMO" },
          { product: "Load Lines Consolidated", manufacturer: "IMO" },
          { product: "Ships' Routeing", manufacturer: "IMO" },
          { product: "STCW inc. Manila Amendment", manufacturer: "IMO" },
          { product: "IAMSAR Volume III", manufacturer: "IMO" },
          { product: "GMDSS Manual", manufacturer: "IMO" },
          { product: "Life-Saving Appliances", manufacturer: "IMO" },
          { product: "International Code of Signals", manufacturer: "IMO" },
        ],
      },
      {
        name: "Publications - Admiralty",
        items: [
          { product: "NP38 / NP63 / NP64 / NP203", manufacturer: "Admiralty" },
          { product: "NP77 / NP79 / NP281-NP314", manufacturer: "Admiralty" },
          { product: "NP735 / NP5011", manufacturer: "Admiralty" },
        ],
      },
      {
        name: "Publications - ITU & Other",
        items: [
          { product: "ITU List V Ship Station", manufacturer: "ITU" },
          { product: "List IV Coast Stations", manufacturer: "ITU" },
          { product: "ITU Maritime Mobile", manufacturer: "ITU" },
          { product: "Bridge Procedures Guide", manufacturer: "ICS" },
          { product: "Effective Mooring", manufacturer: "OCIMF" },
          { product: "ISGOTT (Oil Tankers)", manufacturer: "OCIMF" },
          { product: "Mooring Equipment Guidelines", manufacturer: "OCIMF" },
          { product: "IMPA Marine Stores Catalogue", manufacturer: "IMPA" },
          { product: "Ship Captains Medical Guide", manufacturer: "Other" },
          { product: "Thomas Stowage", manufacturer: "Other" },
          { product: "Brown's Nautical Almanac", manufacturer: "Other" },
        ],
      },
      {
        name: "Logbooks",
        items: [
          { product: "ISPS Visitor Log Book", manufacturer: "Standard" },
          { product: "Bridge Orders Log Book", manufacturer: "Standard" },
          { product: "Compass Observation Book", manufacturer: "Standard" },
          { product: "Bell Books", manufacturer: "Standard" },
          { product: "Deck / Engine Log Books", manufacturer: "Standard" },
          { product: "Oil Record Book", manufacturer: "Standard" },
          { product: "Garbage Record Book", manufacturer: "Standard" },
        ],
      },
    ],
  },
  {
    slug: "aids-to-navigation",
    title: "Aids to Navigation",
    icon: "aids-to-navigation",
    desc: "Lighthouse equipment, marine lanterns, buoys, racons, fog signals, and sector lights.",
    image:
      "https://kduworld.com/wp-content/uploads/2022/07/5.-Aids-to-Navigation.jpg",
    intro:
      "KDU supplies and maintains a full range of aids to navigation equipment for ports, harbours, and coastal installations. Our AtoN solutions ensure safe passage for vessels through accurate visual and electronic marking of waterways.",
    subcategories: [
      {
        name: "LED Marine Lanterns",
        items: [
          { product: "MBL150 / MBL160 / MBL170", manufacturer: "MSM" },
          { product: "MBL400C / MBL400S", manufacturer: "MSM" },
          { product: "MBL500LD", manufacturer: "MSM" },
        ],
      },
      {
        name: "Power Supply Systems",
        items: [
          { product: "SPM20 / 40 / 90 / 175 / 360", manufacturer: "MSM" },
          { product: "Steca PR / Sunsaver 10/20", manufacturer: "MSM" },
          { product: "Solar Series / Solar Block Series", manufacturer: "MSM" },
          { product: "A600 Solar Series", manufacturer: "MSM" },
          { product: "Blue Smart / Phoenix / SCU", manufacturer: "MSM" },
          { product: "Lead Crystal / Smart Solar / STECA Solarix", manufacturer: "MSM" },
        ],
      },
      {
        name: "Leading & Range Lights",
        items: [
          { product: "MEL500L / MEL250L", manufacturer: "MSM" },
          { product: "MRL / MDL", manufacturer: "MSM" },
          { product: "MLP2000 / MLP2000-3", manufacturer: "MSM" },
        ],
      },
      {
        name: "Towers and Poles",
        items: [
          { product: "MTI / MTP / MTP-S", manufacturer: "MSM" },
          { product: "TPG / MTS / MPM", manufacturer: "MSM" },
        ],
      },
      {
        name: "AIS, RACON & Remote Monitoring",
        items: [
          { product: "RBM4 RACON", manufacturer: "MSM" },
          { product: "MTU AIS C / MTU AIS", manufacturer: "MSM" },
          { product: "MTA / MAK / MFAIS", manufacturer: "MSM" },
          { product: "MFGSM / MFSAT / MFUHF / MFGPS", manufacturer: "MSM" },
          { product: "MTU / MRF / NETCOM", manufacturer: "MSM" },
          { product: "MMBO2 / MTA300", manufacturer: "MSM" },
        ],
      },
      {
        name: "Rotating Beacons",
        items: [
          { product: "MBR300R / MBR300L", manufacturer: "MSM" },
          { product: "MBR400R", manufacturer: "MSM" },
          { product: "MBR600R", manufacturer: "MSM" },
          { product: "MBR900R / MBR900L", manufacturer: "MSM" },
        ],
      },
      {
        name: "Buoys",
        items: [
          { product: "EBM Elastomer Buoys", manufacturer: "MSM" },
          { product: "MBM Mooring Buoy", manufacturer: "MSM" },
          { product: "PBM Polyethylene Buoys", manufacturer: "MSM" },
          { product: "RBM Polyethylene Buoys", manufacturer: "MSM" },
        ],
      },
      {
        name: "LED Compact Beacons",
        items: [
          { product: "MCL 100 / 120 / 160 / 180", manufacturer: "MSM" },
          { product: "MCL 200 / 250 / 250 N", manufacturer: "MSM" },
          { product: "MCL 330 / 400 / 400 HD", manufacturer: "MSM" },
        ],
      },
      {
        name: "Lighthouse Equipment",
        items: [
          { product: "LEM / MLL1000 / MFR", manufacturer: "MSM" },
          { product: "MLL18 / MLL50 / MLCO2", manufacturer: "MSM" },
          { product: "MRM 160 / MRM 1200", manufacturer: "MSM" },
          { product: "MTF / MTF3000", manufacturer: "MSM" },
        ],
      },
    ],
  },
];

// Rich product details keyed by slug
const productDetails = {
  "sailor-6248-vhf": {
    description:
      "The Sailor 6248 VHF continues the SAILOR tradition of setting new standards for maritime radio design. Engineered specifically for harsh maritime environments as part of the SAILOR 6000 series, this unit emphasizes dependability and user accessibility. The 6248 delivers exceptional audio clarity through its powerful loudspeaker and professional-grade handset, making it ideal for both bridge-to-bridge and distress communication.",
    features: [
      "High performance Rx/Tx capability",
      "Powerful 6W loudspeaker for clear audio in noisy environments",
      "Professional-grade SAILOR handsets with ergonomic design",
      "Intuitive operation with large tactile buttons and dials",
      "High-quality display optimized for day and night vision",
      "Unique SAILOR Replay function with 240-second playback",
      "ThraneLINK integration for simplified maintenance",
      "Includes SAILOR 6201 Handset, U-bracket, flush mount kit, power cable, and coax cable",
    ],
  },
  "sailor-6210-vhf": {
    description:
      "The Sailor 6210 VHF is a compact, high-performance fixed-mount VHF radiotelephone designed for professional maritime use. Part of the renowned SAILOR 6000 series, it delivers reliable communication in the most demanding sea conditions with excellent audio quality and intuitive controls.",
    features: [
      "Compact design ideal for space-constrained bridge installations",
      "25W transmit power for maximum range",
      "Built-in DSC Class D functionality",
      "Dual/tri-watch capability for monitoring multiple channels",
      "Programmable scan and memory channels",
      "Robust construction rated for harsh maritime environments",
      "NMEA 0183 interface for GPS and external device connectivity",
    ],
  },
  "visionmaster-net-radar": {
    description:
      "The VisionMaster Net Radar from Sperry Marine is a state-of-the-art maritime radar system designed for both X-band and S-band operation. Built on the proven VisionMaster platform, it provides exceptional target detection, tracking, and display capabilities for vessels of all sizes. The system integrates seamlessly with other bridge equipment through the VisionMaster network.",
    features: [
      "Available in X-band and S-band configurations",
      "High-resolution color display with anti-clutter processing",
      "Automatic Radar Plotting Aid (ARPA) with up to 100 targets",
      "Chart radar overlay with ENC/ARCS chart data",
      "Target tracking with CPA/TCPA alarms",
      "IMO and IEC compliant for SOLAS vessels",
      "Network-ready for VisionMaster integrated bridge systems",
      "Multiple display sizes available (19\", 23\", 26\")",
    ],
  },
  "navigat-100": {
    description:
      "The NAVIGAT 100 is a high-performance fiber-optic gyrocompass from Sperry Marine designed for commercial vessels of all sizes. With no moving parts, it offers maintenance-free operation, rapid settling time, and exceptional heading accuracy — making it the preferred choice for modern merchant vessels worldwide.",
    features: [
      "Fiber-optic technology with no moving parts",
      "Heading accuracy of 0.1 degrees secant latitude",
      "Rapid settling time under 30 minutes",
      "Maintenance-free operation throughout service life",
      "Supports up to 6 repeater connections",
      "Multiple output formats: NMEA 0183, synchro, and step signals",
      "Compact design with low power consumption",
      "IMO and classification society type-approved",
    ],
  },
  "navigat-200": {
    description:
      "The NAVIGAT 200 from Sperry Marine builds upon the NAVIGAT 100 platform with enhanced features for high-speed vessels and naval applications. It delivers superior dynamic accuracy and expanded integration capabilities, making it ideal for fast ferries, patrol vessels, and naval ships operating in demanding conditions.",
    features: [
      "Enhanced dynamic accuracy for high-speed vessels (30+ knots)",
      "Advanced roll and pitch compensation algorithms",
      "Supports up to 12 repeater connections",
      "Integrated speed log input for optimal performance",
      "Built-in comprehensive self-diagnostics",
      "Redundant power supply inputs for mission-critical applications",
      "Fiber-optic sensing technology for long-term reliability",
      "Full IMO and military standard compliance",
    ],
  },
  "visionmaster-net-ecdis": {
    description:
      "The VisionMaster Net ECDIS from Sperry Marine is a type-approved Electronic Chart Display and Information System that enables paperless navigation. It provides comprehensive route planning, voyage monitoring, and chart management capabilities fully integrated into the VisionMaster bridge ecosystem.",
    features: [
      "IMO-compliant paperless navigation capability",
      "Supports both ENC (S-57) and ARCS raster charts",
      "Advanced route planning with safety checking",
      "Automatic chart update management",
      "Radar overlay and AIS target display",
      "Voyage recording and playback functionality",
      "Dual redundant configuration support",
      "Seamless VisionMaster network integration",
    ],
  },
  "dm100-vdr-g3": {
    description:
      "The DM100 VDR G3 from Danelec is a third-generation Voyage Data Recorder designed to meet the latest IMO performance standards. Featuring a completely redesigned architecture, it prioritizes ease of installation, minimal maintenance, and maximum uptime while ensuring all critical voyage data is captured and preserved.",
    features: [
      "Fully compliant with IMO Resolution MSC.609(88)",
      "Up to 48 hours of continuous data recording",
      "Improved data compression algorithms",
      "Fixed and float-free capsule options",
      "Simplified installation with plug-and-play connectivity",
      "Remote diagnostics and firmware update capability",
      "Compact form factor — 40% smaller than previous generation",
      "Type-approved by DNV, Lloyd's Register, and Bureau Veritas",
    ],
  },
  "dm100-s-vdr-g3": {
    description:
      "The DM100 S-VDR G3 from Danelec is a Simplified Voyage Data Recorder meeting IMO MSC.333(90) requirements. It provides a cost-effective voyage data recording solution for vessels not required to carry a full VDR, while maintaining the same robust data integrity and reliability standards.",
    features: [
      "Compliant with IMO Resolution MSC.333(90) for S-VDR",
      "12-hour continuous recording capacity",
      "Fixed capsule rated for deep-sea recovery",
      "Ethernet and serial sensor interfaces",
      "Automatic performance testing and diagnostics",
      "Shore-based playback software included",
      "Low power consumption for reduced operating costs",
      "Easy retrofit installation for existing vessels",
    ],
  },
  "navipilot-4500n": {
    description:
      "The NAVIPILOT 4500N from Sperry Marine is an adaptive autopilot system that provides precise heading and track control for vessels of all sizes. Featuring advanced adaptive algorithms, it continuously optimizes steering performance based on sea state, vessel loading, and speed — reducing fuel consumption and rudder wear.",
    features: [
      "Adaptive steering algorithms for all sea conditions",
      "Heading and track control modes",
      "Weather routing and optimal speed control",
      "Automatic sea state adaptation",
      "Fuel savings through optimized rudder movements",
      "Integration with ECDIS for route-following capability",
      "Multiple control stations supported",
      "IMO performance standards compliant",
    ],
  },
  "delomatic-4": {
    description:
      "The Delomatic 4 from DEIF is an advanced diesel engine and genset controller for marine power management applications. It offers comprehensive engine protection, generator control, and power management functionality in a single, compact unit — making it the backbone of modern marine electrical systems.",
    features: [
      "Integrated engine control and generator protection",
      "Automatic load sharing and power management",
      "Bus tie breaker control and synchronizing",
      "Comprehensive engine and generator monitoring",
      "Configurable I/O for flexible system design",
      "Color TFT display with intuitive interface",
      "MODBUS and Ethernet communication protocols",
      "Classification society type-approved for marine use",
    ],
  },
  "ppm-300-power-management-system": {
    description:
      "The PPM-300 from DEIF is an intelligent Power Management System designed for complex marine electrical installations. It optimizes generator loading, manages load-dependent start/stop, and prevents blackouts through advanced load shedding — ensuring reliable power supply across all vessel operations.",
    features: [
      "Automatic generator start/stop based on load demand",
      "Intelligent load sharing across multiple generators",
      "Advanced blackout prevention with load shedding",
      "Shore power connection management",
      "Heavy consumer management and sequence control",
      "Graphical power system overview display",
      "Integration with DEIF AGC/ASC controller family",
      "Remote monitoring via Insight platform",
    ],
  },
  "agc-150": {
    description:
      "The AGC 150 from DEIF is a versatile genset controller suitable for both marine and industrial applications. It provides reliable automatic transfer switching, engine control, and generator protection in a compact and cost-effective package.",
    features: [
      "Automatic mains failure (AMF) detection and transfer",
      "Engine start/stop control with configurable timers",
      "Generator voltage and frequency monitoring",
      "Built-in battery charger monitoring",
      "Multiple communication interfaces",
      "Programmable inputs and outputs",
      "Compact DIN-rail or panel mount installation",
      "Suitable for single and multi-genset applications",
    ],
  },
  "icx-alphacom-platform": {
    description:
      "The ICX-AlphaCom Platform from Zenitel is a state-of-the-art IP-based intercom and communication system designed for maritime environments. It provides crystal-clear audio communication throughout the vessel with advanced features including emergency calling, zone paging, and integration with PA/GA systems.",
    features: [
      "IP-based architecture for flexible deployment",
      "Crystal-clear audio in high-noise environments",
      "Emergency call prioritization and override",
      "Zone paging and group calling",
      "Integration with PA and General Alarm systems",
      "Redundant network paths for reliability",
      "Web-based configuration and management",
      "DNV-GL type-approved for maritime use",
    ],
  },
  "evolution-v5-integrated-alarm-and-monitoring": {
    description:
      "The Evolution V5 from Rockson Automation is an advanced integrated alarm and monitoring system designed for marine vessel management. It provides comprehensive machinery surveillance, safety monitoring, and data logging for both manned and periodically unattended machinery spaces.",
    features: [
      "Class-approved alarm monitoring for all machinery systems",
      "Support for periodically unattended machinery spaces (UMS)",
      "Distributed I/O architecture for flexible installation",
      "Color touchscreen operator stations",
      "Comprehensive data logging and trend recording",
      "Redundant network communication",
      "Remote access and diagnostic capability",
      "Expandable modular system architecture",
    ],
  },
  "cmac-3000-vessel-management-system": {
    description:
      "The CMAC-3000 is KDU's in-house developed Vessel Management System providing integrated monitoring and control of all onboard machinery systems. Built on years of marine engineering experience, it delivers reliable, cost-effective vessel automation tailored to specific operator requirements.",
    features: [
      "Fully integrated vessel management platform",
      "Real-time monitoring of all machinery parameters",
      "Alarm management with priority classification",
      "Historical data logging and trend analysis",
      "Customizable mimic displays for each vessel",
      "Redundant server architecture",
      "Remote shore-based monitoring capability",
      "Designed and supported by KDU engineering team",
    ],
  },
  "flame-boiler-control-system": {
    description:
      "The FLAME Boiler Control System is KDU's proprietary automated boiler management solution. It provides precise combustion control, water level regulation, and comprehensive safety monitoring — ensuring efficient and safe boiler operation aboard marine vessels.",
    features: [
      "Automated combustion control with fuel/air ratio optimization",
      "Precise water level regulation and monitoring",
      "Comprehensive safety interlocks and shutdown logic",
      "Flame detection and ignition sequence control",
      "Touchscreen operator interface with status overview",
      "Data logging for performance analysis",
      "Compatible with oil-fired and dual-fuel boilers",
      "Developed and supported in-house by KDU",
    ],
  },
  "regs4ships": {
    description:
      "Regs4Ships from One Ocean is a digital regulatory compliance platform that keeps vessels updated with the latest maritime regulations. It provides instant access to all applicable rules and requirements, helping officers maintain compliance and prepare for inspections with confidence.",
    features: [
      "Complete database of IMO, flag state, and class regulations",
      "Automatic updates as regulations change",
      "Vessel-specific regulation filtering",
      "Inspection preparation checklists",
      "Offline access for use at sea",
      "Integration with Fleet Manager platform",
      "Port state control preparation tools",
      "Multi-language support",
    ],
  },
  "passage-manager": {
    description:
      "Passage Manager from One Ocean is a comprehensive digital passage planning and chart management solution. It streamlines the voyage planning process with ENC chart supply, route planning, and compliance documentation — all in one integrated platform.",
    features: [
      "Digital chart supply and automatic updates",
      "Integrated route planning and optimization",
      "Weather overlay and routing",
      "Compliance documentation generation",
      "Permit-to-operate management",
      "ECDIS chart cell management",
      "Fleet-wide chart tracking and reporting",
      "Online and offline operation modes",
    ],
  },
  "loadplus-loading-computer": {
    description:
      "The LoadPlus from Hanla is an advanced loading computer system approved for use on all vessel types. It performs real-time stability, strength, and loading condition calculations to ensure safe vessel operation and regulatory compliance throughout the voyage.",
    features: [
      "Real-time stability and longitudinal strength calculations",
      "Intact and damage stability assessment",
      "Grain stability calculations per IMO Grain Code",
      "Cargo planning and distribution optimization",
      "Ballast sequence planning",
      "Classification society approved (all major classes)",
      "Touch-screen interface with 3D vessel visualization",
      "Automatic data logging and voyage documentation",
    ],
  },
  "smart-odme-oil-discharge-monitoring-": {
    description:
      "The SMART ODME from Rivertrace is an advanced Oil Discharge Monitoring Equipment system designed to ensure compliance with MARPOL Annex I regulations. It continuously monitors overboard discharge for oil content, flow rate, and vessel speed to prevent illegal oil pollution at sea.",
    features: [
      "Continuous oil-in-water monitoring during discharge operations",
      "MARPOL Annex I compliant with IMO MEPC.108(49) approval",
      "Automatic overboard valve control on alarm",
      "Real-time display of oil content, flow rate, and total discharge",
      "Tamper-proof data recording for inspection purposes",
      "Self-cleaning sensor for reduced maintenance",
      "GPS integration for position recording",
      "Classification society type-approved",
    ],
  },
};

// Generate default features based on product context
function getDefaultDetails(product) {
  const cat = product.categoryTitle;
  const sub = product.subcategory;
  const mfr = product.manufacturer;
  const name = product.name;

  const description = `The ${name} by ${mfr} is a professional-grade ${sub.toLowerCase()} solution engineered for demanding maritime and industrial environments. Supplied and fully supported by KDU across the Middle East, South Asia, and West Africa — including installation, commissioning, spare parts, and after-sales service.`;

  const baseFeatures = [
    `Manufactured by ${mfr} to international maritime standards`,
    "Designed for reliable operation in harsh marine environments",
    "Full installation and commissioning support from KDU",
    "24/7 after-sales service and spare parts availability",
  ];

  const catFeatures = {
    Navigation: [
      "IMO performance standards compliant",
      "Seamless integration with bridge navigation systems",
      "High-accuracy sensing for safe navigation",
      "Available for new builds and retrofit projects",
    ],
    Communication: [
      "GMDSS and SOLAS regulation compliant where applicable",
      "Clear audio performance in high-noise environments",
      "Multiple interface options for system integration",
      "Suitable for all sea areas and vessel types",
    ],
    Electrical: [
      "Built to classification society standards",
      "Suitable for marine and industrial power systems",
      "Modular design for flexible system configuration",
      "Remote monitoring and diagnostics capability",
    ],
    Automation: [
      "Class-approved for marine vessel applications",
      "Real-time monitoring and data logging",
      "User-friendly operator interface",
      "Scalable architecture for various vessel sizes",
    ],
    "Fleet Compliance": [
      "Supports regulatory compliance obligations",
      "Digital management for operational efficiency",
      "Fleet-wide tracking and reporting",
      "Regular updates to reflect latest regulations",
    ],
    "Aids to Navigation": [
      "IALA compliant for international waterways",
      "Low maintenance with long service life",
      "Solar and mains power options available",
      "Remote monitoring and status reporting",
    ],
  };

  return {
    description,
    features: [...baseFeatures, ...(catFeatures[cat] || [])],
  };
}

export function getProductCategoryBySlug(slug) {
  return productCategories.find((c) => c.slug === slug);
}

export function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Build flat list of all products with their category + subcategory context
export function getAllProducts() {
  const all = [];
  productCategories.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      sub.items.forEach((item) => {
        const slug = toSlug(item.product);
        const base = {
          slug,
          name: item.product,
          manufacturer: item.manufacturer,
          subcategory: sub.name,
          categorySlug: cat.slug,
          categoryTitle: cat.title,
          categoryImage: cat.image,
          images: item.images || [],
          brochures: item.brochures || [],
        };
        const details = productDetails[slug] || getDefaultDetails(base);
        all.push({ ...base, ...details });
      });
    });
  });
  return all;
}

export function getProductBySlug(categorySlug, productSlug) {
  const all = getAllProducts();
  return all.find(
    (p) => p.categorySlug === categorySlug && p.slug === productSlug
  );
}

export function getRelatedProducts(categorySlug, productSlug, count = 4) {
  const all = getAllProducts();
  return all
    .filter(
      (p) => p.categorySlug === categorySlug && p.slug !== productSlug
    )
    .slice(0, count);
}
