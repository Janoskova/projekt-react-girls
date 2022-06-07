import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="references">
        <div>
          <span className="references__text">
            Eva Jánošková | Projekt Mentoringu ReactGirls | 2022.
          </span>
        </div>
        <div>
          icons from{' '}
          <a className="references__link" href="https://iconmonstr.com/">
            iconmonster{' '}
          </a>
          and{' '}
          <a className="references__link" href="https://freesvg.org/">
            FreeSVG
          </a>{' '}
          | pictures from{' '}
          <a className="references__link" href="https://www.maxpixel.net/">
            Max Pixel
          </a>{' '}
          and{' '}
          <a className="references__link" href="https://unsplash.com/">
            Unsplash
          </a>
          | sounds from{' '}
          <a className="references__link" href="https://freesound.org/">
            Freesound
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
