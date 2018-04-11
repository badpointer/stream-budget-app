import BudgetCategory from "../BudgetCategory";
import React from "react";
import { BudgetContext } from "../BudgetProvider";

const BudgetContainer = () => {
  return (
    <BudgetContext.Consumer>
      {consumer => {
        return consumer.budgets.map(budget => (
          <BudgetCategory name={budget.name} />
        ));
      }}
    </BudgetContext.Consumer>
  );
};

export default BudgetContainer;
