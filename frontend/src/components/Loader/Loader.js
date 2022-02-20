import React from "react";
import localclasses from "./Loader.module.css";
import { ThreeDLoader  } from "react-awesome-loaders";
function Loader() {
  return (
    <div className={localclasses.load}>
      <ThreeDLoader
        colorRing1={"#99004d"}
        colorRing2={"#000000"}
        desktopSize={"100px"}
        mobileSize={"64px"}
      />
    </div>
  );
}
export default Loader;
