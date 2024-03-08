import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <FaFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaTwitter />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaLinkedin />
                        </div>
                    </div>
                    <div style={{ fontStyle: 'italic', fontSize:"20px" }} className="text-gray-500 text-[1px]">
                        Welcome to <b>Vismaya</b>
                    </div>

                    <div className="flex gap-4">
                        <select
                            className="text-gray-500 text-[12px] w-[70px]"
                            name="currency"
                            id="currency">
                            <option value="USD $">USD $</option>
                            <option value="USD $">EUR $</option>
                            <option value="USD $">INR</option>
                        </select>
                        <select
                            className="text-gray-500 text-[12px] w-[80px]"
                            name="language"
                            id="language">
                            <option value="USD $">English</option>
                            <option value="USD $">French</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderTop;