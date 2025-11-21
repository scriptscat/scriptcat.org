import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme(): { theme: Theme } {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // 获取初始主题
    const getTheme = (): Theme => {
      const htmlElement = document.documentElement;
      const dataTheme = htmlElement.getAttribute('data-theme');
      return dataTheme === 'dark' ? 'dark' : 'light';
    };

    // 设置初始主题
    setTheme(getTheme());

    // 创建 MutationObserver 来监听 data-theme 属性变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          const newTheme = getTheme();
          setTheme(newTheme);
        }
      });
    });

    // 开始观察 html 元素的属性变化
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // 清理函数
    return () => {
      observer.disconnect();
    };
  }, []);

  return { theme };
}
