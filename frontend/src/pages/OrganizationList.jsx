import React, { Component } from "react";

//style
import "../css/pages/org-list.scss";

//Components
import OrganizationCard from "../components/OrganisationCard.jsx";

class OrganizationList extends Component {
  render() {
    return (
      <>
        <div className="org-list-page">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <h1 className="org-list-page__heading">
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

export default OrganizationList;
