import axios from "axios";
import "./navigation.css";
import Activity from "../Activity";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faStar,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);
    switch (pageName) {
      case "home":
        navigate("/");
        break;
      case "favorites":
        navigate("/favorites");
        break;
      case "watchlist":
        navigate("/watchlist");
        break;
      default:
        navigate("/");
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/activity", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => {
        console.log(res.data);
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={small ? "sidebar small" : "sidebar"}>
      <div className="sidebar-header">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="arrow"
          onClick={() => setSmall(!small)}
        />
      </div>
      <div className="sidebar-content">
        <div
          className={
            selected === "home" ? "sidebar-item selected" : "sidebar-item"
          }
          onClick={() => setPage("home")}
        >
          <FontAwesomeIcon icon={faFolder} className="icon" />
          <p>Home</p>
        </div>
        <div
          className={
            selected === "favorites" ? "sidebar-item selected" : "sidebar-item"
          }
          onClick={() => setPage("favorites")}
        >
          <FontAwesomeIcon icon={faStar} className="icon" />
          <p>Favorites</p>
        </div>
        <div
          className={
            selected === "watchlist" ? "sidebar-item selected" : "sidebar-item"
          }
          onClick={() => setPage("watchlist")}
        >
          <FontAwesomeIcon icon={faClock} className="icon" />
          <p>Watchlist</p>
        </div>
        <div
          className="sidebar-item"
          onClick={() => setShowActivities(!showActivities)}
        >
          {/* <FontAwesomeIcon icon={faStar} className="icon" /> */}
          <p>Latest Activities</p>
        </div>
        {showActivities && (
          <ul className="activities">
            {activities.map((activity) => (
              <Activity
                username={activity.user.username}
                title={activity.title.title}
                list={activity.activityType}
                date={activity.updatedAt}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
