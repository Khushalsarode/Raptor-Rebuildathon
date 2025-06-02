import React, { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";

const SearchComponent = () => {
  const dropdownOptions = {
    picsPerRow: [1, 2, 3, 4, 5, 6],
    totalResults: [50, 100, 200, 500, 1000],
    classes: ["Mammal", "Bird", "Fish", "Reptile", "Amphibian"],
    families: ["Felidae", "Canidae", "Ursidae"],
    commonNames: ["Lion", "Tiger", "Bear"],
    bodyParts: ["Head", "Tail", "Leg", "Wing"],
    sizes: ["Small", "Medium", "Large"],
    observedNear: ["Forest", "River", "Mountain", "Ocean"],
    countries: ["USA", "Canada", "Mexico"],
    provinces: ["California", "Texas", "Quebec"],
    towns: ["Town A", "Town B", "Town C"],
    islands: ["Island 1", "Island 2"],
    oceans: ["Pacific", "Atlantic", "Indian"],
    ports: ["Port 1", "Port 2"],
    vessels: ["Vessel A", "Vessel B"],
    surveys: ["Survey 1", "Survey 2"],
    sessions: ["Session 1", "Session 2"],
    users: ["User 1", "User 2"],
    cameras: ["Cam 1", "Cam 2"],
    behaviors: ["Feeding", "Resting", "Migrating"],
    tagTypes: ["Type 1", "Type 2"],
    ratings: [1, 2, 3, 4, 5],
    conditions: ["Healthy", "Injured", "Unknown"],
  };

  // State to hold form data
  const [formData, setFormData] = useState({
    picsPerRow: 4,
    totalResults: 200,
    class: "",
    family: "",
    commonName: "",
    bodyPart: "",
    size: "",
    sex: "unknown",
    tagType: "",
    tagNumber: "",
    animalName: "",
    behavior1: "",
    behavior2: "",
    condition1: "",
    condition2: 0,
    observedNear: "",
    country: "",
    province: "",
    town: "",
    island: "",
    ocean: "",
    port: "",
    vessel: "",
    survey: "",
    session: "",
    user: "",
    camera: "",
    rating: 0,
    latitude: "",
    longitude: "",
    dateType: "observed",
    dateFrom: "",
    dateTo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search criteria:", formData);
    // Add your search logic here
  };

  // Helper to render dropdown with icon
  const Dropdown = ({ name, value, options, onChange }) => (
<div className="relative">
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="appearance-none w-full border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded-md px-3 py-2 pr-8 text-ocean-lightText dark:text-ocean-darkText bg-ocean-lightBg2 dark:bg-ocean-darkBg2 focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
  >
    <option value="">Select...</option>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
  <FaChevronDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-ocean-lightSecondary dark:text-ocean-darkSecondary" />
</div>
  );

  function generateYearOptions(startYear, endYear) {
  const years = [];
  for(let year = startYear; year <= endYear; year++) {
    years.push(year.toString());
  }
  return years;
}


  return (
    <main className="w-full px-4 md:px-8 py-10 text-ocean-lightText dark:text-ocean-darkText transition-colors duration-500">
     <h2 className="text-3xl font-bold text-[#0077B6] dark:text-[#90E0EF] text-center">
        🐳 SEARCH PHOTOS
      </h2>
      <br />
    <form
  onSubmit={handleSubmit}
  className="w-full p-6 bg-ocean-lightBg2 dark:bg-ocean-darkBg2 shadow-md rounded"
>
  <h2 className="text-xl font-semibold mb-4 text-ocean-lightText dark:text-ocean-darkText">
    Please fill in your search criteria to find photos in the collection.
  </h2>
  <p className="mb-6 italic text-ocean-lightSecondary dark:text-ocean-darkSecondary">
    Click on the ?’s to select from a list of options.
  </p>
{/* Pics per row & Total Results */}
<div className="flex justify-center mt-8">
  <div className="border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded-xl p-6 bg-ocean-lightBg2 dark:bg-ocean-darkBg2 shadow-md w-full max-w-xl flex flex-wrap gap-6 items-end justify-between">
    
    <label className="flex flex-col flex-1 min-w-[120px]">
      <span className="text-ocean-lightText dark:text-ocean-darkText font-medium mb-1">
        Pics per row
      </span>
      <Dropdown
        name="picsPerRow"
        value={formData.picsPerRow}
        options={dropdownOptions.picsPerRow}
        onChange={handleChange}
      />
    </label>

    <label className="flex flex-col flex-1 min-w-[120px]">
      <span className="text-ocean-lightText dark:text-ocean-darkText font-medium mb-1">
        Total # of Results
      </span>
      <Dropdown
        name="totalResults"
        value={formData.totalResults}
        options={dropdownOptions.totalResults}
        onChange={handleChange}
      />
    </label>

    <div className="flex-1 min-w-[120px] flex justify-end">
      <button
        type="submit"
        className="bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white px-6 py-3 rounded-md hover:bg-ocean-lightPrimaryHover dark:hover:bg-ocean-darkPrimaryHover focus:outline-none focus:ring-2 focus:ring-ocean-lightButton dark:focus:ring-ocean-darkButton transition"
      >
        Submit
      </button>
    </div>
  </div>
</div>

<br />

<div className="border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded-lg p-6">
  {/* Two column fields */}
  <div className="grid grid-cols-2 gap-x-10 gap-y-4">
    {/* Left Column */}
    <div className="space-y-4">
      <label>
        <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Class</span>
        <Dropdown
          name="class"
          value={formData.class}
          options={dropdownOptions.classes}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Family</span>
        <Dropdown
          name="family"
          value={formData.family}
          options={dropdownOptions.families}
          onChange={handleChange}
        />
      </label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Common Name</span>
  <Dropdown
    name="commonName"
    value={formData.commonName}
    options={dropdownOptions.commonNames}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Body Part</span>
  <Dropdown
    name="bodyPart"
    value={formData.bodyPart}
    options={dropdownOptions.bodyParts}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Size</span>
  <Dropdown
    name="size"
    value={formData.size}
    options={dropdownOptions.sizes}
    onChange={handleChange}
  />
</label>

<fieldset>
  <legend className="font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Sex</legend>
  <div className="flex items-center gap-4">
    {["unknown", "male", "female"].map((sexOption) => (
      <label key={sexOption} className="flex items-center space-x-1 text-ocean-lightText dark:text-ocean-darkText">
        <input
          type="radio"
          name="sex"
          value={sexOption}
          checked={formData.sex === sexOption}
          onChange={handleChange}
          className="form-radio text-ocean-lightPrimary dark:text-ocean-darkPrimary focus:ring-ocean-lightButton dark:focus:ring-ocean-darkButton"
        />
        <span className="capitalize">{sexOption}</span>
      </label>
    ))}
  </div>
</fieldset>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Tag Type</span>
  <Dropdown
    name="tagType"
    value={formData.tagType}
    options={dropdownOptions.tagTypes}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Tag Number</span>
  <input
    type="text"
    name="tagNumber"
    value={formData.tagNumber}
    onChange={handleChange}
    className="w-full border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded px-3 py-2 bg-white dark:bg-ocean-darkBg2 text-ocean-lightText dark:text-ocean-darkText placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
    placeholder="Enter tag number"
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Animal Name</span>
  <input
    type="text"
    name="animalName"
    value={formData.animalName}
    onChange={handleChange}
    className="w-full border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded px-3 py-2 bg-white dark:bg-ocean-darkBg2 text-ocean-lightText dark:text-ocean-darkText placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
    placeholder="Enter animal name"
  />
</label>


          <label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Behavior 1</span>
  <Dropdown
    name="behavior1"
    value={formData.behavior1}
    options={dropdownOptions.behaviors}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Behavior 2</span>
  <Dropdown
    name="behavior2"
    value={formData.behavior2}
    options={dropdownOptions.behaviors}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Condition 1</span>
  <Dropdown
    name="condition1"
    value={formData.condition1}
    options={dropdownOptions.conditions}
    onChange={handleChange}
  />
</label>
<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Condition 2</span>
  <Dropdown
    name="condition2"
    value={formData.condition2}
    options={dropdownOptions.conditions}
    onChange={handleChange}
  />
</label>

</div>

{/* Right Column */}
<div className="space-y-4">
  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Observed Near</span>
    <Dropdown
      name="observedNear"
      value={formData.observedNear}
      options={dropdownOptions.observedNear}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Country</span>
    <Dropdown
      name="country"
      value={formData.country}
      options={dropdownOptions.countries}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Province/State</span>
    <Dropdown
      name="province"
      value={formData.province}
      options={dropdownOptions.provinces}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Town</span>
    <Dropdown
      name="town"
      value={formData.town}
      options={dropdownOptions.towns}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Island</span>
    <Dropdown
      name="island"
      value={formData.island}
      options={dropdownOptions.islands}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Ocean</span>
    <Dropdown
      name="ocean"
      value={formData.ocean}
      options={dropdownOptions.oceans}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Port</span>
    <Dropdown
      name="port"
      value={formData.port}
      options={dropdownOptions.ports}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Vessel</span>
    <Dropdown
      name="vessel"
      value={formData.vessel}
      options={dropdownOptions.vessels}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Survey</span>
    <Dropdown
      name="survey"
      value={formData.survey}
      options={dropdownOptions.surveys}
      onChange={handleChange}
    />
  </label>

  <label>
    <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Session</span>
    <Dropdown
      name="session"
      value={formData.session}
      options={dropdownOptions.sessions}
      onChange={handleChange}
    />
  </label>



         <label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">User</span>
  <Dropdown
    name="user"
    value={formData.user}
    options={dropdownOptions.users}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Camera</span>
  <Dropdown
    name="camera"
    value={formData.camera}
    options={dropdownOptions.cameras}
    onChange={handleChange}
  />
</label>

<label>
  <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">Rating</span>
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        className={`cursor-pointer ${
          formData.rating >= star ? "text-yellow-400" : "text-gray-300"
        }`}
        onClick={() => handleRatingChange(star)}
      />
    ))}
  </div>
</label>

</div>
</div>

<div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
  {/* Approximate Lat/Long */}
  <fieldset className="flex-1 border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded p-4">
    <legend className="text-ocean-lightPrimary dark:text-ocean-darkPrimary font-semibold px-2">
      Approximate Lat/Long in Decimal
    </legend>

    <div className="grid grid-cols-2 gap-6 mt-2">
      <label>
        <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">
          Latitude
        </span>
        <input
          type="number"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          step="any"
          placeholder="Decimal latitude"
          className="w-full px-3 py-2 rounded 
                     border border-ocean-lightSecondary dark:border-ocean-darkSecondary 
                     bg-ocean-lightBg dark:bg-ocean-darkBg 
                     text-ocean-lightText dark:text-ocean-darkText 
                     placeholder-ocean-lightText/50 dark:placeholder-ocean-darkText/50
                     focus:outline-none 
                     focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
        />
      </label>
      <label>
        <span className="block font-medium mb-1 text-ocean-lightText dark:text-ocean-darkText">
          Longitude
        </span>
        <input
          type="number"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          step="any"
          placeholder="Decimal longitude"
          className="w-full px-3 py-2 rounded 
                     border border-ocean-lightSecondary dark:border-ocean-darkSecondary 
                     bg-ocean-lightBg dark:bg-ocean-darkBg 
                     text-ocean-lightText dark:text-ocean-darkText 
                     placeholder-ocean-lightText/50 dark:placeholder-ocean-darkText/50
                     focus:outline-none 
                     focus:ring-2 focus:ring-ocean-lightPrimary dark:focus:ring-ocean-darkPrimary"
        />
      </label>
    </div>
  </fieldset>

  {/* Date Selection */}
<fieldset className="flex-1 border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded p-4">
  <legend className="font-semibold px-2 text-ocean-lightPrimary dark:text-ocean-darkPrimary">
    Date
  </legend>

  <div className="flex gap-6 mb-4 mt-2 flex-wrap">
    {[
      { label: "Date Observed", value: "observed" },
      { label: "Date Entered", value: "entered" },
      { label: "Specific Date", value: "specific" },
    ].map(({ label, value }) => (
      <label key={value} className="flex items-center space-x-2">
        <input
          type="radio"
          name="dateType"
          value={value}
          checked={formData.dateType === value}
          onChange={handleChange}
          className="form-radio text-ocean-lightPrimary dark:text-ocean-darkPrimary"
        />
        <span className="text-ocean-lightText dark:text-ocean-darkText">{label}</span>
      </label>
    ))}
  </div>

  <div className="flex gap-6 items-center flex-wrap">
    {/* From Month */}
    <label className="flex flex-col">
      <span className="text-ocean-lightText dark:text-ocean-darkText font-medium">From Month</span>
      <Dropdown
        name="dateFromMonth"
        value={formData.dateFromMonth}
        options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
        onChange={handleChange}
      />
    </label>

    {/* From Year */}
    <label className="flex flex-col">
      <span className="text-ocean-lightText dark:text-ocean-darkText font-medium">From Year</span>
      <Dropdown
        name="dateFromYear"
        value={formData.dateFromYear}
        options={generateYearOptions(2000, new Date().getFullYear())}
        onChange={handleChange}
      />
    </label>

    {/* To Month */}
    <label className="flex flex-col">
      <span className="text-ocean-lightText dark:text-ocean-darkText font-medium">To Month</span>
      <Dropdown
        name="dateToMonth"
        value={formData.dateToMonth}
        options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
        onChange={handleChange}
      />
    </label>

    {/* To Year */}
    <label className="flex flex-col">
      <span className="text-ocean-lightText dark:text-ocean-darkText font-medium">To Year</span>
      <Dropdown
        name="dateToYear"
        value={formData.dateToYear}
        options={generateYearOptions(2000, new Date().getFullYear())}
        onChange={handleChange}
      />
    </label>
  </div>
</fieldset>

</div>
</div>


{/* Submit */}
<div className="mt-8 flex justify-center">
  <button
    type="submit"
    className="bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white px-6 py-3 rounded hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary focus:outline-none focus:ring-2 focus:ring-ocean-lightButton dark:focus:ring-ocean-darkButton"
  >
    Submit
  </button>
</div>

<p className="mt-6 italic text-gray-600 dark:text-gray-400 text-center">
  **You do not need to fill out all the fields.**
</p>

    </form>
    </main>
  );
};

export default SearchComponent;
