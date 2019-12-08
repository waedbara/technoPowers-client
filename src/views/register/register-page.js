import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Warning from "@material-ui/icons/Warning";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import image from "assets/img/REG.jpg";
const axios = require('axios');


const useStyles = makeStyles(styles);
const internalApi ="http://localhost:9000/"


export function RegisterPageContainer(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [userInfo ,setUserInfo] = React.useState({ 
    username: '', email: '',password :  ''
  });
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  var successLogin = false; 

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Techno Powers"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Register</h4>
                    <div className={classes.socialLine}>
                      {/* <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button> */}
                    </div>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or Be Classical</p> */}
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        required : true
                      }}
                      value = {userInfo.username}
                    //   onChange={() => handelChange("username",e.target.value)}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      value = {userInfo.email}
                      onChange ={(e) => setUserInfo(e.target.value) }
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                      value = {userInfo.password}
                      onChange={(e) => setUserInfo({ password: e.target.value })}

                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick ={() => props.handelSubmit()}>
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
class Register extends  React.Component {
  render() {
    return (
      <div>
        <RegisterPageContainer handelSubmit={this.handelSubmit}/>
       <NotificationContainer />
      </div>
  
    );
  }
  async handelSubmit(){
      if(!(document.getElementById("first").value &&document.getElementById("pass").value &&  document.getElementById("email").value)){
        return NotificationManager.warning('Please ,fill the required fields', '', 3000);
      }
      try {
        const response = await axios.post(`${internalApi}api/users/register`, {
          "username": document.getElementById("first").value,
          "password":  document.getElementById("pass").value,
          "email":  document.getElementById("email").value
        });
        console.log(response);
        if(response.data.status === 200){
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          window.location.replace(window.location.origin)
        }else{
          NotificationManager.warning(response.data.msg, '', 3000);
        }
      } catch (error) {
        NotificationManager.warning('An unexpected error occurred', '', 3000);
    }
  }
}

export default Register;