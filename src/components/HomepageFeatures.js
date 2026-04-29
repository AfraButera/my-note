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
       數位生成、模擬畫布紋理 <br />
       200 x 200 px <br />
       這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。<br />
       畫面透過冷峻的色調與粗獷的筆觸，重構了山岳的雄偉與孤寂。在極小的畫幅中，利用光影對比刻畫出山脈的稜線，試圖在數位空間裡重現傳統風景畫的壯麗感。
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
      作品捕捉了魚群穿梭於水底的動態瞬間，色彩交織出如紅寶石般的躍動感。演算法生成的有機曲線與魚的生命力相互呼應，展現出「萬物自得」的東方美學哲思。
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
      數位生成、計算機藝術 <br />
      200 x 200 px <br />
      這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。<br />
      創作者將洶湧的海象高度提煉為兩道純粹的波浪紋線，透過極簡的構圖探討自然元素的符號化。這兩道曲線不僅是流體運動的軌跡，也象徵了數位時代下理性邏輯與感性詩意間的平衡。
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
