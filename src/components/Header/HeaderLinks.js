/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  function logout (){
    localStorage.setItem("token", null);
    localStorage.setItem("username", null);
    localStorage.setItem("email", null);
    window.location.replace("/")
  }
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}> */}
        {/* <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {localStorage.getItem("token") && localStorage.getItem("token") != "null" ? (
               <div>
                <h2 className={classes.navLink}>Hey {localStorage.getItem("username")}</h2>
               <Button
                 color="transparent"
                 target="_blank"
                 id="logout"
                 className={classes.navLink}
                 onClick = {logout}
                 >
              Logout
            </Button>
           <Button
                  href={"/courses"} 
                  color="transparent"
                  className={classes.navLink}
                 >
                   Courses
                 </Button>
            <Button
                  href={"/request"} 
                  color="transparent"
                  className={classes.navLink}
                 >
                   Request A Course
            </Button>
           </div> 
          ):(<div>
            <Button
            href={"/register"} 
            color="transparent"
            className={classes.navLink}
          >
           Join Us
          </Button>
          <Button
            href={"/login"} 
            color="transparent"
            className={classes.navLink}
          >
           Login
          </Button>
          <Button
               href={"/courses"} 
               color="transparent"
               className={classes.navLink}
                 >
                   Courses
          </Button>
          <Button
               href={"/request"} 
               color="transparent"
               className={classes.navLink}
                 >
                   Request A Course
          </Button>
         </div>)
         }
        <i className={classes.registerNavLink} />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip> */}
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {/* <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        > */}
          {/* <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button> */}
        {/* </Tooltip> */}
      </ListItem>
    </List>
  );
}
