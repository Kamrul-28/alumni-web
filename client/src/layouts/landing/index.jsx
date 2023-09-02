import PropTypes from "prop-types";

import Topbar from "./topbar";

function Landing({ children }) {
  return (
    <main>
      <Topbar />
      {children}
    </main>
  );
}

Landing.propTypes = {
  children: PropTypes.node,
};

export default Landing;
