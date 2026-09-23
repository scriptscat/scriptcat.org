import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";

// Beta 页面整体换成红色主题（主色、favicon、导航栏 logo），与扩展 Beta 版的红色图标保持一致。
// 主色和导航栏 logo 见 custom.css 的 body.beta-theme；Helmet 在离开页面时会撤掉这里的标签，其它页面不受影响。
export default function BetaTheme(): JSX.Element {
  const logoUrl = useBaseUrl("/img/logo-beta.png");
  return (
    <Head>
      <body className="beta-theme" />
      <link rel="icon" href={logoUrl} />
    </Head>
  );
}
