import React from 'react';
import './Header.css';

import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt="Tech Slack"
                    src="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=cJQrJjzklzYAX_P0Dyc&_nc_ht=scontent.fbeg7-1.fna&oh=714f09a79673c2c923b2bea66e52039d&oe=5F737D20"
                    //alt={user?.displayName}
                    //src={user?.photoUrl}
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Tech Slack" type="text"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
