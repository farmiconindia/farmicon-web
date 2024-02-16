import React from "react";
import { Link } from "react-router-dom";
import "./blogComp.scss";

const BlogComp = ({ blog, i, changeLang }) => {
  return (
    <>
      <div className="blog-comp" key={i}>
        <img
          src={
            "https://media.istockphoto.com/id/1296283501/video/young-indian-farmer-talking-on-smartphone-at-field.jpg?s=640x640&k=20&c=c70r74UlGK-3aJhLgF7wNA2tc2LYF044Thoz-CJcgXM="
          }
          alt=""
        />
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
    </>
  );
};

export default BlogComp;
