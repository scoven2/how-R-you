import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const history = useHistory();
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container text-center mb-5">
                {location.pathname !== '/' && (
                    <button
                        className="btn btn-dark mb-3"
                        onClick={() => history.goBack()}
                    >
                        &larr; Go Back
                    </button>
                )}
                <h4>
                    Made With{' '}
                    <span
                        className="emoji"
                        role="img"
                        aria-label="heart"
                        aria-hidden="false"
                    >
                        ❤️
                    </span>{' '}
                    <a href="https://www.github.com/sarsieg">Sarah Siegel</a>, <a href="https://www.github.com/scoven2">Scott Siegel</a>, and <a href="https://www.github.com/StevegSiegel">Steve Siegel</a>
                </h4>
            </div>
        </footer>
    );
};

export default Footer;