import Image from "next/image";
import Logo from "../../../public/Images/AheadLogo.jpg";
import Link from "next/link";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#FFFFF2]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Image src={Logo} alt="Ahead Logo" className="w-20" />
          </div>

          <p className="mt-4 text-center text-sm text-gray-900 lg:mt-0 lg:text-right">
            Copyright &copy; {year}. All rights reserved.
            <br />
           <Link target="_blank" className="text-blue-800" href="https://linktr.ee/vishvsalvi?utm_source=linktree_profile_share&ltsid=a642e954-70a5-40bc-9c09-d2a0cdf">
           
               Made by Vishv Salvi
              </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
