import React from "react";

import style from "./avatar.module.scss";

export const Avatar = ({avatarSrc}) => {
  return (
        <img src={avatarSrc} className={style["avatar"]} alt="signed-in user"/>      
  )
}
