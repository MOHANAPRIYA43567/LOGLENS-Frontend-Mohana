import { FiTerminal } from "react-icons/fi";

function Header() {
  return (
    <header className="header">

      <div className="header-brand">
        <span className="eyebrow">
          <FiTerminal />
          security log analysis
        </span>
        <h1>LogLens</h1>
      </div>

      

    </header>
  );
}

export default Header;