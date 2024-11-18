import { Link } from "react-router-dom";
import image from "../assets/images/Blood Donation app logo design.jpeg";

const AskHelpCard = () => {
  return (
    <div className="flex justify-center items-center bg-pink-100 py-12">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-pink-200 rounded-lg shadow-md p-4">
            <img
              src={image}
              alt="..."
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
          </div>
          <div className="bg-pink-200 rounded-lg shadow-md p-4">
            <h4 className="text-lg font-bold mb-2 text-pink-900">
              साथ-सहयोग गर्न चहानुहुन्छ ?
            </h4>
            <hr className="my-4" />
            <p className="text-gray-600 mb-2">रक्तदान गर्नुहोस् ।</p>
            <p className="text-gray-600 mb-2">कार्यक्रममा सहभागी हुनुहोस् ।</p>
            <p className="text-gray-600 mb-2">स्वयंसेवक बन्नुहोस् ।</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-pink-900 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              >
                सम्पर्क
              </Link>
              <Link
                to="/registration"
                className="bg-pink-100 hover:bg-pink-200 text-pink-900 font-bold py-2 px-4 rounded border border-pink-900"
              >
                फारम
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskHelpCard;
