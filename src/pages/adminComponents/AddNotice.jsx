import { useState } from "react";
import { app } from "../../../firebase.js";
import { getDatabase, ref, set } from "firebase/database";
// import { supabase } from "../../../supabase.js";

const AddNotice = () => {
  const [noticeId, setNoticeId] = useState("");
  const [head, setHead] = useState("");
  const [description, setDescription] = useState([""]);
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    const lines = e.target.value.split("\n");
    setDescription(lines.join("\n"));
  };

  const handleData = () => {
    const db = getDatabase(app);
    set(ref(db, "news/" + noticeId), {
      head: head,
      description: description,
      date: date,
      image: image ? image.name : null,
    });
    console.log(noticeId, description, date, image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData();
  };

  return (
    <div className="max-w-lg mx-auto p-2 bg-white rounded-md shadow-lg">
      <h1 className="text-xl font-bold text-center mb-4">सुचना सुचिकरण फारम</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="noticeId"
            >
              सुचना आईडी*
            </label>
            <input
              required
              // disabled
              id="noticeId"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="123"
              value={noticeId}
              onChange={(e) => setNoticeId(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="date"
            >
              मिति (वि.सं.)*
            </label>
            <input
              id="date"
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="२०८१-१२-३०"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="head"
          >
            शिर्षक*
          </label>
          <input
            required
            id="head"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="सुचनाको शिर्षक"
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
        </div>

        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="description"
          >
            विवरण*
          </label>
          <textarea
            required
            id="description"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="(सुचनाको पुरा जानकारी ... ... ...)"
            value={description}
            onChange={handleDescriptionChange}
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
              // disabled
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
            सुचना सुचिकरण
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotice;
