import './sidebar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUsers, faGear, faPeopleArrows, faDollarSign, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/chatlogo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={logo} alt="SuperPage logo" />
      <h1>SuperPage</h1>
    </div>
      <ul className="menu-items">
        <li>
          <Link to="/ai-chat">
            <FontAwesomeIcon icon={faComment} /> AI Chat
          </Link>
        </li>
        <li>
          <Link to="/members">
            <FontAwesomeIcon icon={faUsers} /> Members
          </Link>
        </li>
        <li>
          <Link to="/integrations">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Integrations
          </Link>
        </li>
        <li>
          <Link to="/refer-friends">
            <FontAwesomeIcon icon={faPeopleArrows} /> Refer Friends
          </Link>
        </li>
        <li>
          <Link to="/pricing-plans">
            <FontAwesomeIcon icon={faDollarSign} /> Pricing Plans
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faGear} /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

