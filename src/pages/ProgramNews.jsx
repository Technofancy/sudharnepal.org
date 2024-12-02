import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../firebase.js";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const ProgramNews = () => {
  const [programNewsData, setProgramNewsData] = useState([]);
  const [selectedProgramNews, setSelectedProgramNews] = useState(null);
  const navigate = useNavigate();

  // Fetch data from Firebase
  useEffect(() => {
    const db = getDatabase(app);
    const programNewsRef = ref(db, "news");
    onValue(programNewsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setProgramNewsData(data);
    });
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous location
  };

  const handleClose = () => {
    setSelectedProgramNews(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="p-3 flex justify-between items-center mb-3 bg-primary">
        <button
          onClick={handleGoBack}
          className="flex items-center space-x-2 text-white font-semibold hover:text-secondary transition"
        >
          <FaArrowLeft />
          <span> </span>
        </button>
        <button
          onClick={() => navigate("/")} // Navigate to the home page
          className="flex items-center space-x-2 text-white font-semibold hover:text-secondary transition"
        >
          <AiFillHome />
          <span>गृहपृष्ठ</span>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-3 text-center">
        कार्यक्रम
      </h1>
      {/* Program News Cards */}
      <div className="space-y-4 bg-tertiary p-1">
        {Object.entries(programNewsData).map(([key, value], index) => (
          <div
            key={value.id}
            className="p-4 bg-neutral shadow rounded-md cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedProgramNews(value)}
          >
            <div className="text-gray-500 text-sm">{value.date}</div>
            <h2 className="text-xl font-semibold text-primary">{value.head}</h2>
            <p className="text-gray-700 text-sm truncate">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Full View */}
      {selectedProgramNews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-1"
          onClick={handleClose}
        >
          <div
            className="bg-tertiary p-3 shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-2 text-gray-700 hover:text-black mb-3"
              onClick={handleClose}
            >
              ✕
            </button>
            <div className="p-3 bg-neutral rounded-md mt-6">
              {selectedProgramNews.image && (
                <img
                  src={selectedProgramNews.image}
                  alt={selectedProgramNews.head}
                  className="mt-4 w-full object-cover rounded-md"
                />
              )}
              <div className="text-gray-500 text-sm">
                {selectedProgramNews.date}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                {selectedProgramNews.head}
              </h2>
              {selectedProgramNews.description
                .split("\n")
                .map((line, index) => (
                  <p key={index} className="text-gray-700">
                    {line}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramNews;
