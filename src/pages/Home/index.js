import React from 'react';

const Home = () => {
  return (
    <>
      <div className="storm">
        <h1 className="storm__heading">Zámořské objevy</h1>
        <svg
          className="storm__boat"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 319"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,160C672,160,768,224,864,224C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Home;
