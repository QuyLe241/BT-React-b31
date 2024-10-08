import React, { useState } from "react";
import Modal from "../../public/ImgGlasses/model.jpg";
import GlassesV1 from "../../public/ImgGlasses/v1.png";
import BackgroundImg from "../../public/ImgGlasses/background.jpg";
import "./style.css";

const BaiTapThuKinh = () => {
  const [glasses, setGlasses] = useState({
    url: GlassesV1,
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
  });

  const [selectedGlassesId, setSelectedGlassesId] = useState(1);

  const dataListGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "../../public/ImgGlasses/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "../../public/ImgGlasses/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "../../public/ImgGlasses/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "../../public/ImgGlasses/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "../../public/ImgGlasses/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "../../public/ImgGlasses/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "../../public/ImgGlasses/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "../../public/ImgGlasses/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "../../public/ImgGlasses/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  const handleGlassesChange = (glassesItem) => {
    setGlasses({
      url: glassesItem.url,
      name: glassesItem.name,
      desc: glassesItem.desc,
    });
    setSelectedGlassesId(glassesItem.id);
  };

  const renderGlassesList = () => {
    return dataListGlasses.map((glassesItem, index) => {
      const isSelected = glassesItem.id === selectedGlassesId;
      return (
        <img
          key={index}
          onClick={() => handleGlassesChange(glassesItem)}
          src={glassesItem.url}
          className={`mx-3 border p-2 rounded-2 ${
            isSelected ? "style_Glasses" : ""
          }`}
          style={{ width: "100px", cursor: "pointer" }}
          alt={glassesItem.name}
        />
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
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: "100vh" }}>
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
                  className="position-absolute"
                />
                <img
                  src={glasses.url}
                  style={styleGlasses}
                  className="position-absolute"
                  alt={glasses.name}
                />
                <div className="position-relative " style={infoGlasses}>
                  <p
                    className="fw-bold"
                    style={{ marginBottom: "1px", color: "#520a66" }}
                  >
                    Tên Kính: {glasses.name}
                  </p>
                  <p className="">Mô tả: {glasses.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={Modal} alt="" style={{ width: "250px" }} />
            </div>
            <div className="bg-white container text-center mx-1 mt-5 py-3">
              {renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapThuKinh;
