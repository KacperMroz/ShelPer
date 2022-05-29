import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faPhone, faComment, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../pages/Post.css";

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
        <div>
          <FontAwesomeIcon icon={faPhone} onClick={() => handleClick(phone, setPhone)} />
          {phone && <span>{props.dataInfo.phone_number}</span>}
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} onClick={() => handleClick(message, setMessage)} />
          {message && <span>{props.dataInfo.email}</span>}
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} onClick={() => handleClick(website, setWebsite)} />
          {website && <span>{props.dataInfo.phone_number}</span>}
        </div>
        <Link to={`${pathname}/appointments`} id="calendar">
          Kalendarz wizyt
        </Link>
      </div>
    );
};

export default Info;
