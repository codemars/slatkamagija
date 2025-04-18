import React, {useEffect} from "react";
import Layout from "../../components/Layouts/Layout";
import kiflice from "../../assets/recipe/kiflice.webp";
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
                <h1 className="item-title left"   data-aos="fade-right">
                    <i
                    data-aos="fade-right"
                      className="fas fa-arrow-left arrow-icon"
                      onClick={() => navigate(-1)}
                      style={{ cursor: "pointer", marginRight: "10px", color: "black", fontSize: "27px" }}
                    ></i>
                    Magične kiflice sa džemom od šipurka
                  </h1>
                  <div className="row mb-4 left">
                    <div className="col-xl-9 col-12">
                      <ul className="entry-meta">
                        <li className="single-meta">
                          <a href="#">
                            <i className="far fa-calendar-alt"></i>Januar 14,
                            2024
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="item-figure1">
                    <img src={kiflice} alt="Product"   data-aos="fade-fadde" />
                  </div>
                  <div className="item-feature">
                    <ul>
                      <li>
                        <div className="feature-wrap"   data-aos="fade-left">
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
                              <div className="feature-sub-title">10 osoba</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    
                    </ul>
                  </div>
                  <p className="item-description"   data-aos="fade-fade">
                    Zasladite svoje nepce ovim neodoljivim kiflicama, punjenim
                    sočnim džemom. Mekane, mirisne i prepune ukusa, ove kiflice
                    su savršen desert koji će očarati sve ukućane. Uživajte u
                    njima uz šoljicu toplog čaja ili kao slatki dodatak uz
                    jutarnju kafu. Jednostavno pripremljene, a neodoljivo
                    ukusne, ove kiflice će postati omiljeni slatki zalogaj u
                    vašem domu!
                  </p>

                  <div className="making-elements-wrap"   data-aos="fade-up">
                    <div className="row">
                      <div className="col-xl-6 col-12">
                        <div className="ingredients-wrap">
                          <h3 className="item-title">
                            <i className="fas fa-list-ul"></i> Sastojci
                          </h3>

                          <ul className="ingredient-list">
                            <li>300ml ulja</li>
                            <li>150ml vruce vode</li>
                            <li>1 prasak za pecivo</li>
                            <li>cca 500g brasna</li>
                            <li>cca 200g secera u prahu</li>
                            <li>1 vanilin secer</li>
                          </ul>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="direction-wrap-layout1">
                    <div className="section-heading heading-dark">
                      <h2 className="item-heading"   data-aos="fade-right">Upustvo za pripremu</h2>
                    </div>
                   
                    <div className="direction-box-layout1"   data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 1</div>
                        <p>
                  
                          Ukljucite rernu na 200 stepeni.
                        </p>
                      </div>
                    </div>
                    <div className="direction-box-layout1"   data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 2</div>
                        <p>
                         
                          Pomesajte vodu i ulje, sipajte prasak za pecivo i promesajte pa dodajte brasno postepeno mesajuci najpre kasikom a zatim i rukom.
                        </p>
                      </div>
                    </div>
                    <div className="direction-box-layout1"   data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 3</div>
                        <p>
                          
                          Testo podelite na 3-4 loptice (ja sam na 2 i dobila sam 16 vecih kiflica, ali mamine male su sladje) pa na pobrasnjenoj dasci najpre rukom oblikujte spljosteni krug a zatim rastanjite oklagijom. Stavite na svaki deo po malo marmelade (ja stavila fenomenalni argentinski sir od dunja) i motajte kiflice koje redjate na pleh sa pek papirom i odmah pecete dok ne porumene. Ako vam se testo lista samo pritisnite prstom tu i tamo; kiflice budu ‘rosave’ kad se ispeku, ali secer to lepo prekrije.
                        </p>
                      </div>
                    </div>
                    <div className="direction-box-layout1"   data-aos="fade-right">
                      <div className="item-content">
                        <div className="serial-number">Korak 4</div>
                        <p>
                        
                          Vruce kiflice valjajte u prah secer pomesan sa vanilinim secerom.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tag-share">
                    <ul>
                      <li>
                      <ul className="inner-share">
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=61554537968449&locale=sr_RS"  target='_blank'>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>

                        <li>
                          <a href="https://www.instagram.com/slatkamagijaa/"  target='_blank'>
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
