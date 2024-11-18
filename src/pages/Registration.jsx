import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/logo/sudharNepal_logo.png";

const Registration = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4 text-pink-900">
              <strong>फारम</strong>
            </h2>
            <hr />
            <br />
            <div className="form-placeholder bg-pink-100 p-4 rounded-md shadow-md position-relative">
              <div className="overlay">
                <div className="overlay-content">
                  <h3 className="text-center text-pink-900 mb-4">
                    हालकोलागि फारम निष्क्रिय छ, असुविधाको लागि क्षमा प्रार्थी
                    छोेँ ।
                  </h3>
                  <p className="text-center text-gray-700">
                    धैर्यताकोलागि धन्यवाद ।
                  </p>
                </div>
              </div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-pink-900 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    पुरा नाम
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="सुधार नेपाल"
                    className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-pink-900 focus:ring-1"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-pink-900 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    ठेगाना
                  </label>
                  <input
                    type="address"
                    id="address"
                    placeholder="धरान, सुनसरी"
                    className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-pink-900 focus:ring-1"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-pink-900 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    सम्पर्क अंक
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="९८६५४३२१००"
                    className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-pink-900 focus:ring-1"
                    disabled
                  />
                </div>
              </form>
            </div>
            <img
              src={image}
              alt="Sudhar Nepal Logo"
              className="img-fluid mt-4 mx-auto"
            />
            <p className="text-center mt-4 text-pink-900">
              सोधपुछको लागि{" "}
              <a href="/contact" className="text-pink-900 hover:text-pink-700">
                सम्पर्क
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
