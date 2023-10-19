import { List } from "../../common/index"
import { useContext } from "react";
import { MyContext, MyContextData } from "../../core/index";
import {miKittiesList} from "./component/index"

export const Kitties = () =>{
    const kitties = miKittiesList;
    
    return(
        <>        
        <List details={kitties} />   
        </>
    )
}