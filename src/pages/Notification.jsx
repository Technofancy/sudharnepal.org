import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../firebase.js";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Notification = () => {
  const [NotificationData, setNotificationData] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const navigate = useNavigate();

  // Fetch data from Firebase
  useEffect(() => {
    const db = getDatabase(app);
    const NotificationRef = ref(db, "notices");
    onValue(NotificationRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setNotificationData(data);
    });
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous location
  };

  const handleClose = () => {
    setSelectedNotification(null);
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
        सुचना
      </h1>
      {/* Program News Cards */}
      <div className="space-y-4 bg-tertiary p-1">
        {Object.entries(NotificationData).map(([key, value], index) => (
          <div
            key={value.id}
            className="p-4 bg-neutral shadow rounded-md cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedNotification(value)}
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
      {selectedNotification && (
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
              {selectedNotification.imageUrl && (
                <img
                  src={selectedNotification.imageUrl}
                  alt={selectedNotification.head}
                  className="mt-4 w-full object-cover rounded-md"
                />
              )}
              <div className="text-gray-500 text-sm">
                {selectedNotification.date}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                {selectedNotification.head}
              </h2>
              {selectedNotification.description
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

export default Notification;
