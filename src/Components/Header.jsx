import { UserButton, useUser, signOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { isSignedIn, user } = useUser();

  return (
    <header className="header">
   <div className="profile">
        {isSignedIn ? (
          <>
            <span className="user-name">
              {user.firstName || user.username || ''}
            </span>
            <UserButton
              appearance={{
                elements: {
                  userButton: {
                    borderRadius: '60%',
                  },
                },
              }}
            />
            <button onClick={() => signOut()} className="sign-out-button">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
