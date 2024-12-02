import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../../firebase.js";
import { useState } from "react";

const AddMembers = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [membershipDate, setMembershipDate] = useState("");
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState("");

  const handleData = () => {
    const db = getDatabase(app);
    set(ref(db, "members/" + userId), {
      name: name,
      post: post,
      contact: contact,
      email: email,
      membershipDate: membershipDate,
      image: image ? image.name : null,
    });
    console.log(userId, name, post, contact, email, membershipDate, image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData();
  };

  return (
    <div className="max-w-lg mx-auto p-2 bg-white rounded-md shadow-lg">
      <h1 className="text-xl font-bold text-center mb-4">सदस्य सुचिकरण फारम</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="userId"
            >
              सदस्य आईडी*
            </label>
            <input
              required
              id="userId"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="123"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="membershipDate"
            >
              सदस्यता मिति (वि.सं.)
            </label>
            <input
              id="membershipDate"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="२०८१-१२-३०"
              value={membershipDate}
              onChange={(e) => setMembershipDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="name"
          >
            नाम*
          </label>
          <input
            required
            id="name"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="सुधार नेपाल"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="post"
            >
              पद*
            </label>
            <input
              required
              id="post"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="(अध्यक्ष, सदस्य, ...)"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="contact"
            >
              सम्पर्क नम्बर
            </label>
            <input
              id="contact"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="९८७६५४३२१०"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="email"
          >
            ईमेल
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="refnep3654@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-1">
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
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="w-33 h-14 bg-violet-500 p-2 items-center text-white rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            सुचिकरण गर्नुहोस्
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMembers;
