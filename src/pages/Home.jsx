import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CampaignCard from "../components/CampaignCard";
import AskHelpCard from "../components/AskHelpCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CampaignCard />
      <AskHelpCard />
      <Footer />
    </>
  );
};

export default Home;
