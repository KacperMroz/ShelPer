import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faPhone, faComment, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../pages/Post.css";
import ReactTooltip from "react-tooltip";

const Info = (props) => {
    const [phone, setPhone] = useState(false);
    const [message, setMessage] = useState(false);
    const [website, setWebsite] = useState(false);
    const { pathname } = useLocation();

    const handleClick = (type, setType) => {
        setType(!type);
    }

    return (
      <div className="post-last-info">
          <a data-tip data-for='phone'><FontAwesomeIcon icon={faPhone} onClick={() => handleClick(phone, setPhone)} /></a>
          <ReactTooltip id="phone" className='extraClass' delayHide={200} effect='solid' type="error">
              <span>{props.dataInfo.phone_number}</span>
          </ReactTooltip>

          <a data-tip data-for='email'><FontAwesomeIcon icon={faComment} onClick={() => handleClick(message, setMessage)} /></a>
          <ReactTooltip id="email" className='extraClass' delayHide={200} effect='solid' type="error">
              <span>{props.dataInfo.email}</span>
          </ReactTooltip>

          <a data-tip data-for='website'><FontAwesomeIcon icon={faGlobe} onClick={() => handleClick(website, setWebsite)} /></a>
          <ReactTooltip id="website" className='extraClass' delayHide={200} effect='solid' type="error">
              <span>{props.dataInfo.web_page}</span>
          </ReactTooltip>
        <Link to={`${pathname}/appointments`} id="calendar">
          Kalendarz wizyt
        </Link>
      </div>
    );
};

export default Info;
