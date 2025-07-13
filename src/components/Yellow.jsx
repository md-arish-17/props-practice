import Aqua from './Aqua';
import './Yellow.css'

function Yellow({response}){
    return (
        <>
          <div className="parrent">
           <Aqua itemDate={response[0].itemDate} itemMonth={response[0].itemMonth} itemYear={response[0].itemYear} itemName={response[0].itemName}/>
           <Aqua itemDate={response[1].itemDate} itemMonth={response[1].itemMonth} itemYear={response[1].itemYear} itemName={response[1].itemName}/>
           <Aqua itemDate={response[2].itemDate} itemMonth={response[2].itemMonth} itemYear={response[2].itemYear} itemName={response[2].itemName}/>
           <Aqua itemDate={response[3].itemDate} itemMonth={response[3].itemMonth} itemYear={response[3].itemYear} itemName={response[3].itemName}/>

          
          </div>
        </>
    )
}

export default Yellow;