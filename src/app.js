const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)

    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Isabelle", animal: "Dog", breed: "Poodle/Corgi"}),
        React.createElement(Pet, {name: "Lana", animal: "Cat", breed: "Tortoise Shell"}),
        React.createElement(Pet, {name: "Willow", animal: "Cat", breed: "Tabby"})
    
    
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))