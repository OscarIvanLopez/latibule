import React from "react";
import moment from "moment";
import postImage from "../../assets/temp/react.png";
import postProfileImage from "../../assets/profile.jpg";
import SidebarLeft from "../../components/layout/SidebarLeft.js";
import "./styles/home.css";

const Home = () => {
    // BORRAR:
    const date = new Date();

    return (
        <div className="container home-container">
            <SidebarLeft />
            <div className="post post-card">
                <img src={postImage} className="post-img" alt="post thubnail" />
                <div className="post-writter">
                    <div className="flex-center">
                        <img src={postProfileImage} alt="writter" />
                        <p>written by Aydin</p>
                    </div>

                    <div className="flex-center">
                        <p>{moment(date).format("MM-DD-YYYY")}</p>
                    </div>
                </div>

                <div className="post-info">
                    <p className="post-title">Learn all the react hooks!👨‍💻🤖</p>
                    <p className="post-description">
                        In this post we talk about react hooks in a deeply way
                    </p>
                    <div className="post-tags">
                        <div className="tag">#react</div>
                        <div className="tag">#javascript</div>
                        <div className="tag">#webDevelopment</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
