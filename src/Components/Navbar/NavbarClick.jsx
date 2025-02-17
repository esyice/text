import { Link } from "react-scroll"

const NavbarClick = ({href , name}) => {

    return (
        <Link to={href} smooth={true} duration={500} className="hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:cursor-pointer">{name} </Link>
    )

}

export default NavbarClick