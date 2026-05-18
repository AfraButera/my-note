import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '《不知名山岳研究》 (Study of an Unknown Mountain)',
    Svg: require('../../static/img/noteweb-mountain.svg').default,
    description: (
      <>
       Afra(b. 199X, Taiwan) <br />
       2026年（民國115年）<br />
       數位生成、混合媒介習作 <br />
       200 x 200 px <br />
       這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。<br />
       冷峻色調與粗獷筆觸，重構山岳的雄偉與孤寂。
</>
    ),
  },
  {
    title: '《魚悅》(Joy of the Fin: Golden Ripple)',
    Svg: require('../../static/img/noteweb-fish.svg').default,
    description: (
      <>
      Afra(b. 199X, Taiwan) <br />
      2026年（民國115年）<br />
      數位生成、混合媒介習作 <br />
      200 x 200 px <br />
      這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。<br />
      色彩交織出躍動感，展現「萬物自得」的東方美學。
</>
    ),
  },
  {
    title: '《波浪》(The Raging Blue: Frozen Motion)',
    Svg: require('../../static/img/noteweb-banner.svg').default,
    description: (
      <>
      Afra(b. 199X, Taiwan) <br />
      2026年（民國115年）<br />
      數位生成、混合媒介習作 <br />
      200 x 200 px <br />
      這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。<br />
      兩道純粹的波浪紋線，探討自然元素的符號化。
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
