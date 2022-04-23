import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/svg/biu.svg').default,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ATools 是一个小巧的 <code>JavaScript</code> 工具库，可以帮助你快速完成高质量的业务需求
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/svg/setting.svg').default,
    description: (
      <>
        你可以更加专注于你的业务，而不是设计你的 <code>JavaScript</code> 方法
      </>
    ),
  },
  {
    title: 'Powered by TypeScript',
    Svg: require('@site/static/svg/error.svg').default,
    description: (
      <>
        ATools 是由 <code>TypeScript</code> 编写，<code>Rollup</code>打包的一款现代 JS 函数类库
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
