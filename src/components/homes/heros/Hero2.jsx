import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Gem, ArrowRight } from "lucide-react";

export default function BeachLanding({ theme }) {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="hero -type-3">
      <div className="hero__bg">
        <img
          src={
            theme === "light"
              ? "/img/hero/3/bg-beach.jpg"
              : "/img/hero/3/bg-hill.jpg"
          }
          style={{ objectFit: "cover", height: "auto" }}
          alt="background"
        />
      </div>

      <div className="container">
        <div className="row justify-between">
          <div className="col-xl-5 col-lg-5">
            <div>
              <div className="row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-20"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <Gem size={20} className="mr-5 mb-1 fw-600" />
                  <span className="fw-600">h&h verified</span>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="tourCard__title text-20 fw-500 mt-5 underline"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                Oahu: Shark Cage Dive on the North Shore
                <ArrowRight />
              </div>
            </div>
            <h1 className="hero__title" data-aos="fade-up" data-aos-delay="300">
              Mountain tans <span>&</span>
              <br className="md:d-none" />
              beach bums?
              <br className="md:d-none" />
              We have it all!
              {/* <img src="/img/hero/3/brush.svg" alt="brush stroke" /> */}
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="hero__filter mt-60 lg:mt-30 mb-80"
            >
              <div
                ref={dropDownContainer}
                className="searchForm -type-1 shadow-1"
              >
                <div className="searchForm__form">
                  <div className="searchFormItem js-select-control js-form-dd">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "location" ? "" : "location"
                        )
                      }
                    >
                      <div className="searchFormItem__icon size-50 rounded-full bg-accent-1-05 flex-center">
                        <i className="text-20 icon-pin"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>Where</h5>
                        <div className="js-select-control-chosen">
                          {" "}
                          {location ? location : "Search destinations"}
                        </div>
                      </div>
                    </div>

                    <Location
                      setLocation={setLocation}
                      active={currentActiveDD === "location"}
                    />
                  </div>

                  <div className="searchFormItem js-select-control js-form-dd js-calendar">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "calender" ? "" : "calender"
                        )
                      }
                    >
                      <div className="searchFormItem__icon size-50 rounded-full bg-accent-1-05 flex-center">
                        <i className="text-20 icon-calendar"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>When</h5>
                        <div>
                          <span className="js-first-date">
                            {" "}
                            <Calender active={currentActiveDD === "calender"} />
                          </span>
                          <span className="js-last-date"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="searchFormItem js-select-control js-form-dd">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "tourType" ? "" : "tourType"
                        )
                      }
                    >
                      <div className="searchFormItem__icon size-50 rounded-full bg-accent-1-05 flex-center">
                        <i className="text-20 icon-flag"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>Tour Type</h5>
                        <div className="js-select-control-chosen">
                          {" "}
                          {tourType ? tourType : "All tour"}
                        </div>
                      </div>
                    </div>

                    <TourType
                      setTourType={setTourType}
                      active={currentActiveDD === "tourType"}
                    />
                  </div>
                </div>

                <div className="searchForm__button">
                  <button
                    onClick={() => navigate("/tour-list-2")}
                    className="button -dark-1 bg-dark-1 rounded-200 text-white"
                  >
                    <i className="icon-search text-16 mr-10"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-7 col-lg-7">
            <div className="hero__image justify-end">
              <div>
                <img src="/img/hero/3/3.png" alt="image" />
                <img src="/img/hero/3/2.png" alt="image" />
              </div>
              <img src="/img/hero/3/3.png" alt="image" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
