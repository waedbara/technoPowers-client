import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import ReactDOM from "react-dom";
import { doc } from "prettier";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const axios = require("axios");
const internalApi = 'https://apitechno-powers.com/technoPowers-api/';


const responseFacebook = async (response) => {
  try {
    const apiResponse = await axios.post(`${internalApi}api/users/social`, {
      method: "facebook",
      token: response.accessToken,
    });
    if (apiResponse.data.status === 200) {
      localStorage.setItem("token", apiResponse.data.token);
      localStorage.setItem("username", apiResponse.data.username);
      localStorage.setItem("email", apiResponse.data.email);
      window.location.replace(window.location.origin);
    } else {
      NotificationManager.warning(
        apiResponse.data && apiResponse.data.msg
          ? apiResponse.data.msg
          : "Something went wrong!!",
        "Error",
        3000
      );
    }
  } catch (error) {
    NotificationManager.warning(
      error && error.msg ? error.msg : "Something went wrong!!",
      "Error",
      3000
    );
  }
};
export default class FacebookComponent extends Component {
  render() {
    return (
      <div>
        <FacebookLogin
          appId='747798019364772'
          autoLoad={true}
          fields='name,email,picture'
          // icon='fa-facebook'
          // icon='fa-facebook-square'
          isMobile={false}
          // redirectUri={window.location.replace(window.location.origin)}
          // cssClass='fb-login-button'
          callback={responseFacebook}
        />
      </div>
    );
  }
}
