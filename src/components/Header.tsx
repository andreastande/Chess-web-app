import { Link } from "react-router"

const Header = () => {
  return (
    <header>
      <div className="flex items-center px-4 text-white justify-between w-full h-14 bg-[#252728]">
        <Link to="/">
          <p>Hjem</p>
        </Link>
        <Link to="/play">
          <p>Features</p>
        </Link>
        <Link to="/">
          <p>Profil</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
