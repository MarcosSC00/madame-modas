import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";

export function HomePage(){
    return(
        <>
            <Navigation/>
            <div className="view-pag">
                <Outlet/>
            </div>
        </>
    )
}