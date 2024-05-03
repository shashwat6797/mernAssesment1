import banner from "../../public/b.jpeg";

function Banner() {
  return (
    <div
      className="banner d-flex"
      style={{
        height: "440px",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgb(0,0,0,.6)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className=" mx-5 d-flex align-items-end">
        <div
          style={{
            color: "#fff",
            fontSize: "36px",
            fontFamily: "--bs-font-family-base ",
            fontWeight: "bold",
            marginBottom: "80px",
          }}
        >
          Computer Engineering <br />
          <p
            style={{
              color: "#fff",
              fontSize: "18px",
              fontFamily: "--bs-font-family-base ",
              fontWeight: "lighter",
            }}
          >
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
