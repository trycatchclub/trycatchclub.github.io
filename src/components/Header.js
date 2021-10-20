import "./Header.scss";

export default function Header({ children }) {
  return (
    <div className="custom-header">
      <strong>{`{`}</strong>
      {children}
      <strong>{`}`}</strong>
    </div>
  );
}
