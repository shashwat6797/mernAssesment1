import views from "../../public/views.png";
import dateImg from "../../public/date.png";
import share from "../../public/share.png";
import location from "../../public/location.png";
import briefcase from "../../public/briefcase.png";
import Options from "./Options";

function Post({ coverImg, data }) {
  const url = `../../public/${data.postImg}.jpeg`;
  const userUrl = `../../public/${data.userImg}.jpeg`;
  return (
    <div className="mb-2">
      {" "}
      <div className="card" style={{ width: "100%" }}>
        {data.postImg !== "" ? (
          <div
            style={{
              height: "220px",
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ) : (
          <div></div>
        )}
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: "--bs-font-family-base" }}
          >
            {data.type}
          </h5>
          <br />
          <div className="d-flex row justify-content-between">
            <div
              className="card-title col-10"
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                textWrap: "wrap",
                overflow: "hidden",
              }}
            >
              {data.title}
            </div>
            <div className="col-2 d-flex justify-content-end">
              <Options />
            </div>
          </div>
          {data.date !== "" ? (
            <div>
              <div
                className="d-flex gap-5 align-items-center justify-content-start"
                style={{ fontWeight: "700" }}
              >
                <div
                  className="d-flex justify-content-center"
                  style={{ fontSize: "15px" }}
                >
                  <img
                    src={dateImg}
                    alt=""
                    style={{
                      height: "20px",
                      width: "20px",
                      objectFit: "cover",
                    }}
                  />
                  {data.date}
                </div>
                <div className="mr-3" style={{ fontSize: "15px" }}>
                  <img
                    src={location}
                    alt=""
                    style={{
                      height: "20px",
                      width: "20px",
                      objectFit: "contain",
                    }}
                  />
                  {data.location}
                </div>
              </div>
              <br />
              <div
                className=" p-2 d-flex justify-content-center"
                style={{
                  color: "#E56135",
                  fontWeight: "700",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border: "solid #CED4DA 1px",
                }}
              >
                Visit Website
              </div>
            </div>
          ) : (
            <p className="text-secondary">{""}</p>
          )}
          {data.job !== "" ? (
            <div>
              <div
                className="d-flex gap-5 align-items-center justify-content-start"
                style={{ fontWeight: "700" }}
              >
                <div
                  className="d-flex justify-content-center"
                  style={{ fontSize: "15px" }}
                >
                  <img
                    src={briefcase}
                    alt=""
                    style={{
                      height: "20px",
                      width: "20px",
                      objectFit: "cover",
                    }}
                  />
                  {data.job}
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ fontSize: "15px" }}
                >
                  <img
                    src={location}
                    alt=""
                    style={{
                      height: "20px",
                      width: "20px",
                      objectFit: "contain",
                    }}
                  />
                  {data.location}
                </div>
              </div>
              <br />
              <div
                className=" p-2 d-flex justify-content-center"
                style={{
                  color: "#02B875",
                  fontWeight: "500",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border: "solid #CED4DA 1px",
                }}
              >
                Apply on Timesjobs
              </div>
            </div>
          ) : (
            <p className="text-secondary">{""}</p>
          )}
          {data.location === "" ? (
            <p className="text-secondary">{data.content}</p>
          ) : (
            <div></div>
          )}
          <div className="d-flex mt-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center text-align-center">
              <img
                src={userUrl}
                alt=""
                style={{
                  height: "48px",
                  width: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="m-2">{data.userName}</div>
            </div>
            <div className="d-flex align-items-start" style={{ gap: "40px" }}>
              <div>
                <img src={views} style={{ width: "95px", height: "18px" }} />
              </div>
              <div>
                <img src={share} style={{ width: "42px", height: "36px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
