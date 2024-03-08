import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center pt-14">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
                <div className="text-left font-bold">
                    <span className="text-blue-400">Vismaya</span>Infotech
                </div>
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-blue-400 mb-2">Sign into Vismaya</h2>
                    <div className="border-2 w-10 border-blue-400 inline-block mb-2"></div>
                    <div className="flex flex-col items-center ">
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <FaRegEnvelope className="text-gray-400 m-2"/>
                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <MdLockOutline className="text-gray-400 m-2"/>
                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                        </div>
                        <div className="flex justify-between w-64 mb-5">
                            <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember Me</label>
                            <a href="#" className="text-xs">Forgot Password?</a>
                        </div>
                        <a href="#" className="border-2 border-blue-400 text-blue-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white">Sign In</a>
                    </div>
                </div>
            </div>
            <div className="w-2/5 bg-blue-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">Welcome.</h2>
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                <p className="mb-10">Fill up personal information and start journey with us.</p>
                <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400">Sign Up</a>
            </div>
        </div>
    </div>
  );
}

export default SignIn;