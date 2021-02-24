import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import stylesImg from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const useStylesImg = makeStyles(stylesImg);

export default function TeamSection() {
  const classes = useStyles();
  const classesImg = useStylesImg();
  const imageClasses = classNames(
    classesImg.imgRaised,
    classesImg.imgRoundedCircle,
    classesImg.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Services</h2>
      <h5 className={classes.description}>
         We are glad to offer our services digitally for a better service in a timely manner
      </h5>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={require("assets/img/4331764b698f0a3d9fd8c437594e0864.jpg")} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                 Academic Translation
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={require("assets/img/ff6ad40ff9a64e6ca154a57632c612b2.jpg")} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Projects and Researches
                <br />
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
