import { socialLinks } from '@/data/site';
import styles from '@/styles/chrome.module.css';

/**
 * 绘制单个社交平台图标。
 * @param {{ id: string }} props
 * @returns {JSX.Element|null}
 */
function SocialIcon({ id }) {
  const common = {
    viewBox: '0 0 24 24',
    width: 16,
    height: 16,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };

  if (id === 'x') {
    return (
      <svg {...common}>
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    );
  }

  if (id === 'linkedin') {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v6M8 8h.01M12 17v-3.5a2 2 0 114 0V17" />
      </svg>
    );
  }

  if (id === 'instagram') {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === 'youtube') {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="10" rx="3" />
        <path d="M11 10.5v3l3-1.5-3-1.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return null;
}

/**
 * 可跳转的社交媒体图标组。
 * @param {{ variant?: 'rail'|'row' }} props
 * @returns {JSX.Element}
 */
export default function SocialWidget({ variant = 'row' }) {
  const className = variant === 'rail' ? styles.rail : styles.socialRow;

  return (
    <div className={className} aria-label="Vendrglobex on social platforms">
      {socialLinks.map((item) => (
        <a key={item.id} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
          <SocialIcon id={item.id} />
        </a>
      ))}
    </div>
  );
}
