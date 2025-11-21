"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { Dropdown, Space } from "antd";
import styles from "./index.module.css";
import { Icon } from "@iconify/react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { browserName } from "react-device-detect";
import type { JSX } from "react";
import { IconCat } from "../components/IconCat";
import type { MenuProps } from "antd";
import Translate, { translate } from "@docusaurus/Translate";

// 浏览器图标按钮组件
const IconButton = ({ href, text, icon, target = "_blank" }) => {
  return (
    <a target={target} href={href}>
      <Space align="center">
        <div
          style={{
            padding: 2,
            background: "var(--ifm-color-white)",
            height: "22px",
            width: "22px",
            border: "1px solid var(--ifm-color-white)",
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

// 浏览器商店映射
const storeMap: {
  [key: string]: MenuProps["items"][0] & { label: any; show?: boolean };
} = {
  edge: {
    key: "edge",
    label: (
      <IconButton
        href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
        icon="logos:microsoft-edge"
        text={translate({
          id: "homepage.hero.browser.edge",
          message: "添加到 Edge 浏览器",
        })}
      />
    ),
  },
  chrome: {
    key: "chrome",
    label: (
      <IconButton
        href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
        icon="logos:chrome"
        text={translate({
          id: "homepage.hero.browser.chrome",
          message: "添加到 Chrome 浏览器",
        })}
      />
    ),
  },
  firefox: {
    key: "firefox",
    label: (
      <IconButton
        href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
        icon="logos:firefox"
        text={translate({
          id: "homepage.hero.browser.firefox",
          message: "添加到 Firefox 浏览器",
        })}
      />
    ),
  },
  default: {
    key: "default",
    label: (
      <IconButton
        href="./docs/use/use"
        icon="logos:chrome"
        text={translate({
          id: "homepage.hero.browser.default",
          message: "安装扩展到浏览器",
        })}
        target="_self"
      />
    ),
    show: false,
  },
  crx: {
    key: "crx",
    label: (
      <IconButton
        href="https://github.com/scriptscat/scriptcat/releases"
        icon="noto:package"
        text={translate({
          id: "homepage.hero.browser.crx",
          message: "下载 安装包 文件手动安装",
        })}
      />
    ),
  },
};

// 构建商店列表
const storeList: MenuProps["items"] = [];
Object.keys(storeMap).forEach((key) => {
  if (storeMap[key].show !== false) {
    storeList.push(storeMap[key]);
  }
});

// 特性卡片组件 - 优化后的版本
const FeatureCard = ({ icon, title, description, color }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureCardInner}>
      <div className={styles.featureIconWrapper}>
        <div className={styles.featureIcon} style={{ backgroundColor: color }}>
          <Icon
            icon={icon}
            width={28}
            height={28}
            className={styles.featureIconSvg}
          />
        </div>
        <div
          className={styles.featureIconGlow}
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.featureCardShine}></div>
      <div className={styles.featureCardCorner}></div>
    </div>
  </div>
);

// 使用场景卡片组件
const ScenarioCard = ({
  icon,
  title,
  subtitle,
  tag,
  tagColor,
  features,
  sites,
  scriptUrl,
}) => (
  <div className={styles.scenarioCard}>
    <div className={styles.scenarioHeader}>
      <div className={styles.scenarioTitleWrapper}>
        <div
          className={styles.scenarioIcon}
          style={{ backgroundColor: tagColor.bg }}
        >
          <Icon
            icon={icon}
            width={24}
            height={24}
            style={{ color: tagColor.text }}
          />
        </div>
        <div>
          <h3 className={styles.scenarioTitle}>{title}</h3>
          <p className={styles.scenarioSubtitle}>{subtitle}</p>
        </div>
      </div>
      <div
        className={styles.scenarioTag}
        style={{ backgroundColor: tagColor.bg, color: tagColor.text }}
      >
        {tag}
      </div>
    </div>
    <div className={styles.scenarioContent}>
      <div className={styles.scenarioFeatures}>
        {features.map((feature, index) => (
          <div key={index} className={styles.scenarioFeature}>
            <Icon icon={feature.icon} width={20} height={20} />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.scenarioSites}>
        <div className={styles.scenarioSitesHeader}>
          <span>
            <Translate
              id="homepage.scenario.video.sites"
              description="Scenario supported sites label"
            >
              支持网站
            </Translate>
          </span>
          <a href={scriptUrl} target="_blank" style={{ color: tagColor.text }}>
            <Translate
              id="homepage.scenario.video.getScript"
              description="Scenario get script link"
            >
              获取脚本 →
            </Translate>
          </a>
        </div>
        <div className={styles.scenarioSitesList}>
          {sites.map((site, index) => (
            <div key={index} className={styles.scenarioSite}>
              {site}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 主页头部组件
function HomepageHeader(): JSX.Element {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.heroBlur1}></div>
        <div className={styles.heroBlur2}></div>
        <div className={styles.heroGrid}></div>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          {/*  */}
          <div className={styles.heroLeft}>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <Translate
                id="homepage.hero.title"
                description="Main title on the homepage hero section"
              >
                浏览器增强体验的
              </Translate>
              <br />
              <span className={styles.gradientText}>
                <Translate
                  id="homepage.hero.title.engine"
                  description="Gradient text in main title"
                >
                  终极脚本引擎
                </Translate>
              </span>
            </h1>
            <p className="text-xl text-black dark:text-gray-300  mb-8 max-w-2xl">
              <Translate
                id="homepage.hero.subtitle.main"
                description="Main subtitle description on homepage"
              >
                ScriptCat是一个强大的开源浏览器脚本引擎，让您轻松定制网页功能，消除广告，自动执行任务，提升浏览体验。与Tampermonkey兼容，并提供更多功能和优化。
              </Translate>
            </p>
            <p className={styles.heroSubtitle}>
              <Translate
                id="homepage.hero.subtitle.highlight"
                description="Highlighted subtitle on homepage"
              >
                执行
              </Translate>
              <b className={styles.heroSubtitleHighlight}>
                <Translate
                  id="homepage.hero.subtitle.userScript"
                  description="User script highlight"
                >
                  用户脚本
                </Translate>
              </b>
              <Translate
                id="homepage.hero.subtitle.possibilities"
                description="Browser possibilities text"
              >
                的浏览器扩展，激活浏览器的无限可能！
              </Translate>
            </p>

            <div className={styles.heroButtons}>
              <Dropdown.Button
                size="large"
                type="primary"
                icon={<DownOutlined rev={undefined} />}
                menu={{
                  items: storeList,
                }}
                arrow={true}
                style={{ width: "auto" }}
              >
                {storeMap[browserName.toLowerCase()] &&
                  storeMap[browserName.toLowerCase()].label}
                {!storeMap[browserName.toLowerCase()] &&
                  storeMap["default"].label}
              </Dropdown.Button>
              <div>
                <a
                  href="https://scriptcat.org"
                  target="_blank"
                  className={styles.btnBrowseScripts}
                >
                  <SearchOutlined className="w-5 h-5" />
                  <Translate
                    id="homepage.hero.button.browseScripts"
                    description="Button text for browsing scripts"
                  >
                    浏览脚本库
                  </Translate>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.codeEditor}>
              <div className={styles.codeEditorHeader}>
                <div
                  className={styles.codeEditorDot}
                  style={{ backgroundColor: "#ff5f56" }}
                ></div>
                <div
                  className={styles.codeEditorDot}
                  style={{ backgroundColor: "#ffbd2e" }}
                ></div>
                <div
                  className={styles.codeEditorDot}
                  style={{ backgroundColor: "#27c93f" }}
                ></div>
                <span className={styles.codeEditorTitle}>
                  script.js - ScriptCat
                </span>
              </div>
              <div className={styles.codeEditorContent}>
                <div className={styles.codeComment}>// ==UserScript==</div>
                <div className={styles.codeComment}>
                  // @name Auto Dark Mode
                </div>
                <div className={styles.codeComment}>
                  // @namespace http://scriptcat.org
                </div>
                <div className={styles.codeComment}>// @version 1.0</div>
                <div className={styles.codeComment}>
                  // @description Automatically enable dark mode on websites
                </div>
                <div className={styles.codeComment}>
                  // @author ScriptCat User
                </div>
                <div className={styles.codeComment}>// @match *://*/*</div>
                <div className={styles.codeComment}>// ==/UserScript==</div>
                <br />
                <div>
                  <span className={styles.codeKeyword}>function</span>{" "}
                  <span className={styles.codeFunction}>enableDarkMode</span>(){" "}
                  {"{"}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span> css ={" "}
                  <span className={styles.codeString}>
                    `body {"{"} background-color: #121212; color: #e0e0e0; {"}"}
                    `
                  </span>
                  ;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span> style ={" "}
                  <span className={styles.codeObject}>document</span>.
                  <span className={styles.codeFunction}>createElement</span>(
                  <span className={styles.codeString}>'style'</span>);
                </div>
                <div className={styles.codeLine}>
                  style.<span className={styles.codeProperty}>textContent</span>{" "}
                  = css;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeObject}>document</span>.
                  <span className={styles.codeProperty}>head</span>.
                  <span className={styles.codeFunction}>appendChild</span>
                  (style);
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeObject}>console</span>.
                  <span className={styles.codeFunction}>log</span>(
                  <span className={styles.codeString}>
                    '🐱 ScriptCat: Dark mode enabled'
                  </span>
                  );
                </div>
                <div>{"}"}</div>
                <br />
                <div>
                  <span className={styles.codeKeyword}>function</span>{" "}
                  <span className={styles.codeFunction}>
                    isDarkModePreferred
                  </span>
                  () {"{"}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>return</span>{" "}
                  <span className={styles.codeObject}>window</span>.
                  <span className={styles.codeFunction}>matchMedia</span>(
                  <span className={styles.codeString}>
                    '(prefers-color-scheme: dark)'
                  </span>
                  ).
                  <span className={styles.codeProperty}>matches</span>;
                </div>
                <div>{"}"}</div>
                <br />
                <div>
                  <span className={styles.codeKeyword}>if</span> (
                  <span className={styles.codeFunction}>
                    isDarkModePreferred
                  </span>
                  ()) {"{"}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeFunction}>enableDarkMode</span>();
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trustBadges}>
          <p className={styles.trustBadgesTitle}>
            <Translate
              id="homepage.hero.trustBadges.title"
              description="Trust badges section title"
            >
              受到技术社区信任和支持
            </Translate>
          </p>
          <div className={styles.trustBadgesList}>
            <img className="h-10" src="./img/home/borwsers.png" />
            <div className={styles.trustBadgeDivider}></div>
            <Icon icon="lucide:code" className={styles.trustBadge} />
            <Icon icon="lucide:github" className={styles.trustBadge} />
            <Icon icon="lucide:shield-check" className={styles.trustBadge} />
          </div>
        </div>
      </div>
    </header>
  );
}

// 主要特性区域组件
function FeaturesSection(): JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresSectionBg}>
        <div className={styles.featuresSectionBlur1}></div>
        <div className={styles.featuresSectionBlur2}></div>
        <div className={styles.featuresSectionGrid}></div>
      </div>
      <div className="container">
        <div className={styles.featuresSectionHeader}>
          <h2 className={styles.featuresSectionTitle}>
            <Translate
              id="homepage.features.title.powerful"
              description="Features section title part 1"
            >
              强大的功能，
            </Translate>
            <span className={styles.featuresSectionTitleHighlight}>
              <Translate
                id="homepage.features.title.possibilities"
                description="Features section title highlight"
              >
                无限可能
              </Translate>
            </span>
          </h2>
          <p className={styles.featuresSectionSubtitle}>
            <Translate
              id="homepage.features.subtitle"
              description="Features section subtitle"
            >
              ScriptCat
              提供了一系列强大的功能，让您可以轻松地扩展浏览器的能力，创造属于自己的网络体验。
            </Translate>
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <FeatureCard
            icon="lucide:code"
            title={translate({
              id: "homepage.features.tampermonkey.title",
              message: "Tampermonkey 兼容",
            })}
            description={translate({
              id: "homepage.features.tampermonkey.description",
              message:
                "完全兼容 Tampermonkey 脚本格式，无缝迁移现有脚本库，零成本切换使用。",
            })}
            color="rgba(59, 130, 246, 0.8)"
          />
          <FeatureCard
            icon="lucide:zap"
            title={translate({
              id: "homepage.features.background.title",
              message: "后台脚本",
            })}
            description={translate({
              id: "homepage.features.background.description",
              message:
                "区别于普通用户脚本，让你的脚本可以在后台中持续运行，无须开启标签页。",
            })}
            color="rgba(99, 102, 241, 0.8)"
          />
          <FeatureCard
            icon="lucide:shield"
            title={translate({
              id: "homepage.features.security.title",
              message: "安全可靠",
            })}
            description={translate({
              id: "homepage.features.security.description",
              message:
                "严格的权限控制系统，脚本行为透明可见，有效防止恶意脚本，保护您的隐私安全。",
            })}
            color="rgba(168, 85, 247, 0.8)"
          />
          <FeatureCard
            icon="lucide:pencil"
            title={translate({
              id: "homepage.features.editor.title",
              message: "内置代码编辑器",
            })}
            description={translate({
              id: "homepage.features.editor.description",
              message:
                "强大的代码编辑器，支持语法高亮、代码补全、错误提示，让脚本编写更高效。",
            })}
            color="rgba(20, 184, 166, 0.8)"
          />
          <FeatureCard
            icon="lucide:plug"
            title={translate({
              id: "homepage.features.api.title",
              message: "强大的 API",
            })}
            description={translate({
              id: "homepage.features.api.description",
              message:
                "提供比GM更丰富的 API 接口，支持文件存储、用户配置等高级功能，扩展脚本能力。",
            })}
            color="rgba(16, 185, 129, 0.8)"
          />
          <FeatureCard
            icon="lucide:box"
            title={translate({
              id: "homepage.features.store.title",
              message: "脚本商店",
            })}
            description={translate({
              id: "homepage.features.store.description",
              message:
                "拥有脚本商店，一键安装热门脚本，或发布您的作品与社区分享，构建活跃的生态圈。",
            })}
            color="rgba(244, 63, 94, 0.8)"
          />
        </div>
      </div>
    </section>
  );
}

// 产品对比表格组件 - 超级绚酷版
function ComparisonSection() {
  // 对比数据
  const comparisonData: {
    feature: string;
    scriptcat: boolean | -1;
    tampermonkey: boolean | -1;
    violentmonkey: boolean | -1;
    scriptcatLabel?: string;
    tampermonkeyLabel?: string;
    violentmonkeyLabel?: string;
  }[] = [
    {
      feature: translate({
        id: "homepage.comparison.feature.compatibility",
        message: "脚本兼容性",
      }),
      scriptcat: true,
      tampermonkey: true,
      violentmonkey: true,
    },
    {
      feature: translate({
        id: "homepage.comparison.feature.opensource",
        message: "开源免费",
      }),
      scriptcat: true,
      tampermonkey: -1,
      violentmonkey: true,
    },
    {
      feature: translate({
        id: "homepage.comparison.feature.mv3",
        message: "MV3支持",
      }),
      scriptcat: true,
      tampermonkey: true,
      violentmonkey: -1,
    },
    {
      feature: translate({
        id: "homepage.comparison.feature.sync",
        message: "云端同步",
      }),
      scriptcat: true,
      tampermonkey: true,
      violentmonkey: true,
      scriptcatLabel: translate({
        id: "homepage.comparison.label.multiplatform",
        message: "多平台",
      }),
    },
    {
      feature: translate({
        id: "homepage.comparison.feature.background",
        message: "后台脚本",
      }),
      scriptcat: true,
      tampermonkey: false,
      violentmonkey: false,
      scriptcatLabel: translate({
        id: "homepage.comparison.label.efficient",
        message: "高效",
      }),
    },
    {
      feature: translate({
        id: "homepage.comparison.feature.api",
        message: "强大 API",
      }),
      scriptcat: true,
      tampermonkey: false,
      violentmonkey: false,
      scriptcatLabel: "",
    },
    {
      feature: translate({
        id: "homepage.comparison.feature.community",
        message: "社区支持",
      }),
      scriptcat: true,
      tampermonkey: -1,
      violentmonkey: -1,
    },
  ];

  // 使用状态来跟踪当前高亮的行
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

  const renderCell = (
    state: boolean | -1,
    stateLabel: string | undefined,
    b?: boolean
  ) => {
    return (
      <div className={styles.comparisonTableCell}>
        <div className={styles.comparisonTableCellInner}>
          {state === true ? (
            <div className={styles.comparisonTableCellCheck}>
              {stateLabel ? (
                <div className={styles.comparisonTableCellWithLabel}>
                  <div
                    className={
                      b
                        ? styles.comparisonTableCellCheckIcon
                        : styles.comparisonTableCellCheckIconGray
                    }
                  >
                    <Icon icon="lucide:check" />
                    {b ? (
                      <div
                        className={styles.comparisonTableCellCheckRing}
                      ></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <span
                    className={
                      b
                        ? styles.comparisonTableCellLabel
                        : styles.comparisonTableCellLabelGray
                    }
                  >
                    {stateLabel}
                  </span>
                </div>
              ) : (
                <div
                  className={
                    b
                      ? styles.comparisonTableCellCheckIcon
                      : styles.comparisonTableCellCheckIconGray
                  }
                >
                  <Icon icon="lucide:check" />
                  {b ? (
                    <div className={styles.comparisonTableCellCheckRing}></div>
                  ) : (
                    ""
                  )}
                </div>
              )}
              {b ? <div className={styles.comparisonTableCellGlow}></div> : ""}
            </div>
          ) : state === -1 ? (
            <div className={styles.comparisonTableCellCross}>
              <Icon icon="lucide:x" />
            </div>
          ) : (
            <div className={styles.comparisonTableCellMinus}>
              <Icon icon="lucide:minus" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className={styles.comparisonSection}>
      {/* 背景元素 */}
      <div className={styles.comparisonBackground}>
        <div className={styles.comparisonBlur1}></div>
        <div className={styles.comparisonBlur2}></div>
        <div className={styles.comparisonBlur3}></div>
        <div className={styles.comparisonGrid}></div>
        <div className={styles.comparisonParticles}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={styles.comparisonParticle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.comparisonSectionHeader}>
          <div className={styles.comparisonSectionTitleWrapper}>
            <h2 className={styles.comparisonSectionTitle}>
              <Translate
                id="homepage.comparison.title.why"
                description="Comparison section title part 1"
              >
                为什么选择
              </Translate>{" "}
              <span className={styles.comparisonSectionTitleHighlight}>
                ScriptCat
              </span>
            </h2>
            <div className={styles.comparisonSectionTitleGlow}></div>
          </div>
          <p className={styles.comparisonSectionSubtitle}>
            <Translate
              id="homepage.comparison.subtitle"
              description="Comparison section subtitle"
            >
              与其他脚本引擎相比，ScriptCat 提供了更多优势和增强功能
            </Translate>
          </p>
        </div>

        <div className={styles.comparisonTableContainer}>
          {/* 装饰元素 */}
          <div className={styles.comparisonTableDecoration1}></div>
          <div className={styles.comparisonTableDecoration2}></div>
          <div className={styles.comparisonTableDecoration3}></div>
          <div className={styles.comparisonTableDecoration4}></div>

          {/* 3D旋转卡片容器 */}
          <div className={styles.comparisonCard3D}>
            <div className={styles.comparisonCardInner}>
              {/* 表格主体 */}
              <div className={styles.comparisonTableWrapper}>
                {/* 表头 */}
                <div className={styles.comparisonTableHeader}>
                  <div className={styles.comparisonTableHeaderCell}>
                    <div className={styles.comparisonTableHeaderCellContent}>
                      <span className={styles.comparisonTableHeaderTitle}>
                        <Translate
                          id="homepage.comparison.feature"
                          description="Comparison table header: Feature"
                        >
                          特性
                        </Translate>
                      </span>
                      <div className={styles.comparisonTableHeaderLine}></div>
                    </div>
                  </div>
                  <div className={styles.comparisonTableHeaderCell}>
                    <div className={styles.comparisonTableHeaderCellContent}>
                      <div className={styles.comparisonTableHeaderLogo}>
                        <div className={styles.comparisonTableHeaderIcon}>
                          <IconCat />
                          <div
                            className={styles.comparisonTableHeaderIconRing}
                          ></div>
                        </div>
                        <span
                          className={styles.comparisonTableHeaderTitle}
                          style={{ fontSize: "120%" }}
                        >
                          ScriptCat
                        </span>
                      </div>
                      <div className={styles.comparisonTableHeaderGlow}></div>
                    </div>
                  </div>
                  <div className={styles.comparisonTableHeaderCell}>
                    <div className={styles.comparisonTableHeaderCellContent}>
                      <div className={styles.comparisonTableHeaderLogo}>
                        <div className={styles.comparisonTableHeaderIcon}>
                          <Icon icon="lucide:code" />
                        </div>
                        <span
                          className={styles.comparisonTableHeaderTitle}
                          style={{
                            fontStretch: "extra-condensed",
                            fontSize: "115%",
                          }}
                        >
                          Tampermonkey
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.comparisonTableHeaderCell}>
                    <div className={styles.comparisonTableHeaderCellContent}>
                      <div className={styles.comparisonTableHeaderLogo}>
                        <div className={styles.comparisonTableHeaderIcon}>
                          <Icon icon="lucide:code" />
                        </div>
                        <span
                          className={styles.comparisonTableHeaderTitle}
                          style={{
                            fontStretch: "extra-condensed",
                            fontSize: "115%",
                          }}
                        >
                          Violentmonkey
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 表格内容 */}
                <div className={styles.comparisonTableBody}>
                  {comparisonData.map((row, index) => (
                    <div
                      key={index}
                      className={`${styles.comparisonTableRow} ${
                        highlightedRow === index
                          ? styles.comparisonTableRowActive
                          : ""
                      }`}
                      onMouseEnter={() => setHighlightedRow(index)}
                      onMouseLeave={() => setHighlightedRow(null)}
                    >
                      <div className={styles.comparisonTableCell}>
                        <div className={styles.comparisonTableCellInner}>
                          <span className={styles.comparisonTableCellText}>
                            {row.feature}
                          </span>
                          <div
                            className={styles.comparisonTableCellHighlight}
                          ></div>
                        </div>
                      </div>
                      {renderCell(row.scriptcat, row.scriptcatLabel, true)}
                      {renderCell(
                        row.tampermonkey,
                        row.tampermonkeyLabel,
                        false
                      )}
                      {renderCell(
                        row.violentmonkey,
                        row.violentmonkeyLabel,
                        false
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 使用场景展示组件
function ScenarioSection() {
  return (
    <section className={styles.scenarioSection}>
      <div className="container">
        <div className={styles.scenarioSectionHeader}>
          <h2 className={styles.scenarioSectionTitle}>
            <Translate
              id="homepage.scenario.title.solve"
              description="Scenario section title part 1"
            >
              解决
            </Translate>
            <span className={styles.scenarioSectionTitleHighlight}>
              <Translate
                id="homepage.scenario.title.problems"
                description="Scenario section title highlight"
              >
                实际问题
              </Translate>
            </span>
            <Translate
              id="homepage.scenario.title.scripts"
              description="Scenario section title part 2"
            >
              的脚本
            </Translate>
          </h2>
          <p className={styles.scenarioSectionSubtitle}>
            <Translate
              id="homepage.scenario.subtitle"
              description="Scenario section subtitle"
            >
              来看看 ScriptCat 能为您的浏览体验带来哪些改变
            </Translate>
          </p>
        </div>

        <div className={styles.scenarioGrid}>
          <ScenarioCard
            icon="lucide:video"
            title={translate({
              id: "homepage.scenario.video.title",
              message: "视频网站增强",
            })}
            subtitle={translate({
              id: "homepage.scenario.video.subtitle",
              message: "优化视频观看体验",
            })}
            tag={translate({
              id: "homepage.scenario.video.tag",
              message: "热门应用",
            })}
            tagColor={{
              bg: "rgba(59, 130, 246, 0.1)",
              text: "var(--ifm-color-primary-light)",
            }}
            features={[
              {
                icon: "lucide:fast-forward",
                text: translate({
                  id: "homepage.scenario.video.feature.speed",
                  message: "视频倍速控制",
                }),
              },
              {
                icon: "lucide:download",
                text: translate({
                  id: "homepage.scenario.video.feature.download",
                  message: "一键视频下载",
                }),
              },
              {
                icon: "lucide:x-circle",
                text: translate({
                  id: "homepage.scenario.video.feature.adblock",
                  message: "广告自动跳过",
                }),
              },
              {
                icon: "lucide:layout",
                text: translate({
                  id: "homepage.scenario.video.feature.ui",
                  message: "界面简化优化",
                }),
              },
            ]}
            sites={[
              "Bilibili",
              "Youtube",
              "Netflix",
              translate({
                id: "homepage.scenario.sites.more",
                message: "+更多",
              }),
            ]}
            scriptUrl="https://scriptcat.org/search?keyword=视频"
          />

          <ScenarioCard
            icon="lucide:shopping-cart"
            title={translate({
              id: "homepage.scenario.shopping.title",
              message: "网购助手",
            })}
            subtitle={translate({
              id: "homepage.scenario.shopping.subtitle",
              message: "让购物体验更轻松",
            })}
            tag={translate({
              id: "homepage.scenario.shopping.tag",
              message: "实用工具",
            })}
            tagColor={{
              bg: "rgba(99, 102, 241, 0.1)",
              text: "var(--ifm-color-primary-light)",
            }}
            features={[
              {
                icon: "lucide:trending-down",
                text: translate({
                  id: "homepage.scenario.shopping.feature.history",
                  message: "价格历史查询",
                }),
              },
              {
                icon: "lucide:percent",
                text: translate({
                  id: "homepage.scenario.shopping.feature.coupon",
                  message: "优惠券自动查找",
                }),
              },
              {
                icon: "lucide:search",
                text: translate({
                  id: "homepage.scenario.shopping.feature.compare",
                  message: "同款比价",
                }),
              },
              {
                icon: "lucide:bell",
                text: translate({
                  id: "homepage.scenario.shopping.feature.alert",
                  message: "降价提醒",
                }),
              },
            ]}
            sites={[
              "淘宝",
              "京东",
              "亚马逊",
              translate({
                id: "homepage.scenario.sites.more",
                message: "+更多",
              }),
            ]}
            scriptUrl="https://scriptcat.org/search?keyword=购物"
          />
        </div>
      </div>
    </section>
  );
}

// 下载区域组件
function DownloadSection() {
  return (
    <section className={styles.downloadSection}>
      <div className="container">
        <div className={styles.downloadCard}>
          <div className={styles.downloadCardBackground}>
            <div className={styles.downloadCardBlur1}></div>
            <div className={styles.downloadCardBlur2}></div>
          </div>

          <div className={styles.downloadCardContent}>
            <div className={styles.downloadCardLeft}>
              <h2 className={styles.downloadCardTitle}>
                <Translate
                  id="homepage.download.title.ready"
                  description="Download section title part 1"
                >
                  准备好
                </Translate>
                <span className={styles.downloadCardTitleHighlight}>
                  <Translate
                    id="homepage.download.title.enhance"
                    description="Download section title highlight"
                  >
                    增强您的浏览体验
                  </Translate>
                </span>
                <Translate
                  id="homepage.download.title.question"
                  description="Download section title part 2"
                >
                  了吗？
                </Translate>
              </h2>
              <p className={styles.downloadCardSubtitle}>
                <Translate
                  id="homepage.download.subtitle"
                  description="Download section subtitle"
                >
                  立即安装 ScriptCat，解锁网页浏览的无限可能
                </Translate>
              </p>
              <div className={styles.downloadCardButtons}>
                <a
                  href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
                  target="_blank"
                  className={styles.downloadCardButtonChrome}
                >
                  <Icon
                    icon="ri:edge-new-line"
                    className={styles.downloadCardButtonIcon}
                  />
                  <Translate
                    id="homepage.download.edge"
                    description="Download button: Edge store"
                  >
                    Edge 扩展商店
                  </Translate>
                </a>
                <a
                  href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                  target="_blank"
                  className={styles.downloadCardButtonChrome}
                >
                  <Icon
                    icon="lucide:chrome"
                    className={styles.downloadCardButtonIcon}
                  />
                  <Translate
                    id="homepage.download.chrome"
                    description="Download button: Chrome store"
                  >
                    Chrome 扩展商店
                  </Translate>
                </a>
                <a
                  href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
                  target="_blank"
                  className={styles.downloadCardButtonFirefox}
                >
                  <Icon
                    icon="ri:firefox-line"
                    className={styles.downloadCardButtonIcon}
                  />
                  <Translate
                    id="homepage.download.firefox"
                    description="Download button: Firefox store"
                  >
                    Firefox 扩展商店
                  </Translate>
                </a>
                <a
                  href="https://github.com/scriptscat/scriptcat/releases"
                  target="_blank"
                  className={styles.downloadCardButtonGithub}
                >
                  <Icon
                    icon="lucide:github"
                    className={styles.downloadCardButtonIcon}
                  />
                  <Translate
                    id="homepage.download.github"
                    description="Download button: GitHub"
                  >
                    GitHub 下载
                  </Translate>
                </a>
              </div>
            </div>

            <div className={styles.downloadCardRight}>
              <div className={styles.browserWindow}>
                <div className={styles.browserWindowHeader}>
                  <div
                    className={styles.browserWindowDot}
                    style={{ backgroundColor: "#ff5f56" }}
                  ></div>
                  <div
                    className={styles.browserWindowDot}
                    style={{ backgroundColor: "#ffbd2e" }}
                  ></div>
                  <div
                    className={styles.browserWindowDot}
                    style={{ backgroundColor: "#27c93f" }}
                  ></div>
                  <div className={styles.browserWindowAddress}>
                    <span className={styles.browserWindowUrl}>
                      https://scriptcat.org
                    </span>
                  </div>
                </div>
                <div className={styles.browserWindowContent}>
                  {/* 模拟ScriptCat插件 UI */}
                  <div className={styles.scriptcatIcon}>
                    <div className={styles.scriptcatIconInner}>
                      <IconCat />
                    </div>
                    <div className={styles.scriptcatIconBadge}></div>
                  </div>
                  <div className={styles.scriptcatPopup}>
                    <div>
                      <div className={styles.scriptcatPopupIcon}>
                        <IconCat />
                      </div>
                      <h4 className={styles.scriptcatPopupTitle}>
                        <Translate
                          id="homepage.download.popup.title"
                          description="Extension popup title"
                        >
                          ScriptCat 已启用
                        </Translate>
                      </h4>
                      <p className={styles.scriptcatPopupText}>
                        <Translate
                          id="homepage.download.popup.text"
                          description="Extension popup text"
                        >
                          3个脚本正在运行于当前页面
                        </Translate>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 页脚组件
function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 贡献者区域 */}
      <div className={styles.footerContributors}>
        <h4 className={styles.footerContributorsTitle}>
          <Translate
            id="homepage.footer.contributors.title"
            description="Footer contributors section title"
          >
            感谢所有贡献者
          </Translate>
        </h4>
        <div className="flex justify-center w-full">
          <a href="https://github.com/scriptscat/scriptcat/graphs/contributors">
            <img src="https://contrib.rocks/image?repo=scriptscat/scriptcat&max=1000" />
          </a>
        </div>
      </div>
    </footer>
  );
}
// 自定义钩子用于修改和恢复CSS变量
function useBackgroundColor(lightColor: string, darkColor: string) {
  useEffect(() => {
    const handleThemeChange = () => {
      const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark";
      const color = isDarkMode ? darkColor : lightColor;
      document.documentElement.style.setProperty(
        "--ifm-background-surface-color",
        color
      );
    };

    // 初始化时设置颜色
    handleThemeChange();

    // 监听主题变化（假设主题切换时会触发属性变化）
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty(
        "--ifm-background-surface-color"
      );
    };
  }, [lightColor, darkColor]);
}

export default function Home(): JSX.Element {
  useBackgroundColor("#f5f8fc", "#0f172a");

  return (
    <>
      <Head>
        <meta
          name="description"
          content={translate({
            id: "homepage.meta.description",
            message:
              "ScriptCat是一个强大的开源浏览器脚本引擎，让您轻松自定义网页功能、屏蔽广告、自动化任务，提升浏览体验。兼容Tampermonkey，提供更多功能和优化。",
          })}
        />
        <meta
          name="keywords"
          content="ScriptCat,用户脚本,浏览器扩展,userscript,tampermonkey,violentmonkey,自动化,网页自定义,脚本管理,广告屏蔽"
        />
      </Head>

      <Layout
        title={translate({
          id: "homepage.meta.title",
          message: "首页",
        })}
        description={translate({
          id: "homepage.meta.description",
          message:
            "脚本猫,一个可以执行用户脚本的浏览器扩展,万物皆可脚本化,让你的浏览器可以做更多的事情!",
        })}
      >
        <div className={styles.homeContainer}>
          <HomepageHeader />
          <FeaturesSection />
          <ComparisonSection />
          <ScenarioSection />
          <DownloadSection />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
