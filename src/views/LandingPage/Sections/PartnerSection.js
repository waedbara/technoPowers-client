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
// react component for creating beautiful carousel
import Carousel from "react-slick";

import image1 from "assets/img/logo-tvsd.png";
import image2 from "assets/img/icdl-logo.png";
import image3 from "assets/img/logo-ic3.png";

const useStylesImg = makeStyles(stylesImg);
const useStyles = makeStyles(styles);


export default function PartnerSection() {
  const classes = useStyles();
  const classesImg = useStylesImg();
  const imageClasses = classNames(
    // classesImg.imgRaised,
    // classesImg.imgRoundedCircle,
    classesImg.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={require("assets/img/logo-tvsd.png")} alt='...' />
              </GridItem>
              <h4 className={classes.labelRoot}>
              The Professional and Technical Skills Development Authority
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={require("assets/img/1bfe064b-793c-471c-9b2a-7f2eb3cbe110.jpg")} alt='...'  className={imageClasses} />
              </GridItem>
              <h4 className={classes.labelRoot}>
              International Computer Driving Licence 
                <br />
                <a className={classes.aExam} href = "/exam">الإمتحان التجريبي </a>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid} >
                <img src={require("assets/img/logo-ic3.png")} alt='...' className={imageClasses} />
              </GridItem>
              <br></br>
              <h4 className={classes.labelRoot}>
                Internet Core Competency Certification 
                <br />
            

              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      {/* <SectionCarousel /> */}

    </div>
  );
}
function SectionCarousel() {
    const classes = useStyles();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img src={image1} alt="First slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                         The Professional and Technical Skills Development Authority
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        International Computer Driving Licence 
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img src={image3} alt="Third slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        International Computer Driving Licence 
                     </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }


