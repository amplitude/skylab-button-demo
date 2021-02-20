import React from "react";
import { useSkylab } from "../skylab";
import { LearnMoreButtonVariants, LearnMoreButton } from "./LearnMoreButton";

export const Header = (props) => {
  const { client } = useSkylab();
  const buttonVariant = client.getVariant("landing-page-button");
  const buttonConfig = client.getVariantData("landing-page-button");
  console.log(buttonVariant, buttonConfig);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {buttonVariant === LearnMoreButtonVariants.CENTERED && (
                  <LearnMoreButton />
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
