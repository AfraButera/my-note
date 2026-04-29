import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'This is a mountain',
    Svg: require('../../static/img/noteweb-mountain.svg').default,
    description: (
      <>
        歡迎踏踏～這邊你就當欣賞三張壁畫XDD
      </>
    ),
  },
  {
    title: 'There have a fish',
    Svg: require('../../static/img/noteweb-fish.svg').default,
    description: (
      <>
        筆記持續建置中......
      </>
    ),
  },
  {
    title: 'This is a ....... I forgot it.',
    Svg: require('../../static/img/noteweb-banner.svg').default,
    description: (
      <>
       你也可以去上方按鈕跟我Say Hello!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
