import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import stylesImg from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


import product1 from "assets/img/courses/english22.jpg";
import icdel from "assets/img/courses/icdl.jpg";
import aPlus from "assets/img/courses/a+.jpg";
import matlab from "assets/img/courses/matlab.jpg";
import plc from "assets/img/courses/plc.jpg";
import pvc from "assets/img/courses/pvc.jpg";
import qser from "assets/img/courses/qser.jpg";
import graphicDesign from "assets/img/courses/graphicDes.jpg"

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
      <h2 className={classes.title}>Let{"'"}s talk courses</h2>
      <h5 className={classes.description}>
            The Academy offers structured, face-to-face, labs and training delivered by
            world-class trainers that are tailored to the knowledge-base of the attendees. 
      </h5>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={graphicDesign} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                 Graphic Design
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href = "https://www.facebook.com/Technopowers.jo/photos/a.122096572515133/161525265238930/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={product1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                  Learning English Perfectly 
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href = "https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/149827856408671/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={icdel} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ICDL
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href = "https://www.facebook.com/Technopowers.jo/photos/a.122096572515133/129296951795095/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={aPlus} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                A+
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href ="https://www.facebook.com/Technopowers.jo/photos/pcb.158397775551679/158396888885101/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
      <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={qser} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                  Quantity Surveying
                <br />
                {/* <small className={classes.smallTitle}>Eng :Ahmad Farraj</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href = "https://www.facebook.com/Technopowers.jo/photos/pcb.133862881338502/133862761338514/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={plc} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                PLC Siemens
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href = "https://www.facebook.com/Technopowers.jo/photos/a.122096572515133/161061678618622/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={pvc} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                PV System Design
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href ="https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/148347199890070/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
       
            <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={matlab} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                  MATLAB
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href = "https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
         
    
          
        </GridContainer>
      </div>
    </div>
  );
}