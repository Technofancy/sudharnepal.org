// import AdminNavigation from "./AdminNavigation";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../../firebase.js";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditNews = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [newsId, setNewsId] = useState(location.state?.[0]?.newsId);
  const [head, setHead] = useState(location.state?.[1]?.head);
  const [description, setDescription] = useState(
    location.state?.[1]?.description
  );
  //   const [contact, setContact] = useState(location.state?.[1]?.contact);
  //   const [email, setEmail] = useState(location.state?.[1]?.email);
  const [date, setDate] = useState(location.state?.[1]?.date);
  const [image, setImage] = useState(location.state?.[1]?.image);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    const lines = e.target.value.split("\n");
    setDescription(lines.join("\n"));
  };

  const handleData = () => {
    const db = getDatabase(app);
    const newsRef = ref(db, "news/" + location.state[0]);
    update(newsRef, {
      head: head,
      description: description,
      //   contact: contact,
      //   email: email,
      date: date,
      image: image ? image.name : null,
    })
      .then(() => {
        navigate("/adminpanel");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData();
  };

  return (
    <>
      {/* <AdminNavigation /> */}
      <div className="max-w-lg mx-auto p-3 bg-white rounded-md shadow-lg">
        <h1 className="text-xl font-bold text-center mb-6">समाचार फेर-बदल</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="newsId"
            >
              समाचार आईडी
            </label>
            <input
              id="newsId"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
              value={newsId}
              onChange={(e) => setNewsId(e.target.value)}
              disabled
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="head"
            >
              शिर्षक
            </label>
            <input
              id="head"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="शिर्षक प्रविष्ट गर्नुहोस्"
              value={head}
              onChange={(e) => setHead(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="description"
            >
              विवरण
            </label>
            <textarea
              id="description"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="विवरण प्रविष्ट गर्नुहोस्"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="date"
            >
              मिति (वि.सं.)
            </label>
            <input
              id="date"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="मिति प्रविष्ट गर्नुहोस्"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="image"
            >
              फोटो
            </label>
            <input
              disabled
              id="image"
              type="file"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            समाचार परिवर्तन
          </button>
        </form>
      </div>
    </>
  );
};

export default EditNews;
