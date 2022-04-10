import React from 'react';
import { SignUpFormShelter } from '../Login/SignUpShelter';

import Background from '../../img/background-login.png';

export const SignUpShelter = () => {
    return (
        <div>
            <img src={Background} alt="background" />
            <SignUpFormShelter text={"Przejdź dalej"}  navigate={"/sign-up-shelter"}/>
        </div>
    );
};
