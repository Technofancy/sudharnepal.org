import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/logo/sudharNepal_logo.png";

const postHandlers = [
  {
    id: 1,
    name: "निनाचन्द्र राई",
    position: "अध्यक्ष",
    description: "",
    phone: "",
    email: "",
    image: image,
  },
  {
    id: 2,
    name: "अजय राई",
    position: "उपाध्यक्ष",
    description: "",
    phone: "",
    email: "",
    image: image,
  },
  {
    id: 3,
    name: "अटल सिंह राई",
    position: "उपाध्यक्ष",
    description: "",
    phone: "",
    email: "",
    image: image,
  },
  {
    id: 4,
    name: "भक्तराज राई",
    position: "सचिव",
    description: "",
    phone: "",
    email: "",
    image: image,
  },
  {
    id: 5,
    name: "भिमकुमार राई",
    position: "सचिव",
    description: "",
    phone: "",
    email: "",
    image: image,
  },
  {
    id: 6,
    name: "नरहरि राई",
    position: "सह-सचिव",
    description: "",
    phone: "",
    email: "",
    image: image,
  },
];

const members = [
  {
    id: "१",
    name: "जयन्द्र प्रसाद लिम्बु पारघरी",
    position: "सदस्य",
  },
  {
    id: "२",
    name: "बोध बहादुर खत्री (सुरज के.सि.)",
    position: "सदस्य",
  },
  {
    id: "३",
    name: "राजन वास्तोला",
    position: "सदस्य",
  },
  {
    id: "४",
    name: "रामकुमार वि.क.",
    position: "सदस्य",
  },
  {
    id: "५",
    name: "विष्णु कुमार राई",
    position: "सदस्य",
  },
  {
    id: "६",
    name: "शुभ राई",
    position: "सदस्य",
  },
  {
    id: "७",
    name: "श्याम कुमार खतिवडा",
    position: "सदस्य",
  },
  {
    id: "८",
    name: "हिराश्याम राई",
    position: "सदस्य",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-10 bg-neutral">
        <h1 className="text-3xl font-bold mb-4 text-primary">हाम्रो बारेमा</h1>
        <div className="bg-white rounded shadow-md p-4 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-primary">
            संस्थागत जानकारी :
          </h2>
          <hr />
          <br />
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-primary">
                सुधार नेपाल
              </h3>
              {/* <p className="text-gray-600">Sudhar Nepal</p> */}
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-primary">
                धरान-८, भोटेपुल(बोनस मल), सुनसरी
              </h3>
              {/* <p className="text-gray-600">nepal</p> */}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-primary">
              चौतर्फी सुधार, हाम्रो आधार
            </h3>
            <p className="text-gray-600">
              यस संस्थाले विभिन्न विकृति, विसंगति, अन्याय, अत्याचार, अनियमितता र
              भ्रष्टाचारलाई निर्मुल पारि व्यवस्थित, विकसित, मर्यादित र सुशासित
              समाज निर्माणकालागि चुस्त, दुरुस्त, शिष्ट र सभ्य ढंगबाट सेवा प्रदान
              गर्न सेवा प्रदायक निकायहरुलाई सुझाव, सल्लाह, दवाब तथा आवश्यकता
              परेको खण्डमा कानुनि उपचारद्वारा समस्या समाधान गर्नकालागि भुमिका
              निर्वाह गर्दछ।
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-primary">
              कार्यक्रम उद्देश्य :
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>स्वास्थ्य शिविर,</li>
              <li>
                <b>रक्तदान अभियान,</b>
              </li>
              <li>सरसफाई अभियान,</li>
              <li>सिप तथा रोजगार मूलक तालिम,</li>
              <li>जनचेतना मूलक कार्यक्रम, आदि ।</li>
            </ul>
          </div>
        </div>

        {/* Post holders and Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postHandlers.map((postHandler) => (
            <div
              key={postHandler.id}
              className="bg-white rounded shadow-md p-4 hover:shadow-lg transition duration-300 border border-tertiary"
            >
              <img
                src={postHandler.image}
                alt={postHandler.name}
                className="w-20 h-20 rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2 text-primary">
                {postHandler.name}
              </h2>
              <p className="text-gray-600">{postHandler.position}</p>
              <p className="text-gray-600">{postHandler.description}</p>
              {/* <p className="text-gray-600">Phone: {postHandler.phone}</p>
              <p className="text-gray-600">Email: {postHandler.email}</p> */}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          सदस्यहरु :
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white rounded shadow-md p-4 border border-tertiary">
            <thead className="bg-tertiary">
              <tr>
                <th className="px-1 py-2 text-primary">क्र.स.</th>
                <th className="px-4 py-2 text-primary">नाम (अक्षर क्रम)</th>
                <th className="px-3 py-2 text-primary"></th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td className="border border-tertiary px-4 py-2">
                    {member.id}
                  </td>
                  <td className="border border-tertiary px-4 py-2">
                    {member.name}
                  </td>
                  <td className="border border-tertiary px-4 py-2">
                    {member.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
