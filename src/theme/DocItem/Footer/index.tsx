import type { JSX } from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";
import AdSlot from "@site/src/components/AdSlot";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof FooterType>;

// 正文位：接在文章正文之后、标签/编辑信息之前。
// 右栏的钉底位在 <=996px 和无目录页面上都不渲染，这里是唯一覆盖移动端的广告位。
export default function DocItemFooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <AdSlot variant="inline" slot="9840842280" className={styles.inlineAd} />
      <Footer {...props} />
    </>
  );
}
