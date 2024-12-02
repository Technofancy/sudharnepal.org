import image1 from "../assets/images/bloodDonation_banner.jpeg";
import image2 from "../assets/images/withTreeTobePlanted.jpeg";
import image3 from "../assets/images/deusi-bhailoGrouped.jpg";

const campaigns = [
  {
    id: 1,
    title: "रक्तदान अभियान",
    image: image1,
    description: "रक्तदान अभियानको तस्बिर",
    year: "२०८१",
  },
  {
    id: 2,
    title: "वृक्ष-रोपन कार्यक्रम",
    image: image2,
    description: "वृक्षरोपन कार्यक्रमको तस्बिर",
    year: "२०८१",
  },
  {
    id: 3,
    title: "देउसि-भैलो कार्यक्रम",
    image: image3,
    description: "देउसि-भैलो रमाईलो कार्यक्रमको तस्बिर",
    year: "२०८१",
  },
];

const CampaignCard = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-center text-3xl font-bold mb-4 text-primary">
        कार्यक्रमहरु
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-neutral rounded-lg shadow-md p-4"
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2 text-primary">
              {campaign.title}
            </h2>
            <p className="text-gray-600 mb-2">{campaign.description}</p>
            <p className="text-gray-400 text-sm">{campaign.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignCard;
