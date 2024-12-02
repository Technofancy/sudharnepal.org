import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 mt-10">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col">
          <p>&copy; २०८१ सुधार नेपाल (2024 Reform Nepal)</p>
          <Link to="https://bhuwankhatri.com.np/">
            Developed by{" "}
            <span className="text-primary font-bold">Technofancy&co</span>
          </Link>
        </div>
        <div className="flex-1 text-right text-primary font-bold">
          <ul>
            <li>
              <Link to="/home" className=" hover:text-gray-900">
                गृहपृष्ठ
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900">
                हाम्रो बारेमा
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900">
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
