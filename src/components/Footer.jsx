import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 mt-10">
      <div className="container mx-auto flex justify-between">
        <div className="flex-1">
          <p>&copy; २०८१ सुधार नेपाल (2024 Reform Nepal)</p>
        </div>
        <div className="flex-1 text-right">
          <ul>
            <li>
              <Link to="/home" className="text-white hover:text-gray-900">
                गृहपृष्ठ
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-900">
                हाम्रो बारेमा
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-900">
                सम्पर्क
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
