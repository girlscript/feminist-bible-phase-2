import React, { Component } from "react";

//Components
import {OrganizationCard} from "../../components/OrganisationCard/index";

//Style
import style from "./organization-list.module.scss"

export class OrganizationList extends Component {
  render() {
    return (
      <>
        <div className={style["org-list-page"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <h1 className={style["org-list-page__heading"]}>
                  Organization
                </h1>
              </div>

              <div className="cell large-4 medium-6">
                <OrganizationCard />
              </div>

              <div className="cell large-4 medium-6">
                <OrganizationCard />
              </div>

              <div className="cell large-4 medium-6">
                <OrganizationCard />
              </div>

              <div className="cell large-4 medium-6">
                <OrganizationCard />
              </div>

              <div className="cell large-4 medium-6">
                <OrganizationCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
