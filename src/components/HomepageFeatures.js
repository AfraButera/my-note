import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '歡迎踏踏～這邊你就當欣賞三張壁畫',
    Svg: require('../../static/img/noteweb-mountain.svg').default,
    description: (
      <>
        山   民國115年 Afra請Gemini做的sng   200 Ⅹ 200px
      </>
    ),
  },
  {
    title: '筆記持續建置中......',
    Svg: require('../../static/img/noteweb-fish.svg').default,
    description: (
      <>
        魚悅   民國115年 Afra請Gemini做的sng 200 Ⅹ 200px
      </>
    ),
  },
  {
    title: '你也可以去上方按鈕跟我Say Hello!',
    Svg: require('../../static/img/noteweb-banner.svg').default,
    description: (
      <>
       波浪   民國115年 Afra請Gemini做的sng 200 Ⅹ 200px
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
