import { useState } from "react";
import AdminLogout from "./AdminLogout";
// import AllLists from "../adminPages/AllLists";
import AddMembers from "./AddMembers";
import MembersList from "./MembersList";
import UpdatePrograms from "./UpdatePrograms";

function AdminNavigation() {
  const [activeComponent, setActiveComponent] = useState(null); // State to track active component

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-1 bg-gray-800 text-white gap-1">
        <div className="flex justify-between gap-3">
          {/* <button
            className="p-1 bg-purple-700 text-white rounded cursor-pointer hover:bg-purple-800"
            onClick={() => setActiveComponent("all")}
          >
            सबै सुचि
          </button> */}
          <button
            className="p-1 bg-purple-700 text-white rounded cursor-pointer hover:bg-purple-800"
            onClick={() => setActiveComponent("members")} // Show UpdateMembers
          >
            सदस्य सुचिकरण
          </button>
          <button
            className="p-1 bg-purple-700 text-white rounded cursor-pointer hover:bg-purple-800"
            onClick={() => setActiveComponent("programs")} // Show UpdatePrograms
          >
            कार्यक्रम सुचिकरण
          </button>
        </div>
        {/* Logout button */}
        <AdminLogout />
      </nav>

      {/* Render Selected Component Below Navigation */}
      <div className="">
        {activeComponent === "members" && (
          <>
            <AddMembers />
            <MembersList />
          </>
        )}
        {activeComponent === "programs" && <UpdatePrograms />}
        {/* {activeComponent === "all" && <AllLists />} */}
      </div>
    </>
  );
}

export default AdminNavigation;
