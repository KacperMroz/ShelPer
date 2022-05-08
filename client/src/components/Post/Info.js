import React from 'react';
import { faPhone, faComment, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Info = () => {
    const [phone, setPhone] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [website, setWebsite] = React.useState(false);

    const handleClick = (type, setType) => {
        setType(!type);
    }

    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faPhone} onClick={() => handleClick(phone, setPhone)}/>
                {phone && <span>phone number</span>}
            </div>
            <div>
                <FontAwesomeIcon icon={faComment} onClick={() => handleClick(message, setMessage)}/>
                {message && <span>email</span>}
            </div>
            <div>
                <FontAwesomeIcon icon={faGlobe} onClick={() => handleClick(website, setWebsite)}/>
                {website && <span>website</span>}
            </div>
            <div>
                Kalendarz wizyt
            </div>
        </div>
    );
};

export default Info;
