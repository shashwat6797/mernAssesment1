import FeedNav from "./FeedNav";
import Post from "./Post";
import img1 from "../../public/postImg1.jpeg";
import postData from "../assets/posts";
import location from "../../public/location.png";
import pen from "../../public/pen.png";
import note from "../../public/note.png";
import { useState, useEffect } from "react";

function Feed() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    console.log(matches);
  }, []);

  const sideStyle = {
    display: matches ? "none" : "block",
  };
  const feedStyle = {
    maxWidth: "1080px",
    margin: "auto",
    minWidth: `min(100vw,1080px)`,
  };
  return (
    <div className="" style={feedStyle}>
      <div style={{ fontFamily: "--bs-font-family-base", margin: "0" }}>
        <FeedNav />
        <div
          className="row d-flex justify-content-between align-items-start mt-3"
          style={{ maxWidth: "100vw" }}
        >
          <div className="col-md-8 col-sm-12 p-0" style={{ maxWidth: "100vw" }}>
            {postData.map((i) => (
              <Post key={i.id} coverImg={img1} data={i} />
            ))}
          </div>
          <div style={sideStyle} className="col-3 d-md-block d-sm-none">
            <div className="d-flex p-2 border-bottom justify-content-between align-items-center">
              <div
                className="d-flex p-0 align-items-center"
                style={{ fontSize: "14px" }}
              >
                <img
                  src={location}
                  alt=""
                  style={{
                    height: "18px",
                    width: "18px",
                    objectFit: "contain",
                  }}
                />
                Noida, India
              </div>
              <img
                src={pen}
                alt=""
                style={{ height: "20px", width: "20px", objectFit: "contain" }}
              />
            </div>
            <div className="d-flex gap-2 mt-3">
              <img
                src={note}
                alt=""
                style={{ height: "16px", width: "16px", objectFit: "contain" }}
              />
              <div style={{ fontSize: "12px", color: "#868E96" }}>
                Your location will help us serve better and extend a
                personalised experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
