import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui/styles";

import React from "react";
import PropTypes from "prop-types";

// Custom SVG Icon (BP)
import SVGIcon from "../Svg_Icons/SVGIcon";

// Budget Context
import { BudgetContext } from "../BudgetProvider";

const styles = theme => ({
  appbar: {
    flexGrow: 1
  },
  addIcon: {
    marginRight: 20,
    marginLeft: -12,
    border: "4px solid rgba(0,37,90,1)",
    backgroundColor: "#ffff"
  },
  title: {
    flex: 1
  }
});

const tempMockData = {
  name: "mockName",
  budgetLineItems: [
    {
      name: "Grocery",
      amountBudgeted: 150,
      amountSpent: 100,
      amountRemaining: 50
    }
  ]
};

const BudgetAppBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.flexGrow} position="static">
      <Toolbar>
        <BudgetContext.Consumer>
          {consumer => {
            console.log(consumer);
            return (
              <div>
                <IconButton
                  onClick={consumer.addBudgetItem(tempMockData)}
                  className={classes.addIcon}
                >
                  <SVGIcon icon="FILE_ADD" />
                </IconButton>
              </div>
            );
          }}
        </BudgetContext.Consumer>
        <Typography className={classes.title} variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

BudgetAppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(BudgetAppBar);
