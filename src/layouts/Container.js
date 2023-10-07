import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
// import PropTypes from "prop-types";

const Container = ({ Page }) => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="page-container">
        <Topbar />
        <div className="page-content-holder">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Container;