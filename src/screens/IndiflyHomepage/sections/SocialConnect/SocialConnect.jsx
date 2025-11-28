import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

export const SocialConnect = () => {
  return (
    <div className="w-full flex justify-center md:justify-start">
      <div className="flex items-center gap-3 mt-[0.5rem] md:gap-5 bg-[#eef0f6] px-4 py-2 rounded-md shadow-sm">
        
        {/* Text */}
        <span className="text-[#01295c] font-semibold text-sm md:text-base whitespace-nowrap">
          Connect with us:
        </span>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-5">
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01295c] hover:text-[#e04a00] transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01295c] hover:text-[#e04a00] transition-colors"
          >
            <RxTwitterLogo size={20} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01295c] hover:text-[#e04a00] transition-colors"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01295c] hover:text-[#e04a00] transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;
