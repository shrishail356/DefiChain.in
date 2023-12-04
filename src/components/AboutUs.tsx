import Footer from "./Footer";
import Header from "./Header";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex-grow container mx-auto px-4 mt-20">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Chinmay Patil</h2>
            <p className="text-lg mb-4">
              4li3n.eth (web3) | Front-End Developer | Enthusiastic in Block-Chain innovations | Passionate about Cyber Security
            </p>
            <a
              href="https://drive.google.com/drive/folders/1WHcLqe-k5rqzfEramRSdeuzcrFKpv0U5?usp=drive_link"
              target="_blank"
              className="text-blue-400 font-semibold hover:text-blue-200"
            >
              View Resume / Projects
            </a>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Shrishail Patil</h2>
            <p className="text-lg mb-4">
              3loka.eth (web3) | Full Stack Developer | Enthusiastic in Block-Chain innovations | Passionate about AI / ML
            </p>
            <a
              href="https://drive.google.com/drive/folders/1-6GQhtx-BmmnnRUMELXVXwrMe7W3xCDO"
              target="_blank"
              className="text-blue-400 font-semibold hover:text-blue-200"
            >
              View Resume / Projects
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
