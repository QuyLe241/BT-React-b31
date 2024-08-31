import React from "react";
import Modal from "../../public/ImgGlasses/model.jpg";
import GlassesV1 from "../../public/ImgGlasses/v1.png";

const BaiTapThuKinh = () => {
  const styleGlasses = {
    width: "150px",
    top: "117px",
    right: "116px",
    opacity: "0.6",
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(./public/ImgGlasses/background.jpg)",
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className=""
        style={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: "100vh" }}
      >
        <h3
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          className="text-center text-white p-5"
        >
          TRY GLASSES APP ONLINE
        </h3>
        <div className="container">
          <div className="row text-center">
            <div className="col-6">
              <div className="position-relative">
                <img
                  src={Modal}
                  alt=""
                  style={{ width: "250px" }}
                  className="mt-5 position-absolute"
                />
                <img
                  src={GlassesV1}
                  style={styleGlasses}
                  className="position-absolute"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <img
                src={Modal}
                alt=""
                style={{ width: "250px" }}
                className="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapThuKinh;
