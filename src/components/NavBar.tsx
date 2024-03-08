
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blakish">

                <Link className="navbar__link relative" href="#">HOME</Link>
                <Link className="navbar__link relative" href="#">ABOUT</Link>
                <Link className="navbar__link relative" href="#">WHAT WE DO</Link>
                <Link className="navbar__link relative" href="#">CAREERS</Link>
                <Link className="navbar__link relative" href="#">CONTACTS</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar;