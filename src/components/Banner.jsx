import { Link } from "react-router-dom";
import bloodDonationBanner from "../assets/images/bloodDonation_banner.jpeg";


const Banner = () => {
  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bloodDonationBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="text-center flex flex-col justify-center gap-3">
          <h1 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            सुधार नेपाल
          </h1>
          <br />
          <hr />
          <br />
          <h2 className="text-xl leading-9 font-extrabold text-gray-200 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            चौतर्फी सुधार, हाम्रो आधार
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-300 sm:text-xl sm:leading-8 md:text-2xl md:leading-10">
            यस संस्थाले विभिन्न विकृति, विसंगति, अन्याय, अत्याचार, अनियमितता र
            भ्रष्टाचारलाई निर्मुल पारि व्यवस्थित, विकसित, मर्यादित र सुशासित
            समाज निर्माणकालागि चुस्त, दुरुस्त, शिष्ट र सभ्य ढंगबाट सेवा प्रदान
            गर्न सेवा प्रदायक निकायहरुलाई सुझाव, सल्लाह, दवाब तथा आवश्यकता परेको
            खण्डमा कानुनि उपचारद्वारा समस्या समाधान गर्नकालागि भुमिका निर्वाह
            गर्दछ ।
          </p>
          <hr />
          <Link
            to="/About"
            className="mt-8 bg-pink-900 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded"
          >
            थप जान्नुहोस्
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
