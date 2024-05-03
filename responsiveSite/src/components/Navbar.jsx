import navbarLogo from "../../public/navbarLogo.png";
import searchLogo from "../../public/searchLogo.png";
import backArrow from "../../public/backArrow.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    console.log(matches);
  }, []);
  const navStyle = {
    height: "72px",
    paddingInline: "72px",
    position: "sticky",
    background: "#fff",
    top: "0",
    left: "0",
    zIndex: "1",
    display: matches ? "flex" : "none",
  };

  return (
    <>
      <div
        style={navStyle}
        className="align-items-center justify-content-between"
      >
        <img
          src={navbarLogo}
          alt=""
          style={{ width: "162.57px", height: "24px" }}
          className=""
        />
        <div
          type="text"
          style={{
            height: "42px",
            width: "360px",
            borderWidth: "0",
            background: "#F1F3F5",
            borderRadius: "21px",
            padding: "10px 14px",
          }}
          className="d-flex align-items-center"
        >
          <img
            src={searchLogo}
            alt=""
            style={{ height: "22px", width: "22px" }}
          />
          <input
            type="text"
            style={{
              height: "19px",
              width: "242px",
              marginLeft: "14px",
              outline: "none",
              border: "none",
              background: "#F1F3F5",
            }}
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="d-flex align-items-center">
          Create account.{" "}
          <p style={{ color: "blue", fontSize: "16px", margin: "0" }}>
            It{`'`}s free!
          </p>
        </div>
      </div>
      <div
        className="d-md-none d-sm-block"
        style={{
          color: "#fff",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
        }}
      >
        <div className="d-flex justify-content-between px-5 mt-3">
          <div className="cursor-pointer">
            <img src={backArrow} alt="" />
          </div>
          <div className="px-3 py-1 border rounded">Join Group</div>
        </div>
      </div>
    </>
  );
}
