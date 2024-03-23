import PropTypes from "prop-types";

import ContextProvider from "./context/provider";

const StoreProvider = ({ children }) => (
  <ContextProvider>{children}</ContextProvider>
);

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export default StoreProvider;
