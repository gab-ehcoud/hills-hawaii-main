import Header from "./header/Header3";
import Footer from "./footers/FooterMain";
import PropTypes from "prop-types";

const PublicLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default PublicLayout;

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
