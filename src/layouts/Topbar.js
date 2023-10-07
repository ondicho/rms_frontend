import logo from "../images/rent.png";


const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="user-avatar">
        <div className="username">username</div>
        <div className="avatar">
          <img src={logo} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
