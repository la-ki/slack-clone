import React from 'react';
import './Header.css';

import {Avatar} from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoUrl}
                />
            </div>
            <div className="header__search">

            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
