import React from 'react';
import { activities } from '../data';
import Activity from '../components/Activity';
import WaveIcon from '../components/WaveIcon';

const Home = () => {
  return (
    <>
      <section className="storm">
        <h1 className="storm__heading">Zámořské objevy</h1>
        <WaveIcon />
      </section>
      <section className="activities">
        <h2 className="activities__heading">Zvol si aktivitu</h2>
        {activities.map((activity) => {
          return (
            <Activity
              key={activity.id}
              heading={activity.heading}
              path={activity.path}
              className={activity.className}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;
