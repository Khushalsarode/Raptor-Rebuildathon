import { Link } from 'react-router-dom';
const Aboutus = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-ocean-lightSecondary dark:text-ocean-darkSecondary">
      <h1 className="text-4xl font-extrabold mb-8 border-b-4 border-ocean-lightPrimary dark:border-ocean-darkPrimary pb-2">
        About Us
      </h1>

      <section className="space-y-6 leading-relaxed text-lg">
        <p>
          This website was conceived on the beach, following a dive at Olawalu in West Maui. C.T. Ticknor, a West Maui based marine biologist and ocean conservationist, suggested that it would make sense to try to broaden research efforts to track marine mammals via photographs by allowing the general public to record their digital images on the Internet.
        </p>

        <p>
          That suggestion led to the MALT web project, which stands for Marine Animal Life Tracking. The technical part of the project was led by Robert Knourek, Project Manager and supported by Professor Mark Hoffman from the Maui Community College on Maui and Mark Elies, a web developer and student at MCC. Other technical contributors include Khalid El-Bizri, who provided the draft technical specifications, Amberlee Chaussee, who built the HTML artwork and navigation for the website, Marc Infield, who provided the Java based Power Upload facility, and Martin Mateev, who provided system administration and web hosting for the website.
        </p>

        <p>
          The project went through a number of incarnations, where we incorporated what we learned into the website. Today, we have evolved to a website that provides a general purpose and reasonably flexible data model that supports upload and access of geographic and species-based tagging of digital photographs. The site includes a simple inspection-oriented interface that supports matching or identification of the subjects (usually marine mammals) in the photographs.
        </p>

        <p>
          In the future we plan to explore various forms of integration with digital cameras and photo-sharing environments, interfaces to Google Earth and other ideas oriented around photo-identification, tagging, identification, cataloging, and tracking.
        </p>

        <p>
          The whole project is written using open source components. In particular, we utilized the LAMP stack: Linux Operating System, Apache Web Server, MySQL Relational Database, and PHP Server Side scripting language.
        </p>

        <p>
          More details about the development environment, data structures and technical infrastructure may be found <a href="/malt_tech.php" className="text-ocean-lightPrimary dark:text-ocean-darkPrimary underline hover:text-ocean-lightSecondary dark:hover:text-ocean-darkSecondary">here</a>.
        </p>

        <p>
          Useful species identification sites may be found <Link to="/MALTResources" className="text-ocean-lightPrimary dark:text-ocean-darkPrimary underline hover:text-ocean-lightSecondary dark:hover:text-ocean-darkSecondary"> here </Link>.
        </p>
      </section>
    </main>
  )
}

export default Aboutus
