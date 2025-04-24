'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Dropdown, Space } from 'antd';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { browserName } from 'react-device-detect';
import type { JSX } from 'react';
import { IconCat } from '../components/IconCat';
import type { ItemType } from 'antd/es/menu/interface';

// 浏览器图标按钮组件
const IconButton = ({ href, text, icon, target = '_blank' }) => {
  return (
    <a target={target} href={href}>
      <Space align="center">
        <div
          style={{
            padding: 2,
            background: 'var(--ifm-color-white)',
            height: '22px',
            width: '22px',
            border: '1px solid var(--ifm-color-white)',
            lineHeight: '22px',
            borderRadius: '4px',
          }}>
          <Icon height={16} width={16} icon={icon} />
        </div>
        <b>{text}</b>
      </Space>
    </a>
  );
};

// 浏览器商店映射
const storeMap: { [key: string]: ItemType & { label: any; show?: boolean } } = {
  edge: {
    key: 'edge',
    label: (
      <IconButton
        href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
        icon="logos:microsoft-edge"
        text="添加到 Edge 浏览器"
      />
    ),
  },
  chrome: {
    key: 'chrome',
    label: (
      <IconButton
        href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
        icon="logos:chrome"
        text="添加到 Chrome 浏览器"
      />
    ),
  },
  firefox: {
    key: 'firefox',
    label: (
      <IconButton
        href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
        icon="logos:firefox"
        text="添加到 Firefox 浏览器"
      />
    ),
  },
  default: {
    key: 'default',
    label: (
      <IconButton href="/docs/use/use" icon="logos:chrome" text="安装扩展到浏览器" target="_self" />
    ),
    show: false,
  },
  crx: {
    key: 'crx',
    label: (
      <IconButton
        href="https://bbs.tampermonkey.net.cn/thread-3068-1-1.html"
        icon="noto:package"
        text="下载 安装包 文件手动安装"
      />
    ),
  },
};

// 构建商店列表
const storeList: ItemType[] = [];
Object.keys(storeMap).forEach((key) => {
  if (storeMap[key].show !== false) {
    storeList.push(storeMap[key]);
  }
});

// 特性卡片组件
const FeatureCard = ({ icon, title, description, color }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureIcon} style={{ backgroundColor: color }}>
      <Icon icon={icon} width={28} height={28} />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
  </div>
);

// 使用场景卡片组件
const ScenarioCard = ({ icon, title, subtitle, tag, tagColor, features, sites, scriptUrl }) => (
  <div className={styles.scenarioCard}>
    <div className={styles.scenarioHeader}>
      <div className={styles.scenarioTitleWrapper}>
        <div className={styles.scenarioIcon} style={{ backgroundColor: tagColor.bg }}>
          <Icon icon={icon} width={24} height={24} style={{ color: tagColor.text }} />
        </div>
        <div>
          <h3 className={styles.scenarioTitle}>{title}</h3>
          <p className={styles.scenarioSubtitle}>{subtitle}</p>
        </div>
      </div>
      <div
        className={styles.scenarioTag}
        style={{ backgroundColor: tagColor.bg, color: tagColor.text }}>
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
          <span>支持网站</span>
          <a href={scriptUrl} style={{ color: tagColor.text }}>
            获取脚本 →
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
  const { siteConfig } = useDocusaurusContext();
  const [theme, setTheme] = useState('light');

  // 检测 data-theme 属性
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(currentTheme);
    };

    // 初始化
    updateTheme();

    // 创建一个 MutationObserver 来监听 data-theme 属性变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
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
              浏览器增强体验的
              <br />
              <span className={styles.gradientText}>终极脚本引擎</span>
            </h1>
            <p className="text-xl text-black dark:text-gray-300  mb-8 max-w-2xl">
              ScriptCat是一个强大的开源浏览器脚本引擎，让您轻松定制网页功能，消除广告，自动执行任务，提升浏览体验。与Tampermonkey兼容，专为技术爱好者设计。
            </p>
            <p className={styles.heroSubtitle}>
              执行
              <b className={styles.heroSubtitleHighlight}>用户脚本</b>
              的浏览器扩展，激活浏览器的无限可能！
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
                style={{width:'auto'}}
                >
                {storeMap[browserName.toLowerCase()] && storeMap[browserName.toLowerCase()].label}
                {!storeMap[browserName.toLowerCase()] && storeMap['default'].label}
              </Dropdown.Button>
              <div>
                <a href="https://scriptcat.org" className={styles.btnBrowseScripts}>
                  <SearchOutlined className="w-5 h-5" />
                  浏览脚本库
                </a>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.codeEditor}>
              <div className={styles.codeEditorHeader}>
                <div className={styles.codeEditorDot} style={{ backgroundColor: '#ff5f56' }}></div>
                <div className={styles.codeEditorDot} style={{ backgroundColor: '#ffbd2e' }}></div>
                <div className={styles.codeEditorDot} style={{ backgroundColor: '#27c93f' }}></div>
                <span className={styles.codeEditorTitle}>script.js - ScriptCat</span>
              </div>
              <div className={styles.codeEditorContent}>
                <div className={styles.codeComment}>// ==UserScript==</div>
                <div className={styles.codeComment}>// @name Auto Dark Mode</div>
                <div className={styles.codeComment}>// @namespace http://scriptcat.org</div>
                <div className={styles.codeComment}>// @version 1.0</div>
                <div className={styles.codeComment}>
                  // @description Automatically enable dark mode on websites
                </div>
                <div className={styles.codeComment}>// @author ScriptCat User</div>
                <div className={styles.codeComment}>// @match *://**/*</div>
                <div className={styles.codeComment}>// ==/UserScript==</div>
                <br />
                <div>
                  <span className={styles.codeKeyword}>function</span>{' '}
                  <span className={styles.codeFunction}>enableDarkMode</span>() {'{'}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span> css ={' '}
                  <span className={styles.codeString}>
                    `body {'{'} background-color: #121212; color: #e0e0e0; {'}'}`
                  </span>
                  ;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span> style ={' '}
                  <span className={styles.codeObject}>document</span>.
                  <span className={styles.codeFunction}>createElement</span>(
                  <span className={styles.codeString}>'style'</span>);
                </div>
                <div className={styles.codeLine}>
                  style.<span className={styles.codeProperty}>textContent</span> = css;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeObject}>document</span>.
                  <span className={styles.codeProperty}>head</span>.
                  <span className={styles.codeFunction}>appendChild</span>(style);
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeObject}>console</span>.
                  <span className={styles.codeFunction}>log</span>(
                  <span className={styles.codeString}>'🐱 ScriptCat: Dark mode enabled'</span>);
                </div>
                <div>{'}'}</div>
                <br />
                <div>
                  <span className={styles.codeKeyword}>function</span>{' '}
                  <span className={styles.codeFunction}>isDarkModePreferred</span>() {'{'}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>return</span>{' '}
                  <span className={styles.codeObject}>window</span>.
                  <span className={styles.codeFunction}>matchMedia</span>(
                  <span className={styles.codeString}>'(prefers-color-scheme: dark)'</span>).
                  <span className={styles.codeProperty}>matches</span>;
                </div>
                <div>{'}'}</div>
                <br />
                <div>
                  <span className={styles.codeKeyword}>if</span> (
                  <span className={styles.codeFunction}>isDarkModePreferred</span>()) {'{'}
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeFunction}>enableDarkMode</span>();
                </div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trustBadges}>
          <p className={styles.trustBadgesTitle}>受到技术社区信任和支持</p>
          <div className={styles.trustBadgesList}>
            <img className="h-10" src="/img/home/borwsers.png" />
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
  const [theme, setTheme] = useState('light');

  // 检测 data-theme 属性
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(currentTheme);
    };

    // 初始化
    updateTheme();

    // 创建一个 MutationObserver 来监听 data-theme 属性变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featuresSectionHeader}>
          <h2 className={styles.featuresSectionTitle}>
            强大的功能，
            <span className={styles.featuresSectionTitleHighlight}>无限可能</span>
          </h2>
          <p className={styles.featuresSectionSubtitle}>
            ScriptCat
            提供了一系列强大的功能，让您可以轻松地扩展浏览器的能力，创造属于自己的网络体验。
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <FeatureCard
            icon="lucide:code"
            title="Tampermonkey 兼容"
            description="完全兼容 Tampermonkey 脚本格式，无缝迁移现有脚本库，零成本切换使用。"
            color="rgba(59, 130, 246, 0.2)"
          />
          <FeatureCard
            icon="lucide:zap"
            title="高性能引擎"
            description="优化的脚本执行引擎，显著提升脚本运行效率，减少内存占用，提供更流畅的体验。"
            color="rgba(99, 102, 241, 0.2)"
          />
          <FeatureCard
            icon="lucide:shield"
            title="安全可靠"
            description="严格的权限控制系统，脚本行为透明可见，有效防止恶意脚本，保护您的隐私安全。"
            color="rgba(168, 85, 247, 0.2)"
          />
          <FeatureCard
            icon="lucide:pencil"
            title="内置代码编辑器"
            description="强大的代码编辑器，支持语法高亮、代码补全、错误提示，让脚本编写更高效。"
            color="rgba(20, 184, 166, 0.2)"
          />
          <FeatureCard
            icon="lucide:plug"
            title="强大的 API"
            description="提供丰富的 API 接口，支持跨域请求、本地存储、通知推送等高级功能，扩展脚本能力。"
            color="rgba(16, 185, 129, 0.2)"
          />
          <FeatureCard
            icon="lucide:box"
            title="脚本商店"
            description="内置脚本商店，一键安装热门脚本，或发布您的作品与社区分享，构建活跃的生态圈。"
            color="rgba(244, 63, 94, 0.2)"
          />
        </div>
      </div>
    </section>
  );
}

// 产品对比表格组件 - 使用div模拟表格
function ComparisonSection() {
  // 对比数据
  const comparisonData: {
    feature: string;
    scriptcat: boolean;
    tampermonkey: boolean;
    scriptcatLabel?: string;
    tampermonkeyLabel?: string;
  }[] = [
    { feature: '脚本兼容性', scriptcat: true, tampermonkey: true },
    { feature: '性能优化', scriptcat: true, tampermonkey: false, scriptcatLabel: '高效' },
    { feature: '开源免费', scriptcat: true, tampermonkey: true },
    { feature: '云端同步', scriptcat: true, tampermonkey: true, scriptcatLabel: '多平台' },
    { feature: '调试工具', scriptcat: true, tampermonkey: false, scriptcatLabel: '增强版' },
    { feature: '中文社区支持', scriptcat: true, tampermonkey: false },
  ];

  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <div className={styles.comparisonSectionHeader}>
          <h2 className={styles.comparisonSectionTitle}>
            为什么选择 <span className={styles.comparisonSectionTitleHighlight}>ScriptCat</span>
          </h2>
          <p className={styles.comparisonSectionSubtitle}>
            与其他脚本引擎相比，ScriptCat 提供了更多优势和增强功能
          </p>
        </div>

        <div className="w-full">
          {/* 使用div模拟表格 */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full">
            {/* 表头 */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-100/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 border-b border-gray-200 dark:border-gray-700">
              <div className="p-6 font-semibold text-gray-800 dark:text-white text-lg">特性</div>
              <div className="p-6 font-semibold text-gray-800 dark:text-white text-lg text-center relative group">
                <div className="flex items-center justify-center gap-3">
                  <IconCat />
                  <span>ScriptCat</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 font-semibold text-gray-800 dark:text-white text-lg text-center relative group">
                <div className="flex items-center justify-center gap-3">
                  <Icon icon="lucide:code" className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  <span>Tampermonkey</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 表格内容 */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0
                    ? 'bg-white/50 dark:bg-gray-800/30'
                    : 'bg-gray-50/50 dark:bg-gray-800/50'
                } hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-colors duration-200`}>
                <div className="p-5 font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  {row.feature}
                </div>
                <div className="p-5 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  {row.scriptcat ? (
                    <div className="flex items-center justify-center">
                      {row.scriptcatLabel ? (
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="lucide:check"
                            className="w-7 h-7 text-blue-500 filter drop-shadow-glow-blue transform transition-transform duration-200 group-hover:scale-110"
                          />
                          <span className="px-3 py-1 text-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-500 dark:text-blue-400 rounded-full shadow-sm transform transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                            {row.scriptcatLabel}
                          </span>
                        </div>
                      ) : (
                        <Icon
                          icon="lucide:check"
                          className="w-7 h-7 text-blue-500 filter drop-shadow-glow-blue transform transition-transform duration-200 group-hover:scale-110"
                        />
                      )}
                    </div>
                  ) : (
                    <Icon
                      icon="lucide:minus"
                      className="w-7 h-7 text-gray-400 dark:text-gray-600 mx-auto transform transition-transform duration-200 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-5 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gray opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  {row.tampermonkey ? (
                    <div className="flex items-center justify-center">
                      {row.tampermonkeyLabel ? (
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="lucide:check"
                            className="w-7 h-7 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 group-hover:scale-110"
                          />
                          <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full shadow-sm transform transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                            {row.tampermonkeyLabel}
                          </span>
                        </div>
                      ) : (
                        <Icon
                          icon="lucide:check"
                          className="w-7 h-7 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 group-hover:scale-110"
                        />
                      )}
                    </div>
                  ) : row.feature === '中文社区支持' ? (
                    <Icon
                      icon="lucide:x"
                      className="w-7 h-7 text-gray-400 dark:text-gray-600 mx-auto transform transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12"
                    />
                  ) : (
                    <Icon
                      icon="lucide:minus"
                      className="w-7 h-7 text-gray-400 dark:text-gray-600 mx-auto transform transition-transform duration-200 group-hover:scale-110"
                    />
                  )}
                </div>
              </div>
            ))}
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
            解决
            <span className={styles.scenarioSectionTitleHighlight}>实际问题</span>
            的脚本
          </h2>
          <p className={styles.scenarioSectionSubtitle}>
            来看看 ScriptCat 能为您的浏览体验带来哪些改变
          </p>
        </div>

        <div className={styles.scenarioGrid}>
          <ScenarioCard
            icon="lucide:video"
            title="视频网站增强"
            subtitle="优化视频观看体验"
            tag="热门应用"
            tagColor={{ bg: 'rgba(59, 130, 246, 0.1)', text: 'var(--ifm-color-primary-light)' }}
            features={[
              { icon: 'lucide:fast-forward', text: '视频倍速控制' },
              { icon: 'lucide:download', text: '一键视频下载' },
              { icon: 'lucide:x-circle', text: '广告自动跳过' },
              { icon: 'lucide:layout', text: '界面简化优化' },
            ]}
            sites={['Bilibili', 'Youtube', 'Netflix', '+更多']}
            scriptUrl="https://scriptcat.org/search?q=video"
          />

          <ScenarioCard
            icon="lucide:shopping-cart"
            title="网购助手"
            subtitle="让购物体验更轻松"
            tag="实用工具"
            tagColor={{ bg: 'rgba(99, 102, 241, 0.1)', text: 'var(--ifm-color-primary-light)' }}
            features={[
              { icon: 'lucide:trending-down', text: '价格历史查询' },
              { icon: 'lucide:percent', text: '优惠券自动查找' },
              { icon: 'lucide:search', text: '同款比价' },
              { icon: 'lucide:bell', text: '降价提醒' },
            ]}
            sites={['淘宝', '京东', '亚马逊', '+更多']}
            scriptUrl="https://scriptcat.org/search?q=shopping"
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
                准备好
                <span className={styles.downloadCardTitleHighlight}>增强您的浏览体验</span>
                了吗？
              </h2>
              <p className={styles.downloadCardSubtitle}>
                立即安装 ScriptCat，解锁网页浏览的无限可能
              </p>
              <div className={styles.downloadCardButtons}>
                <a
                  href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                  className={styles.downloadCardButtonChrome}>
                  <Icon icon="lucide:chrome" className={styles.downloadCardButtonIcon} />
                  Chrome 扩展商店
                </a>
                <a
                  href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
                  className={styles.downloadCardButtonFirefox}>
                  <Icon icon="lucide:firefox" className={styles.downloadCardButtonIcon} />
                  Firefox 扩展商店
                </a>
                <a
                  href="https://github.com/scriptscat/scriptcat"
                  className={styles.downloadCardButtonGithub}>
                  <Icon icon="lucide:github" className={styles.downloadCardButtonIcon} />
                  GitHub 下载
                </a>
              </div>
            </div>

            <div className={styles.downloadCardRight}>
              <div className={styles.browserWindow}>
                <div className={styles.browserWindowHeader}>
                  <div
                    className={styles.browserWindowDot}
                    style={{ backgroundColor: '#ff5f56' }}></div>
                  <div
                    className={styles.browserWindowDot}
                    style={{ backgroundColor: '#ffbd2e' }}></div>
                  <div
                    className={styles.browserWindowDot}
                    style={{ backgroundColor: '#27c93f' }}></div>
                  <div className={styles.browserWindowAddress}>
                    <span className={styles.browserWindowUrl}>https://scriptcat.org</span>
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
                      <h4 className={styles.scriptcatPopupTitle}>ScriptCat 已启用</h4>
                      <p className={styles.scriptcatPopupText}>3个脚本正在运行于当前页面</p>
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
        <h4 className={styles.footerContributorsTitle}>感谢所有贡献者</h4>
        <div className="flex justify-center w-full">
          <a href="https://github.com/scriptscat/scriptcat/graphs/contributors">
            <img src="https://contrib.rocks/image?repo=scriptscat/scriptcat&max=1000" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="首页"
      description="脚本猫,一个可以执行用户脚本的浏览器扩展,万物皆可脚本化,让你的浏览器可以做更多的事情!">
      <div className={styles.homeContainer}>
        <HomepageHeader />
        <FeaturesSection />
        <ComparisonSection />
        <ScenarioSection />
        <DownloadSection />
        <Footer />
      </div>
    </Layout>
  );
}
