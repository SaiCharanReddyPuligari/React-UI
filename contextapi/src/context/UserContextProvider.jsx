import React, { useState } from "react";
import UserContext from "./UserContext";
//we use the provider to wrap the coponents which use the Context API
//And the wrapper we use is UserContext.Provider and we pass the values

const UserContextProvider = ({children})=>{ 
    // we pass the values as parameters for the childen elements to access them as global variables
     const [user, setUser] = useState(null)

       return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
       )
}

//the concept of children parameters usually refers to the all the tags in an element, wrapper tag, etc

export default UserContextProvider;