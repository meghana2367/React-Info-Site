/** ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))  regular DOM API
ReactDom.render() allows me to render something that looks like html
first --> what do I want to render to the screen 
second --> where do I want to render it
can also get dom nodes with document.querySelector("#root")
jsx - flavor of javascript that looks like html
jsx - actually plain old javascript objects, describes the dom element, can only return a single parent element
can put many elements but have to wrap them with a parent element **/

function ReactPage() {
    return (
        <div>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                width = "40px" height = "auto" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile</li>
        </ul>
         </div>
    )
}

ReactDOM.render(<ReactPage />, document.getElementById("root"));