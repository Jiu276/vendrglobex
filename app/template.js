/**
 * 路由切换时的淡入。
 * @param {{ children: import('react').ReactNode }} props
 * @returns {JSX.Element}
 */
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
