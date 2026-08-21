import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const baseDir = 'i18n';

const translations = {
  ar: {
    navbar: {
      "item.label.使用文档": "دليل الاستخدام",
      "item.label.开发文档": "وثائق المطورين",
      "item.label.更新日志": "سجل التغييرات",
      "item.label.脚本开发指南": "دليل تطوير السكربتات",
    },
    footer: {
      "link.title.Docs": "الوثائق",
      "link.title.Community": "المجتمع",
      "link.title.More": "المزيد",
      "link.item.label.使用指南": "دليل الاستخدام",
      "link.item.label.开发指南": "دليل المطورين",
      "link.item.label.油猴中文网": "منتدى Tampermonkey الصيني",
      "link.item.label.脚本猫脚本站": "موقع سكربتات ScriptCat",
      "copyright": "حقوق النشر © {year} ScriptCat, Inc. تم البناء باستخدام Docusaurus.",
    }
  },
  bn: {
    navbar: {
      "item.label.使用文档": "ব্যবহারের নির্দেশিকা",
      "item.label.开发文档": "ডেভেলপার ডকুমেন্টেশন",
      "item.label.更新日志": "পরিবর্তনের ইতিহাস",
      "item.label.脚本开发指南": "স্ক্রিপ্ট ডেভেলপমেন্ট গাইড",
    },
    footer: {
      "link.title.Docs": "ডকুমেন্টেশন",
      "link.title.Community": "কমিউনিটি",
      "link.title.More": "আরও",
      "link.item.label.使用指南": "ব্যবহারের নির্দেশিকা",
      "link.item.label.开发指南": "ডেভেলপার গাইড",
      "link.item.label.油猴中文网": "Tampermonkey চীনা ফোরাম",
      "link.item.label.脚本猫脚本站": "ScriptCat স্ক্রিপ্ট সাইট",
      "copyright": "কপিরাইট © {year} ScriptCat, Inc. Docusaurus দিয়ে তৈরি।",
    }
  },
  de: {
    navbar: {
      "item.label.使用文档": "Benutzerhandbuch",
      "item.label.开发文档": "Entwicklungsdokumentation",
      "item.label.更新日志": "Änderungsverlauf",
      "item.label.脚本开发指南": "Skriptentwicklungsguide",
    },
    footer: {
      "link.title.Docs": "Dokumentation",
      "link.title.Community": "Community",
      "link.title.More": "Mehr",
      "link.item.label.使用指南": "Benutzerhandbuch",
      "link.item.label.开发指南": "Entwicklungsguide",
      "link.item.label.油猴中文网": "Tampermonkey Chinesisches Forum",
      "link.item.label.脚本猫脚本站": "ScriptCat Skriptseite",
      "copyright": "Copyright © {year} ScriptCat, Inc. Erstellt mit Docusaurus.",
    }
  },
  es: {
    navbar: {
      "item.label.使用文档": "Guía de Uso",
      "item.label.开发文档": "Documentación para Desarrolladores",
      "item.label.更新日志": "Registro de Cambios",
      "item.label.脚本开发指南": "Guía de Desarrollo de Scripts",
    },
    footer: {
      "link.title.Docs": "Documentación",
      "link.title.Community": "Comunidad",
      "link.title.More": "Más",
      "link.item.label.使用指南": "Guía de Uso",
      "link.item.label.开发指南": "Guía de Desarrolladores",
      "link.item.label.油猴中文网": "Foro Chino de Tampermonkey",
      "link.item.label.脚本猫脚本站": "Sitio de Scripts de ScriptCat",
      "copyright": "Copyright © {year} ScriptCat, Inc. Construido con Docusaurus.",
    }
  },
  fa: {
    navbar: {
      "item.label.使用文档": "راهنمای استفاده",
      "item.label.开发文档": "مستندات توسعه‌دهندگان",
      "item.label.更新日志": "تاریخچه تغییرات",
      "item.label.脚本开发指南": "راهنمای توسعه اسکریپت",
    },
    footer: {
      "link.title.Docs": "مستندات",
      "link.title.Community": "جامعه",
      "link.title.More": "بیشتر",
      "link.item.label.使用指南": "راهنمای استفاده",
      "link.item.label.开发指南": "راهنمای توسعه‌دهندگان",
      "link.item.label.油猴中文网": "انجمن چینی Tampermonkey",
      "link.item.label.脚本猫脚本站": "سایت اسکریپت‌های ScriptCat",
      "copyright": "حق چاپ © {year} ScriptCat, Inc. ساخته شده با Docusaurus.",
    }
  },
  fr: {
    navbar: {
      "item.label.使用文档": "Guide d'utilisation",
      "item.label.开发文档": "Documentation développeur",
      "item.label.更新日志": "Journal des modifications",
      "item.label.脚本开发指南": "Guide de développement de scripts",
    },
    footer: {
      "link.title.Docs": "Documentation",
      "link.title.Community": "Communauté",
      "link.title.More": "Plus",
      "link.item.label.使用指南": "Guide d'utilisation",
      "link.item.label.开发指南": "Guide développeur",
      "link.item.label.油猴中文网": "Forum chinois Tampermonkey",
      "link.item.label.脚本猫脚本站": "Site de scripts ScriptCat",
      "copyright": "Copyright © {year} ScriptCat, Inc. Construit avec Docusaurus.",
    }
  },
  hy: {
    navbar: {
      "item.label.使用文档": "Օգտագործման ուղեցույց",
      "item.label.开发文档": "Մշակողի փաստաթղթեր",
      "item.label.更新日志": "Փոփոխությունների պատմություն",
      "item.label.脚本开发指南": "Սկրիպտների մշակման ուղեցույց",
    },
    footer: {
      "link.title.Docs": "Փաստաթղթեր",
      "link.title.Community": "Համայնք",
      "link.title.More": "Ավելին",
      "link.item.label.使用指南": "Օգտագործման ուղեցույց",
      "link.item.label.开发指南": "Մշակողի ուղեցույց",
      "link.item.label.油猴中文网": "Tampermonkey չինական ֆորում",
      "link.item.label.脚本猫脚本站": "ScriptCat սկրիպտների կայք",
      "copyright": "Հեղինակային իրավունք © {year} ScriptCat, Inc. Կառուցված է Docusaurus-ով։",
    }
  },
  id: {
    navbar: {
      "item.label.使用文档": "Panduan Penggunaan",
      "item.label.开发文档": "Dokumentasi Pengembang",
      "item.label.更新日志": "Riwayat Perubahan",
      "item.label.脚本开发指南": "Panduan Pengembangan Script",
    },
    footer: {
      "link.title.Docs": "Dokumentasi",
      "link.title.Community": "Komunitas",
      "link.title.More": "Lainnya",
      "link.item.label.使用指南": "Panduan Penggunaan",
      "link.item.label.开发指南": "Panduan Pengembang",
      "link.item.label.油猴中文网": "Forum Tampermonkey Tiongkok",
      "link.item.label.脚本猫脚本站": "Situs Script ScriptCat",
      "copyright": "Hak Cipta © {year} ScriptCat, Inc. Dibangun dengan Docusaurus.",
    }
  },
  it: {
    navbar: {
      "item.label.使用文档": "Guida all'uso",
      "item.label.开发文档": "Documentazione sviluppatore",
      "item.label.更新日志": "Cronologia modifiche",
      "item.label.脚本开发指南": "Guida allo sviluppo script",
    },
    footer: {
      "link.title.Docs": "Documentazione",
      "link.title.Community": "Community",
      "link.title.More": "Altro",
      "link.item.label.使用指南": "Guida all'uso",
      "link.item.label.开发指南": "Guida sviluppatore",
      "link.item.label.油猴中文网": "Forum cinese Tampermonkey",
      "link.item.label.脚本猫脚本站": "Sito script ScriptCat",
      "copyright": "Copyright © {year} ScriptCat, Inc. Costruito con Docusaurus.",
    }
  },
  ja: {
    navbar: {
      "item.label.使用文档": "使用ガイド",
      "item.label.开发文档": "開発者ドキュメント",
      "item.label.更新日志": "変更履歴",
      "item.label.脚本开发指南": "スクリプト開発ガイド",
    },
    footer: {
      "link.title.Docs": "ドキュメント",
      "link.title.Community": "コミュニティ",
      "link.title.More": "その他",
      "link.item.label.使用指南": "使用ガイド",
      "link.item.label.开发指南": "開発者ガイド",
      "link.item.label.油猴中文网": "Tampermonkey 中国語フォーラム",
      "link.item.label.脚本猫脚本站": "ScriptCat スクリプトサイト",
      "copyright": "Copyright © {year} ScriptCat, Inc. Docusaurus で構築。",
    }
  },
  ko: {
    navbar: {
      "item.label.使用文档": "사용 가이드",
      "item.label.开发文档": "개발자 문서",
      "item.label.更新日志": "변경 기록",
      "item.label.脚本开发指南": "스크립트 개발 가이드",
    },
    footer: {
      "link.title.Docs": "문서",
      "link.title.Community": "커뮤니티",
      "link.title.More": "더 보기",
      "link.item.label.使用指南": "사용 가이드",
      "link.item.label.开发指南": "개발자 가이드",
      "link.item.label.油猴中文网": "Tampermonkey 중국어 포럼",
      "link.item.label.脚本猫脚本站": "ScriptCat 스크립트 사이트",
      "copyright": "저작권 © {year} ScriptCat, Inc. Docusaurus로 제작.",
    }
  },
  nl: {
    navbar: {
      "item.label.使用文档": "Gebruiksgids",
      "item.label.开发文档": "Ontwikkelaarsdocumentatie",
      "item.label.更新日志": "Wijzigingslogboek",
      "item.label.脚本开发指南": "Scriptontwikkelingsgids",
    },
    footer: {
      "link.title.Docs": "Documentatie",
      "link.title.Community": "Community",
      "link.title.More": "Meer",
      "link.item.label.使用指南": "Gebruiksgids",
      "link.item.label.开发指南": "Ontwikkelaarsgids",
      "link.item.label.油猴中文网": "Tampermonkey Chinees Forum",
      "link.item.label.脚本猫脚本站": "ScriptCat Scriptsite",
      "copyright": "Copyright © {year} ScriptCat, Inc. Gebouwd met Docusaurus.",
    }
  },
  pt: {
    navbar: {
      "item.label.使用文档": "Guia de Uso",
      "item.label.开发文档": "Documentação do Desenvolvedor",
      "item.label.更新日志": "Histórico de Alterações",
      "item.label.脚本开发指南": "Guia de Desenvolvimento de Scripts",
    },
    footer: {
      "link.title.Docs": "Documentação",
      "link.title.Community": "Comunidade",
      "link.title.More": "Mais",
      "link.item.label.使用指南": "Guia de Uso",
      "link.item.label.开发指南": "Guia do Desenvolvedor",
      "link.item.label.油猴中文网": "Fórum Chinês Tampermonkey",
      "link.item.label.脚本猫脚本站": "Site de Scripts ScriptCat",
      "copyright": "Copyright © {year} ScriptCat, Inc. Construído com Docusaurus.",
    }
  },
  tr: {
    navbar: {
      "item.label.使用文档": "Kullanım Kılavuzu",
      "item.label.开发文档": "Geliştirici Belgeleri",
      "item.label.更新日志": "Değişiklik Günlüğü",
      "item.label.脚本开发指南": "Script Geliştirme Kılavuzu",
    },
    footer: {
      "link.title.Docs": "Belgeler",
      "link.title.Community": "Topluluk",
      "link.title.More": "Daha Fazla",
      "link.item.label.使用指南": "Kullanım Kılavuzu",
      "link.item.label.开发指南": "Geliştirici Kılavuzu",
      "link.item.label.油猴中文网": "Tampermonkey Çince Forum",
      "link.item.label.脚本猫脚本站": "ScriptCat Script Sitesi",
      "copyright": "Telif Hakkı © {year} ScriptCat, Inc. Docusaurus ile oluşturuldu.",
    }
  },
  uk: {
    navbar: {
      "item.label.使用文档": "Посібник користувача",
      "item.label.开发文档": "Документація розробника",
      "item.label.更新日志": "Журнал змін",
      "item.label.脚本开发指南": "Посібник з розробки скриптів",
    },
    footer: {
      "link.title.Docs": "Документація",
      "link.title.Community": "Спільнота",
      "link.title.More": "Більше",
      "link.item.label.使用指南": "Посібник користувача",
      "link.item.label.开发指南": "Посібник розробника",
      "link.item.label.油猴中文网": "Китайський форум Tampermonkey",
      "link.item.label.脚本猫脚本站": "Сайт скриптів ScriptCat",
      "copyright": "Авторське право © {year} ScriptCat, Inc. Побудовано за допомогою Docusaurus.",
    }
  },
  vi: {
    navbar: {
      "item.label.使用文档": "Hướng dẫn Sử dụng",
      "item.label.开发文档": "Tài liệu Phát triển",
      "item.label.更新日志": "Nhật ký Thay đổi",
      "item.label.脚本开发指南": "Hướng dẫn Phát triển Script",
    },
    footer: {
      "link.title.Docs": "Tài liệu",
      "link.title.Community": "Cộng đồng",
      "link.title.More": "Thêm",
      "link.item.label.使用指南": "Hướng dẫn Sử dụng",
      "link.item.label.开发指南": "Hướng dẫn Phát triển",
      "link.item.label.油猴中文网": "Diễn đàn Tampermonkey Trung Quốc",
      "link.item.label.脚本猫脚本站": "Trang web Script ScriptCat",
      "copyright": "Bản quyền © {year} ScriptCat, Inc. Xây dựng bằng Docusaurus.",
    }
  },
  "zh-Hant": {
    navbar: {
      "item.label.使用文档": "使用文件",
      "item.label.开发文档": "開發者文件",
      "item.label.更新日志": "更新記錄",
      "item.label.脚本开发指南": "腳本開發指南",
    },
    footer: {
      "link.title.Docs": "文件",
      "link.title.Community": "社群",
      "link.title.More": "更多",
      "link.item.label.使用指南": "使用指南",
      "link.item.label.开发指南": "開發者指南",
      "link.item.label.油猴中文网": "Tampermonkey 中文論壇",
      "link.item.label.脚本猫脚本站": "ScriptCat 腳本網站",
      "copyright": "版權 © {year} ScriptCat, Inc. 使用 Docusaurus 建置。",
    }
  },
};

// Keys that are the same across all locales
const navbarKeys = {
  title: { message: "ScriptCat", description: "The title in the navbar" },
  "logo.alt": { message: "ScriptCat", description: "The alt text of navbar logo" },
  "item.label.GitHub": { message: "GitHub", description: "Navbar item with label GitHub" },
};

const footerKeys = {
  "link.item.label.Discord": { message: "Discord", description: "The label of footer link with label=Discord linking to https://discord.gg/JF76nHCCM7" },
  "link.item.label.GitHub": { message: "GitHub", description: "The label of footer link with label=GitHub linking to https://github.com/scriptscat/scriptcat" },
};

for (const [locale, trans] of Object.entries(translations)) {
  const dir = join(baseDir, locale, 'docusaurus-theme-classic');
  mkdirSync(dir, { recursive: true });

  // Build navbar.json
  const navbar = { ...navbarKeys };
  for (const [key, value] of Object.entries(trans.navbar)) {
    navbar[key] = { message: value, description: `Navbar item with label ${key.split('.').pop()}` };
  }
  writeFileSync(join(dir, 'navbar.json'), JSON.stringify(navbar, null, 2) + '\r\n');

  // Build footer.json
  const footer = { ...footerKeys };
  for (const [key, value] of Object.entries(trans.footer)) {
    const desc = key.startsWith('link.title.')
      ? `The title of the footer links column with title=${key.split('.').pop()} in the footer`
      : key.startsWith('link.item.')
      ? `The label of footer link with label=${key.split('.').pop()}`
      : 'The footer copyright';
    footer[key] = { message: value, description: desc };
  }
  writeFileSync(join(dir, 'footer.json'), JSON.stringify(footer, null, 2) + '\r\n');

  console.log(`✅ ${locale}: navbar.json + footer.json`);
}

console.log(`\nDone! Generated 34 files for 17 locales.`);
