import { useEffect, useState } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

type Scenario = 'allowUserScripts' | 'devMode' | 'legacy' | 'nonChromium';

interface ScenarioText {
  title: string;
  description: string;
  button?: string;
  anchor?: string;
}

interface BrowserGuideProps {
  texts: Record<Scenario, ScenarioText>;
}

interface BrowserInfo {
  isChromiumBased: boolean;
  isEdge: boolean;
  engineVersion: number;
}

export default function BrowserGuide({ texts }: BrowserGuideProps) {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    import('react-device-detect').then((rdd) => {
      setBrowserInfo({
        isChromiumBased: rdd.engineName === 'Blink',
        isEdge: rdd.isEdge || rdd.isEdgeChromium,
        engineVersion: parseInt(rdd.engineVersion, 10) || 0,
      });
    });
  }, []);

  // Auto-select browser tab via query string
  useEffect(() => {
    if (!browserInfo || !browserInfo.isChromiumBased) return;
    const params = new URLSearchParams(location.search);
    if (params.has('browser')) return;
    params.set('browser', browserInfo.isEdge ? 'edge' : 'chrome');
    history.replace({
      pathname: location.pathname,
      search: '?' + params.toString(),
      hash: location.hash,
    });
  }, [browserInfo, location.search, history]);

  if (!browserInfo) return null;

  // URL ?browser= param takes priority over auto-detection
  const params = new URLSearchParams(location.search);
  const urlBrowser = params.get('browser');
  let browserType: 'edge' | 'chrome' | null = null;
  if (urlBrowser === 'edge' || urlBrowser === 'chrome') {
    browserType = urlBrowser;
  } else if (browserInfo.isEdge) {
    browserType = 'edge';
  } else if (browserInfo.isChromiumBased) {
    browserType = 'chrome';
  }

  let scenario: Scenario;
  if (!browserType) {
    scenario = 'nonChromium';
  } else if (browserType === 'edge') {
    if (browserInfo.engineVersion >= 144) {
      scenario = 'allowUserScripts';
    } else if (browserInfo.engineVersion >= 120) {
      scenario = 'devMode';
    } else {
      scenario = 'legacy';
    }
  } else {
    if (browserInfo.engineVersion >= 138) {
      scenario = 'allowUserScripts';
    } else if (browserInfo.engineVersion >= 121) {
      scenario = 'devMode';
    } else {
      scenario = 'legacy';
    }
  }

  const text = texts[scenario];

  return (
    <div className={`${styles.banner} ${styles[scenario]}`}>
      <div className={styles.title}>{text.title}</div>
      <div className={styles.description}>{text.description}</div>
      {text.button && text.anchor && (
        <a className={styles.button} href={text.anchor}>
          {text.button}
        </a>
      )}
    </div>
  );
}
