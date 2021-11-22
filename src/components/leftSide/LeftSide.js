import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import './LeftSide.scss';

const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am </p>
                    <h1 className="o-font-lg ms-2 o-text-purple"> Prathmesh Diwan</h1>
                </div>
                <p className="text-center text-white">I am a very passionate web developer. I like exploring different web technology related frameworks, so that I can learn to develop things in a different way.My primary focus is customer satisfaction. It is my goal to always deliver the product on time and provide timely service to my respectable customers.</p>
                <SocialList margin />
                <div className="row mb-5 justify-content-center">
                    <a href="https://drive.google.com/file/d/1u8jRnA2L5HjPTxaQJmn5RIar-MnlC0NS/view" className="d-block m-3 text-white o-btn text-center py-2 position-relative">DOWNLOAD CV</a>
                    <a href="http://prathmeshdiwan.me/Portfolio/contact.html" className="d-block m-3 text-white o-btn text-center py-2 position-relative">CONTACT ME</a>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;