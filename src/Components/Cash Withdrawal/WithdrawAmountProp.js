import './index.css'
const  WidthrwalAmount = (props) => {
const {WithdrawalArr,DecrAmount } = props
const AmountDecr = (event) =>{
    DecrAmount(event.target.value)
}
    return(
        <div className = "SimpleTodo-items">
            <button value = {WithdrawalArr.price} className="Button-items" onClick={AmountDecr}>{WithdrawalArr.price}</button>    
    </div>
    )
    }
    export default WidthrwalAmount;