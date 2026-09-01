import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <button
          className="menu-button"
          type="button"
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>

        <div className="brand-logo">
          B
        </div>

      </div>

    </header>
  );
}

export default Header;