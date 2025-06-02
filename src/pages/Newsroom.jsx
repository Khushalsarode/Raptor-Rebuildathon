import React, { useState } from "react";

const articles = [
  {
    title: "Coral Facts",
    subtitle: "What are corals made of? Where can you find them, and how do they live?",
    image: "/images/coral-facts.jpg",
    link: "#",
    category: "Coral",
  },
  {
    title: "Coral Bleaching Facts",
    subtitle: "Coral bleaching has been destroying marine habitats around the globe...",
    image: "/images/coral-bleaching.jpg",
    link: "#",
    category: "Coral",
  },
  {
    title: "Deadly Snails",
    subtitle: "Cone snails are beautiful but dangerous...",
    image: "/images/cone-snail.jpg",
    link: "#",
    category: "Snails",
  },
  {
    title: "Walking Frogfish",
    subtitle: "Frogfish are jet-propelled and excellent at camouflage...",
    image: "/images/frogfish.jpg",
    link: "#",
    category: "Fish",
  },
  {
    title: "Gentle Giants",
    subtitle: "Mantas near Ukumehame often let divers film them up close...",
    image: "/images/manta-ray.jpg",
    link: "#",
    category: "Manta Rays",
  },
  {
    title: "Cetaceans",
    subtitle: "Whale season shows incredible breaches...",
    image: "/images/humpback.jpg",
    link: "#",
    category: "Whales",
  },
  {
    title: "Meet Dolly the Hawaiian Monk Seal",
    subtitle: "Dolly took a rest on Ka'anapali Beach...",
    image: "/images/monk-seal.jpg",
    link: "#",
    category: "Seals",
  },
  {
    title: "Humpback Whales: Mother and Calf",
    subtitle: "Rare photos of a humpback mother and calf...",
    image: "/images/humpback-calf.jpg",
    link: "#",
    category: "Whales",
  },
  {
    title: "Green Turtles",
    subtitle: "Green turtles near Mala Wharf are a photographer's delight...",
    image: "/images/green-turtle.jpg",
    link: "http://www.turtles.org/toc.htm",
    category: "Turtles",
  },
];

const categories = ["All", ...new Set(articles.map((a) => a.category))];
const ITEMS_PER_PAGE = 6;

export default function Newsroom() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesTitle = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTitle;
  });

  const pageCount = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <h2 className="text-3xl font-bold text-[#0077B6] dark:text-[#90E0EF] text-center">
        🌊 Newsroom
      </h2>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Search by article title..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 border border-[#00B4D8] rounded-md w-full md:w-80 dark:bg-[#013A63] dark:text-white dark:border-[#90E0EF]"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
              selectedCategory === cat
                ? "bg-[#0077B6] text-white dark:bg-[#90E0EF] dark:text-[#012A4A]"
                : "bg-white text-[#0077B6] border-[#00B4D8] dark:bg-[#012A4A] dark:text-[#90E0EF] dark:border-[#90E0EF]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {displayedArticles.map(({ title, subtitle, image, link }, idx) => (
          <div
            key={idx}
            className="bg-[#FFFFFF] dark:bg-[#013A63] border border-[#CAF0F8] dark:border-[#00B4D8] rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-[#0077B6] dark:text-[#90E0EF]">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{subtitle}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-[#00B4D8] dark:text-[#CAF0F8] hover:underline mt-2"
              >
                read more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-center space-x-2 mt-10">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full font-medium text-sm transition ${
                currentPage === i + 1
                  ? "bg-[#00B4D8] text-white dark:bg-[#90E0EF] dark:text-[#012A4A]"
                  : "bg-[#CAF0F8] text-[#0077B6] dark:bg-[#012A4A] dark:text-[#90E0EF]"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
