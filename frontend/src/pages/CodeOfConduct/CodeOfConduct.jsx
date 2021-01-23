import React, { Component } from "react";

// images
import hero_img from "../../images/code-of-conduct/hero_img.png";
import equity from "../../images/code-of-conduct/equity.png";
import life_choices from "../../images/code-of-conduct/life_choices.png";
import voice_matters from "../../images/code-of-conduct/voice_matters.png";

import style from "./codeofconduct.module.scss";

export class CodeOfConduct extends Component {
  render() {
    return (
      <div className={style.CodeofConduct}>
        <div className={style["hero-section"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-7">
                <div className={style["hero-section__wrap"]}>
                  <h1 className={style["hero-section__title"]}>
                    Community Guidelines and Code of Conduct
                  </h1>
                  <p className={style["hero-section__para"]}>
                    {" "}
                    Each community member(s), global citizen(s), group(s) and
                    organisation must follow the respective guidelines set by
                    the community and should abide by the code of conduct.
                  </p>
                </div>
              </div>
              <div className="cell large-5">
                <img
                  src={hero_img}
                  alt="download 1"
                  className={style["hero-section__image"]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style["main-content"]}>
          <h2 className={style["main-content__heading"]}> Code of Conduct</h2>

          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-5 medium-6 large-offset-1">
                <div className={style["coc-card"]}>
                  <h2 className={style["coc-card__number"]}>01</h2>
                  <h2 className={style["coc-card__title"]}>Respect</h2>
                  <p className={style["coc-card__para"]}>
                    Be respectful of people’s writng(s), comment(s) and or
                    feedback. Respect people’s confidentiality.{" "}
                  </p>
                </div>
              </div>

              <div className="cell large-5 medium-6">
                <div className="style.coc-card">
                  <h2 className={style["coc-card__number"]}>02</h2>
                  <h2 className={style["coc-card__title"]}>Be Kind</h2>
                  <p className={style["coc-card__para"]}>
                    Individuals share vulnerable thoughts and experiences.
                    Please be kind and respectful to them.{" "}
                  </p>
                </div>
              </div>

              <div className="cell large-5 medium-6 large-offset-1">
                <div className="style.coc-card">
                  <h2 className={style["coc-card__number"]}>03</h2>
                  <h2 className={style["coc-card__title"]}>No offense</h2>
                  <p className={style["coc-card__para"]}>
                    Feminist Bible is a child-friendly and family-oriented
                    community website. Abusive, offensive and disrespectful
                    language in comments feedback and website content should be
                    reported to Feminist Bible team.{" "}
                  </p>
                </div>
              </div>

              <div className="cell large-5 medium-6">
                <div className="style.coc-card">
                  <span className={style["coc-card__number"]}>04</span>
                  <h2 className={style["coc-card__title"]}>Report</h2>
                  <p className={style["coc-card__para"]}>
                    If you are having a problem with another account member,
                    please send our Feminist Bible team a message containing as
                    much information on the issues and or incident to address
                    the situation adequately.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="style.guidelines-section">
          <h2 className={style["guidelines-section__heading"]}>
            Community Guidelines
          </h2>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-4 medium-6">
                <div class="style.guidelines-card">
                  <img
                    src={equity}
                    alt="equity"
                    className={style["guidelines-card__image"]}
                  />
                  <p className={style["guidelines-card__text"]}>
                    Equity is essential because it allows others to treat
                    individual wants respectfully
                  </p>
                </div>
              </div>

              <div className="cell large-4 medium-6">
                <div class="style.guidelines-card">
                  <img
                    src={life_choices}
                    alt="life_choices"
                    className={style["guidelines-card__image"]}
                  />
                  <p className={style["guidelines-card__text"]}>
                    Be empathetic to people’s life choices and maintain the
                    sanctity of this safe place
                  </p>
                </div>
              </div>

              <div className="cell large-4 medium-6">
                <div class="style.guidelines-card">
                  <img
                    src={voice_matters}
                    alt="voice_matters"
                    className={style["guidelines-card__image"]}
                  />
                  <p className={style["guidelines-card__text"]}>
                    Every Opinion and voice matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
