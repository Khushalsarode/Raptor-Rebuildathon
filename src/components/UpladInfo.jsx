import { Link } from 'react-router-dom';
export default function UploadInfo() {
  return (
    <section className="max-w-3xl mx-auto my-10 p-6 bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-lg shadow-md text-ocean-lightText dark:text-ocean-darkText">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Thank You for Your Interest!
      </h2>

      <p className="mb-10 text-center text-lg leading-relaxed">
        Uploading files to our database couldn't be simpler with 3 different
        methods to choose from. Take your pick from the selection below—we look
        forward to your contribution!
      </p>

      {/* Multiple File Upload Card */}
      <article className="mb-8 p-6 bg-ocean-lightBg dark:bg-ocean-darkBg rounded-lg shadow border border-ocean-lightSecondary dark:border-ocean-darkSecondary">
        <h3 className="text-2xl font-semibold mb-3 text-ocean-lightPrimary dark:text-ocean-darkPrimary">
          Multiple File Upload
        </h3>
        <p className="mb-2 leading-relaxed">
          The Multiple File Upload uses Dropzone.js for easy, drag and drop uploading.
        </p>
        <p className="mb-4 leading-relaxed">
          Just drag and drop or click the box to choose images. Drag and drop between images on your computer and this website for speedy uploading of lots of files.
        </p>
        <Link to={"/upload"} className="inline-block px-5 py-3 bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white rounded-md hover:bg-ocean-lightPrimaryHover dark:hover:bg-ocean-darkPrimaryHover transition font-semibold" aria-label="Go to multiple file upload">
            GO TO MULTIPLE FILE UPLOAD
        </Link>
      </article>

      {/* Single File Upload Card */}
      <article className="mb-8 p-6 bg-ocean-lightBg dark:bg-ocean-darkBg rounded-lg shadow border border-ocean-lightSecondary dark:border-ocean-darkSecondary">
        <h3 className="text-2xl font-semibold mb-3 text-ocean-lightPrimary dark:text-ocean-darkPrimary">
          Single File Upload
        </h3>
        <p className="mb-2 leading-relaxed">
          Upload your files individually using a simple browser-based method.
        </p>
        <p className="mb-4 leading-relaxed">
          Simply click on the browse button to locate a file on your hard drive and press the "Submit" button to upload.
        </p>
        <Link to={"/upload"}  className="inline-block px-5 py-3 bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white rounded-md hover:bg-ocean-lightPrimaryHover dark:hover:bg-ocean-darkPrimaryHover transition font-semibold" aria-label="Go to single file upload">
            GO TO SINGLE FILE UPLOAD
        </Link>
      </article>

      {/* Submit via E-mail Card */}
      <article className="p-6 bg-ocean-lightBg dark:bg-ocean-darkBg rounded-lg shadow border border-ocean-lightSecondary dark:border-ocean-darkSecondary">
        <h3 className="text-2xl font-semibold mb-3 text-ocean-lightPrimary dark:text-ocean-darkPrimary">
          Submit via E-mail
        </h3>
        <p className="mb-3 leading-relaxed">
          You can also submit your photos via e-mail. Please send photos with as much information as possible to{" "}
          <a
            href="mailto:rob@whalematch.org"
            className="underline text-ocean-lightPrimary dark:text-ocean-darkPrimary"
          >
            rob@whalematch.org
          </a>.
        </p>
        <p className="mb-2 font-semibold">
          In your e-mail please include:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4 text-base">
          <li>User name</li>
          <li>Date</li>
          <li>Location</li>
          <li>Subject Matter</li>
          <li>Any other important information</li>
        </ul>
      </article>
    </section>
  );
}
