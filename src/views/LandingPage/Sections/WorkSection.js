import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import Warning from "@material-ui/icons/Warning";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";

const useStyles = makeStyles(styles);
const axios = require("axios");
const internalApi = "https://apitechno-powers.com/technoPoers-API";
const dashboardRoutes = [];
let userName =
  localStorage.getItem("username") && localStorage.getItem("username") != "null"
    ? localStorage.getItem("username")
    : "Your Name";
let userEmail =
  localStorage.getItem("email") && localStorage.getItem("email") != "null"
    ? localStorage.getItem("email")
    : "Your Email";

export function RequestCourseContainer(props) {
  const classes = useStyles();
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
    <div style={{
       zIndex: '3',
       position: 'relative',
       background: '#FFFFFF',
       margin: "-60px 30px 0px",
       borderRadius: "6px",
       boxShadow:
         "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        }}>
      <div className={classes.section}>
        <GridContainer justify='center'>
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Request a course</h2>
            <h4 className={classes.description}>
              We would love to hear from you. Simply complete the form below or
              email our team at Techno2powers@gmail.com
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={userName}
                    id='name'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={userEmail}
                    id='email'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText='Your Message'
                  id='message'
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                />
                <NotificationContainer />
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                    {/* {showWarningMsg ? (<p>Please fill in the required fields</p>) : (null)} */}
                    <Button color='primary' onClick={() => props.handelSubmit()}>
                      Send
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
        </div>
    </div>
    <Footer />
</div>
  );
}
class RequestCourse extends React.Component {
  render() {
    const styles = {
      zIndex: "10001 !important",
    };
    return (
      <div>
        <span style={styles}>
          <NotificationContainer />
        </span>
        <RequestCourseContainer handelSubmit={this.handelSubmit} />,
      </div>
    );
  }
  async handelSubmit() {
    var name = document.getElementById("name").value
      ? document.getElementById("name").value
      : userName;
    var email = document.getElementById("email").value
      ? document.getElementById("email").value
      : userEmail;
    if (!(name && email && document.getElementById("message").value)) {
      return NotificationManager.warning(
        "Please fill in the required fields",
        "",
        20000,
        null,
        true
      );
    } else {
      try {
        const response = await axios.post(`${internalApi}/api/requestCourse`, {
          email: email,
          name: name,
          message: document.getElementById("message").value,
        });
        if (
          response.data.status === 200 ||
          response.data.status === 202 ||
          response.data.status === 201
        ) {
          return NotificationManager.success("Done ,Thanks", "", 3000);
        } else {
          return NotificationManager.error(
            "Unexpected Error ..sorry, try again",
            "",
            3000
          );
        }
      } catch (error) {
        return NotificationManager.error(
          "Unexpected Error ..sorry, try again",
          "",
          3000
        );
      }
    }
  }
}

export default RequestCourse;
