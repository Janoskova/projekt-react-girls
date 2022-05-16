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
      <section className="welcome">
        <h2 className="welcome__heading">Vítej dobrodruhu!</h2>
        <p className="welcome__text">
          Stojíš na prahu věku, jenž otřásá samotnými kořeny středověkého světa.
          Doby, v níž pád meteoritu není znamením a trestem božím, ale
          přírodními zákony řízený úkaz, který je nyní stejně nevyzpytatelný
          jako samo moře. Doby, kdy země přestala být středem vesmíru a
          středomoří světa. Doby, kdy nenasytnost člověka začne poutat přírodu
          okovy rozumu a sežehne kdysi mocné americké civilizace, aby z jejich z
          popela stvořila nový řád, který nakonec ohrozí samu existenci člověka
          v jeho nově vydobytém světě. Odvážíš se na cestu, která zpochybní tvé
          jistoty (znalosti)? Cestu, jež hrozí stejným zoufalstvím, které šlo
          vidět v pohledu dávných dobrodruhů při obhlížení tenčících se zásob na
          širém moři. Budou si tě tyto stránky pamatovat jako slavného
          dobyvatele a pokořitele mocných úkolů nebo se přidáš k bezpočtu
          suchozemských krys, jejichž jména plní zapomnění lidstva?
        </p>
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
