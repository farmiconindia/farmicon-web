import React, { useEffect } from "react";
import "./blogPage.scss";
import blogData from "../../store/blogData";
import BlogComp from "../../components/blog/BlogComp";
import AOS from 'aos';

const BlogPage = ({ changeLang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-page-container">
      <span data-aos="fade-up">{!changeLang ? "Blogs" : "ब्लॉग"}</span>

        <div className="blogs" data-aos="fade-left">
          {blogData.map((blog, i) => {
            return <BlogComp blog={blog} i={i} changeLang={changeLang} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
