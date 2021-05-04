import React from "react";
import "./styles/profile.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className="container profile-container">
            <div className="profile">
                <img
                    src={user.photoURL}
                    alt="profile pic"
                    className="profile-pic"
                />
                <div className="description">
                    <h1>{user.displayName}</h1>
                    <p class="email-profile">{user.email}</p>
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
                        <p class="email-profile">{user.email}</p>
                    </div>
                    <div className="social-contact">
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-github"></i>
                    </div>
                </div>

                <div className="work">
                    <p>Work</p>
                    <p>Frotend developer</p>
                </div>
            </div>
            .
        </div>
    );
};

export default Profile;
