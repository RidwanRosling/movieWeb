import { Sling as Hamburger } from "hamburger-react";
import { Children, useState } from "react";
import logo from "../assets/logo.png";
export default function Navbar({ setQuery }) {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(() => !isOpen);
  }
  function handleSearch(event) {
    event.preventDefault();
    const query = event.target.querySelector("input").value;
    setQuery(query);
    event.target.reset(); // Reset input setelah pencarian
    console.log(query);
  }

  const sign_in_Style = {
    color: "black",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: "2rem",
  };

  return (
    <div className={`main-content ${isOpen ? "shifted" : ""}`}>
      <nav className="navbar">
        <LeftSection>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <Logo />
        </LeftSection>
        <SearchForm handleSearch={handleSearch} />

        <Login sign_in_Style={sign_in_Style} />
      </nav>

      {/* konten lain di sini */}
      {isOpen && <ListMenu />}
    </div>
  );
}

function LeftSection({ children }) {
  return <div className="left-section">{children}</div>;
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

function SearchForm({ handleSearch }) {
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input type="text" placeholder="Search..." />
    </form>
  );
}

function Login({ sign_in_Style }) {
  return (
    <div className="login">
      <span style={sign_in_Style}>Sign in</span>
    </div>
  );
}

function ListMenu() {
  return (
    <div className="list-menu">
      <ul>
        <li>saved</li>
        <li>trending</li>
        <li>genre</li>
      </ul>
    </div>
  );
}
