import React from 'react';
import '../scss/main.scss';

const Footer = () => {
  return (
    <>
      <footer className="references">
        <div>
          <span className="references__text">Eva Jánošková</span>
          <span className="references__text">
            Projekt Mentoringu ReactGirls | 2022.
          </span>
        </div>
        <div>
          icons from{' '}
          <a className="references__link" href="https://iconmonstr.com/">
            iconmonster
          </a>{' '}
          | pictures from{' '}
          <a className="references__link" href="https://www.maxpixel.net/">
            Max Pixel
          </a>{' '}
          and{' '}
          <a className="references__link" href="https://unsplash.com/">
            Unsplash
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
