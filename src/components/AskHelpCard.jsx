import { Link } from "react-router-dom";
// import image from "../assets/images/Blood Donation app logo design.jpeg";

const AskHelpCard = () => {
  return (
    <div className="flex justify-center items-center bg-neutral py-12">
      <div className="container mx-auto p-2 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-tertiary rounded-lg shadow-md p-2">
            {/* <img
              src={image}
              alt="..."
              className="w-full h-48 object-cover mb-4 rounded-lg"
            /> */}
            {/* Facepage iframe */}
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61558536260762&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
              width="100%"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="bg-neutral rounded-lg shadow-md p-4">
            <h4 className="text-lg font-bold mb-2 text-primary">
              साथ-सहयोग गर्न चहानुहुन्छ ?
            </h4>
            <hr className="my-4" />
            <p className="text-gray-600 mb-2">रक्तदान गर्नुहोस् ।</p>
            <p className="text-gray-600 mb-2">कार्यक्रममा सहभागी हुनुहोस् ।</p>
            <p className="text-gray-600 mb-2">स्वयंसेवक बन्नुहोस् ।</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              >
                सम्पर्क
              </Link>
              <Link
                to="/registration"
                className="bg-tertiary hover:bg-neutral text-primary font-bold py-2 px-4 rounded border border-primary"
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
