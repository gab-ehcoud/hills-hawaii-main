import Header3 from "./header/Header3";
import Footer from "./footers/FooterMain";
import PropTypes from "prop-types";

const PrivateLayout = ({ children }) => (
  <>
    <Header3 />
    <div className="dashboard-layout">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default PrivateLayout;

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
