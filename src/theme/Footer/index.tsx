import React from "react";
import styles from "./index.module.css";
import { IconCat } from "../../components/IconCat";
import { Icon } from "@iconify/react";

function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* 列 1: 关于 */}
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <IconCat />
              <span className={styles.footerLogoText}>ScriptCat</span>
            </div>
            <p className={styles.footerDescription}>
              强大的浏览器脚本引擎，让您的上网体验更加丰富多彩。
            </p>
            <div className={styles.footerSocial}>
              <a
                href="https://github.com/scriptscat/scriptcat"
                className={styles.footerSocialLink}
              >
                <Icon
                  icon="lucide:github"
                  className={styles.footerSocialIcon}
                />
              </a>
              <a href="#" className={styles.footerSocialLink}>
                <Icon
                  icon="lucide:twitter"
                  className={styles.footerSocialIcon}
                />
              </a>
              <a href="#" className={styles.footerSocialLink}>
                <Icon icon="lucide:rss" className={styles.footerSocialIcon} />
              </a>
            </div>
          </div>

          {/* 列 2: 产品 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>产品</h4>
            <ul className={styles.footerColumnList}>
              <li>
                <a href="/docs/use/use/" className={styles.footerColumnLink}>
                  特性介绍
                </a>
              </li>
              {/* <li>
                <a href="#" className={styles.footerColumnLink}>
                  浏览器支持
                </a>
              </li> */}
              <li>
                <a
                  href="https://scriptcat.org/zh-CN/"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  脚本商店
                </a>
              </li>
              <li>
                <a href="/docs/change/" className={styles.footerColumnLink}>
                  更新日志
                </a>
              </li>
              {/* <li>
                <a href="#" className={styles.footerColumnLink}>
                  路线图
                </a>
              </li> */}
            </ul>
          </div>

          {/* 列 3: 资源 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>资源</h4>
            <ul className={styles.footerColumnList}>
              <li>
                <a href="/docs/dev/" className={styles.footerColumnLink}>
                  开发文档
                </a>
              </li>
              <li>
                <a href="/docs/dev/api/" className={styles.footerColumnLink}>
                  API 参考
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/scriptscat/scriptcat/tree/main/example"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  示例脚本
                </a>
              </li>
              <li>
                <a href="/docs/use/QA/" className={styles.footerColumnLink}>
                  常见问题
                </a>
              </li>
              {/* <li>
                <a href="#" className={styles.footerColumnLink}>
                  教程视频
                </a>
              </li> */}
            </ul>
          </div>

          {/* 列 4: 社区 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>社区</h4>
            <ul className={styles.footerColumnList}>
              <li>
                <a
                  href="https://bbs.tampermonkey.net.cn/"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  论坛讨论
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/e53kpVqv"
                  className={styles.footerColumnLink}
                >
                  Discord 频道
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/scriptscat/scriptcat/blob/main/CONTRIBUTING.md"
                  className={styles.footerColumnLink}
                >
                  贡献指南
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/scriptscat/scriptcat/issues"
                  className={styles.footerColumnLink}
                >
                  报告问题
                </a>
              </li>
              <li>
                <div className={styles.footerColumnLinkWithBadge}>
                  <a
                    href="https://github.com/scriptscat"
                    className={styles.footerColumnLink}
                  >
                    联系团队
                  </a>
                  <span className={styles.footerColumnBadge}>招募中</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 版权信息 */}
      <div className={styles.footerCopyright}>
        <div className={styles.footerCopyrightText}>
          &copy; {new Date().getFullYear()} ScriptCat. 保留所有权利。
        </div>
        <div className={styles.footerCopyrightLinks}>
          <a
            href="/docs/use/policy/privacy/"
            className={styles.footerCopyrightLink}
          >
            隐私政策
          </a>
          <a
            href="/docs/use/policy/disclaimer/"
            className={styles.footerCopyrightLink}
          >
            使用条款
          </a>
          <a
            href="https://github.com/scriptscat/scriptcat/blob/main/LICENSE"
            target="_blank"
            className={styles.footerCopyrightLink}
          >
            许可协议
          </a>
        </div>
      </div>
      {/* 底部装饰 */}
      <div className={styles.footerDecoration}></div>
    </footer>
  );
}

export default CustomFooter;
