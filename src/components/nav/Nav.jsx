import "./Nav.css";
import RodLogo from "../../assets/icons/RodLogo";
import Socials from "../socials/Socials";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={handleHome}>
          <RodLogo />
          <h1>
            Rodrigo Rosales Moya. <br /> Web Developer <span>&</span> Designer.
          </h1>
        </div>

        <Socials />
      </nav>
    </>
  );
};

export default Nav;
