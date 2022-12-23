
const TransactionItem = (props) => {
    const {TransactionItems ,deleteButton} = props;
   const { titleInput, amountInput, type , id } = TransactionItems;

    const onDeleteButton = () => {
        console.log('id')
        deleteButton (id)
    }

return(
  
    <div className="TransactionItem_History_Box_items">
       
      <div className="TransactionItem_History_Box_items_Title">
        <p className="title">Title</p>
        <p>{titleInput}</p>
      </div>
      <div className="TransactionItem_History_Box_items_Amount">
        <p className="Amount">Amount</p>
        <p> Rs {amountInput}</p>
      </div>
      <div className="TransactionItem_History_Box_items_Type">
        <p className="Type">Type</p>
        <p>{type}</p>
      </div>
      <div className="TransactionItem_History_Box_items_DeleteButton_Icon">
        <button className="Delete_button" onClick = {onDeleteButton}>
            <img src = "https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt= "delete" />
        </button>
      </div>
    </div>


)
}
export default TransactionItem