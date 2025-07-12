import React, { useEffect } from "react";

// 全局语言检测和重定向函数
function detectAndRedirectLanguage() {
  // 检查是否已经执行过重定向，避免无限循环
  if (localStorage.getItem("redirected")) {
    return;
  }

  // 标记已执行重定向
  localStorage.setItem("redirected", "true");

  // 获取用户首选语言
  const userLanguages = navigator.languages || [navigator.language];

  // 检查是否包含中文语言
  const hasChinese = userLanguages.some(
    (lang) =>
      lang.toLowerCase().includes("zh") || lang.toLowerCase().includes("cn")
  );

  // 只有非中文用户才需要重定向到英文版本
  // 中文用户保持在默认中文路径
  if (!hasChinese) {
    // 获取当前路径（去除开头的 /）
    // 如果当前路径是英文版本，直接使用
    if (window.location.pathname.startsWith("/en/")) {
      return; // 已经在英文版本，不需要重定向
    }
    const currentPath = window.location.pathname.replace(/^\//, "");
    const search = window.location.search;
    const hash = window.location.hash;

    // 构建英文版本的路径
    let englishPath = "/en/";
    if (currentPath && currentPath !== "") {
      englishPath += currentPath;
    }

    // 保持查询参数和锚点
    const fullPath = englishPath + search + hash;

    // 跳转到英文版本
    window.location.href = fullPath;
  } else {
    // 中文用户重定向到默认中文路径
    if (window.location.pathname.startsWith("/en/")) {
      // 如果当前路径是英文版本，重定向到中文版本
      const currentPath = window.location.pathname.replace(/^\/en\//, "/");
      const search = window.location.search;
      const hash = window.location.hash;

      // 构建中文版本的路径
      const chinesePath = currentPath + search + hash;

      // 跳转到中文版本
      window.location.href = chinesePath;
    }
  }
}

export default function Root({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 在客户端挂载时执行语言检测和重定向
    detectAndRedirectLanguage();
  }, []);

  return <>{children}</>;
}
