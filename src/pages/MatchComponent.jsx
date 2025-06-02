import React, { useState } from "react";

export default function MatchComponent() {
  const criteria = [
    "Class", "Family", "Common Name", "Body Part",
    "Observed Near", "Country", "Province/State", "User"
  ];

  const [upperPhotos, setUpperPhotos] = useState([]);
  const [lowerPhotos, setLowerPhotos] = useState([]);

  const samplePhotos = [
    {
      id: 1,
      url: "https://placekitten.com/200/200",
      username: "user_1",
      date: "2024-01-01",
    },
    {
      id: 2,
      url: "https://placekitten.com/201/200",
      username: "user_2",
      date: "2024-02-01",
    },
    {
      id: 3,
      url: "https://placekitten.com/202/200",
      username: "user_3",
      date: "2024-03-01",
    },
  ];

  const loadUpperPhotos = () => {
    setUpperPhotos(samplePhotos);
  };

  const loadLowerPhotos = () => {
    setLowerPhotos(samplePhotos);
  };

  const removePhoto = (id, type) => {
    if (type === "upper") {
      setUpperPhotos(prev => prev.filter(photo => photo.id !== id));
    } else {
      setLowerPhotos(prev => prev.filter(photo => photo.id !== id));
    }
  };

  const exampleOptions = (label) => [
    `Select ${label}`,
    `${label} Option 1`,
    `${label} Option 2`,
    `${label} Option 3`,
  ];

const PhotoGrid = ({ photos, type, removePhoto }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    {photos.map((photo) => (
      <div
        key={photo.id}
        className="relative group rounded-lg overflow-hidden shadow-md border border-ocean-lightText dark:border-ocean-darkText bg-white dark:bg-ocean-darkBg2"
      >
        <img
          src={photo.url}
          alt="sample"
          className="w-full h-40 object-cover"
        />

        {/* Metadata and buttons */}
        <div className="flex justify-between items-center px-2 py-1 bg-ocean-lightBg dark:bg-ocean-darkBg text-xs text-gray-600 dark:text-gray-300">
          <div className="flex gap-2">
            <button className="hover:underline">View</button>
            <button
              onClick={() => removePhoto(photo.id, type)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
          <div className="text-right text-xs">
            <div>{photo.username}</div>
            <div>{photo.date}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

  return (
     <div className="p-6 bg-ocean-lightBg dark:bg-ocean-darkBg min-h-screen w-full">
    <div className="bg-white dark:bg-ocean-darkBg2 shadow-xl rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-ocean-lightText dark:text-ocean-darkText">
        Photo Comparison Search
      </h2>

        {/* Upper Query Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ocean-lightText dark:text-ocean-darkText border-b pb-2 border-ocean-lightText dark:border-ocean-darkText">
              Select Search Criteria
            </h3>

            {criteria.map((label) => (
              <div key={label} className="flex items-center gap-2">
                <label className="w-32 text-sm text-ocean-lightText dark:text-ocean-darkText">{label}:</label>
                <select className="flex-1 px-2 py-1 border border-ocean-lightText dark:border-ocean-darkText rounded-md text-sm bg-white dark:bg-ocean-darkBg2 text-gray-700 dark:text-gray-200">
                  {exampleOptions(label).map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-sm font-medium text-ocean-lightText dark:text-ocean-darkText">Date Filter</label>
              <div className="flex items-center gap-4 text-sm text-ocean-lightText dark:text-ocean-darkText">
                <label className="flex items-center gap-1">
                  <input type="radio" name="dateFilter" defaultChecked /> Date Observed
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="dateFilter" /> Date Entered
                </label>
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="text-sm text-ocean-lightText dark:text-ocean-darkText">From:</label>
                  <input type="date" className="block w-full border border-ocean-lightText dark:border-ocean-darkText rounded-md px-2 py-1 text-sm bg-white dark:bg-ocean-darkBg2 text-gray-700 dark:text-gray-200" />
                </div>
                <div>
                  <label className="text-sm text-ocean-lightText dark:text-ocean-darkText">To:</label>
                  <input type="date" className="block w-full border border-ocean-lightText dark:border-ocean-darkText rounded-md px-2 py-1 text-sm bg-white dark:bg-ocean-darkBg2 text-gray-700 dark:text-gray-200" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-ocean-lightText dark:text-ocean-darkText">Pics per row:</label>
              <select className="px-2 py-1 border border-ocean-lightText dark:border-ocean-darkText rounded-md text-sm bg-white dark:bg-ocean-darkBg2 text-gray-700 dark:text-gray-200">
                {[4, 8, 12].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-ocean-lightText dark:text-ocean-darkText">Total # of results:</label>
              <select className="px-2 py-1 border border-ocean-lightText dark:border-ocean-darkText rounded-md text-sm bg-white dark:bg-ocean-darkBg2 text-gray-700 dark:text-gray-200">
                {[100, 200, 500].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <button
              onClick={loadUpperPhotos}
              className="w-full bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white py-2 rounded-md hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary"
            >
              Submit Upper Query
            </button>
          </div>

          <div className="md:col-span-2 bg-ocean-lightBg2 dark:bg-ocean-darkBg2 border border-ocean-lightText dark:border-ocean-darkText rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2 text-ocean-lightPrimary dark:text-ocean-darkPrimary">Upper Query Box</h4>
            <p className="text-sm text-ocean-lightText dark:text-ocean-darkText/70">Search results will appear here.</p>
            {upperPhotos.length > 0 ? <PhotoGrid photos={upperPhotos} type="upper" /> : (
              <div className="mt-2 p-4 bg-white dark:bg-ocean-darkBg border border-dashed rounded-md text-sm text-gray-400 dark:text-gray-500 text-center">
                Results will appear here.
              </div>
            )}
          </div>
        </div>

        {/* Lower Query Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div />
          <div className="md:col-span-2 bg-ocean-lightBg2 dark:bg-ocean-darkBg2 border border-ocean-lightText dark:border-ocean-darkText rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2 text-ocean-lightPrimary dark:text-ocean-darkPrimary">Lower Query Box</h4>
            <p className="text-sm text-ocean-lightText dark:text-ocean-darkText/70">Press the button to populate this area.</p>
            {lowerPhotos.length > 0 ? <PhotoGrid photos={lowerPhotos} type="lower" /> : (
              <div className="mt-2 p-4 bg-white dark:bg-ocean-darkBg border border-dashed rounded-md text-sm text-gray-400 dark:text-gray-500 text-center">
                Results will appear here.
              </div>
            )}
            <button
              onClick={loadLowerPhotos}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            >
              Submit Lower Query
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
