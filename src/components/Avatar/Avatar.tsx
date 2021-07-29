import React, { useState } from "react";
import AvatarIcon from "../../icons/AvatarIcon";

interface AvatarProps {
  src: string;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  const [showLoader, setLoader] = useState(true);
  const removeLoader = () => {
    setLoader(false);
  };
  const imageClasses = showLoader ? "hide" : "";
  return (
    <>
      {showLoader && <AvatarIcon />}
      <img
        src={src}
        alt="avatar"
        onLoad={removeLoader}
        className={imageClasses}
      />
    </>
  );
};

export default Avatar;
