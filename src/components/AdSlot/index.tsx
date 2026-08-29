import { useEffect, useRef, useState } from "react";
import type { CSSProperties, JSX } from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import styles from "./styles.module.css";

const AD_CLIENT = "ca-pub-8009073269666226";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export interface AdSlotProps {
  /** rail = 文档右栏钉底位，inline = 正文内位 */
  variant?: "rail" | "inline";
  /** AdSense 广告单元 id */
  slot?: string;
  className?: string;
  style?: CSSProperties;
}

export default function AdSlot({
  variant = "rail",
  slot,
  className,
  style,
}: AdSlotProps): JSX.Element {
  const isBrowser = useIsBrowser();
  const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();

  // 只在正式站投放。localhost 与预览环境的展示会被 Google 记为无效流量，
  // 站点域名从 docusaurus.config.js 的 url 读取，不另外硬编码一份。
  const siteHost = new URL(siteConfig.url).hostname;
  const live = Boolean(slot) && isBrowser && window.location.hostname === siteHost;

  useEffect(() => {
    if (!live) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // 脚本被拦截或尚未加载完成，忽略
    }
  }, [live, pathname]);

  return (
    <aside
      className={clsx(styles.adSlot, styles[variant], className)}
      style={style}
      // 广告不属于文档正文，给屏幕阅读器一个本地化的地标名
      aria-label={translate({ id: "ad.label", message: "广告" })}
    >
      <span className={styles.label}>
        <Translate
          id="ad.label"
          description="Label shown above an advertisement slot"
        >
          广告
        </Translate>
      </span>
      <div className={clsx(styles.body, live && styles.live)}>
        {live ? (
          <ins
            // Docusaurus 是 SPA：换页时组件复用，而被填过广告的 <ins>
            // 再 push 会报 "already have ads in them" 并留下空位。
            // key 跟着路径变，强制 React 换一个干净的元素。
            key={pathname}
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client={AD_CLIENT}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <Placeholder variant={variant} />
        )}
      </div>
    </aside>
  );
}

// 开发与预览环境下的占位块，顺带显示实际可用尺寸，便于判断能投什么规格
function Placeholder({ variant }: { variant: "rail" | "inline" }): JSX.Element {
  const boxRef = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState("");
  useEffect(() => {
    const el = boxRef.current?.parentElement;
    if (!el) return;
    const measure = () =>
      setSize(`${Math.round(el.clientWidth)} × ${Math.round(el.clientHeight)}`);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [variant]);
  return (
    <span ref={boxRef} className={styles.placeholderText}>
      {size}
    </span>
  );
}
