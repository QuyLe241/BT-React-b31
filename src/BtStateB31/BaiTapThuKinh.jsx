import React from "react";
import dataGlasses from "../Data/dataGlasses.json";
import Modal from "../../public/ImgGlasses/model.jpg";
import GlassesV1 from "../../public/ImgGlasses/v1.png";

const BaiTapThuKinh = () => {
  const renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <>
          <img src={glassesItem.url} style={{ width: "100px" }} alt="" />
        </>
      );
    });
  };

  const styleGlasses = {
    width: "150px",
    top: "80px",
    right: "116px",
    opacity: "0.6",
  };
  const infoGlasses = {
    width: "250px",
    top: "178px",
    left: "318px",
    paddingLeft: "10px",
    backgroundColor: "rgba(255,127,0,0.5)",
    textAlign: "left",
    height: "127px",
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
          className="text-center text-white p-3"
        >
          TRY GLASSES APP ONLINE
        </h3>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-6">
              <div className="position-relative">
                <img
                  src={Modal}
                  alt=""
                  style={{ width: "250px" }}
                  className=" position-absolute"
                />
                <img
                  src={GlassesV1}
                  style={styleGlasses}
                  className="position-absolute"
                  alt=""
                />
                <div
                  className="position-relative fw-bold text-white"
                  style={infoGlasses}
                >
                  <p className="">Tên kính:</p>
                  <p>Mô tả:</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={Modal} alt="" style={{ width: "250px" }} className="" />
            </div>
            <div className="bg-white container text-center mt-3">
              {renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapThuKinh;
