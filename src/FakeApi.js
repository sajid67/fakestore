import { Card } from "./Cards";


export const Fake=({storedata, setStoreData, search, setSearch})=>
{


    return(
        <div>
        <h3>Welcom To K&K</h3>
        <input type="text" placeholder="Search..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <Card storedata={storedata} setStoreData={setStoreData} search={search} setSearch={setSearch}/>
        </div>
    )
}