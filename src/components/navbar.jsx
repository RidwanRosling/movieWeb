import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import logo1 from "../assets/logo1.png";
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
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: "3rem",
    fontFamily: "Roboto, sans-serif",
    textDecoration: "none",
  };

  return (
    <div className={`main-content ${isOpen ? "shifted" : ""}`}>
      <Nav>
        <LeftSection>
          <Hamburger
            style={{ marginLeft: "2rem" }}
            toggled={isOpen}
            toggle={setOpen}
            color="white"
          />
          <Logo />
        </LeftSection>
        <SearchForm handleSearch={handleSearch} />

        <Login sign_in_Style={sign_in_Style} />
      </Nav>

      {/* konten lain di sini */}
      {isOpen && <ListMenu />}
    </div>
  );
}

function Nav({ children }) {
  return <nav className="navbar">{children}</nav>;
}

function LeftSection({ children }) {
  return <div className="left-section">{children}</div>;
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo1} alt="logo" />
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

function Login() {
  return (
    <div className="login">
      <span className="login-teks">Sign in</span>
    </div>
  );
}

function ListMenu() {
  return (
    <div className="list-menu">
      <ul>
        <li>saved</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>Trending</li>
        <li>Genre</li>
      </ul>
    </div>
  );
}
