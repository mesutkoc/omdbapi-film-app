import React from "react";
import { useNavigate } from 'react-router-dom';
import "./header.scss";

function Header() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/dashboard');

    return (
        <header className="header">
            <div className="logo" onClick={() => handleClick()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
                <div className="title">movielike</div>
            </div>
        </header>
    )
}

export default Header;
