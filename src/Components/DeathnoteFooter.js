import React from 'react';
import '../Styles/component/deathnoteFooter.scss';

const DeathnoteFooter = () => {
    return (
        <div className="Footer">
            <div className="FooterMenu">
                <a
                    href="/deathnote/function"
                    style={{
                        textDecoration: 'none',
                        // width: '100%',
                        color: 'white',
                    }}
                >
                    <div className="FooterMenuItem">
                        Powered By{' '}
                        <span style={{ color: '#FF0061', fontWeight: 'bold' }}>
                            Deathnote(x)
                        </span>
                    </div>
                </a>
                <div className="FooterMenuItem">English</div>
                <a
                    className="FooterMenuItem"
                    href="mailto:donghoon149@gmail.com"
                    style={{ textDecoration: 'none', color: '#FF0061' }}
                >
                    <div>문의/피드백</div>
                </a>
            </div>
        </div>
    );
};

export default DeathnoteFooter;
