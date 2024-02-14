mport React from "react";
import { Link } from "react-router-dom";
import "./blogComp.scss";
import image1 from "../../assets/Hydroponics.jpg"
import image2 from "../../assets/organicFarm.jpg"
import image3 from "../../assets/Tomatotips.jpg"
import image4 from "../../assets/grape-cultivation.webp"
import image5 from "../../assets/Dripirri.webp"
import image6 from "../../assets/OnionFarming.jpg"
import image7 from "../../assets/Sugarcane-Farming.jpg"
import image8 from "../../assets/PomergranateFarming.jpg"

const BlogComp = ({ blog, i, changeLang }) => {

  const images = [image1, image2, image3, image4, image5, image6, image7,image8];
  const selectedImage = images[i % images.length];
  return (
    <>
      <div className="blog-comp" key={i}>
        <img style={{width:"318px", height: "179px"}}
          src={selectedImage}
          alt=""
        />
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
    </>
  );
};

export default BlogComp;
