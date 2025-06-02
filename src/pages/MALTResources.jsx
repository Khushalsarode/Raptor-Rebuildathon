import { FaFish, FaGlobe } from "react-icons/fa";
import fishbase from "../assets/fishbase.jpg";
import col from "../assets/col.png";
import itis from "../assets/itis.jpg";
import eol from "../assets/eol.jpg";

export default function MALTResources() {
  const guideLinks = [
    { name: "Florents Guide (Atlantic species)", url: "https://florent.us/reef/index.html" },
    { name: "Keoki Stenders Flora & Fauna ID Site (Pacific)", url: "https://www.marinelifephotography.com" },
    { name: "Hardys Internet Guide to Marine Gastropods", url: "https://www.gastropods.com" },
    { name: "Wet Web Media", url: "https://www.wetwebmedia.com" },
    { name: "Sea Turtle Species Identification Key", url: "https://www.conserveturtles.org" },
  ];

  const collaborativeLinks = [
    { name: "Catalogue of Life", url: "https://www.catalogueoflife.org" },
    { name: "EOL - Encyclopedia of Life", url: "https://eol.org" },
    { name: "FishBase", url: "https://www.fishbase.org" },
    { name: "ITIS - Integrated Taxonomic Information System", url: "https://www.itis.gov" },
    { name: "Marine Bio", url: "https://marinebio.org" },
    { name: "Marine Species Identification Portal", url: "https://species-identification.org" },
    { name: "Zip Code Zoo", url: "https://zipcodezoo.com" },
  ];

  const logos = [
    { src: fishbase, alt: "FishBase" },
    { src: col, alt: "Catalogue of Life" },
    { src: itis, alt: "ITIS" },
    { src: eol, alt: "Encyclopedia of Life" },
  ];

  return (
    <div className="p-6 bg-ocean-lightBg dark:bg-ocean-darkBg min-h-screen">
      <div className="max-w-5xl mx-auto bg-ocean-lightBg2 dark:bg-ocean-darkBg2 shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary mb-4">
          MALT Marine Life Identification Tools
        </h1>

        <p className="text-base text-ocean-lightText dark:text-ocean-darkText mb-8 leading-relaxed">
          These curated links help identify marine life. Note: Taxonomic systems vary and common names differ by region.
        </p>

        {/* Guides Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-ocean-lightText dark:text-ocean-darkText mb-4">
            <FaFish className="text-ocean-lightPrimary dark:text-ocean-darkPrimary" /> Identification Guides
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {guideLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ocean-lightButton dark:bg-ocean-darkBg2 text-ocean-lightText dark:text-ocean-darkText hover:bg-ocean-lightPrimary/20 dark:hover:bg-ocean-darkSecondary/20 px-5 py-3 rounded-lg shadow transition"

              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Collaborative Sites Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-ocean-lightText dark:text-ocean-darkText mb-4">
            <FaGlobe className="text-ocean-lightPrimary dark:text-ocean-darkPrimary" /> Collaborative Databases
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {collaborativeLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ocean-lightButton dark:bg-ocean-darkBg2 text-ocean-lightText dark:text-ocean-darkText hover:bg-ocean-lightPrimary/20 dark:hover:bg-ocean-darkSecondary/20 px-5 py-3 rounded-lg shadow transition"


              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Suggestion note */}
        <p className="text-sm italic text-ocean-lightText dark:text-ocean-darkText mb-8">
          Know of a great resource that’s missing? Let us know and we’ll consider adding it!
        </p>

        {/* Logos Grid */}
        <section className="flex flex-wrap gap-6 justify-start">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 w-24">
              <div className="w-24 h-24 bg-ocean-lightButton dark:bg-ocean-darkButton rounded-xl shadow-md flex items-center justify-center p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-full max-w-full rounded"
                />
              </div>
              <span className="text-xs text-center text-ocean-lightText dark:text-ocean-darkText">{logo.alt}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
