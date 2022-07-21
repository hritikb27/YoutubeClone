import { AiOutlineRight } from "react-icons/ai"

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()}><AiOutlineRight color="black" /></button>;
};

export default CustomRightArrow