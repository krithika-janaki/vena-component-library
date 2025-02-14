import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  BLUE_10,
  BLUE_50,
  GRAY_50,
  RED_10,
  RED_50,
  BLACK
} from "../../styles/colours";

const styles = theme => {
  return {
    root: {
      minHeight: "36px",
      minWidth: "80px",
      paddingLeft: "16px",
      paddingRight: "16px",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: "bold",
      textTransform: "none",

      "&:disabled": {
        cursor: "not-allowed",
        pointerEvents: "auto",
        color: GRAY_50
      },

      "&:disabled&:hover": {
        color: GRAY_50
      }
    },
    primary: {
      color: BLUE_50,

      "&:hover": {
        backgroundColor: BLUE_10
      }
    },
    secondary: {
      color: BLACK,

      "&:hover": {
        backgroundColor: GRAY_50
      }
    },
    danger: {
      color: RED_50,

      "&:hover": {
        backgroundColor: RED_10
      }
    },
    icon: {
      marginRight: "8px"
    },
    loadingButtonLabel: {
      visibility: "hidden"
    },
    loadingIconContainer: {
      position: "absolute",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "calc(100% - 12px)",
      visibility: "visible",
      color: BLACK
    }
  };
};

function FlatButton({
  classes,
  color,
  disabled,
  isLoading,
  iconClass,
  onClick,
  children,
  ...rest
}) {
  let colorClass = "";

  switch (color) {
    case "primary":
      colorClass = classes.primary;
      break;
    case "secondary":
      colorClass = classes.secondary;
      break;
    case "danger":
      colorClass = classes.danger;
      break;
    default:
      colorClass = classes.primary;
      break;
  }

  return (
    <MuiButton
      classes={{
        root: classes.root,
        text: colorClass,
        label: isLoading ? classes.loadingButtonLabel : null
      }}
      variant="text"
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {iconClass && <i className={iconClass + " " + classes.icon} />}
      {isLoading && (
        <div className={classes.loadingIconContainer}>
          <CircularProgress color="inherit" size={14} />
        </div>
      )}
      {children}
    </MuiButton>
  );
}

FlatButton.defaultProps = {
  color: "primary",
  disabled: false,
  isLoading: false,
  iconClass: ""
};

FlatButton.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Sets the background and text colours. */
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  /** Disables button including all pointer events. */
  disabled: PropTypes.bool,
  /** Disables button and overlays a circular progress spinner. */
  isLoading: PropTypes.bool,
  /** Prepends the icon to the start of the button contents.
   * Expects font-awesome class values such as "`fa fa-plus`".
   * */
  iconClass: PropTypes.string,
  /** FlatButton onClick handler */
  onClick: PropTypes.func.isRequired,
  /** The content of the button. */
  children: PropTypes.node
};

export const FlatButtonComponent = FlatButton;
export default withStyles(styles)(FlatButton);
