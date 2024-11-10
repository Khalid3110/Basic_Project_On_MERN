import { useState } from "react";

function LikeBtn() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "#fa0000" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
      <h5 style={{ color: "hotpink" }}>
        {isLiked ? "Thank You !" : "Click Me"}
      </h5>
    </>
  );
}

export default LikeBtn;
