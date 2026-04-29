import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '歡迎踏踏～這邊你就當欣賞三張壁畫',
    Svg: require('../../static/img/noteweb-mountain.svg').default,
    description: (
      <>
       《不知名山岳研究》 (Study of an Unknown Mountain)

       Afra(b. 199X, Taiwan)

       2026年（民國115年）

       數位生成、模擬畫布紋理
       
       200 x 200 px

       這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。畫面透過冷峻的色調與粗獷的筆觸，重構了山岳的雄偉與孤寂。在極小的畫幅中，利用光影對比刻畫出山脈的稜線，試圖在數位空間裡重現傳統風景畫的壯麗感。
</>
    ),
  },
  {
    title: '筆記持續建置中......',
    Svg: require('../../static/img/noteweb-fish.svg').default,
    description: (
      <>
      魚悅》(Joy of the Fin: Golden Ripple)

      Afra(b. 199X, Taiwan)

      2026年（民國115年）

      數位生成、混合媒介習作

      200 x 200 px

      這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。作品捕捉了魚群穿梭於水底的動態瞬間，色彩交織出如紅寶石般的躍動感。演算法生成的有機曲線與魚的生命力相互呼應，展現出「萬物自得」的東方美學哲思。
</>
    ),
  },
  {
    title: '你也可以去上方按鈕跟我Say Hello!',
    Svg: require('../../static/img/noteweb-banner.svg').default,
    description: (
      <>
     《波浪》(The Raging Blue: Frozen Motion)

      Afra(b. 199X, Taiwan)

      2026年（民國115年）

      數位生成、計算機藝術

      200 x 200 px

      這件作品是 Afra 於 2026 年與 AI 協作生成的 SNG 系列之一。創作者藉由模擬海浪翻騰的破碎細節，探討了規律運動中的混亂美學。畫面中的浪花以像素化形式呈現，卻帶有如同浮世繪般的裝飾性與力量，重新詮釋了自然的無窮循環。
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
