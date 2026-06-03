import { useEffect, useState } from "react";
import type { JSX, ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Icon } from "@iconify/react";
import { getGithubStats } from "@site/src/service/system";
import styles from "./styles.module.css";

const GITHUB_URL = "https://github.com/scriptscat/scriptcat";
const CACHE_KEY = "sc_github_stars";
const CACHE_TTL = 6 * 60 * 60 * 1000; // 缓存 6 小时

// 将 star 数格式化为 1.2k 这样的简短形式
function formatStars(n: number): string {
  if (n >= 1000) {
    return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(n);
}

// 读取并在后台刷新 star 数；接口/缓存均不可用时返回 null（此时只隐藏数字，按钮照常显示）
function useStarCount(): number | null {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cached: { v: number; t: number } | null = null;
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) cached = JSON.parse(raw);
    } catch {
      cached = null;
    }
    if (cached && typeof cached.v === "number") {
      setStars(cached.v);
    }
    // 缓存仍新鲜则不再请求
    if (cached && Date.now() - cached.t < CACHE_TTL) {
      return;
    }
    getGithubStats()
      .then((s) => {
        if (s && typeof s.stars === "number") {
          setStars(s.stars);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ v: s.stars, t: Date.now() })
            );
          } catch {
            // 忽略 localStorage 写入失败（隐私模式等）
          }
        }
      })
      .catch(() => {
        // 保持已有缓存或 null，按钮照常显示
      });
  }, []);

  return stars;
}

type Scene = "home" | "install" | "changelog";

// 不同场景下细长条的文案
function barCopy(scene: Scene): { title: ReactNode; subtitle: ReactNode } {
  switch (scene) {
    case "install":
      return {
        title: (
          <Translate id="githubStar.install.title">喜欢脚本猫吗？</Translate>
        ),
        subtitle: (
          <Translate id="githubStar.install.subtitle">
            到 GitHub 点个 Star，帮更多人发现它 🌟
          </Translate>
        ),
      };
    case "changelog":
      return {
        title: (
          <Translate id="githubStar.changelog.title">
            脚本猫持续在更新 🚀
          </Translate>
        ),
        subtitle: (
          <Translate id="githubStar.changelog.subtitle">
            觉得这些更新有用？到 GitHub 点个 Star，支持我们做得更好
          </Translate>
        ),
      };
    default:
      return {
        title: <Translate id="githubStar.home.title">脚本猫开源免费</Translate>,
        subtitle: (
          <Translate id="githubStar.home.subtitle">
            觉得好用就点个 Star 支持我们持续维护
          </Translate>
        ),
      };
  }
}

interface GithubStarProps {
  variant?: "button" | "bar";
  scene?: Scene;
  className?: string;
}

export default function GithubStar({
  variant = "bar",
  scene = "home",
  className,
}: GithubStarProps): JSX.Element {
  const stars = useStarCount();
  const logoUrl = useBaseUrl("/img/logo.png");

  const starButton = (extraClass?: string) => (
    <Link
      className={clsx(styles.starBtn, extraClass)}
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Star ScriptCat on GitHub"
    >
      <Icon icon="octicon:star-16" className={styles.starIcon} />
      <Translate id="githubStar.button.label">Star</Translate>
      {stars != null && (
        <span className={styles.count}>{formatStars(stars)}</span>
      )}
    </Link>
  );

  if (variant === "button") {
    return starButton(clsx(styles.starBtnHero, className));
  }

  const { title, subtitle } = barCopy(scene);
  return (
    <div className={clsx(styles.bar, className)}>
      <div className={styles.barLogo}>
        <img src={logoUrl} alt="ScriptCat" />
      </div>
      <div className={styles.barText}>
        <strong>{title}</strong>
        <span className={styles.barSubtitle}> {subtitle}</span>
      </div>
      {starButton(styles.starBtnBar)}
    </div>
  );
}
