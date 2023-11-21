import AllUsers from "./Pages/AllUsers/AllUsers"
import Analytics from "./Pages/Analytics/Analytics"
import Index from "./Pages/Index/Index"
import Products from "./Pages/Products/Products"
import Sales from "./Pages/Sales/Sales"
import Tickets from "./Pages/Tickets/Tickets"

let routes = [
    {path : '/' , element : <Index/>},
    {path : '/products' , element : <Products/>},
    {path : '/analytics' , element : <Analytics/>},
    {path : '/tickets' , element : <Tickets/>},
    {path : '/sales' , element : <Sales/>},
    {path : '/users' , element : <AllUsers/>}
]



export default routes