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

import icdel from "assets/img/courses/icdl.jpg";
const englishCourse =
  "https://techno-powers.s3.eu-central-1.amazonaws.com/106858588_23845260836350444_7428167036579413183_n.jpg";
const autocad =
  "https://techno-powers.s3.eu-central-1.amazonaws.com/2ed04df7-a69c-41fd-9c95-449c269cdbaf.jpeg";
const useStyles = makeStyles(styles);
const useStylesImg = makeStyles(stylesImg);

export default function ProductSection() {
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
        The Academy offers structured, face-to-face, labs and training delivered
        by world-class trainers that are tailored to the knowledge-base of the
        attendees.
      </h5>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={englishCourse} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Learn English with Cambridge
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Cambridge Curriculum includes all language skills
                  (conversation, writing, reading, listening)
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={autocad} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                AutoCAD - 20 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This course is aimed at those with absolutely no prior
                  experience in AutoCAD. It is also helpful to those who may
                  have learned the software in the past but forgotten how to use
                  it. The course is designed to get you up & running with
                  AutoCAD quickly by teaching you the things you need to know
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/149827856408671/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/0211ac44-a1bb-4177-9f84-9323f1f269c1.jpeg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Android - 60 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Level 1 Introduction to JAVA , Java programming and Java in
                  Android development . Level 2 Introduction to web pages(MYSQL
                  & PHP) .
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/149827856408671/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/4-htmlcss.jpg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Html & Css - 20 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  HTML and CSS go hand in hand for developing flexible,
                  attractively and user friendly websites. HTML (Hyper Text
                  Markup Language) is used to show content on the page where as
                  CSS is used for presenting the page.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/149827856408671/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={icdel} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ICDL - 20 hours
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  International Computer Driving License <br></br>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.122096572515133/129296951795095/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/jtSShzfu1rgoqGymS3usd5db.jpg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                E-Marketing - 20 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  E-marketing is a process of planning and executing the
                  conception, distribution, promotion, and pricing of products
                  and services in a computerized, networked environment, such as
                  the Internet and the World Wide Web, to facilitate exchanges
                  and satisfy customer demands
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/149827856408671/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          {/* <Link to="/courses" width='100%' display='inline-block'> */}
          <Button
            fullWidth
            color='primary'
            size='lg'
            href={'/courses'}
          >
            View All
          </Button>
          {/* </Link> */}

        </GridContainer>
      </div>
    </div>
  );
}
