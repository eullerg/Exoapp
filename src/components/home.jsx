import React from "react";
import { Link } from "react-router-dom";


const home = () => {
    return(
        <div className="home wrapper">
            <div className="title-home">
                <h1>
                    <span className="title">
                        J O U R N E Y &nbsp;&nbsp; T O  &nbsp;&nbsp; T H E &nbsp;&nbsp; S T A R S : &nbsp;&nbsp;A &nbsp;&nbsp; C O S M I C &nbsp;&nbsp; A D V E N T U R E
                    </span>
                    <span className="subtitle">BEGINS!</span>
                </h1>
                <p>
                Yearning for the <strong>cosmos?</strong> Dive into outer space with unwavering commitment. <strong>Breathe deep, buckle up, and brace for a journey that redefines existence.</strong>

Close your eyes; feel electrifying anticipation course like <strong>stardust</strong>. This isn't just adventure; it's a <strong>cosmic odyssey</strong>, breaking imagination's bounds, propelling you into the universe's heart.

As we break free from Earth's grasp, <strong>exhilaration surges</strong>, the universe beckons. Traverse the celestial expanse, witness vistas <strong>defying earthly words</strong>, carried toward the unknown.

Behold! An <strong>alien world</strong> unfolds—a marvel beyond words.

Transcend terrestrial limits, <strong>embrace</strong> this journey, <strong>touch the stars</strong>, and celebrate the indomitable spirit yearning for the <strong>extraordinary</strong>.
                </p>
            </div>
            <div className="button-explore">
                <Link to="/destination">
                    <div className="btn">
                        <span>E X P L O R E</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default home;