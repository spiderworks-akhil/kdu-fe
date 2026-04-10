// All partner logos — shared across partners page and product pages
export const strategicPartners = [
  { name: "Sperry Marine", logo: "https://kduworld.com/wp-content/uploads/2022/04/Sperry-Marine_Logo_Strapline_CMYK_Af-scaled.jpg" },
  { name: "DEIF", logo: "https://kduworld.com/wp-content/uploads/2024/07/Untitled-design-21.png" },
  { name: "Hanla", logo: "https://kduworld.com/wp-content/uploads/2022/04/hanla-270x135-1.jpg" },
  { name: "One Ocean", logo: "https://kduworld.com/wp-content/uploads/2025/12/2-1.png" },
  { name: "MSM", logo: "https://kduworld.com/wp-content/uploads/2022/04/msm-270x135-1.jpg" },
  { name: "ICS", logo: "https://kduworld.com/wp-content/uploads/2022/04/ICS.jpg" },
  { name: "Danelec", logo: "https://kduworld.com/wp-content/uploads/2025/02/Danelec.jpg" },
  { name: "Entel", logo: "https://kduworld.com/wp-content/uploads/2025/01/Entel-Charcoal2-1.jpg" },
  { name: "Kangrim", logo: "https://kduworld.com/wp-content/uploads/2022/04/kangrim.jpg" },
  { name: "Terma", logo: "https://kduworld.com/wp-content/uploads/2022/04/terma.jpg" },
  { name: "Steerprop", logo: "https://kduworld.com/wp-content/uploads/2024/07/Untitled-design-19.png" },
  { name: "EMRI", logo: "https://kduworld.com/wp-content/uploads/2022/06/EMRI.jpg" },
  { name: "Lightpartner", logo: "https://kduworld.com/wp-content/uploads/2023/03/Lightpartner.png" },
  { name: "N.E.", logo: "https://kduworld.com/wp-content/uploads/2024/05/N_E_logo-1.png" },
  { name: "Seapower", logo: "https://kduworld.com/wp-content/uploads/2025/02/Seapower-1.jpg" },
];

export const partners = [
  { name: "Jotron", logo: "https://kduworld.com/wp-content/uploads/2022/06/jotron-vector-logo-2022.png" },
  { name: "Cobham", logo: "https://kduworld.com/wp-content/uploads/2022/06/cobham-vector-logo.png" },
  { name: "Ineech", logo: "https://kduworld.com/wp-content/uploads/2022/04/ineechV2.jpg" },
  { name: "Modootel", logo: "https://kduworld.com/wp-content/uploads/2022/06/Modootel.png" },
  { name: "Kraft", logo: "https://kduworld.com/wp-content/uploads/2022/04/KraftV2.jpg" },
  { name: "Veinland", logo: "https://kduworld.com/wp-content/uploads/2022/06/Veinland-2.png" },
  { name: "Lilley & Gillie", logo: "https://kduworld.com/wp-content/uploads/2022/04/LillyV2.jpg" },
  { name: "Measurement", logo: "https://kduworld.com/wp-content/uploads/2022/04/measurement.jpg" },
  { name: "Navitron", logo: "https://kduworld.com/wp-content/uploads/2022/04/navitron.jpg" },
  { name: "Omnisense", logo: "https://kduworld.com/wp-content/uploads/2022/04/OmnisenseV2.jpg" },
  { name: "Orolia", logo: "https://kduworld.com/wp-content/uploads/2022/04/orolia.jpg" },
  { name: "Rivertrace", logo: "https://kduworld.com/wp-content/uploads/2022/04/rivertrace.jpg" },
  { name: "Rockson Automation", logo: "https://kduworld.com/wp-content/uploads/2022/04/RocksonV2.jpg" },
  { name: "SCM", logo: "https://kduworld.com/wp-content/uploads/2022/04/scm.jpg" },
  { name: "ITU", logo: "https://kduworld.com/wp-content/uploads/2022/06/ITU.jpg" },
  { name: "Siemenz", logo: "https://kduworld.com/wp-content/uploads/2022/04/SiemenzV2.jpg" },
  { name: "SIMRAD", logo: "https://kduworld.com/wp-content/uploads/2022/04/simrad.jpg" },
  { name: "Skipper", logo: "https://kduworld.com/wp-content/uploads/2022/04/skipper-1-1.png" },
  { name: "SM Electrics", logo: "https://kduworld.com/wp-content/uploads/2022/04/sm-electrics.jpg" },
  { name: "Technoton", logo: "https://kduworld.com/wp-content/uploads/2022/04/Technoton.jpg" },
  { name: "Vingtor", logo: "https://kduworld.com/wp-content/uploads/2022/04/vingtor-e1633953152862.jpg" },
  { name: "Zollner", logo: "https://kduworld.com/wp-content/uploads/2022/04/zollner.jpg" },
  { name: "Mavili", logo: "https://kduworld.com/wp-content/uploads/2023/01/Mavili.jpg" },
  { name: "Hullmos", logo: "https://kduworld.com/wp-content/uploads/2022/06/Hullmos-Logo-.png" },
  { name: "EM-Trak", logo: "https://kduworld.com/wp-content/uploads/2022/06/em-trak.png" },
  { name: "SpecsVision", logo: "https://kduworld.com/wp-content/uploads/2024/05/SPECSVISION-logo-1-300x87.png" },
  { name: "Cassens & Plath", logo: "https://kduworld.com/wp-content/uploads/2024/07/Untitled-design-20.png" },
  { name: "Ocean Voyager", logo: "https://kduworld.com/wp-content/uploads/2025/02/Premium-Camapaign-1080-x-1080-1024x1024.jpg" },
  { name: "Zenitel", logo: "https://kduworld.com/wp-content/uploads/2022/04/vingtor-e1633953152862.jpg" },
  { name: "Motorola", logo: "https://kduworld.com/wp-content/uploads/2022/06/Modootel.png" },
  { name: "Wetech", logo: "https://kduworld.com/wp-content/uploads/2022/06/Veinland-2.png" },
];

// Combined lookup: all partners by name (case-insensitive)
const allPartners = [...strategicPartners, ...partners];
const partnerMap = {};
allPartners.forEach((p) => {
  partnerMap[p.name.toLowerCase()] = p;
});

/**
 * Get partner logos for a list of manufacturer names.
 * Returns only those with a matching logo.
 */
export function getPartnerLogos(manufacturerNames) {
  const seen = new Set();
  return manufacturerNames
    .map((name) => partnerMap[name.toLowerCase()])
    .filter((p) => {
      if (!p || seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    });
}
