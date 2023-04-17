import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogData from "../../store/blogData";
import "./blog.scss";

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === Number(id));
  return (
    <div className="blog-container">
      <span>{blog.title}</span>
      <div className="blog">
        <img src={blog.thumbnail} alt={blog.title} />
        <div className="desc">
          <p>{blog.description}</p>
          <div className="blog-more">
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
