import type { JSX } from "react";
import Desktop from "@theme-original/DocItem/TOC/Desktop";
import type DesktopType from "@theme/DocItem/TOC/Desktop";
import type { WrapperProps } from "@docusaurus/types";
import AdSlot from "@site/src/components/AdSlot";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof DesktopType>;

// 右栏 = 吸顶 flex 栏：目录在上方独立滚动，广告钉在栏底。
// 主题自带的 TOC 本身就是 sticky + max-height + overflow-y:auto，
// 直接把广告接在它后面会掉进目录的内部滚动区，目录一长就永远看不到，
// 所以这里把吸顶与限高上提到外层，目录只保留内部滚动（见 styles.module.css）。
export default function DocItemTOCDesktopWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.rail}>
      <div className={styles.tocScroll}>
        <Desktop {...props} />
      </div>
      <AdSlot variant="rail" className={styles.railAd} />
    </div>
  );
}
