import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/logo/sudharNepal_logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope } from "react-icons/fa";

const data = [
  {
    name: "भक्तराज राई",
    post: "सचिव",
    organization: "सुधार नेपाल",
    number: "९७६७३९३५५१",
    image: image,
  },
  {
    name: "भिमकुमार राई",
    post: "सचिव",
    organization: "सुधार नेपाल",
    number: "९८५२०५६०५४",
    image: image,
  },
];

const Contact = () => {
  return (
    <div className="h-screen flex flex-col bg-pink-50">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4 text-pink-900">
            हाम्रो सम्पर्क
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div key={index} className="bg-pink-100 rounded-lg shadow-md p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-lg font-bold mb-2 text-pink-900">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-2">{item.post}</p>
                <p className="text-gray-600 mb-2">{item.organization}</p>
                <p className="text-gray-700 text-sm">
                  <b>{item.number}</b>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2 text-pink-900">
              सामाजिक सञ्जाल:
            </h3>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="https://www.facebook.com/share/186mavZFMZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
                <span>सुधार नेपाल (page)</span>
              </Link>
              <Link
                to="mailto:refnep3654@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-500"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
                <span>refnep3654@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
