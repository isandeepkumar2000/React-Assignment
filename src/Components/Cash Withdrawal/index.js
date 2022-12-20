import React, { Component } from 'react'
import WidthrwalAmount from './WithdrawAmountProp';
import WithdrawalArray from './withdrawalAmountArray/withdrawalArray';
import './index.css'


class CashWithdrawal extends Component {
state = {Count:2000}
    DecrAmount = (value) =>{
        const{Count} = this.state
        if(Count > value){
this.setState({
    Count: Count - value
})
         }
        }
  render() {
    const {Count} = this.state
    return (
     
<div className='CashWithDrawal-Conatiner'>
    <div className='CashWithDrawal'>
    <div className='CashWithDrawal-items'>
        <div className='CashWithDrawal-logo-name'>
            <div className='Circle'>S</div>
            <p className='Name'>Sandeep Kumar</p>
        </div>
<div className='CashWithDrawal-Balance-Count'>
    <p className='CashWithDrawal-Balance'>Your Balance</p>
    <div className='Count-Inruppess'>
    <p className='CashWithDrawal-Count'>{Count}</p>
    <p className='CashWithDrawal-inRupees'>In Rupees</p>
    </div>  
</div>

<h4 className='CashWithDrawal-Withdraw'>Withdraw</h4>
<p className='CashWithDrawal-chooseSum'>CHOOSE SUM (IN RUPEES)</p>
   
    <div className='CashWithDrawal-Array-Object'>
{WithdrawalArray.map(eachitem => {
        return <WidthrwalAmount  WithdrawalArr = {eachitem} DecrAmount = {this.DecrAmount}/>
        })}
        </div>
</div>   
</div>  
</div>
    )
  }
}
export  default CashWithdrawal; 