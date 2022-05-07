import Slider from "react-slick";
import "./Carousel.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Switch from "react-js-switch";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleAsset from "./SingleAsset";
import { setSearchQuery } from "../../../features/Assets/AssetsSlice";

const Carousel = () => {
  const { assets } = useSelector((state) => state.assets);
  const { searchQuery } = useSelector((state) => state.assets);
  const dispatch = useDispatch();
  console.log(assets);

  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel">
      <div className="carousel__header">
        <div className="carousel__header-left">
          <div className="carousel__header-add">
            <AiOutlinePlusCircle />
            <span>add assets</span>
          </div>
          <div className="carousel__header-switcher"></div>
          <Switch value={isSwitchOn} onChange={switch_onChange_handle} />
          Staked only
        </div>

        <div className="carousel__search">
          <input
            type="text"
            placeholder="Search to Token"
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {assets &&
            assets
              .filter((asset) =>
                asset.title.toUpperCase().includes(searchQuery.toUpperCase())
              )
              .map((asset) => <SingleAsset asset={asset} key={asset.id} />)}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
