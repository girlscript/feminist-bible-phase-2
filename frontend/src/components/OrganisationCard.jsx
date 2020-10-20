import React, { Component } from "react";
<<<<<<< HEAD
import "../css/components/organisationCard.scss";
import org_logo from "../images/amazon.png";

class OrganisationCard extends Component {
    render(){
        return (
            <div className="orgCard__container">
                <div className="orgCard__logo">
                    <img
                        src = {org_logo}
                        className="orgCard__logoimg"/>
                </div>
                <div className="orgCard__text-container">
                    <p className="orgCard__heading-text">
                        Amazon Open Source
                    </p>
                    <div className="orgCard__subtext">
                        <p>
                            Authorization library that supports 
                            access control models like ACL, RBAC, ABAC.
                        </p>
                        <a>
                            <u>
                                Learn more
                            </u>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrganisationCard;
=======
import org_logo from "../images/homepage/partners-logo/amazon.png";

class OrganisationCard extends Component {
  render() {
    return (
      <div className="orgCard__container">
        <div className="orgCard__logo">
          <img src={org_logo} className="orgCard__logoimg" />
        </div>
        <div className="orgCard__text-container">
          <p className="orgCard__heading-text">Amazon Open Source</p>
          <p className="orgCard__sub-text">
            Authorization library that supports access control models like ACL,
            RBAC, ABAC.
          </p>
          <a className="orgCard__link">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
export default OrganisationCard;
>>>>>>> f68093d311867f4adce6db88de5c0631260d8d8f
