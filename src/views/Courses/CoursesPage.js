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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import stylesImg from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";


import icdel from "assets/img/courses/icdl.jpg";
import aPlus from "assets/img/courses/a+.jpg";
import matlab from "assets/img/courses/matlab.jpg";
import plc from "assets/img/courses/plc.jpg";
import pvc from "assets/img/courses/pvc.jpg";
import qser from "assets/img/courses/qser.jpg";
import image from "assets/img/REG.jpg";

const englishCourse =
  "https://techno-powers.s3.eu-central-1.amazonaws.com/106858588_23845260836350444_7428167036579413183_n.jpg";
const autocad =
  "https://techno-powers.s3.eu-central-1.amazonaws.com/2ed04df7-a69c-41fd-9c95-449c269cdbaf.jpeg";

const useStyles = makeStyles(styles);
const useStylesImg = makeStyles(stylesImg);
const dashboardRoutes = [];

export function CoursesSection() {
  const classes = useStyles();
  const classesImg = useStylesImg();
  const imageClasses = classNames(
    classesImg.imgRaised,
    classesImg.imgRoundedCircle,
    classesImg.imgFluid
  );
  return (
    <div>
      <Header
       color='transparent'
       routes={dashboardRoutes}
       brand='Techno Powers'
       rightLinks={<HeaderLinks />}
       absolute
       changeColorOnScroll={{
         height: 400,
         color: "white",
       }}
      />
    <Parallax filter small image={require("assets/img/AR0035-pic3.jpg")}>
    </Parallax>
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
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
                <img
                  src={
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/4-htmlcss.jpg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Arduino + IOT - 35 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Arduino IoT Cloud is an application that helps makers build
                  connected objects in a quick, easy and secure way. You can
                  connect multiple devices to each other and allow them to
                  exchange real-time data. You can also monitor them from
                  anywhere using a simple user interface.
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/2057c30d-eab8-44b5-96ca-da95e89612f4.jpeg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Primavera P6 - 20 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This course starts with a general overview of P6 and then step
                  by step guide is provided of how to create a project, add
                  resources to it and track your project progress. This course
                  teaches you how ro handle a project in P6 right from the
                  scratch.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.158397775551679/158396888885101/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={aPlus} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                A+ - 30 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  For any individual looking to enter the IT world, the CompTIA
                  A+ certification is a great start! Recognized as one of the
                  top entry-level certifications, the A+ provides you with a
                  great foundation in hardware, software and troubleshooting
                  skills in order to build or supplement your tech knowledge
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.158397775551679/158396888885101/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={qser} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Quantity Surveying - 20 Hours
                <br />
                {/* <small className={classes.smallTitle}>Eng :Ahmad Farraj</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Quantity surveying course aims to enable students to calculate
                  the quantities for projects’ materials such as concrete and
                  steel reinforcement, as it would seek the creativity of
                  students away from the conventional way of conducting courses,
                  In addition to, enhancing students’ knowledge about the
                  specifications of these materials and contracts. Moreover, to
                  cover the fundamental managerial concepts that should be known
                  for civil engineers, especially those who work as site
                  engineers.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.133862881338502/133862761338514/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={qser} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Quantity Surveying & Reading charts - 30 Hours
                <br />
                {/* <small className={classes.smallTitle}>Eng :Ahmad Farraj</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Quantity surveying course aims to enable students to calculate
                  the quantities for projects’ materials such as concrete and
                  steel reinforcement, as it would seek the creativity of
                  students away from the conventional way of conducting courses,
                  In addition to, enhancing students’ knowledge about the
                  specifications of these materials and contracts. Moreover, to
                  cover the fundamental managerial concepts that should be known
                  for civil engineers, especially those who work as site
                  engineers.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.133862881338502/133862761338514/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={plc} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                PLC Siemens - 30 hours
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href='#pablo'>links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.122096572515133/161061678618622/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={pvc} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                PV System Design - 30 hours and 3 projects
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href='#pablo'>links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/148347199890070/?type=3&theater'
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/unnamed+(1)+(1).jpg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                HVAC Course - 30 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The course is designed to provide a deep understanding of real
                  world solutions and has been tailored with simple yet
                  realistic modules for effective and holistic implementation.
                  It is a one of a kind career-advancing course program that
                  will equip the learner with all the basic fundamentals of AC
                  systems and design, the use of testing equipment, and the
                  principles of mechanics, electricity, and electronics.
                  Enabling, the learners to start off with a great professional
                  career in this field.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/a.144019640322826/148347199890070/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={matlab} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                MATLAB - 30 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Matlab Programming is one of the most important technical
                  programming languages and skills today. In this course, we
                  will start learning Matlab from beginner level, and slowly
                  ease our way into more advanced topics and programs
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater'
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/etabs-v17-training-manuals+(2)+(2).jpg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ETABS + SAFE - 45 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  ETABS is an engineering software product that caters to
                  multi-story building analysis and design. Modeling tools and
                  templates, code-based load prescriptions, analysis methods and
                  solution techniques, all coordinate with the grid-like
                  geometry unique to this class of structure. Basic or advanced
                  systems under static or dynamic conditions may be evaluated
                  using ETABS
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater'
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/2b6f8a95-f4a7-47e1-9e6b-5e82116e6f5a.jpeg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Adobe Photoshop - 15 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Learn graphic design and photo editing in Adobe Photoshop.
                  Learn all of the skills you need to design your own graphics
                  from start to finish. By taking this complete beginner's
                  course, you'll feel confident and comfortable using Adobe
                  Photoshop.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater'
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/32b192c5-4d64-4d9d-a764-d51ac3e45ee5.jpeg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Adobe Illustrator - 15 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Create logos, fonts, icons, drawings, and other vector
                  graphics by learning Adobe Illustrator. Learn everything from
                  the fundamentals to advanced techniques from real Illustrator
                  experts. Learn effective drawing and painting skills that will
                  take your digital art to the next level through our Adobe
                  Illustrator courses
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater'
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/3b563780-7206-4249-ad81-03f32e37b2d1.jpeg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                After Effect - 15 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This course will help learners reach a comfort level when
                  working with basic features of After Effects. This include:
                  workflow, animating layer properties, working with text,
                  applying and animating visual effects, creating shapes,
                  working in 3D space, and exporting a project.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater'
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
                    "https://techno-powers.s3.eu-central-1.amazonaws.com/94672b25-8350-4683-a6b7-43f7ceb700e6.jpeg"
                  }
                  alt='...'
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Excel Course - 10 hours
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  In this course, we will learn everything we need to
                  professionally use Excel, making it easy for us to handle
                  numbers and calculations quickly and error-free.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                  target='_blank'
                  href='https://www.facebook.com/Technopowers.jo/photos/pcb.148777123180411/148776926513764/?type=3&theater'
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    <Footer />
</div>
  );
}
class Courses extends React.Component {

  render() {
    return (
      <div>
        <CoursesSection />
      </div>
    );
  }
}
export default Courses;

