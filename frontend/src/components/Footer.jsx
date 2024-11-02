import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknow printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+84-212-456-7889</li>
            <li>thang234321@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyrigth 2024@ forever.com - All Right Reserverd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
