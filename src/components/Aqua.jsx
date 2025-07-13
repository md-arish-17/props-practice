import './Aqua.css'
import ItemDate from './ItemDate';

function Aqua({itemDate,itemMonth,itemYear,itemName}){
    return(
        <div className='umar'>
           <div className='child'>
            <ItemDate itemDate={itemDate} itemMonth={itemMonth} itemYear={itemYear}/>
           </div>
            <div>
                {itemName}
            </div>
        </div>
    )
}

export default Aqua;