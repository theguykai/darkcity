import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-1 h-[20vh] flex justify-center items-center flex-col ">
      <div className="my-2 flex space-x-4 justify-center items-center">
        <a href="https://www.facebook.com/DarkCityProduction/">
          <FaFacebookF size={25} className="hover:fill-blue-500" />
        </a>
        <a href="https://www.instagram.com/dark_city_productions/">
          <FaInstagram size={30} className="hover:fill-pink-400" />
        </a>
        <a href="https://www.youtube.com/@DarkCityP/videos">
          <FaYoutube size={30} className="hover:fill-red-500" />
        </a>
      </div>
      <span className="text-sm">Copyright Dark City Productions 2024</span>
    </div>
  );
};
export default Footer;
