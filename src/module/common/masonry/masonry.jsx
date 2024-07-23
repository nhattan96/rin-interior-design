import Masonry from "react-masonry-css";
import "./masonry.css";

const MasonryLayout = ({ items }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item, index) => (
        <div key={index} className="masonry-item">
          <img src={item} alt={`Item ${index}`} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
