import React, { useEffect } from "react";
import "./blogPage.scss";
import blogData from "../../store/blogData";
import BlogComp from "../../components/blog/BlogComp";

const BlogPage = ({ changeLang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="blog-page">
      <div className="blog-page-container">
        <span>All Blogs</span>

        <div className="blogs">
          {blogData.map((blog, i) => {
            return <BlogComp blog={blog} i={i} changeLang={changeLang} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
