import React from "react";
import styles from "./index.module.css";
import { IconCat } from "../../components/IconCat";
import { Icon } from "@iconify/react";
import Translate from '@docusaurus/Translate';

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
              <Translate
                id="footer.description"
                description="Footer description"
              >
                强大的浏览器脚本引擎，让您的上网体验更加丰富多彩。
              </Translate>
            </p>
            <div className={styles.footerSocial}>
              <a
                href="https://github.com/scriptscat/scriptcat"
                target="_blank"
                className={styles.footerSocialLink}
              >
                <Icon
                  icon="lucide:github"
                  className={styles.footerSocialIcon}
                />
              </a>
              <a
                href="https://discord.gg/JF76nHCCM7"
                target="_blank"
                className={styles.footerSocialLink}
              >
                <Icon
                  icon="mingcute:discord-line"
                  className={styles.footerSocialIcon}
                />
              </a>
            </div>
          </div>

          {/* 列 2: 产品 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>
              <Translate
                id="footer.product.title"
                description="Footer product section title"
              >
                产品
              </Translate>
            </h4>
            <ul className={styles.footerColumnList}>
              <li>
                <a href="/docs/use/use/" className={styles.footerColumnLink}>
                  <Translate
                    id="footer.product.features"
                    description="Footer product features link"
                  >
                    特性介绍
                  </Translate>
                </a>
              </li>
              <li>
                <a
                  href="https://scriptcat.org/zh-CN/"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  <Translate
                    id="footer.product.scriptStore"
                    description="Footer product script store link"
                  >
                    脚本商店
                  </Translate>
                </a>
              </li>
              <li>
                <a href="/docs/change/" className={styles.footerColumnLink}>
                  <Translate
                    id="footer.product.changelog"
                    description="Footer product changelog link"
                  >
                    更新日志
                  </Translate>
                </a>
              </li>
            </ul>
          </div>

          {/* 列 3: 资源 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>
              <Translate
                id="footer.resources.title"
                description="Footer resources section title"
              >
                资源
              </Translate>
            </h4>
            <ul className={styles.footerColumnList}>
              <li>
                <a href="/docs/dev/" className={styles.footerColumnLink}>
                  <Translate
                    id="footer.resources.devDocs"
                    description="Footer resources development docs link"
                  >
                    开发文档
                  </Translate>
                </a>
              </li>
              <li>
                <a href="/docs/dev/api/" className={styles.footerColumnLink}>
                  <Translate
                    id="footer.resources.apiReference"
                    description="Footer resources API reference link"
                  >
                    API 参考
                  </Translate>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/scriptscat/scriptcat/tree/main/example"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  <Translate
                    id="footer.resources.examples"
                    description="Footer resources example scripts link"
                  >
                    示例脚本
                  </Translate>
                </a>
              </li>
              <li>
                <a href="/docs/use/qa/" className={styles.footerColumnLink}>
                  <Translate
                    id="footer.resources.faq"
                    description="Footer resources FAQ link"
                  >
                    常见问题
                  </Translate>
                </a>
              </li>
            </ul>
          </div>

          {/* 列 4: 社区 */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>
              <Translate
                id="footer.community.title"
                description="Footer community section title"
              >
                社区
              </Translate>
            </h4>
            <ul className={styles.footerColumnList}>
              <li>
                <a
                  href="https://bbs.tampermonkey.net.cn/"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  <Translate
                    id="footer.community.forum"
                    description="Footer community forum link"
                  >
                    论坛讨论
                  </Translate>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/JF76nHCCM7"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  <Translate
                    id="footer.community.discord"
                    description="Footer community Discord link"
                  >
                    Discord 频道
                  </Translate>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/scriptscat/scriptcat/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  <Translate
                    id="footer.community.contributing"
                    description="Footer community contributing guide link"
                  >
                    贡献指南
                  </Translate>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/scriptscat/scriptcat/issues"
                  target="_blank"
                  className={styles.footerColumnLink}
                >
                  <Translate
                    id="footer.community.issues"
                    description="Footer community report issues link"
                  >
                    报告问题
                  </Translate>
                </a>
              </li>
              <li>
                <div className={styles.footerColumnLinkWithBadge}>
                  <a
                    href="https://github.com/scriptscat"
                    target="_blank"
                    className={styles.footerColumnLink}
                  >
                    <Translate
                      id="footer.community.contact"
                      description="Footer community contact team link"
                    >
                      联系团队
                    </Translate>
                  </a>
                  <span className={styles.footerColumnBadge}>
                    <Translate
                      id="footer.community.recruiting"
                      description="Footer community recruiting badge"
                    >
                      招募中
                    </Translate>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 版权信息 */}
      <div className={styles.footerCopyright}>
        <div className={styles.footerCopyrightText}>
          &copy; {new Date().getFullYear()} ScriptCat. <Translate
            id="footer.copyright.allRightsReserved"
            description="Footer copyright all rights reserved text"
          >
            保留所有权利。
          </Translate>
        </div>
        <div className={styles.footerCopyrightLinks}>
          <a
            href="/docs/use/policy/privacy/"
            className={styles.footerCopyrightLink}
          >
            <Translate
              id="footer.copyright.privacy"
              description="Footer copyright privacy policy link"
            >
              隐私政策
            </Translate>
          </a>
          <a
            href="/docs/use/policy/disclaimer/"
            className={styles.footerCopyrightLink}
          >
            <Translate
              id="footer.copyright.terms"
              description="Footer copyright terms of use link"
            >
              使用条款
            </Translate>
          </a>
          <a
            href="https://github.com/scriptscat/scriptcat/blob/main/LICENSE"
            target="_blank"
            className={styles.footerCopyrightLink}
          >
            <Translate
              id="footer.copyright.license"
              description="Footer copyright license link"
            >
              许可协议
            </Translate>
          </a>
        </div>
      </div>
      {/* 底部装饰 */}
      <div className={styles.footerDecoration}></div>
    </footer>
  );
}

export default CustomFooter;
