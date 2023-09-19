import React, { useEffect } from "react";
import zigzag from "../../assets/zigzag-arrow.png";
import ourService from "../../assets/services.png";
import googlePlay from "../../assets/google-play.png";
import blog1 from "../../assets/blog-image-1.png";
import blog2 from "../../assets/blog-image-2.png";
import blog3 from "../../assets/blog-image-3.png";
import upArrow from "../../assets/up-arrow.png";
import mobileHome from "../../assets/home-mobile.webp";
import liningHome from "../../assets/lining.png";
import Hero from "../../assets/Hero.png";
import HeroMob from "../../assets/Hero_mob.png";
import bg from "../../assets/Group (1).png";
import "./home.scss";
import { Link } from "react-router-dom";
import blogData from "../../store/blogData";
import ReactPlayer from 'react-player'
import HeroVid from '../../assets/HeroNew.mp4'

const Home = ({ changeLang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="home">
        <section className="sec-1" id="sec-1">
          {/* <img src={zigzag} alt="" draggable="false" />
          <div className="intro">
            <div className="left">
              <span className="span-1">Increase your</span>
              <span className="span-2">YIELD WITH</span>
            </div>
            <span>FARMICON</span>
          </div>
          <div className="button-and-arrow">
            <a href="#sec-2">
              <span>Get Started</span>
            </a>
          </div> */}
          <div className="left">
            {!changeLang ? (
              <div className="content">
                <p className="inc">Increase your</p>
                <p>Yield with</p>
                <span className="gradient">FARMICON</span>
                <a href="#">Download App</a>
              </div>
            ) : (
              <div className="content">
                <p className="hindi">बुद्धिमान समाधानों के साथ कृषि को बदलना</p>
                <p className="gradient hindi">दक्षता, लाभप्रदता और स्थिरता</p>
                <a href="#">
                  {!changeLang ? "Download App" : "ऐप डाउनलोड करें"}
                </a>
              </div>
            )}
          </div>
          <div className="random">
            <div className="white"></div>
            {/* <img loading="lazy" src={mobileHome} draggable="false" alt="" /> */}

            {/* <img src={liningHome} loading="lazy" draggable="false" alt="" /> */}
            {/* <img src={Hero} loading="lazy" draggable="false" alt="" /> */}
            <div className="video">
            <ReactPlayer   url={HeroVid} loop={true} playing={true} volume={0}/>
            </div>
          </div>
        </section>

        <section className="sec-2" id="sec-2">
          <div className="container">
            {/* translation */}

            {!changeLang ? (
              <div className="left-box">
                <span>Our Services</span>
                <p>
                  We are single click platform where farmers can get the
                  guidance, market reach, all the essential services for crops
                  and veggies, solutions for crop disease using the{" "}
                  <em> Mobility Integrated Artificial Intelligence </em> model,
                  weather information to save the crops, account management etc.
                </p>
                <Link to="/services">All Services</Link>
              </div>
            ) : (
              <div className="left-box">
                <span>हमारी सेवाएँ</span>
                <p>
                  हम सिंगल क्लिक प्लेटफॉर्म हैं जहां किसान मार्गदर्शन प्राप्त कर
                  सकते हैं, बाजार पहुंच, फसलों और सब्जियों के लिए सभी आवश्यक
                  सेवाएं, फसल रोग के लिए समाधान का उपयोग कर{" "}
                  <em> गतिशीलता एकीकृत आर्टिफिशियल इंटेलिजेंस</em> नमूना, फसलों
                  को बचाने के लिए मौसम की जानकारी, खाता प्रबंधन आदि।
                </p>
                <Link to="/services">सभी सेवाएं</Link>
              </div>
            )}
            <div className="right-box">
              <img src={ourService} alt="" draggable="false" />
            </div>
          </div>
        </section>
        <section className="sec-3" id="sec-3">
          <div className="container">
            {!changeLang ? (
              <div className="left-box">
                <span>
                  Do More<span> on the app</span>
                </span>
                <p>We have some exclusive features packed in our application</p>
              </div>
            ) : (
              <div className="left-box">
                <span>
                  ऐप पर<span> अधिक करें</span>
                </span>
                <p>हमारे एप्लिकेशन में कुछ विशेषताएं भरी हुई हैं</p>
              </div>
            )}

            <div className="right-box">
              <div className="logo"></div>
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </section>
        <section className="sec-5">
          <div className="container">
            <div className="content">
              <div>
                <div className="name-tag">
                  {!changeLang ? <p>Name:</p> : <p>नाम:</p>}
                  <input></input>
                </div>
                <div className="Whatsapp-tag">
                  {!changeLang ? <p>WhatsApp No.:</p> : <p>व्हाट्सएप नंबर:</p>}
                  <input></input>
                </div>
              </div>
              <div>
                <div className="Email">
                  {!changeLang ? <p>E-mail:</p> : <p>ईमेल:</p>}
                  <input></input>
                </div>
                <div className="msg-tag">
                {!changeLang ? <p>Your Message:</p> : <p>आपका संदेश:</p>}
                  <input className="message-input"></input>
                </div>
              </div>
            </div>
            <div className="submit">
            {!changeLang ? <a href="">Submit</a>: <a href="">जमा करना</a>}
            </div>
          </div>
        </section>
        <section className="sec-4" id="sec-4">
          <a href="#sec-1">
            <div className="up">
              <img src={upArrow} alt="" draggable="false" />
            </div>
          </a>
          <div className="container">
            <span>{!changeLang ? "Blogs" : "ब्लॉग"}</span>
            <div className="blogs">
              {blogData.slice(0, 3).map((blog, i) => {
                return (
                  <div className="blog" key={i}>
                    <img src={blog2} alt="" />
                    <div className="desc">
                      <p>{!changeLang ? blog.title : blog?.titleHin}</p>
                      <div className="blog-more">
                        <Link to={`/blogs/${blog.id}`}>
                          {!changeLang ? "Read More" : "और पढ़ें"}
                        </Link>
                        <span>{!changeLang ? "July 2021" : "जुलाई 2021"} </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link style={{ color: "gray" }} to="/blogs">
              {!changeLang ? "Show All Blogs" : "ब्लॉग"}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
