import NepaliDate from "nepali-date";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../../firebase.js";

const UpdateNewsForm = () => {
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState(new Date());
  const nepaliDate = new NepaliDate(date);
  const nepaliDateStr = nepaliDate.format("YYYY-MM-DD");
  const [image, setImage] = useState(null);
  const [longText, setLongText] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    // Handling news Post form submission
    if (image) {
      const imageRef = ref(storage, `news/${image.name}`);
      await uploadBytesResumable(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      await setDoc(doc(db, "news"), {
        heading: heading,
        date: date,
        image: imageUrl,
        longText: longText,
        // timeStamp: serverTimestamp(),
      });
    } else {
      await setDoc(doc(db, "news"), {
        heading: heading,
        date: date,
        longText: longText,
      });
    }
    console.log("Form submitted:", heading, date, image, longText);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Post News</h2>
      <form onSubmit={handleAdd}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="heading"
          >
            Heading
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="heading"
            type="text"
            value={heading}
            lang="ne"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={nepaliDateStr}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="longText"
          >
            Long Text
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="longText"
            rows="5"
            value={longText}
            lang="ne"
            onChange={(e) => setLongText(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNewsForm;
