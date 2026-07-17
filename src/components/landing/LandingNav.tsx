import { useState } from "react";
import { Icon } from "@iconify/react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useTheme } from "../useTheme";
import styles from "./landing.module.css";
import stats from "@site/src/data/landing-stats.json";
import { LINKS, abbr, usePrimaryInstall } from "./shared";

// Custom landing-page navbar, faithful to the Pencil design. The global
// Docusaurus navbar is hidden on the homepage (see custom.css) so this one
// takes its place; docs pages keep the standard navbar.
export function LandingNav() {
  const { i18n } = useDocusaurusContext();
  const zh = i18n.currentLocale !== "en";
  const [open, setOpen] = useState(false);
  const logo = useBaseUrl("/img/logo.png");
  const home = zh ? "/" : "/en/";

  const menu = [
    { label: <Translate id="home.nav.docs">文档</Translate>, href: LINKS.docs },
    { label: <Translate id="home.nav.store">脚本商店</Translate>, href: LINKS.store },
    { label: <Translate id="home.nav.dev">开发者</Translate>, href: LINKS.dev },
    { label: <Translate id="home.nav.changelog">更新日志</Translate>, href: LINKS.changelog },
  ];

  return (
    <nav className={styles.lnav}>
      <div className={styles.lnavInner}>
        <a className={styles.lnavBrand} href={home}>
          <img src={logo} width={34} height={34} alt="ScriptCat" className={styles.lnavLogo} />
          <span className={styles.lnavWord}>ScriptCat</span>
        </a>

        <div className={styles.lnavMenu}>
          {menu.map((m, i) => (
            <a key={i} className={styles.lnavLink} href={m.href}>
              {m.label}
            </a>
          ))}
        </div>

        <div className={styles.lnavActions}>
          <ThemeToggle />
          <LangSwitch zh={zh} homeZh="/" />
          <a
            className={styles.lnavStar}
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Star ScriptCat on GitHub"
          >
            <Icon icon="lucide:github" />
            <span>Star {abbr(stats.stars)}</span>
          </a>
          <NavInstall />
          <button
            className={styles.lnavBurger}
            aria-label={translate({ id: "home.nav.menu", message: "菜单" })}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon icon={open ? "lucide:x" : "lucide:menu"} width={22} height={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.lnavPanel}>
          {menu.map((m, i) => (
            <a key={i} className={styles.lnavPanelLink} href={m.href} onClick={() => setOpen(false)}>
              {m.label}
            </a>
          ))}
          <a className={styles.lnavPanelLink} href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub · Star {abbr(stats.stars)}
          </a>
        </div>
      )}
    </nav>
  );
}

// Points at the detected browser's store, falling back to the install guide
// when we can't confirm one. No dropdown here — the hero's install button one
// scroll down already offers the full browser list, and the navbar is tight.
function NavInstall() {
  const { store, href, external } = usePrimaryInstall();
  return (
    <a
      className={styles.lnavInstall}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <Icon icon={store ? store.icon : "lucide:download"} />
      {store ? (
        <span className={styles.lnavInstallLabel}>
          <Translate id="home.nav.installTo" values={{ browser: store.label }}>
            {"安装到 {browser}"}
          </Translate>
        </span>
      ) : (
        <span className={styles.lnavInstallLabel}>
          <Translate id="home.nav.install">安装扩展</Translate>
        </span>
      )}
    </a>
  );
}

// Toggle the Docusaurus theme directly via the DOM + localStorage (same key
// Docusaurus uses), avoiding useColorMode's ColorModeProvider dependency.
// useTheme() reactively reads the current data-theme attribute.
function ThemeToggle() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const toggle = () => {
    const next = dark ? "light" : "dark";
    const html = document.documentElement;
    html.setAttribute("data-theme", next);
    html.setAttribute("data-theme-choice", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore (private mode)
    }
  };
  return (
    <button
      className={styles.lnavToggle}
      onClick={toggle}
      aria-label={translate({ id: "home.nav.theme", message: "切换主题" })}
    >
      <span className={dark ? styles.lnavToggleOff : styles.lnavToggleOn}>
        <Icon icon="lucide:sun" width={16} height={16} />
      </span>
      <span className={dark ? styles.lnavToggleOn : styles.lnavToggleOff}>
        <Icon icon="lucide:moon" width={16} height={16} />
      </span>
    </button>
  );
}

function LangSwitch({ zh, homeZh }: { zh: boolean; homeZh: string }) {
  const items: MenuProps["items"] = [
    {
      key: "zh",
      label: (
        <a className={styles.lnavLangItem} href={homeZh}>
          简体中文
        </a>
      ),
    },
    {
      key: "en",
      label: (
        <a className={styles.lnavLangItem} href="/en/">
          English
        </a>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["hover", "click"]} placement="bottomRight">
      <button className={styles.lnavLang}>
        <Icon icon="lucide:globe" width={16} height={16} />
        <span>{zh ? "简体中文" : "English"}</span>
        <Icon icon="lucide:chevron-down" width={14} height={14} />
      </button>
    </Dropdown>
  );
}
