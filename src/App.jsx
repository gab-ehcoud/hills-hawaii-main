import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Aos from "aos";
import { useEffect } from "react";
import HomePage3 from "./pages/homes/home-3";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import ScrollToTop from "./components/common/ScrollToTop";
import TourListPage3 from "./pages/tour-lists/tour-list-3";
import TourSinglePage1 from "./pages/tour-singles/tour-single-1";
import BookingPage from "./pages/pages/booking-pages";
// import DBMainPage from "./pages/dashboard/db-main";
// import DBBookingPage from "./pages/dashboard/db-booking";
// import DBListingPage from "./pages/dashboard/db-listing";
// import DBAddTourPage from "./pages/dashboard/db-add-tour";
// import DBFavoritesPage from "./pages/dashboard/db-favorites";
// import DBMessagesPage from "./pages/dashboard/db-messages";
// import DBProfilePage from "./pages/dashboard/db-profile";
import DestinationsPage from "./pages/pages/destinations";
import AboutPage from "./pages/pages/about";
import HelpCenterPage from "./pages/pages/help-center";
import TermsPage from "./pages/pages/terms";
import LoginPage from "./pages/pages/login";
import RegisterPage from "./pages/pages/register";
import InvoicePage from "./pages/pages/invoice";
import UIElementsPage from "./pages/pages/ui-elements";
import NotFoundPage from "./pages/pages/404";
import ContactPage from "./pages/pages/contact";
import { StoreProvider } from "./store";
import { HelmetProvider } from "react-helmet-async";
// import { Navigate } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  // const ProtectedRoute = ({ element, auth, role, requiredScope }) => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //   if (auth && !userInfo) {
  //     return <Navigate to="/login" />;
  //   }

  //   if (role && userInfo.role !== role) {
  //     return <Navigate to="/404" />;
  //   }

  //   // if (requiredScope && !hasPermission(userInfo.role, requiredScope)) {
  //   //   return <Navigate to="/403" />; // Or some unauthorized page
  //   // }

  //   return element;
  // };

  return (
    <StoreProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage3 />} />
              <Route path="/tour-list-3" element={<TourListPage3 />} />
              <Route path="/tour-single-1/:id" element={<TourSinglePage1 />} />
              <Route path="/booking-pages" element={<BookingPage />} />
              {/* <Route
                path="/db-main"
                element={
                  <ProtectedRoute auth role="vendor" element={<DBMainPage />} />
                }
              />
              <Route
                path="/db-booking"
                element={
                  <ProtectedRoute
                    auth
                    role="vendor"
                    element={<DBBookingPage />}
                  />
                }
              />
              <Route
                path="/db-listing"
                element={
                  <ProtectedRoute
                    auth
                    role="vendor"
                    element={<DBListingPage />}
                  />
                }
              />
              <Route
                path="/db-add-tour"
                element={
                  <ProtectedRoute
                    auth
                    role="vendor"
                    element={<DBAddTourPage />}
                  />
                }
              />
              <Route
                path="/db-favorites"
                element={
                  <ProtectedRoute
                    auth
                    role="vendor"
                    element={<DBFavoritesPage />}
                  />
                }
              />
              <Route
                path="/db-messages"
                element={
                  <ProtectedRoute
                    auth
                    role="vendor"
                    element={<DBMessagesPage />}
                  />
                }
              />

              <Route
                path="/db-profile"
                element={
                  <ProtectedRoute
                    auth
                    role="vendor"
                    element={<DBProfilePage />}
                  />
                }
              /> */}

              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
              <Route path="/ui-elements" element={<UIElementsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/404" element={<NotFoundPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>
        <ScrollToTop />
      </HelmetProvider>
    </StoreProvider>
  );
}

export default App;
