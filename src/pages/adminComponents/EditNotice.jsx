// import AdminNavigation from "./AdminNavigation";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../../firebase.js";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditNotice = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [noticeId, setNoticeId] = useState(location.state?.[0]?.noticeId);
  const [head, setHead] = useState(location.state?.[1]?.head);
  const [description, setDescription] = useState(
    location.state?.[1]?.description
  );
  //   const [contact, setContact] = useState(location.state?.[1]?.contact);
  //   const [email, setEmail] = useState(location.state?.[1]?.email);
  const [date, setDate] = useState(location.state?.[1]?.date);
  const [image, setImage] = useState(location.state?.[1]?.image);
  // const [imageUrl, setImageUrl] = useState(location.state?.[1]?.imageUrl);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    const lines = e.target.value.split("\n");
    setDescription(lines.join("\n"));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleData = () => {
    const db = getDatabase(app);
    const noticeRef = ref(db, "notices/" + location.state[0]);
    update(noticeRef, {
      head: head,
      description: description,
      //   contact: contact,
      //   email: email,
      date: date,
      image: image ? image.name : null,
      // imageUrl: imageUrl,
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
        <h1 className="text-xl font-bold text-center mb-6">सुचना फेर-बदल</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="noticeId"
            >
              सुचना आईडी
            </label>
            <input
              id="noticeId"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
              value={noticeId}
              onChange={(e) => setNoticeId(e.target.value)}
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
              // disabled
              id="image"
              type="file"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleImageChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            सुचना परिवर्तन
          </button>
        </form>
      </div>
    </>
  );
};

export default EditNotice;
