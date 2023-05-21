import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Image, Space } from "antd";
import Link from "@docusaurus/Link";

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
    <div className="home flex flex-col">
      <div className="flex gap-3 bg-dark px-20">
        <div className="flex-1 m-auto text-center">
          <h2>简单易用</h2>
          <p>支持所有常见浏览器,安装方便快捷</p>
        </div>
        <div className="flex-1 py-20">
          <Link to="/docs/use/">
            <Image src="/img/home/borwsers.png" preview={false} />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 bg-light px-20">
        <div className="flex-1 m-auto text-center py-10">
          <Image src="/img/home/dark-ui.png" preview={false} />
        </div>
        <div className="flex-1 m-auto text-center">
          <h2>精心设计</h2>
          <p>
            采用了现代化的UI设计,让你的浏览器不再是那么单调,并且支持暗夜模式
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-dark px-20">
        <div className="flex-1 m-auto text-center">
          <h2>功能强大</h2>
          <p>
            既中看又中用,在兼容油猴脚本的基础上提供了更多强大的API,并且实现了一个后台脚本的框架,让你的浏览器不止浏览器
          </p>
        </div>
        <div className="flex-1 py-10">
          <Link to="/docs/dev/backgroud/">
            <Image src="/img/home/feature.png" preview={false} />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 bg-light px-20">
        <div className="flex-1 py-10">
          <Image src="/img/home/develop.png" preview={false} />
        </div>
        <div className="flex-1 m-auto text-center">
          <h2>开发友好</h2>
          <p>
            提供了完善的开发文档,并且提供了一个优秀在线的编辑器,支持自动提示、ESLint、QuickFix等等,让你使用脚本猫开发脚本更加的方便快捷
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-dark px-20">
        <div className="flex-1 m-auto text-center">
          <h2>备份/同步</h2>
          <p>
            提供了一个强大的备份/同步功能,支持主流网盘,让你的脚本不再丢失,并且支持多设备同步
          </p>
        </div>
        <div className="flex-1 py-10">
          <Link to="/docs/use/sync/">
            <Image src="/img/home/backup.png" preview={false} />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 bg-light px-20">
        <div className="flex-1 py-10 m-auto text-center">
          <b style={{ fontSize: "32px" }}>油猴中文网</b>
          <Image src="/img/logo.png" preview={false} />
          <b style={{ fontSize: "32px" }}>脚本猫</b>
        </div>
        <div className="flex-1 m-auto text-center">
          <h2>免费开源、社区活跃</h2>
          <p>
            脚本猫是一个开源项目,有一个活跃的社区,你可以在社区中提出你的建议,参与到脚本猫的开发中来.并且我们也维护了脚本交流的社区“油猴中文网”,当你在脚本开发上遇到什么问题时也可以前往中文网进行提问
          </p>
        </div>
      </div>
    </div>
  );
}
