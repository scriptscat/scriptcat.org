import type { JSX } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { translate } from "@docusaurus/Translate";
import {
  Hero,
  TrustBar,
  Scenarios,
  Steps,
  Features,
  Developers,
  Community,
  FinalCTA,
} from "../components/landing/sections";
import { LandingNav } from "../components/landing/LandingNav";
import styles from "../components/landing/landing.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        {/* Hide the global Docusaurus navbar on the homepage; LandingNav replaces it */}
        <body className="landing-page" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=JetBrains+Mono:wght@100..800&family=Noto+Sans+SC:wght@100..900&family=Nunito:wght@200..1000&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="ScriptCat,脚本猫,用户脚本,浏览器扩展,userscript,tampermonkey,violentmonkey,后台脚本,自动化,广告屏蔽,脚本商店"
        />
      </Head>
      <Layout
        title={translate({ id: "homepage.meta.title", message: "首页" })}
        description={translate({
          id: "homepage.meta.description",
          message:
            "脚本猫（ScriptCat）是强大的开源用户脚本引擎，兼容 Tampermonkey。一键安装社区脚本去广告、增强视频、自动化操作，也为开发者提供后台脚本与丰富 API，激活浏览器的无限可能。",
        })}
      >
        <main className={styles.page}>
          <LandingNav />
          <Hero />
          <TrustBar />
          <Scenarios />
          <Steps />
          <Features />
          <Developers />
          <Community />
          <FinalCTA />
        </main>
      </Layout>
    </>
  );
}
