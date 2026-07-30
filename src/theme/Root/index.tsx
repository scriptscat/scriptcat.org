import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type { I18n } from "@docusaurus/types";

// 浏览器语言匹配不到任何已配置 locale 时的兜底语言
const FALLBACK_LOCALE = "en";

// 取语言标签的主子标签用于匹配：zh-Hans -> zh、ru-RU -> ru
function primarySubtag(tag: string) {
  return tag.split("-")[0].toLowerCase();
}

// 每个 locale 在 URL 上的前缀。默认 locale 挂在站点根路径上，没有前缀。
function localePrefix(i18n: I18n, locale: string) {
  return locale === i18n.defaultLocale ? "" : `/${i18n.localeConfigs[locale].path}`;
}

// 按 navigator.languages 的优先级顺序，挑出站点支持的 locale
function pickLocale(i18n: I18n) {
  const byPrimary = new Map<string, string>();
  for (const locale of i18n.locales) {
    const key = primarySubtag(locale);
    // 同一主子标签下先配置的优先（如 zh-Hans 之后再加 zh-Hant 时不会被覆盖）
    if (!byPrimary.has(key)) {
      byPrimary.set(key, locale);
    }
  }

  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of preferred) {
    const hit = lang && byPrimary.get(primarySubtag(lang));
    if (hit) {
      return hit;
    }
  }

  return i18n.locales.includes(FALLBACK_LOCALE)
    ? FALLBACK_LOCALE
    : i18n.defaultLocale;
}

// 拆出路径里的 locale 前缀。默认 locale 没有前缀，所以匹配不到就是默认 locale。
// rest 始终以 / 开头，用于拼接目标 locale 的前缀。
function splitLocale(i18n: I18n, pathname: string) {
  for (const locale of i18n.locales) {
    const prefix = localePrefix(i18n, locale);
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      return { locale, rest: pathname.slice(prefix.length) || "/" };
    }
  }
  return { locale: i18n.defaultLocale, rest: pathname };
}

// 首次访问时按浏览器语言跳到对应语言版本，之后一直尊重用户自己选的语言。
// 注意必须先拆掉当前路径上已有的 locale 前缀再拼新的，否则从搜索引擎直接进
// /ru/xxx 的非中文用户会被拼成 /en/ru/xxx 这样的 404 路径。
function detectAndRedirectLanguage(i18n: I18n) {
  let redirected: boolean;
  try {
    redirected = Boolean(localStorage.getItem("redirected"));
    localStorage.setItem("redirected", "true");
  } catch {
    // 隐私模式下 localStorage 不可用，记不住“已重定向”，直接跳过自动重定向，
    // 否则每次访问都会把用户从手动选的语言上弹走
    return;
  }
  if (redirected) {
    return;
  }

  const target = pickLocale(i18n);
  const { locale: current, rest } = splitLocale(i18n, window.location.pathname);
  if (current === target) {
    return;
  }

  // 用 replace 而不是赋值 href，避免重定向前的地址留在历史记录里，导致点返回又被弹走
  window.location.replace(
    localePrefix(i18n, target) + rest + window.location.search + window.location.hash
  );
}

export default function Root({ children }: { children: React.ReactNode }) {
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    // 在客户端挂载时执行语言检测和重定向
    detectAndRedirectLanguage(i18n);
  }, [i18n]);

  return <>{children}</>;
}
