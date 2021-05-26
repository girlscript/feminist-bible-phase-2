import React, { Component } from 'react'
import style from './404NotFound.module.scss';
const notfound = require("../../images/not-found.jpg").default;


export class NotFound extends Component {
    render() {
        return (
        <div className={style["not-found-page"]}>
          <div className="grid-container">
            <div className="grid-x align-middle">
              <div className="cell large-12">
                <div className={style["not-found-page__image-wrapper"]}>
                    <img src={notfound}  alt="404 Not Found" className="not-found-page__main_image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default NotFound
