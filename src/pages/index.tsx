import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Space } from "antd";
import styles from "./index.module.css";

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
        <Space size="large">
          <Link className="button button--secondary button--lg" to="/docs/use">
            开始使用
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
