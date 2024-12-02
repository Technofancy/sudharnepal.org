import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../../../firebase.js";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  const [noticeData, setNoticeData] = useState(null);
  const navigate = useNavigate();
  //   const location = useLocation();

  useEffect(() => {
    const db = getDatabase(app);
    const noticeRef = ref(db, "notices");
    onValue(noticeRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setNoticeData(data);
    });
  }, []);

  const deleteNotice = (key) => {
    const db = getDatabase(app);
    const noticeRef = ref(db, "notices/" + key);
    remove(noticeRef);
  };

  return (
    <div className="max-w-4xl mx-auto p-3 bg-gray-100 rounded-md shadow-lg">
      <h1 className="text-xl font-bold text-center mb-3">सुचना सुचि</h1>
      {noticeData && Object.keys(noticeData).length > 0 ? (
        <table className="w-full table-auto bg-white shadow-md rounded-md overflow-hidden">
          <thead className="bg-violet-500 text-white">
            <tr>
              <th className="p-3 text-left">क्र.स.</th>
              <th className="p-3 text-left">मिति</th>
              <th className="p-3 text-left">शिर्षक</th>
              {/* <th className="p-3 text-left">सम्पर्क नम्बर</th> */}
              {/* <th className="p-3 text-left">ईमेल</th> */}
              <th className="p-3 text-center">कार्यहरू</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {Object.entries(noticeData).map(([key, value], index) => (
              <tr
                key={key}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="p-3 px-2">{index + 1}</td>
                <td className="p-3 px-2">{value.date}</td>
                <td className="p-3">{value.head}</td>
                {/* <td className="p-3">{value.contact}</td> */}
                {/* <td className="p-3">{value.email}</td> */}
                <td className="flex justify-end space-x-1">
                  <button
                    onClick={() => {
                      if (
                        window.confirm("के तपाईं पक्का सुचना हटाउन चाहनुहुन्छ?")
                      ) {
                        deleteNotice(key);
                      }
                    }}
                    className="bg-red-500 text-white py-1 px-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    हटाउन
                  </button>
                  <button
                    onClick={() => {
                      navigate("/editnotice", { state: [key, value] });
                    }}
                    className="bg-violet-500 text-white px-1 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-300"
                  >
                    सम्पादन
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">
          हालकोलागि सुचना-सुचि उपलब्ध छैन । <br /> सुचना सुचिकरण गर्नुहोस् ।
        </p>
      )}
    </div>
  );
};

export default NoticeList;
