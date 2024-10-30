
import logo from "./assets/chatlogo.png";
import "./Header.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="SuperPage logo" />
      <h1>SuperPage</h1>
    </div>
  );
};

export default Logo;
