/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%AA%D9%83%D9%86%D9%88+%D8%A8%D8%A7%D9%88%D8%B1%D8%B2+%D9%84%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+Techno+Powers%E2%80%AD/@31.7111987,35.7884159,17z/data=!4m8!1m2!2m1!1z2KrZg9mG2Ygg2KjZiNix2LIg2YXYo9iv2KjYpw!3m4!1s0x151cad8653a79471:0x28e2b9ef17caf7d5!8m2!3d31.7142229!4d35.7909278'
                className={classes.block}
                target='_blank'
              >
                <span class='fa fa-location-arrow' aria-hidden='true'>
                  {""} Location - Ibn Khaldoun street Madaba
                </span>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://www.facebook.com/Technopowers.jo'
                className={classes.block}
                target='_blank'
              >
                Facebook
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href='http://blog.creative-tim.com/?ref=mkr-footer'
                className={classes.block}
                target='_blank'
              >
                Blog
              </a>
            </ListItem> */}
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href='https://www.creative-tim.com/license?ref=mkr-footer'
                className={classes.block}
                target='_blank'
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        {/* <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          for a better web.
        </div> */}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
