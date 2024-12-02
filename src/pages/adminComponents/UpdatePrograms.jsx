import { useState } from "react";
import AddNotice from "./AddNotice";
import NoticeList from "./NoticeList";
import AddNews from "./AddNews";
import NewsList from "./NewsList";
const UpdatePrograms = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to track active component

  return (
    <>
      <nav className="flex justify-center items-center p-1 px-5 bg-gray-700 text-white gap-1">
        <div className="flex justify-between gap-5">
          <button
            className="p-1 bg-purple-500 text-white rounded cursor-pointer hover:bg-purple-800"
            onClick={() => setActiveComponent("notice")}
          >
            सुचना सुचिकरण
          </button>
          <button
            className="p-1 bg-purple-500 text-white rounded cursor-pointer hover:bg-purple-800"
            onClick={() => setActiveComponent("news")}
          >
            समाचार सुचिकरण
          </button>
        </div>
      </nav>

      {/* Render Selected Component Below Navigation */}
      <div className="">
        {activeComponent === "notice" && (
          <>
            <AddNotice />
            <NoticeList />
          </>
        )}
        {activeComponent === "news" && (
          <>
            <AddNews />
            <NewsList />
          </>
        )}
      </div>
    </>
  );
};

export default UpdatePrograms;
