import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";

export default function FooterThree() {
  return (
    <footer className="footer -type-1">
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">Contact</h4>

                <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    328 Queensberry Street, North Melbourne VIC3051, Australia.
                  </a>
                  <a className="d-block" href="#">
                    hi@viatours.com
                  </a>
                </div>

                <div className="col-auto mt-20">
                  <div className="footerSocials">
                    <div className="footerSocials__title">Follow Us</div>

                    <div className="footerSocials__icons">
                      <Socials />
                    </div>
                  </div>
                </div>
              </div>

              <FooterLinks />
              <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Newsletter</h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div className="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright Hills & Hawaii {new Date().getFullYear()}</div>
            </div>

            <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
