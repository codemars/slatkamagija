import React, { useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import palacinke from "../../assets/recipe/americke.webp";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
const Recipe1 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,

    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <section className="single-recipe-wrap-layout1 padding-top-74 padding-bottom-50">
          <div className="container">
            <div className="row gutters-60">
              <div className="col-lg-12">
                <div className="single-recipe-layout1">
                  <h1 className="item-title left" data-aos="fade-right">
                    <i
                      data-aos="fade-right"
                      className="fas fa-arrow-left arrow-icon"
                      onClick={() => navigate(-1)}

                    ></i>
                    Magične palačinke sa kakao kremom
                  </h1>
                  <div className="row mb-4 left">
                    <div className="col-xl-9 col-12">
                      <ul className="entry-meta">
                        <li className="single-meta">
                          <span>
                            <i className="far fa-calendar-alt"></i> Januar 14, 2024
                          </span>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="cream">
                    <img src={palacinke} alt="Američke palačinke sa kakao kremom" data-aos="fade-fadde" />
                  </div>
                  <div className="item-feature">
                    <ul>
                      <li>
                        <div className="feature-wrap" data-aos="fade-left">
                          <div className="media">
                            <div className="feature-icon">
                              <i className="far fa-clock"></i>
                            </div>
                            <div className="media-body space-sm">
                              <div className="feature-title">
                                Vreme pripreme
                              </div>
                              <div className="feature-sub-title">45 Min</div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="feature-wrap" data-aos="fade-right">
                          <div className="media">
                            <div className="feature-icon">
                              <i className="fas fa-users"></i>
                            </div>
                            <div className="media-body space-sm">
                              <div className="feature-title">Serviranje za</div>
                              <div className="feature-sub-title">3/4 osobe</div>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <p className="item-description" data-aos="fade-fade">
                    Zasladite svoje nepce ovim neodoljivim palačinkama, savršeno mekanim i punim ukusa.
                    Bilo da ih punite kremom, džemom ili poslužite s voćem, ove palačinke su klasik koji osvaja na prvi zalogaj. Idealne za doručak, užinu ili lagani desert – uz šoljicu toplog mleka ili kafu. Jednostavno se prave, a njihov ukus budi najlepše uspomene iz detinjstva!
                  </p>

                  <div className="making-elements-wrap" data-aos="fade-up">
                    <div className="row">
                      <div className="col-xl-6 col-12">
                        <div className="ingredients-wrap">
                          <h3 className="item-title">
                            <i className="fas fa-list-ul"></i> Sastojci
                          </h3>

                          <ul className="ingredient-list">
                            <li>2 jaja</li>
                            <li>300ml mleka</li>
                            <li>200 ml mineralne vode (ili obične vode)</li>
                            <li>2 kašike ulja (plus malo za prženje)</li>
                            <li>Prstohvat soli</li>
                            <li>200 g brašna</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="direction-wrap-layout1">
                    <div className="section-heading heading-dark">
                      <h2 className="item-heading" data-aos="fade-right">Upustvo za pripremu</h2>
                    </div>

                    <div className="direction-box-layout1" data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 1</div>
                        <p>

                          U velikoj posudi umutite jaja, dodajte mleko, vodu, ulje i prstohvat soli. Dobro promešajte.


                        </p>
                      </div>
                    </div>
                    <div className="direction-box-layout1" data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 2</div>
                        <p>

                          Postepeno dodajte brašno, muteći dok ne dobijete glatku smesu bez grudvica. Ostavite da odstoji 10/15 minuta.
                        </p>
                      </div>
                    </div>
                    <div className="direction-box-layout1" data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 3</div>
                        <p>

                          Zagrejte tiganj s malo ulja, sipajte kutlaču smese i ravnomerno rasporedite. Pržite palačinku 1/2 minuta sa svake strane, dok ne dobije zlatnu boju.
                        </p>
                      </div>
                    </div>
                    <div className="direction-box-layout1" data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 4</div>
                        <p>

                          Gotove palačinke mažite omiljenim nadevom, čokoladnim kremom, džemom, orasima sa šećerom, i uvijajte po želji. Poslužite tople, posute prah šećerom ili prelivenim sirupom.


                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tag-share">
                    <ul>
                      <li>
                        <ul className="inner-share">
                          <li>
                            <a href="https://www.facebook.com/profile.php?id=61554537968449&locale=sr_RS" target='_blank' rel="noreferrer">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>

                          <li>
                            <a href="https://www.instagram.com/slatkamagijaa/" target='_blank' rel="noreferrer">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Recipe1;
