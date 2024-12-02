// import { useState, useEffect } from "react";
// import axios from "axios";
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { v4 as uuidv4 } from "uuid";

// const AdminPanel = () => {
//   const [data, setData] = useState([]);
//   const [editId, setEditId] = useState(-1);
//   const [isEditing, setIsEditing] = useState(false);

//   const [heading, setHeading] = useState("");
//   const [description, setDescription] = useState("");
//   const [updateHeading, setUpdateHeading] = useState("");
//   const [updateDescription, setUpdateDescription] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/newss")
//       .then((res) => {
//         console.log("Data fetched:", res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const id = uuidv4();
//     axios
//       .post("http://localhost:3000/newss", {
//         id,
//         heading: heading,
//         description: description,
//       })
//       .then((res) => {
//         console.log("News added:", res.data);
//         setData([...data, res.data]);
//       })
//       .catch((err) => {
//         console.error("Error adding news:", err);
//       });
//   };

//   const handleEditNews = async (id) => {
//     try {
//       const response = await axios.get("http://localhost:3000/newss/" + id);
//       console.log("News fetched:", response.data);
//       setUpdateHeading(response.data.heading);
//       setUpdateDescription(response.data.description);
//       setEditId(id);
//     } catch (err) {
//       console.error("Error fetching news:", err);
//     }
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setUpdateHeading("");
//     setUpdateDescription("");
//     setEditId(-1);
//   };

//   const handleUpdateNews = () => {
//     axios
//       .put("http://localhost:3000/newss/" + editId, {
//         id: editId,
//         heading: updateHeading,
//         description: updateDescription,
//       })
//       .then(() => {
//         console.log("News updated");
//         setIsEditing(false);
//         axios
//           .get("http://localhost:3000/newss")
//           .then((response) => {
//             console.log("Data updated:", response.data);
//             setData(response.data);
//           })
//           .catch((err) => {
//             console.error("Error updating data:", err);
//             setData([]); // <--- Solution
//           });
//       })
//       .catch((err) => {
//         console.error("Error updating news:", err);
//         setData([]); // <--- Solution
//       });
//   };

//   const handleDeleteNews = async (id) => {
//     if (window.confirm("Are you sure you want to delete this news?")) {
//       try {
//         await axios.delete("http://localhost:3000/newss/" + id);
//         console.log("News deleted");
//         const response = await axios.get("http://localhost:3000/newss");
//         console.log("Data updated:", response.data);
//         setData(response.data);
//       } catch (err) {
//         console.error("Error deleting news:", err);
//         setData([]);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="mb-4">
//         <form action="" onSubmit={handleSubmit} className="flex flex-col">
//           <label htmlFor="heading" className="mb-2">
//             Heading to post:
//           </label>
//           <input
//             type="text"
//             id="heading"
//             placeholder="Heading to post"
//             onChange={(e) => setHeading(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 mb-2"
//           />
//           <label htmlFor="description" className="mb-2">
//             Description to post:
//           </label>
//           <textarea
//             id="description"
//             type="text"
//             placeholder="Description to post"
//             value={setUpdateDescription}
//             onChange={(e) => setDescription(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 mb-2"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Add
//           </button>
//         </form>
//       </div>

//       <table className="w-full table-auto border-collapse border border-gray-300">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-4 py-2 text-left">Id</th>
//             <th className="px-4 py-2 text-left">Heading</th>
//             <th className="px-4 py-2 text-left">Description</th>
//             <th className="px-4 py-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((news, index) =>
//             news.id === editId ? (
//               <tr key={news.id}>
//                 <td className="px-4 py-2">{news.id}</td>
//                 <td className="px-4 py-2">
//                   <input
//                     type="text"
//                     value={updateHeading}
//                     onChange={(e) => setUpdateHeading(e.target.value)}
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <textarea
//                     type="text"
//                     value={updateDescription}
//                     onChange={(e) => setUpdateDescription(e.target.value)}
//                   />
//                 </td>
//                 <td className="px-4 py-2">
//                   <button
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     onClick={() => handleUpdateNews()}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
//                     onClick={() => handleCancelEdit()}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
//                     onClick={() => {
//                       if (
//                         window.confirm(
//                           "Are you sure you want to delete this news?"
//                         )
//                       ) {
//                         handleDeleteNews(news.id);
//                       }
//                     }}
//                   >
//                     <AiOutlineDelete className="mr-2" />
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ) : (
//               <tr key={news.id} className="border-b border-gray-200">
//                 <td className="px-4 py-2">{news.id}</td>
//                 <td className="px-4 py-2">{news.heading}</td>
//                 <td className="px-4 py-2">{news.description}</td>
//                 <td className="px-4 py-2 flex justify-end">
//                   <button
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     onClick={() => handleEditNews(news.id)}
//                   >
//                     <AiOutlineEdit className="mr-2" />
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
//                     onClick={() => {
//                       if (
//                         window.confirm(
//                           "Are you sure you want to delete this news?"
//                         )
//                       ) {
//                         handleDeleteNews(news.id);
//                       }
//                     }}
//                   >
//                     <AiOutlineDelete className="mr-2" />
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             )
//           )}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AdminPanel;
