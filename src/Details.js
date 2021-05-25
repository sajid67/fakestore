import {useParams} from 'react-router-dom';
import {useEffect } from "react"
import { useState} from "react"

export const Detail=({storedata,setStoreData})=>
{
    const{id}=useParams();
    const [Detail, setDetail] = useState([]);
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/' + id)
      .then(response => response.json())
      .then(json => {
        setDetail(json);
      })
    }, [id]);
 
    return(
        <>
             <div className="card mb-3" style={{width:500}}>
                 <div className="row g-0">
                     <div className="col-md-4">
                         <img style={{height:300, width:160}} src={Detail.image} alt="..."/>
                     </div>
                         <div className="col-md-8">
                             <div className="card-body">
                                 <h5 className="card-title">{Detail.title}</h5>
                                 <p className="card-text">Price: {Detail.price}$</p>
                                 <p className="card-text"><small className="text-muted">{Detail.description}</small></p>
                      </div>
                         </div>
                  </div>
               </div>
      </>
    )
}