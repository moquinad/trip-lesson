const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Isabelle"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Poodle/Corgi")

    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet)
    
    
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))