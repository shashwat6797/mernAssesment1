import join from "../../public/join.png";
import downArrow from "../../public/downArrow.png";

export default function FeedNav() {
  return (
    <>
      <div
        style={{ marginTop: "32px" }}
        className="d-md-block d-sm-none border-bottom"
      >
        <div
          style={{ padding: "15px 0px" }}
          className="d-flex justify-content-between align-items-center"
        >
          <div
            style={{ width: "358px" }}
            className="d-flex justify-content-between align-items-stretch"
          >
            <div
              style={{ color: "#000" }}
              className="border-bottom border-black"
            >
              All Posts(32)
            </div>
            <div>Article</div>
            <div>Event</div>
            <div>Education</div>
            <div>Job</div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="me-2"
              style={{
                background: "#EDEEF0",
                color: "#000",
                outline: "none",
                border: "none",
                padding: "8px 12px",
                fontWeight: "700",
                fontFamily: "--bs-font-family-base",
                borderRadius: "4px",
              }}
            >
              Write a Post
              <img src={downArrow} alt="" />
            </button>
            <button
              type="button"
              style={{
                background: "#2F6CE5",
                color: "#fff",
                outline: "none",
                border: "none",
                padding: "8px 12px",
                fontFamily: "--bs-font-family-base",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
              className="d-flex align-items-center"
            >
              <img src={join} alt="" className="me-2" />
              Join Group
            </button>
          </div>
        </div>
      </div>
      <div className="d-md-none d-sm-block mt-3" style={{ maxWidth: "95vw" }}>
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontWeight: "bold", color: "#000", margin: "0 8px" }}>
            Posts(364)
          </div>
          <div
            style={{
              background: "#F1F3F5",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Filter: All <img src={downArrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
