  import { useState, useEffect } from 'react';

  import malt_fp_10 from '../assets/malt_fp_10.jpg';
  import whale from '../assets/whale.jpg';
  import turtle from '../assets/turtle.jpg';
  import dolphine from '../assets/dolphine.jpeg';
  import seaanimal from '../assets/seaanimal.jpg';
  import seal from '../assets/seal.jpg';
  import googleearth from '../assets/googleearth.jpg';

  const Home = () => {
        const animalImages = [whale, turtle, dolphine, seaanimal, seal];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % animalImages.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }, []);

      const featuredLinks = [
    ['Coral Facts - What, where, and how?', 'Hailey Robb'],
    ["Marine Algae of Hawai'i", "ReefWatcher's Field Guide to Native and Alien Marine Algae"],
    ["Invasive Marine Algae of Hawai'i" ,"Understand the mechanisms and impacts of biological invasions"],
    ["Edible Limu","Gifts from the Sea"],
    ["LIMU (ALGAE)", "Wikipedia Entry"],
  ];


    return (
<main className="w-full text-ocean-lightText dark:text-ocean-darkText transition-colors duration-500">
    {/* Full width banner image */}
    <img
      src={malt_fp_10}
      alt="Ocean wildlife"
      className="w-full max-h-[500px] object-cover rounded-b-lg shadow-lg"
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
    />

    <div className="container mx-auto max-w-screen-xl px-4 md:px-8 space-y-16">
        
          {/* HERO SECTION */}
  <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 px-4">
    {/* Text */}
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-ocean-lightPrimary dark:text-ocean-darkPrimary drop-shadow-sm">
        Welcome!
      </h1>
      
      <p className="mt-6 text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 text-gray-700 dark:text-gray-300">
        You've reached <strong className="text-ocean-lightSecondary dark:text-ocean-darkSecondary">Animal Tracks</strong>,
        an interactive platform for contributing and exploring marine life photos in a searchable, indexed database.
      </p>
      
      <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 text-gray-700 dark:text-gray-300">
        Our growing collection includes digital photographs of humpback whales, green sea turtles, and other marine animals—primarily captured around West Maui over the past two years.
      </p>
    </div>

    {/* Rotating Image */}
    <aside className="flex-1 flex justify-center items-center">
      <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-ocean-lightPrimary dark:border-ocean-darkPrimary shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out">
        <img
          src={animalImages[currentImage]}
          alt="Rotating marine animal"
          className="w-full h-full object-cover"
        />
      </div>
    </aside>
  </section>

  {/* Combined Section: Featured Links + Feature Download */}
  <section className="flex flex-col lg:flex-row gap-8 justify-between items-start">

    {/* Featured Links */}
    <div className="flex-1">
      <div className="bg-white dark:bg-ocean-darkBg p-4 rounded-xl shadow-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary">
        <fieldset className="rounded max-h-80 overflow-y-auto">
          <legend className="text-xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary px-2">
            MALT Featured Links
          </legend>
          <ul className="space-y-4 text-base mt-4">
            {featuredLinks.map(([title, author]) => (
              <li
                key={title}
                className="hover:bg-ocean-lightSecondary/10 dark:hover:bg-ocean-darkSecondary/10 p-3 rounded transition"
              >
                <a
                  href="#"
                  className="text-ocean-lightSecondary dark:text-ocean-darkSecondary font-medium hover:underline"
                >
                  {title}
                </a>
                {author && (
                  <div className="text-sm italic text-gray-500 dark:text-gray-400 mt-1">
                    by: {author}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
    </div>

   {/* Feature Download */}
<div className="w-full lg:max-w-sm">
  <div className="bg-white dark:bg-ocean-darkBg p-5 rounded-xl shadow-md border border-ocean-lightPrimary dark:border-ocean-darkPrimary">
    <h2 className="text-xl font-bold mb-4 text-ocean-lightPrimary dark:text-ocean-darkPrimary border-b pb-2">
      Feature Download
    </h2>

    <img
      src={seaanimal}
      alt="Free Pic"
      className="rounded-md mb-4 w-full h-auto border border-gray-300 dark:border-gray-600"
    />

    {/* User info and stats */}
    <div className="flex justify-between items-center mb-4 text-sm text-ocean-lightPrimary dark:text-ocean-darkPrimary font-medium">
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-ocean-lightPrimary dark:text-ocean-darkPrimary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
          <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        </svg>
        <span>Username123</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
          <polyline points="7 11 12 16 17 11" />
          <line x1="12" y1="4" x2="12" y2="16" />        
        </svg>
        <span>1,234 Downloads</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M2 12c2.667-4 7.333-4 10-4s7.333 0 10 4c-2.667 4-7.333 4-10 4s-7.333 0-10-4z" />
        </svg>
        <span>5,678 Views</span>
      </div>
    </div>

    <div className="flex justify-center gap-4">
      {/* View Button */}
      <a
        href="/free-pic.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-transparent border border-ocean-lightPrimary dark:border-ocean-darkPrimary text-ocean-lightPrimary dark:text-ocean-darkPrimary font-semibold px-4 py-2 rounded hover:bg-ocean-lightPrimary/10 dark:hover:bg-ocean-darkPrimary/10 transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 12H9m12 0A9 9 0 113 12a9 9 0 0118 0z" />
        </svg>
        View
      </a>

      {/* Download Button */}
      <a
        href="/free-pic.jpg"
        download
        className="flex items-center gap-2 bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white font-semibold px-4 py-2 rounded hover:brightness-110 transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6a4 4 0 10-8 0 4 4 0 008 0z" />
        </svg>
        Download
      </a>
    </div>
  </div>
</div>

  </section>



        <div className="max-w-5xl mx-auto px-4 md:flex md:space-x-10">
  {/* Search Form Section */}
  <section className="md:w-1/2 max-w-lg mx-auto md:mx-0 mb-10 md:mb-0">
    <fieldset className="border border-ocean-lightPrimary dark:border-ocean-darkPrimary rounded p-4">
      <legend className="text-lg font-semibold text-ocean-lightPrimary dark:text-ocean-darkPrimary px-2">
        Search
      </legend>

      <form className="space-y-4 mt-2">
        <div>
          <label htmlFor="family-select" className="block font-medium mb-1">
            Family
          </label>
          <select
            id="family-select"
            defaultValue=""
            className="w-full p-2 border rounded bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-ocean-lightText dark:text-ocean-darkText"
          >
            <option value="" disabled>
              Select a family first
            </option>
            <option value="turtle">Turtle</option>
            <option value="whale">Whale</option>
            <option value="frogfish">Frogfish</option>
            <option value="seals-sea-lions">Seals and Sea Lions</option>
            <option value="sharks">Sharks</option>
            <option value="rays">Rays</option>
            <option value="dolphins">Dolphins</option>
          </select>
        </div>

        <div>
          <label htmlFor="animal-input" className="block font-medium mb-1">
            Animal
          </label>
          {/* Input field can be added here */}
          <input
            id="animal-input"
            type="text"
            className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            placeholder="Enter animal name"
          />
        </div>

        {/* Buttons side by side */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 bg-transparent border border-ocean-lightSecondary dark:border-ocean-darkSecondary text-ocean-lightSecondary dark:text-ocean-darkSecondary font-semibold py-2 rounded hover:bg-ocean-lightSecondary/10 dark:hover:bg-ocean-darkSecondary/10 transition"
          >
            Advanced Search
          </button>

          <button
            type="submit"
            className="flex-1 bg-ocean-lightSecondary dark:bg-ocean-darkSecondary text-white font-semibold py-2 rounded hover:brightness-110 transition"
          >
            Search
          </button>
        </div>
      </form>
    </fieldset>
  </section>

    {/* Google Earth & Maps */}
  <section className="md:w-1/2 max-w-xl mx-auto md:mx-0 p-6 bg-ocean-lightPrimary dark:bg-ocean-darkPrimary rounded-xl shadow-lg border border-ocean-lightSecondary dark:border-ocean-darkSecondary">
    {/* Image */}
    <div className="mb-6 rounded-xl overflow-hidden shadow-lg border border-ocean-lightSecondary dark:border-ocean-darkSecondary">
      <img
        src={googleearth}
        alt="Sample view from Google Earth"
        className="w-full h-72 object-cover"
        style={{ objectPosition: 'center' }}
        loading="lazy"
      />
    </div>

    {/* Heading */}
    <h2 className="text-3xl font-bold mb-4 pb-2 border-b border-ocean-lightSecondary dark:border-ocean-darkSecondary">
      Google Earth & Maps
    </h2>

    {/* Description */}
    <p className="text-lg mb-6 text-ocean-lightText dark:text-ocean-darkText">
      Explore our curated collection through <strong>Google Earth</strong> for an immersive experience.
    </p>

    {/* Button */}
    <a
      href="https://earth.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 bg-ocean-lightSecondary dark:bg-ocean-darkSecondary text-white font-medium rounded-lg shadow hover:brightness-110 transition duration-200"
      aria-label="Open Google Earth"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 12l2 2 4-4"
        />
      </svg>
      Open Google Earth
    </a>
  </section>

  </div>




  {/* Popular Searches */}
  <section className="max-w-6xl mx-auto p-6 border border-ocean-lightPrimary dark:border-ocean-darkPrimary rounded-xl shadow">
    <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary">
      Popular Searches
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {[
        {
          title: 'Humpback Whales from October 2006 to June 2007',
          image: '/popular/humpback.jpg',
          link: '#',
        },
        {
          title: 'Green Sea Turtles since June 2007',
          image: '/popular/turtle.jpg',
          link: '#',
        },
        {
          title: 'Gray Whales from Laguna San Ignacio',
          image: '/popular/gray-whale.jpg',
          link: '#',
        },
        {
          title: 'Sitka Whales and Puffins',
          image: '/popular/sitka.jpg',
          link: '#',
        },
        {
          title: 'Juneau orcas, whales, eagles, seals',
          image: '/popular/juneau.jpg',
          link: '#',
        },
        {
          title: 'Mantas on Maui!!!',
          image: '/popular/manta.jpg',
          link: '#',
        },
        {
          title: 'Cozumel 2009',
          image: '/popular/cozumel.jpg',
          link: '#',
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          className="flex items-center gap-4 p-4 border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded-lg hover:bg-ocean-lightPrimary/10 dark:hover:bg-ocean-darkPrimary/10 transition group"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 rounded-md object-cover border border-ocean-lightSecondary dark:border-ocean-darkSecondary shadow-sm"
          />
          <span className="text-base font-medium text-ocean-lightSecondary dark:text-ocean-darkSecondary group-hover:underline">
            {item.title}
          </span>
        </a>
      ))}
    </div>

    {/* View All Button */}
    <div className="mt-6 text-center">
      <a
        href="#"
        className="inline-block px-6 py-3 border-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary rounded-lg text-ocean-lightPrimary dark:text-ocean-darkPrimary font-semibold hover:bg-ocean-lightPrimary hover:text-white dark:hover:bg-ocean-darkPrimary dark:hover:text-white transition"
      >
        View All
      </a>
    </div>
  </section>

        {/* Recent Uploads */}
  <section className="max-w-6xl mx-auto p-6 border border-ocean-lightPrimary dark:border-ocean-darkPrimary rounded-xl shadow-lg">
    <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary">
      Recent Uploads
    </h2>

    <div className="overflow-x-auto pb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 min-w-max">
        {[
          { id: 1, name: 'Sea Turtle', src: '/uploads/sea-turtle.jpg' },
          { id: 2, name: 'Humpback Whale', src: '/uploads/humpback.jpg' },
          { id: 3, name: 'Dolphin Jump', src: '/uploads/dolphin.jpg' },
          { id: 4, name: 'Coral Reef', src: '/uploads/coral.jpg' },
          { id: 5, name: 'Manta Ray', src: '/uploads/manta.jpg' },
        ].map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg shadow-md border border-ocean-lightSecondary dark:border-ocean-darkSecondary overflow-hidden group transition-transform hover:scale-[1.03]"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-40 object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex justify-between items-center text-white">
              <span className="text-sm font-semibold truncate">{item.name}</span>
              <div className="flex gap-2 opacity-80 group-hover:opacity-100 transition">
                {/* View Button */}
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View"
                  className="p-1 hover:bg-white/20 rounded"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m0-6v6m-6-6H4.447a1 1 0 00-.894.553L2 12l1.553 1.447a1 1 0 00.894.553H9m0-6v6"
                    />
                  </svg>
                </a>

                {/* Download Button */}
                <a
                  href={item.src}
                  download
                  title="Download"
                  className="p-1 hover:bg-white/20 rounded"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>



      {/* News by National Marine Life Center */}
  <section className="max-w-6xl mx-auto p-6 border border-ocean-lightPrimary dark:border-ocean-darkPrimary rounded-xl shadow-md">
    <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary">
      News by National Marine Life Center
    </h2>

    <div className="space-y-5">
      {[
        {
          title: 'Saving Salty',
          image: '/news/salty.jpg',
          link: '#',
        },
        {
          title: 'Arctic Seal Plunge 2024',
          image: '/news/arctic-plunge.jpg',
          link: '#',
        },
        {
          title: 'Supporters go Arctic with plunge into Onset Bay',
          image: '/news/onset-bay.jpg',
          link: '#',
        },
        {
          title: 'Funds raised for injured seals',
          image: '/news/fundraiser.jpg',
          link: '#',
        },
        {
          title: 'Support Arctic Seals with the Plunge',
          image: '/news/support-seals.jpg',
          link: '#',
        },
        {
          title: 'Marine Mammal Parasite of the Month – Jan 2022',
          image: '/news/parasite-month.jpg',
          link: '#',
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.link}
          className="flex items-center gap-5 p-4 border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded-lg hover:bg-ocean-lightPrimary/10 dark:hover:bg-ocean-darkPrimary/10 transition group"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 rounded-md object-cover border border-ocean-lightSecondary dark:border-ocean-darkSecondary flex-shrink-0"
          />
          <span className="text-lg font-medium text-ocean-lightSecondary dark:text-ocean-darkSecondary group-hover:underline">
            {item.title}
          </span>
        </a>
      ))}
    </div>

    {/* View All Button */}
    <div className="mt-6 text-center">
      <a
        href="#"
        className="inline-block px-6 py-3 border-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary rounded-lg text-ocean-lightPrimary dark:text-ocean-darkPrimary font-semibold hover:bg-ocean-lightPrimary hover:text-white dark:hover:bg-ocean-darkPrimary dark:hover:text-white transition"
      >
        View All
      </a>
    </div>
  </section>



        {/* Viewing Tip */}
  <section className="max-w-full mx-auto p-6">
    <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary">
      How to Best View the Site
    </h2>

    <div className="flex items-start gap-4 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-400 p-4 rounded-md shadow-sm">
      {/* Icon */}
      <svg
        className="w-6 h-6 text-yellow-600 dark:text-yellow-300 mt-1 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>

      {/* Text */}
      <p className="text-lg text-yellow-800 dark:text-yellow-100">
        <strong>Note:</strong> For the best experience, use a modern browser and ensure JavaScript is enabled.
      </p>
    </div>
  </section>

        </div>
      </main>
    );
  };

  export default Home;
