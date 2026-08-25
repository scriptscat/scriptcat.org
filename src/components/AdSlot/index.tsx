import { useEffect, useRef, useState } from "react";
import type { CSSProperties, JSX } from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

// 广告位组件。目前只渲染占位块：AdSense 审核通过、拿到 client / slot id 之前，
// 真实的 <ins class="adsbygoogle"> 不能上线，否则会被判为无效展示。
// 接入方式见文件末尾的注释。
export interface AdSlotProps {
  /** rail = 文档右栏钉底位（300×250），inline = 正文内位（响应式横条） */
  variant?: "rail" | "inline";
  /** AdSense 广告单元 id，未配置时渲染占位块 */
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
  // MOCKUP ONLY: 把实际可用宽度渲染出来，方便判断能放下哪种广告尺寸
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<string>("");
  useEffect(() => {
    const el = boxRef.current;
    if (!el || slot) return;
    const measure = () =>
      setSize(`${Math.round(el.clientWidth)} × ${Math.round(el.clientHeight)}`);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [slot]);
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
      <div className={styles.body} ref={boxRef}>
        {slot ? (
          // TODO(adsense): 替换为
          // <ins className="adsbygoogle" data-ad-client="ca-pub-xxx" data-ad-slot={slot} />
          // 并在 docusaurus.config.js 的 scripts 里挂 adsbygoogle.js
          <span className={styles.placeholderText}>{slot}</span>
        ) : (
          <span className={styles.placeholderText}>{size}</span>
        )}
      </div>
    </aside>
  );
}
