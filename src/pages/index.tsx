import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Button, Dropdown, MenuItemProps, MenuProps, Space } from "antd";
import styles from "./index.module.css";
import { Icon } from "@iconify/react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { browserName } from "react-device-detect";
import { ItemType } from "antd/es/menu/hooks/useItems";

const IconButton = ({ href, text, icon }) => {
  return (
    <a target="_black" href={href}>
      <Space align="center">
        <div
          style={{
            padding: 2,
            background: "#fff",
            height: "22px",
            width: "22px",
            border: "1px solid #fff",
            lineHeight: "22px",
            borderRadius: "4px",
          }}
        >
          <Icon height={16} width={16} icon={icon} />
        </div>
        <b>{text}</b>
      </Space>
    </a>
  );
};

const storeMap: { [key: string]: ItemType & { label: any } } = {
  edge: {
    key: "edge",
    label: (
      <IconButton
        href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
        icon="logos:microsoft-edge"
        text="添加到 Edge 浏览器"
      />
    ),
  },
  chrome: {
    key: "chrome",
    label: (
      <IconButton
        href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
        icon="logos:chrome"
        text="添加到 Chrome 浏览器"
      />
    ),
  },
  firefox: {
    key: "firefox",
    label: (
      <IconButton
        href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
        icon="logos:firefox"
        text="添加到 Firefox 浏览器"
      />
    ),
  },
  crx: {
    key: "crx",
    label: (
      <IconButton
        href="https://bbs.tampermonkey.net.cn/thread-3068-1-1.html"
        icon="noto:package"
        text="下载 安装包 文件手动安装"
      />
    ),
  },
};

const storeList: ItemType[] = [];
Object.keys(storeMap).forEach((key) => {
  storeList.push(storeMap[key]);
});

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        backgroundColor: "#2b3137",
      }}
    >
      <div className="container">
        <img src="/img/logo.png"></img>
        <h1
          className="hero__title"
          style={{
            color: "#fff",
          }}
        >
          {/* {siteConfig.title} */}
          Script{" "}
          <b
            style={{
              color: "var(--ifm-color-primary-light)",
            }}
          >
            Cat
          </b>
        </h1>
        <Space size="large" direction="vertical" align="center">
          <Dropdown.Button
            size="large"
            type="primary"
            icon={<DownOutlined rev={undefined} />}
            menu={{
              items: storeList,
            }}
            arrow={true}
          >
            {storeMap[browserName.toLowerCase()] &&
              storeMap[browserName.toLowerCase()].label}
            {!storeMap[browserName.toLowerCase()] && storeMap["crx"].label}
          </Dropdown.Button>
          <p
            className="hero__subtitle"
            style={{
              color: "#fff",
            }}
          >
            {/* {siteConfig.tagline} */}
            执行
            <b
              style={{
                color: "var(--ifm-color-primary-light)",
              }}
            >
              用户脚本
            </b>
            的浏览器扩展,激活浏览器的无限可能!
          </p>
          <Space>
            <Link
              className="button button--primary button--sm"
              href="https://scriptcat.org"
            >
              🔍 寻找脚本
            </Link>
            <Link
              className="button button--info button--sm"
              href="https://bbs.tampermonkey.net.cn/"
            >
              💬 交流社区
            </Link>
            <a
              href="https://github.com/scriptscat/scriptcat"
              target="_blank"
              style={{ display: "block", height: "24px" }}
            >
              <img
                src="https://img.shields.io/github/stars/scriptscat/scriptcat?style=social"
                height="24"
              />
            </a>
          </Space>
        </Space>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="脚本猫,一个可以执行用户脚本的浏览器扩展,万物皆可脚本化,让你的浏览器可以做更多的事情!"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
