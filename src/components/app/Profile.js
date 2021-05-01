import React from "react";
import "./styles/profile.css";
import profilePic from "../../assets/profile.jpg";

const Profile = () => {
    return (
        <div className="container profile-container">
            <div className="profile">
                <img
                    src={profilePic}
                    alt="profile pic"
                    className="profile-pic"
                />
                <div className="description">
                    <h1>Aydin Berenice</h1>
                    <p>Estoy toda hermosa</p>
                    <button className="btn btn-primary btn-follow">
                        Follow
                    </button>
                </div>

                <div className="profile-info">
                    <div className="location">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>Londres</p>
                    </div>
                    <div className="birthday">
                        <i class="bi bi-calendar-date-fill"></i>
                        <p>05-nov-2001</p>
                    </div>
                    <div className="email">
                        <i class="bi bi-envelope-fill"></i>
                        <p>aydin@hermosa.com</p>
                    </div>
                    <div className="social-contact">
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-github"></i>
                    </div>
                </div>

                <div className="work">
                    <p>Work</p>
                    <p>Python backend developer</p>
                </div>
            </div>
            .
        </div>
    );
};

export default Profile;
