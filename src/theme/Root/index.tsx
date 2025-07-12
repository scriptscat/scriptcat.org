import React, { useEffect } from 'react';

// 全局语言检测和重定向函数
function detectAndRedirectLanguage() {
  // 检查是否已经在英文路径下
  if (window.location.pathname.startsWith('/en/')) {
    return;
  }

  // 检查是否已经执行过重定向，避免无限循环
  if (sessionStorage.getItem('redirected')) {
    return;
  }

  // 获取用户首选语言
  const userLanguages = navigator.languages || [navigator.language];
  
  // 检查是否包含中文语言
  const hasChinese = userLanguages.some(lang => 
    lang.toLowerCase().includes('zh') || 
    lang.toLowerCase().includes('cn')
  );

  // 标记已执行重定向
  sessionStorage.setItem('redirected', 'true');

  // 只有非中文用户才需要重定向到英文版本
  // 中文用户保持在默认中文路径
  if (!hasChinese) {
    // 获取当前路径（去除开头的 /）
    const currentPath = window.location.pathname.replace(/^\//, '');
    const search = window.location.search;
    const hash = window.location.hash;
    
    // 构建英文版本的路径
    let englishPath = '/en/';
    if (currentPath && currentPath !== '') {
      englishPath += currentPath;
    }
    
    // 保持查询参数和锚点
    const fullPath = englishPath + search + hash;
    
    // 跳转到英文版本
    window.location.href = fullPath;
  }
}

export default function Root({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 在客户端挂载时执行语言检测和重定向
    detectAndRedirectLanguage();
  }, []);

  return <>{children}</>;
}
