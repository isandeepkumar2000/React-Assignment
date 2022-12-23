import React, { Component } from "react";
import MoneyDetails from "../MoneyDetails/Index";
import TransactionItem from "../TransactionItems/Index";
import {v4 as uuidv4} from 'uuid'
import "./Index.css"

const MoneyMangerArrayList = [
  {
    optionId: "Income",
    displayText: "Your Income",
  },
  {
    optionId: "Expenses",
    displayText: "Your Expenses",
  },
];

class MoneyManager extends Component {
  state = {
    titleInput: "",
    amountInput: "",
    optionId: MoneyMangerArrayList[0].optionId,
    TransactionList: [],
  };

  OnSubmitAmount = (event) => {
event.preventDefault();
const {titleInput , amountInput ,optionId} = this.state 
const typeOption = MoneyMangerArrayList.find(
    eachTransaction => eachTransaction.optionId === optionId,
  )
  const {displayText} = typeOption

const newComment = {
    id: uuidv4(),
    titleInput, 
    amountInput: parseInt(amountInput), 
    type: displayText,

}
this.setState(prevState => ({
    TransactionList: [...prevState.TransactionList, newComment],
    titleInput: "", 
    amountInput: "", 
    optionId: MoneyMangerArrayList[0].optionId,
}))
  }





  InputTitle = (event) => {
    this.setState({
      titleInput: event.target.value,
    });
  };

  InputAmount = (event) => {
    this.setState({
      amountInput: event.target.value,
    });
  };

  onChangeOptionId = (event) => {
    this.setState({
      optionId: event.target.value,
    });
  };

  getexpenses = () => {
    const { TransactionList } = this.state;
    let expensesAmount = 0;
    TransactionList.forEach((eachAmount) => {
      if (eachAmount.type === MoneyMangerArrayList[1].displayText) {
        expensesAmount += eachAmount.amountInput;
      }
    });
    return expensesAmount;
  };

  getincome = () => {
    const { TransactionList } = this.state;
    let incomeAmount = 0;
    TransactionList.forEach((eachAmount) => {
      if (eachAmount.type === MoneyMangerArrayList[0].displayText) {
        incomeAmount += eachAmount.amountInput;
      }
    });
    return incomeAmount;
  };


  deleteButton = id => {
    console.log(id)
    const {TransactionList} = this.state
    const updatedTransactionList = TransactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
        TransactionList: updatedTransactionList,
    })
  }

  getbalance = () => {
    const { TransactionList } = this.state;
    let balanceAmount = 0;
    let incomeAmount = 0;
    let expensesAmount = 0;
    console.log(TransactionList)
    TransactionList.forEach((eachAmount) => {
        
      if (eachAmount.type === MoneyMangerArrayList[0].displayText) {
        incomeAmount += eachAmount.amountInput;
      } else {
        expensesAmount += eachAmount.amountInput;
      }
    });
    balanceAmount = incomeAmount - expensesAmount;
    return balanceAmount;
  };

  render() {
    const { amountInput, titleInput, optionId, TransactionList } = this.state;
    const balanceAmount = this.getbalance();
    const incomeAmount = this.getincome();
    const expensesAmount = this.getexpenses();

    return (
      <div className="MoneyManager_Conatiner">
        <div className="MoneyManager_items">
            
          <div className="MoneyManager_Box_Conatiner">
            <div className="MoneyManager_Box_items">
              <h1 className="MoneyManager_Box_Heading">Hi, Sandeep</h1>
              <p className="MoneyManager_Box_Paragraph">
                Welcome Back to your <span>Money Manager</span>
              </p>
            </div>
          </div>
        
          <div className="MoneyDetails_Conatiner">
            <div className="MoneyDetails_items">
              <MoneyDetails
                balanceAmount={balanceAmount}
                incomeAmount={incomeAmount}
                expensesAmount={expensesAmount}
              />
            </div>
          </div>
          <div className="TransactionItem_Conatiner">
            <div className="TransactionItem_items">
              <div className="TransactionItem_Join">
                <div className="TransactionItem_AddTransaction">
                  <form
                    className="TransactionItem_AddTransaction_Form"
                    onSubmit={this.OnSubmitAmount}
                  >
                    <div className="TransactionItem_AddTransaction_ForTitle">
                    <h1 className="Heading">Add Transaction</h1>
                      <p className="TransactionItem_AddTransaction_Title">
                        TITLE
                      </p>
                      <input
                        value={titleInput}
                        type="text"
                        className="TransactionItem_AddTransaction_Title_Picker"
                        onChange={this.InputTitle}
                      />
                    </div>
                    <div className="TransactionItem_AddTransaction_ForAmount">
                      <p className="TransactionItem_AddTransaction_Amount">
                        AMOUNT
                      </p>
                      <input
                        value={amountInput}
                        type="number"
                        className="TransactionItem_AddTransaction_Amount_Picker"
                        onChange={this.InputAmount}
                      />
                    </div>

                    <div className="TransactionItem_AddTransaction_TYPE_Box">
                      <p className="TransactionItem_AddTransaction_TYPE_Paragraph">
                        TYPE
                      </p>
                      <select
                        id="select"
                        className="input"
                        value={optionId}
                        onChange={this.onChangeOptionId}
                      >
                        {MoneyMangerArrayList.map((eachOption) => (
                          <option
                            key={eachOption.optionId}
                            value={eachOption.optionId}
                          >
                            {eachOption.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="TransactionItem_AddTransaction_Button">
                      <button type="submit" className="Appointment_button">
                        ADD
                      </button>
                    </div>
                  </form>
                </div>

                <div className="TransactionItem_History_Conatiner">
                <div className="TransactionItem_History_items">
    <h1 className="TransactionItem_History_Heading">History</h1>
    <div className="TransactionItem_History_Box_items">
        {TransactionList.map(eachTransitionAmount => (
            <TransactionItem TransactionItems = {eachTransitionAmount} 
            deleteButton = {this.deleteButton} />
        ))}
    </div>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MoneyManager;
