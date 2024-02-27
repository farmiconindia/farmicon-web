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
import DroneHero from "../../assets/DroneHero.png";
import HeroMob from "../../assets/Hero_mob.png";
import bg from "../../assets/Group (1).png";
import "./home.scss";
import { Link } from "react-router-dom";
import blogData from "../../store/blogData";
import ReactPlayer from 'react-player';
import HeroVid from '../../assets/HeroNew_adobe.gif';
import image1 from '../../assets/Hydroponics.jpg';
import image2 from '../../assets/organicFarm.jpg';
import image3 from '../../assets/Tomatotips.jpg';
import recognition1 from '../../assets/iHub.png';
import recognition2 from '../../assets/Meity.png';
import recognition3 from '../../assets/startupIndia.png';
import recognition4 from '../../assets/tides.png';
import AOS from 'aos';



const Home = ({i, changeLang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);
  

  const images = [image1, image2, image3];
  // const selectedImage = images[i % images.length];

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

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
              <div className="content" data-aos="fade-right">
                <p className="inc" >Increase your</p>
                <p>Yield with</p>
                <span className="gradient">FARMICON</span>
                <a className="downloadApp" href="#">Download App</a>
              </div>
            ) : (
              <div className="content" data-aos="fade-right">
                <p className="hindi">बुद्धिमान समाधानों के साथ कृषि को बदलना</p>
                <p className="gradient hindi">दक्षता, लाभप्रदता और स्थिरता</p>
                <a className="downloadApp" href="#">
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
            <div className="video" data-aos="fade-up">
            {/* <ReactPlayer pip={false}  url={HeroVid} loop={true} playing={true} volume={0}/> */}
            <img src={HeroVid} loop={true} playing={true} volume={0} loading="lazy" alt="Drone GIF"
             style={{ width: '650px', height: 'auto' }} />
            </div>
          </div>
        </section>

        <section className="sec-2" id="sec-2">
          <div className="container">
            {/* translation */}

            {!changeLang ? (
              <div className="left-box" >
                <span data-aos="fade-up" >Our Services</span>
                {/* <h1 data-aos="fade-right">hello</h1> */}
                <p data-aos="fade-up">
                  We are single click platform where farmers can get the
                  guidance, market reach, all the essential services for crops
                  and veggies, solutions for crop disease using the{" "}
                  <em> Mobility Integrated Artificial Intelligence </em> model,
                  weather information to save the crops, account management etc.
                </p>
                <div className="allServices" data-aos="fade-up">
                <Link to="/services">All Services</Link>
                </div>

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
                <div className="allServices">
                <Link to="/services">सभी सेवाएं</Link>
                </div>

              </div>
            )}
            <div className="right-box" data-aos="fade-left">
              <img src={ourService} alt="" draggable="false" />
            </div>
          </div>
        </section>

        <section className="sec-6" id="sec-6">
          <div className="container">
            {/* translation */}

            {!changeLang ? (
              <div className="left-box">
                <span data-aos="fade-up">Our Product</span>
                <span className="heading" data-aos="fade-up">Agricultutral Drone</span>
                <p data-aos="fade-up">
                Introducing our game-changing <em>Agricultural Spray Drone</em> – a revolution in farming. This high-tech drone offers precision and efficiency like never before. Imagine a future where precision meets efficiency, where every drop of pesticide or fertilizer is applied with pinpoint accuracy. It swiftly covers large areas, reducing labor costs while ensuring precise pesticide and fertilizer application. The Agricultural Spray Drone is not just a product; it's a partner in your farm's success story. Join the agricultural revolution today and experience the future of farming firsthand.
                </p>
                <Link to="/product">Know More</Link>
              </div>
            ) : (
              <div className="left-box">
                <span>हमारे उत्पाद</span>
                <p>
                पेश है हमारे गेम-चेंजिंग <em>एग्रीकल्चरल स्प्रे ड्रोन</em> - खेती में एक क्रांति। यह हाई-टेक ड्रोन पहले जैसी सटीकता और दक्षता प्रदान करता है। ऐसे भविष्य की कल्पना करें जहां सटीकता दक्षता से मिलती है, जहां कीटनाशक या उर्वरक की हर बूंद को सटीक सटीकता के साथ लागू किया जाता है। यह तेजी से बड़े क्षेत्रों को कवर करता है, श्रम लागत को कम करता है और सटीक कीटनाशक और उर्वरक अनुप्रयोग सुनिश्चित करता है। कृषि स्प्रे ड्रोन सिर्फ एक उत्पाद नहीं है; यह आपके खेत की सफलता की कहानी में भागीदार है। आज ही कृषि क्रांति में शामिल हों और खेती के भविष्य का प्रत्यक्ष अनुभव लें।
                </p>
                <Link to="">और जानिए</Link>
              </div>
            )}
            <div className="right-box" data-aos="fade-left">
              <img src={DroneHero} alt="" draggable="false" />
            </div>
          </div>
            <button  className="buyNow" data-aos="fade-up" >BUY NOW</button>
        </section>
        
        <section className="sec-3" id="sec-3">
          <div className="container">
            {!changeLang ? (
              <div className="left-box" data-aos="fade-right">
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

            <div className="right-box" data-aos="fade-left">
              <div className="logo"></div>
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </section>
        
        <section className="sec-4" id="sec-4">
          <div className="container">
            <span data-aos="fade-up">{!changeLang ? "Blogs" : "ब्लॉग"}</span>
            <div className="blogs">
              {blogData.slice(0, 3).map((blog, i) => {
                const selectedImage = images[i % images.length];
                return (
                  <div className="blog" data-aos="flip-left" key={i}>
                    <img style={{width: "346px", height: "235px"}} src={selectedImage} alt="" />
                    <div className="desc">
                      <p>{!changeLang ? blog.title : blog?.titleHin}</p>
                      <div className="blog-more">
                        <Link to={`/blogs/${blog.id}`}>
                          {!changeLang ? "Read More" : "और पढ़ें"}
                        </Link>
                        <span>{!changeLang ? "February 2024" : "फ़रवरी 2024"} </span>
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

        <section className="sec-7">
      <div className="container">
      <span className="recognition-heading" data-aos="fade-up">Recognitions</span>
        <div className="recognition-images" data-aos="fade-right">

        <div className="recognition-item">
            <img src={recognition4} alt="Recognition 4" />
            <p>TIDES Business Incubator <p> IIT Roorkee</p>  </p>
           
          </div>
         
          <div className="recognition-item">
            <img src={recognition2} alt="Recognition 2" />
            <p>MeitY Startup Hub</p>
          </div>
          <div className="recognition-item">
            <img src={recognition3} alt="Recognition 3" />
            <p>Startup India</p>
          </div>
          <div className="recognition-item">
            <img src={recognition1} alt="Recognition 1" />
            <p>iHub Anubhuti</p>
          </div>
        </div>
        {/* href="#sec-1" */}
        {/* <a className="arrow" href="#" onClick={scrollToTop}>
          <div className="up">
            <img className="upArrow" src={upArrow} alt="" draggable="false" />
          </div>
        </a> */}
      </div>
    </section>

    <section className="sec-5">
  <div className="container">
    <div className="content" data-aos="fade-up">
      <form
        action="https://formspree.io/f/xbjngblj"
        method="POST"
        className="content"
      >
        <div className="half">
          <div className="name-tag">
            {!changeLang ? <p style={{ marginBottom: "10px" }} >Name:</p> : <p style={{ marginBottom: "10px" }}  >नाम:</p>}
            <input
              type="text"
              name="username"
              placeholder={!changeLang ? "Username" : "उपयोगकर्ता नाम"}
              autoComplete="off"
              required
            />
          </div>
          <div className="Whatsapp-tag">
            {!changeLang ? <p style={{ marginBottom: "10px" }}>WhatsApp No.:</p> : <p style={{ marginBottom: "10px" }}>व्हाट्सएप नंबर:</p>}
            <input
              type="text"
              name="whatsapp"
              placeholder={!changeLang ? "WhatsApp No." : "व्हाट्सएप नंबर"}
              autoComplete="off"
              required
            />
          </div>
          <div className="Email">
            {!changeLang ? <p style={{ marginBottom: "10px" }}>E-mail:</p> : <p style={{ marginBottom: "10px" }}>ईमेल:</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="half">
          <div className="msg-tag">
            {!changeLang ? <p style={{ marginBottom: "10px" }}>Your Message:</p> : <p style={{ marginBottom: "10px" }}>आपका संदेश:</p>}
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="message-input"
              placeholder={!changeLang ? "Your Message" : "आपका संदेश"}
              autoComplete="off"
              required
              
            ></textarea>
          </div>
          <div className="submit">
            {!changeLang ? (
              <button type="submit" style={{ cursor: "pointer", width: "200px", height: "40px" , marginBottom: "140px" }}>
                Submit
              </button>
            ) : (
              <button type="submit">जमा करना</button>
            )}
          </div>
        </div>
      </form>
    </div>
  </div>
</section>


      </div>
    </>
  );
};

export default Home;
