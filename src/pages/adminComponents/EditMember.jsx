// import AdminNavigation from "./AdminNavigation";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../../firebase.js";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditMember = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userId, setUserId] = useState(location.state?.[0]?.userId);
  const [name, setName] = useState(location.state?.[1]?.name);
  const [post, setPost] = useState(location.state?.[1]?.post);
  const [contact, setContact] = useState(location.state?.[1]?.contact);
  const [email, setEmail] = useState(location.state?.[1]?.email);
  const [membershipDate, setMembershipDate] = useState(
    location.state?.[1]?.membershipDate
  );
  const [image, setImage] = useState(location.state?.[1]?.image);

  const handleData = () => {
    const db = getDatabase(app);
    const memberRef = ref(db, "members/" + location.state[0]);
    update(memberRef, {
      name: name,
      post: post,
      contact: contact,
      email: email,
      membershipDate: membershipDate,
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
      <h1 className="text-xl font-bold text-center mb-6">फेर-बदल गर्नुहोस्</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="userId"
          >
            सदस्य आईडी
          </label>
          <input
            id="userId"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            disabled
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="name"
          >
            नाम
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="नाम प्रविष्ट गर्नुहोस्"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="post"
          >
            पद
          </label>
          <input
            id="post"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="पद प्रविष्ट गर्नुहोस्"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="contact"
          >
            सम्पर्क नम्बर
          </label>
          <input
            id="contact"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="सम्पर्क नम्बर प्रविष्ट गर्नुहोस्"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="email"
          >
            ईमेल(Email)
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ईमेल प्रविष्ट गर्नुहोस्"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="membershipDate"
          >
            सदस्यता मिति (वि.सं.)
          </label>
          <input
            id="membershipDate"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="सदस्यता मिति प्रविष्ट गर्नुहोस्"
            value={membershipDate}
            onChange={(e) => setMembershipDate(e.target.value)}
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
          परिवर्तन
        </button>
      </form>
    </div>
  </>
  );
};

export default EditMember;
