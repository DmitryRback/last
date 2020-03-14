import Preloader from "../componets/Common/Preloader/Preloader";
import React, {Suspense} from "react";


export const WithSuspense = (Component) => {
    return (props) => {
        return(
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
            )

    }
}