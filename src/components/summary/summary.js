import { useParams } from "react-router-dom";
import './summary.css'
export default function Summary ({data}){
    const {id}= useParams()
    const filters= data.filter(item=> item.score==id)
    console.log(filters)
    return(
        <div className="summary">
        <h1 className="summary_title"> Summary Page</h1>
        <div className="summary_para">{filters[0].show.summary}</div>
        </div>
    )
}