import Cookies from "js-cookie";
import { Outlet ,Navigate} from "react-router-dom";
import LoginPage from "./LoginPage";

const Protectedroute=()=>{
    const jwtToken=Cookies.get("jwtToken");
    if(jwtToken===undefined){
      return  <Navigate to="/login"/>
    }
    else{
        return <Outlet/>
    }
}
export default Protectedroute