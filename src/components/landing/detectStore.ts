import { useEffect, useState } from "react";

// Which extension store — if any — this browser can install ScriptCat from.
//
// The question is not "what browser is this" but "can this browser install
// ScriptCat in one click", and the two differ more than you'd expect: 360, QQ
// and Sogou are Chromium and report a near-identical Chrome UA, yet can't
// reach the Chrome Web Store; every iOS browser is Safari underneath and can't
// run extensions at all regardless of its branding. Guessing wrong sends
// someone to a store page that cannot help them, so anything we can't
// positively confirm resolves to "unknown" and the UI falls back to the
// install guide.

export type StoreKey = "chrome" | "edge" | "firefox";
export type InstallTarget = StoreKey | "unknown";

// Chromium skins that report a Chrome UA but can't use the Chrome Web Store.
// Must be tested before the Chrome branch below.
const SKINS =
  /QQBrowser\/|MetaSr|LBBROWSER|2345Explorer|Maxthon|UBrowser\/|UCBrowser\/|MiuiBrowser|HuaweiBrowser|HeyTapBrowser|VivoBrowser|SamsungBrowser|baidubrowser|BIDUBrowser|TheWorld|Quark/i;

// iOS forces every browser onto Safari's engine, so Chrome/Edge/Firefox for
// iOS can't run extensions either.
const IOS = /iPhone|iPad|iPod|CriOS\/|EdgiOS\/|FxiOS\//i;

// Opera needs the "Install Chrome Extensions" addon before the Chrome Web
// Store works, which disqualifies it as a one-click target.
const OPERA = /OPR\/|Opera/i;

// 360 strips its UA down to look like plain Chrome, so sniffing its private
// plugin is the only tell. Best-effort: this catches 360 Secure Browser but
// not 360 Extreme. The Extreme probe (application/vnd.chromium.remoting-viewer)
// is deliberately omitted — real Chrome exposes that same mimeType once Chrome
// Remote Desktop is installed, and misfiring on Chrome costs more than missing
// 360 Extreme.
function is360(): boolean {
  try {
    return !!navigator.mimeTypes?.namedItem?.("application/360softmgrplugin");
  } catch {
    return false;
  }
}

export function detectInstallTarget(): InstallTarget {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (IOS.test(ua) || SKINS.test(ua) || OPERA.test(ua) || is360()) {
    return "unknown";
  }
  // EdgeHTML Edge (2015–2021) carries a Chrome/ token but predates the
  // Chromium rewrite, so it would otherwise be mistaken for Chrome below.
  if (/Edge\//.test(ua)) return "unknown";
  // Desktop Edge is Edg/, Android Edge is EdgA/ — both take the same store.
  // (EdgiOS is already out via the iOS check.)
  if (/Edg\/|EdgA\//.test(ua)) return "edge";
  if (/Firefox\//.test(ua)) return "firefox";
  // Brave, Vivaldi and Arc land here alongside Chrome. That's the right answer
  // rather than a consolation prize: all three ship the Chrome Web Store, so
  // there's nothing to gain by telling them apart.
  if (/Chrome\//.test(ua)) return "chrome";
  return "unknown";
}

// A static build has no request UA, so the first paint renders the "unknown"
// fallback and this refines it on mount. Pessimistic on purpose: defaulting to
// Chrome (as this once did) silently told every unrecognised browser to
// install from a store it may not even be able to open.
export function useInstallTarget(): InstallTarget {
  const [target, setTarget] = useState<InstallTarget>("unknown");
  useEffect(() => setTarget(detectInstallTarget()), []);
  return target;
}
