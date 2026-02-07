import React from "react";
import ReactDOM from 'ReactDOM'

const element=React.createElement('h1',{id:"h1"},"Hello world from React");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

/*
<div id:"parent">
    <div id:"child">
        <h1>I'm Heading</h1>
    </div>   
</div> 
*/ 
const el=React.createElement("div",{id:'parent'},
    React.createElement("div",{id:'child'},
        React.createElement('h1',{},"I'm Heading")
    )
)
console.log(el);
root.render(el);
