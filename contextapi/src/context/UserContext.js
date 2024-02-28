import React from "react";

//we use context API to get dynamically inject the values to elements as props using global variable concepts
//state management
//the context helps the components take the access of all states
//it works like a wrapper, and we wrap around all elements we want to use for state management

const UserContext = React.createContext();

export default UserContext;

//steps
//1.First, create a UserContext.js function to use the create Context method.
//2. Make a Provider element for the UserContext, and pass the children as props and your parameters.
//3.define you elements to make give and receive the elements, and useContext to import the paramters.
//4.Wrap your elements in the UserContextprovider element to give the children access to all the parameters globally

