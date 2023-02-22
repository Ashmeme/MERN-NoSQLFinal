import "./profile.css";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Profile() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path)
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      console.log(post._id);
    };
    getPost();
  }, [path]);

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  
  useEffect(() => {
    const fetchPosts = async () => {
      
      const res = await axios.get("/posts" + post._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  
  
  return (
    <div className="settings">
      
      <div className="home">
        <Posts posts={posts} />
      </div>
      <Sidebar />
    </div>
  );
}
