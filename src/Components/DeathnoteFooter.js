import React from 'react';
import '../Styles/component/deathnoteFooter.scss';

const DeathnoteFooter = () => {
    return (
        <footer className="DeathnoteFooterWrap">
            <div className="DeathnoteFooter">
                <div className="DeathnoteFooterTop">
                    <span className="DeathnoteFooterTopTitle">
                        Privacy Policy
                    </span>
                    <span className="DeathnoteFooterTopDescription">
                        © 2021 Deathnote.GG isn’t endorsed by Riot Games and
                        doesn’t reflect the views or opinions of Riot Games or
                        anyone officially involved in producing or managing
                        League of Legends. League of Legends and Riot Games are
                        trademarks or registered trademarks of Riot Games, Inc.
                        League of Legends © Riot Games, Inc.
                    </span>
                </div>
                <div className="DeathnoteFooterBottom"></div>
            </div>
        </footer>

        // <div className="Footer">
        //     <div className="FooterMenu">
        //         <a
        //             href="/deathnote/function"
        //             style={{
        //                 textDecoration: 'none',
        //                 // width: '100%',
        //                 color: 'black',
        //             }}
        //         >
        //             <div className="FooterMenuItem">
        //                 Powered By{' '}
        //                 <span style={{ color: '#FF0061', fontWeight: 'bold' }}>
        //                     Deathnote(x)
        //                 </span>
        //             </div>
        //         </a>
        //         <div className="FooterMenuItem">English</div>
        //         <a
        //             className="FooterMenuItem"
        //             href="mailto:donghoon149@gmail.com"
        //             style={{ textDecoration: 'none', color: '#FF0061' }}
        //         >
        //             <div>문의/피드백</div>
        //         </a>
        //     </div>
        // </div>
    );
};

export default DeathnoteFooter;
