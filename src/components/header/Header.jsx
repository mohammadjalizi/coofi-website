import React from 'react'
import { House,Store,ClipboardList,Rss,Wallet } from 'lucide-react';
const myicons=[
{
id:1,
name:"خانه",
iconpath:<House/>

},
{
    id:2,
    name:"فروشگاه",
    iconpath:<Store/>
    
    },
    {
        id:3,
        name:"لیست قیمت محصولات",
        iconpath:<ClipboardList/>
        
        },
        {
            id:4,
            name:"  وبلاگ",
            iconpath:<Rss/>
            
            },

]

const Header = () => {
  return (
    <div dir='rtl' className='  container     mx-10 flex justify-between  ' >
<div className=' flex gap-8 '>
<div className=' flex  gap-6 '>

{myicons.map((item)=>{
return(

<>
{item.iconpath}
<h1 key={item.id} >  {item.name} </h1>
</>

)


})}
 
    
</div>    
  
  
    
</div>        
{/* cart show */}
<div>

<div>
<Wallet/>
<span> 0  </span>

</div>
</div>

    </div>
  )
}

export default Header