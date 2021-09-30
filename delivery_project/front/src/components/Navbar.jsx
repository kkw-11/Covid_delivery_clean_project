import { Link } from 'react-router-dom';
import {userEffect, userState} from 'react';


export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="/" className="nav-logo" >
                        <img title="클린한끼" src="https://cdn.discordapp.com/attachments/892594735213076481/892952522304684042/61040639---------------.jpg"
                        alt="클린한끼 로고" style={{width: 100, height: 100}}></img>
                        <span>클린한끼</span>
                    </a>
                </div>
                <span className="menu">메뉴판</span>
                {/* toggle bar 만들예정 */}
            </nav>
        </header>
    )
}

