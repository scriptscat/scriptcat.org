import React from "react";
import clsx from "clsx";
import IndexMD from "./_index-page.md";
import Admonition from "@theme/Admonition";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "简单易用",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>{"安装扩展->安装脚本->开始使用"}</>,
  },
  {
    title: "特色功能",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        实现了一个后台脚本运行的框架,提供了一些特殊的API,让脚本能够做更多的事情
      </>
    ),
  },
  {
    title: "支持平台",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>兼容90%以上的油猴脚本，支持常见的全部浏览器 Chrome Edge Firefox</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <IndexMD />
      </div>
    </section>
  );
}
