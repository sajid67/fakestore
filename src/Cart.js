export const Cartjs=({cartData})=>
{
    return(
        <>
       <ol>
           {
                
                    cartData.map(p=><h3>{p}</h3>)
                
           }
       </ol>
        </>
    )
}