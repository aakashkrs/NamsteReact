// // // import React from "react";
// // // import ReactDOM from "react-dom/client";

// // const element=React.createElement('h1',{},"Hello ji");

// // JSX code
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = <h1>Hello vai by JSX</h1>;
// // console.log("Three");

// root.render(heading);


// //element
// const heading1=(
//     <h1 className="head">Hello! JSX</h1>
// )

// //React Functional Component
// const heading2= ()=>{
//     return <h1>Hello! JSX</h1>
// }


import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
    <h1>HelloWorld</h1>
);
let a=1000;
const Heading=()=>(
    <div className="head">
        {/* we could write any js code intise curly braces like this */}
        {a}
        {/* or */}
        <h1>{a}</h1>
        <h1>Namaste 🙏</h1>
    </div>
)
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);