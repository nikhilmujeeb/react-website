import React, { useState } from "react";
import "./Blog.css"; // Assuming you have a CSS file for styling

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 10 Destinations to Visit in 2024",
      author: "John Doe",
      date: "September 5, 2024",
      content:
        "Discover the best places to visit in 2024, from stunning beaches to vibrant cities. Explore the world’s top destinations and plan your next adventure...",
    },
    {
      id: 2,
      title: "Travel Tips for a Safe Journey",
      author: "Jane Smith",
      date: "August 20, 2024",
      content:
        "Traveling can be an amazing experience, but it's important to stay safe. Here are some essential tips to ensure a secure and enjoyable trip...",
    },
    {
      id: 3,
      title: "How to Travel on a Budget",
      author: "Emily Johnson",
      date: "July 15, 2024",
      content:
        "Traveling on a budget doesn’t mean missing out on amazing experiences. Learn how to make the most of your trip without breaking the bank...",
    },
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.author && newBlog.date && newBlog.content) {
      const newBlogPost = { ...newBlog, id: blogs.length + 1 };
      setBlogs([newBlogPost, ...blogs]);
      setNewBlog({ title: "", author: "", date: "", content: "" });
    }
  };

  return (
    <div className="blog-container">
      <h2>Travel Blog</h2>
      <form onSubmit={handleAddBlog} className="blog-form">
        <input
          type="text"
          name="title"
          value={newBlog.title}
          onChange={handleInputChange}
          placeholder="Blog Title"
          required
        />
        <input
          type="text"
          name="author"
          value={newBlog.author}
          onChange={handleInputChange}
          placeholder="Author Name"
          required
        />
        <input
          type="date"
          name="date"
          value={newBlog.date}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="content"
          value={newBlog.content}
          onChange={handleInputChange}
          placeholder="Blog Content"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="add-blog-button">
          Add Blog
        </button>
      </form>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <h3>{blog.title}</h3>
            <p>
              <em>
                By {blog.author} on {blog.date}
              </em>
            </p>
            <p>{blog.content}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
