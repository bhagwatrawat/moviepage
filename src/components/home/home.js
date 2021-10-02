import './home.css'
import { NavLink } from 'react-router-dom'
export default function Home({data}){
   

    const alldata= data.map(item=>{
       
        return (< div key={item.score} className="card">
            <img src={item.show.image?item.show.image.medium: "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className="all_image" alt="no pic" />
            <div className="all_info">
            <div>Title : {item.show.name}</div>
            <div>Network:{item.show.network? item.show.network.name: 'NULL'}</div>
            <div>Show Type: {item.show.type}</div>
            
            <div>Rating : {item.show.rating.average}</div>
            <button ><a href={item.show.officialSite} className="all_official">Official Site</a></button>
            <button ><NavLink style={{ textDecoration: 'none',color:'black' }} to={"moviepage/summary/"+item.score} >Summary</NavLink></button>
            </div>
            
            </div>)
    })
    return (
        <div>
            <div className="titlepage">
                <h1>ALL All Shows</h1>
            </div>
            <div className="Home">
                {alldata}
            </div>
        </div>
       
    )
}