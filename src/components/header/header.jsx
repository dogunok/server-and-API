import React from 'react';
import Listrepo from './listRepo.jsx';
import logotype from '../../picture/logo.svg';

export default function HeaderWrapper(props){
    return(
        <header className="header">
        <a className="header__logo" href="#">
            <img src={logotype} alt="logotype"/>
        </a>
        <div className="header__repo">
            <span className="header__repo-text">
                    Repository <span className="header__repo-name">Arc</span>
            </span>
            <Listrepo
                list={props.info}
            />
            <svg className="header__toggle-icon" aria-hidden="true" width="12" height="9">
                <path className="header__toggle-icon_arrow" d="M6 7.5L.56 2.08l.88-.89L6 5.74l4.56-4.56.88.89z"></path>
            </svg>
        </div>
    </header>
    )
}