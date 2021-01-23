import React, { Component } from "react";
import org_logo from "../../images/homepage/partners-logo/amazon.png";

//styling
import style from "./organisation-card.module.scss";

export class OrganizationCard extends Component {
  render() {
    return (
      <div className={style["orgCard__container"]}>
        <div className={style["orgCard__logo"]}>
          <img src={org_logo} className={style["orgCard__logoimg"]} alt="organization logo"/>
        </div>
        <div className={style["orgCard__text-container"]}>
          <p className={style["orgCard__heading-text"]}>Amazon Open Source</p>
          <p className={style["orgCard__sub-text"]}>
            Authorization library that supports access control models like ACL,
            RBAC, ABAC.
          </p>
          <a className={style["orgCard__link"]} href="placeholder">Learn more</a>
        </div>
      </div>
    );
  }
}
