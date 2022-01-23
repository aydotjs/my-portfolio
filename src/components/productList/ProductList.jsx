import "./ProductList.css"
import Product from "../product/Product"
import {products} from '../../data'
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                 <h1 className="pl-title">
                    Create & Inspire. It's AY
                </h1>
                 <p className="pl-desc">
                     Welcome to  my official portfolio,
                     feel free to explore some of the designs
                     I have made. 
                 </p>
                 <div className="pl-list">
                 {products.map((item) => ( 
               <Product key={item.id} img={item.img} link={item.link}/>
               ))}
                    
                 </div>
             </div>   
         
        </div>
    )
}

export default ProductList


// import "./ProductList.css"
// import Product from "../products/Product"

// import { products } from "../../data"
// const ProductList = () => {
//     return (
//         <div className="pl">
//             <div className="pl-texts">
//                 <h1 className="pl-title">
//                     Create & Inspire. It's AY
//                 </h1>
//                 <p className="pl-desc">
//                     Welcome to  my official portfolio,
//                     feel free to explore some of the designs
//                     I have made. 
//                 </p>
//             </div>
//             <div className="pl-list">
//                 {products.map((item) => ( 
//                 <Product key={item.id} img={item.img} link={item.link}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProductList
