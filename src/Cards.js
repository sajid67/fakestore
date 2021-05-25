import {Link} from "react-router-dom";
export const Card=({storedata,setStoreData,search,setSearch,HandleCart})=>
{

    return(
        <div>
        <h3>Welcom to card page</h3>
        <div className="container mt-4 mb-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
            storedata.filter(i=>{return i.title.match(search)}).map(p=>{
                return(

                    <div key={p.id} className="card" style={{width:270}}>
                     <Link to={"/Details/"+p.id}>  <img src={p.image} className="card-img-top" alt="..."/> </Link>
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.description}</p>
                                <button onClick={HandleCart}>Add to Cart</button>
                            </div>
                  
                    </div>
                )
            })
        }
        </div>
        </div>
        </div>
    )
}