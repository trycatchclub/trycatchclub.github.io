import "./Header.scss";

export default function Header({ children, className }) {
  return (
    <div className={`custom-header ${className}`}>
      <strong>{`{`}</strong>
      {children}
      <strong>{`}`}</strong>
    </div>
  );
}
