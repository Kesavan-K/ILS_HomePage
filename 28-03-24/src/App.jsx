import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import homeTopImage from "./assets/home_top.jpg";
import homeTopImage1 from "./assets/home_top1.jpg";
import homeTopImage2 from "./assets/home_top2.jpg";
import homeTopImage3 from "./assets/home_top3.jpg";
import homeTopImage4 from "./assets/home_top4.jpg";
import homeTopImage5 from "./assets/home_top5.jpg";
import homePartnerImage1 from "./assets/home_partner1.jpg";
import homePartnerImage2 from "./assets/home_partner2.jpg";
import homePartnerImage3 from "./assets/home_partner3.jpg";
import homePartnerImage4 from "./assets/home_partner4.jpg";
import homePartnerImage5 from "./assets/home_partner5.jpg";
import enterpriseImg3 from "./assets/Enterprise_Img.png";
import "./App.css";
import homeBussiness from "./assets/HelpBussiness.jpg";
import BuildBB from "./components/BBB";
import BBB1 from "./assets/BBB1.jpg";
import BBB2 from "./assets/BBB2.jpg";
// import BBB4 from "./assets/BBB4.jpg";
import BBB3 from "./assets/BBB3.jpg";
// import Footer from "./components/Footer";
// import BBB5 from "./assets/BBB5.jpg";
// import BBB6 from "./assets/BBB6.jpg";
import ilsLogo from "./assets/ILS_logo.png";
const App = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carousel = document.querySelector(".carousel");
    new window.bootstrap.Carousel(carousel, {
      interval: 3000,
      keyboard: true,
      ride: "carousel",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container container-fluid px-md-2">
        <div className="pt-20 md:px-24">
          <h2 className="text-[#007FBF] text-xl md:text-3xl lg:text-5xl sm:text-2xl font-semibold letter font-sans tracking-wide md:px-16 xxl:px-16 lg:px-16 sm:px-1">
            The Key to Success in Todays <br />
            Competitive Market
          </h2>
          <h2 className="py-3 text-[#8594A0] text-xl md:text-2xl lg:text-2xl sm:text-lg font-semibold  md:px-16 xxl:px-16 lg:px-16 sm:px-1">
            Lean Manufacturing Solutions
          </h2>
        </div>

        {/* Courosel Content Start */}
        <div className="container-md md:px-20">
          <div
            id="carouselExampleCaptions"
            className="carousel slide py-5"
            data-bs-ride="carousel "
          >
            <div className="carousel-indicators">
              {[...Array(6)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {[
                { image: homeTopImage, caption: "Learning" },
                { image: homeTopImage1, caption: "Partnership" },
                { image: homeTopImage2, caption: "Listening" },
                { image: homeTopImage3, caption: "Self-sufficiency" },
                { image: homeTopImage4, caption: "Simplicity" },
                { image: homeTopImage5, caption: "Improvement" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={item.image}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                    style={{ height: "300px" }}
                  />
                  <div className="carousel-caption d-none d-md-block bg-gray-800 shadow-lg text-white p-4 rounded-lg">
                    <h5 className="text-xl font-bold">{item.caption}</h5>
                    <p className="text-lg">
                      {item.caption === "Learning"
                        ? "Lean organizations continuously learn, solve problems, and share ideas to improve as a whole."
                        : item.caption === "Partnership"
                        ? "We value long-term partnerships with clients, working together to improve their operations and gain a competitive edge."
                        : item.caption === "Listening"
                        ? "We listen carefully to our clients and value their ideas for all solutions."
                        : item.caption === "Self-sufficiency"
                        ? "Our goal is to empower clients to achieve continuous improvement on their own."
                        : item.caption === "Simplicity"
                        ? "Lean solutions aim for simplicity and elegance, striving for continual improvement."
                        : "Learning by doing is key. We expect our training to lead to measurable improvements."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enterprice PI code */}
      <div className="bg-[#DCE0E5]">
        <div className="container-lg container-fluid">
          <div className="row bg-designs lg:px-20">
            <div className="col-md-6 col-12 flex justify-center items-center md:pt-10 lg:pt-20">
              <div className="">
                <h3 className="text-black font-bold text-xl mt-4 md:text-lg lg:text-xl xl:text-xl xxl:text-xl px-2 md:px-40 lg:px-9 xl:px-9 xxl:px-9">
                  Enterprise Performance <br /> Improvement (EPI)
                </h3>
                <p className="py-1 text-[#88969A] md:px-1 text-justify">
                  <li className="text-gray-700">
                    EPI is a comprehensive value enhancement program for
                    organizations seeking rapid and yet sustainable improvement.
                    EPI enhances value of an enterprise by reducing cost in the
                    areas of labor, safety, energy, direct and indirect
                    material, warranty, capital and general operating expenses,
                    and by increasing worth via hiring, retaining and developing
                    people, enhancing management systems, developing better
                    products, reducing time to market, improving quality and
                    creating a unified, customer-focused organizational culture,
                    all of which results in increasing brand value.
                  </li>
                  <li className="text-gray-800">
                    The EPI process actively engages clients to create and
                    sustain a competitive advantage by enhancing value of the
                    products and services of their enterprise.
                  </li>
                </p>
                <div className="flex justify-center md:justify-center items-center">
                  <button className="text-center text-white bg-[#88969A] p-2.5 rounded-lg mt-3.5 mb-5 hover:bg-[#6c7a7e] hover:shadow-lg transition duration-300">
                    Download Brochure{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 px-5 md:py-10 lg:py-20 flex justify-center items-center">
              <img
                src={enterpriseImg3}
                alt="no_image"
                className="h-auto w-full max-w-full md:max-w-full enterpriseImg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Enterprice PI code end */}

      {/* Build Better Before start */}
      <div className="bg-[#D1DCE5] py-5">
        <div className=" container-lg container-fluid">
          <div className="row lg:p-20">
            <div className="col col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12 col-12 flex justify-center items-center ">
              <div className="lg:pe-20">
                <div className="flex gap-3">
                  <div>
                    <img src={BBB2} alt="" className="h-auto w-60 mt-2.5" />
                  </div>
                  <div className="">
                    <img src={BBB1} alt="" className="h-auto w-60 mt-3" />
                    <img src={BBB3} alt="" className="h-auto w-60 mt-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-6 col-12 md:px-8 text-justify">
              <h3 className="text-black font-bold text-xl mt-4 md:text-lg lg:text-xl xl:text-xl xxl:text-xl px-2 md:px-40 lg:px-9 xl:px-9 xxl:px-9">
                Building Better Businesses <br />{" "}
                <span className="text-[#88969A] font-medium text-md">
                  {" "}
                  – The Lean Way
                </span>
              </h3>
              <BuildBB />
            </div>
          </div>
        </div>
      </div>
      {/* Build Better Before end */}

      {/* Help your bussiness code start */}
      <div className="container lg:px-20 xl:px-20 md:p-14 p-8">
        <div className="row">
          <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center">
            <img
              src={homeBussiness}
              alt="No_Img"
              className="w-full h-auto lg:p-10 border border-gray-900 rounded-md"
            />
          </div>

          <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10">
            <h3 className="text-black font-bold text-xl mt-4 md:text-lg lg:text-xl xl:text-xl xxl:text-xl">
              How Can We Help Your <br /> Business?
            </h3>
            <p className="text-gray-500 pt-2 text-justify">
              Our seasoned lean experts are dedicated to fostering a culture of
              continuous improvement within organizations, driving sustainable
              growth and success. With a focus on practical solutions, we
              empower teams to streamline processes, optimize efficiency, and
              achieve measurable results. Trust us to guide your journey towards
              operational excellence and lasting transformation.
            </p>
            <div className=" ">
              <button className="text-center text-white bg-[#88969A] p-2 rounded-lg mt-3.5 mb-5 hover:bg-[#6c7a7e] hover:shadow-lg transition duration-300">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Help your bussiness code end */}

        {/* Trusted leaders start */}
        <div className="md:pt-10 lg:pt-20">
          <div>
            <h3 className="py-1 md:py-10 text-[#8594A0] text-xl md:text-2xl lg:text-2xl sm:text-xl font-semibold text-center">
              TRUSTED BY LEADERS
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pb-16 pt-6 sm:gap-2 sm:justify-center">
            {[
              homePartnerImage1,
              homePartnerImage2,
              homePartnerImage3,
              homePartnerImage4,
              homePartnerImage5,
            ].map((partnerImage, index) => (
              <div
                key={index}
                className="partner-1 bg-black p-2 flex items-center justify-center"
              >
                <img
                  src={partnerImage}
                  alt={`Partner ${index + 1}`}
                  className="w-40"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Trusted leaders end */}
      </div>

      {/* footer content start */}
      <div className="bg-[#DCE0E5]">
        <div className="container-fluid p-10">
          <div className="row md:px-20">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
              <img src={ilsLogo} alt="" className="w-24" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
              <div>
                <h6 className="footer-h6">COMPANY</h6>
                <ul className="footer-ul">
                  <li>About Us</li>
                  <li>People</li>
                  <li>Carrer</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>{" "}
            <div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
              <div>
                <h6 className="footer-h6">SOLUTIONS</h6>
                <ul className="footer-ul">
                  <li>Private Equity</li>
                  <li>Client Services</li>
                  <li>Other Services</li>
                </ul>
              </div>
            </div>{" "}
            <div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
              <div>
                <h6 className="footer-h6">EDUCATION & TRAINING</h6>
                <ul className="footer-ul">
                  <li>Skills Development</li>
                  <li>Lean System Certification</li>
                  <li>Executive Education</li>
                  <li>Lean Leader Certification</li>
                </ul>
              </div>
            </div>{" "}
            <div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
              <div>
                <h6 className="footer-h6">COMPANY</h6>
                <ul className="footer-ul">
                  <li>About Us</li>
                  <li>People</li>
                  <li>Carrer</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>{" "}
            <div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
              <div>
                <h6 className="footer-h6">RESOURCES</h6>
                <ul className="footer-ul">
                  <li>ILS Diagnostic</li>
                  <li>News & Press</li>
                  <li>Case Studies</li>
                  <li>Lean Overview</li>
                  <li>White Papers</li>
                  <li>Helpful Resources</li>
                  <li>Newsletter Archive</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="pb-5 mt-3 container" />
          <div className=" ">
            <div className="row md:px-10"> 
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-sm-12 cursor-pointer">
                <p className="text-black font-semibold">
                  © 2006-2023 All Rights Reserved.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-sm-12 flex justify-end cursor-pointer">
                <p className="px-2 text-black font-semibold">Privacy Policy</p>
                <p className="px-2 text-black font-semibold">
                  Terms of Service
                </p>
                <p className="px-2 text-black font-semibold cursor-pointer">
                  <i className="fab fa-facebook"></i>{" "}
                  <i className="fab fa-linkedin"></i>{" "}
                  <i className="fab fa-twitter"></i>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer content end */}
    </div>
  );
};

export default App;
