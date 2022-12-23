
const MoneyDetails = (props) => {
const {balanceAmount, incomeAmount,expensesAmount} = props

return(

<div className="MoneyDetails_">
    <div className="MoneyDetails_balanceAmount">
        <div className="MoneyDetails_Icons">
            <img className="MoneyDetails_Icons" src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" />
        </div>
        <div className="MoneyDetails_balanceAmount_item">
            <p className="MoneyDetails_balanceAmount_Paragraph">Your Balance</p>
            <p className="MoneyDetails_balanceAmount_Paragraph_Ruppess">Rs {balanceAmount}</p>
        </div>
    </div>
    <div className="MoneyDetails_incomeAmount">
        <div className="MoneyDetails_Icons">
            <img className="MoneyDetails_Icons" src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png " alt="balance" />
        </div>
        <div className="MoneyDetails_incomeAmount_item">
            <p className="MoneyDetails_incomeAmount_Paragraph">Your Income</p>
            <p className="MoneyDetails_incomeAmount_Paragraph_Ruppess">Rs {incomeAmount}</p>
        </div>
    </div>
    <div className="MoneyDetails_expensesAmount">
        <div className="MoneyDetails_Icons">
            <img className="MoneyDetails_Icons" src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png " alt="balance" />
        </div>
        <div className="MoneyDetails_expensesAmount_item">
            <p className="MoneyDetails_expensesAmount_Paragraph">Your Expenses</p>
            <p className="MoneyDetails_expensesAmount_Paragraph_Ruppess">Rs {expensesAmount}</p>
        </div>
    </div>
</div>






)
}
export default MoneyDetails