import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const [selected, setSelected] = useState('home');
    // const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);
        switch (pageName) {
            case 'Home':
                navigate('/home');
                break;
            case 'Favorites':
                navigate('/favorites');
                break;
            case 'Watch Later':
                navigate('/watchlater');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/activity')
        .then(response => {
            setActivities(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <nav className="sidebar">
            <ul className="sidebar-nav">
            <li className={selected === 'home' ? 'active-item' : 'sidebar-item'} onClick={() => setPage("home")} >
          <FontAwesomeIcon icon={faFolder} className="mainIcon" />
          <h2>Home</h2>
          <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
        </li>
        <li className={selected === 'favorites' ? 'active-item' : 'sidebar-item'} onClick={() => setPage("favorites")} >
          <FontAwesomeIcon icon={faStar} className="mainIcon" />
          <h2>Favorites</h2>
          <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
        </li>
        <li className={selected === 'watchlater' ? 'active-item' : 'sidebar-item'} onClick={() => setPage("watchlater")} >
          <FontAwesomeIcon icon={faClock} className="mainIcon" />
          <h2>Watch Later</h2>
          <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
        </li>
            </ul>
            <div className="activities">
            <h1>Latest Activities</h1>
            {showActivities && (
                activities.slice(0, 10).map(activity => (
                    <Activity userUsername="Bob" title="SomeMovie" date="11/13/2023"/>
                ))
            )}
            </div>
        </nav>
    )
}

export default SideBar;