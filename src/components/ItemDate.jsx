import "./ItemDate.css"

function ItemDate({itemDate,itemMonth,itemYear}){
    // const date = props.date
    // const month = props.month
    // const year = props.year
    return (
        <div className="myDiv">
            <div className="arish">
                <span className="myspan">{itemDate}</span> <br />
                <span className="myspan"> {itemMonth}</span> <br />
                <span className="myspan"> {itemYear}</span>
            </div>
        </div>
    )
}

export default ItemDate;