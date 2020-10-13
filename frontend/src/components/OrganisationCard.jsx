import React, { Component } from "react";
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