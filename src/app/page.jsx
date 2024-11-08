import Image from "next/image";
import { ShoppingCart,User } from 'lucide-react';
export default function Home() {
  return (
  <div className="  container flex justify-between  navbar   my-3 ">
    
<div className=" flex gap-4 items-center">

<div>
<ShoppingCart />
  </div>
<div>
<User />
</div>
</div>
  <div>
 logo coffie
  </div>
  </div>
  );
}
