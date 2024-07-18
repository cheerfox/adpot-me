    const Pet = (props) => {
      return React.createElement(
        "div",
        {},
        [
          React.createElement("h1", {}, props.name),
          React.createElement("h2", {}, props.animal),
          React.createElement("h2", {}, props.breeds),
        ]
      )
    }
    
    
    // component must return the markup from React.createElement
    const App = () => {
      return React.createElement(
        "div", // tag name
        {}, // attribute
        [ // children 
          React.createElement("h1", {}, "Adopt Me!"),
          React.createElement(Pet, {
            animal: "Dog",
            name: "Luna",
            breeds: "Havanese"
          }),
          React.createElement(Pet, {
            animal: "Bird",
            name: "Tom",
            breeds: "Cockatiel"
          }),
          React.createElement(Pet, {
            animal: "Cat",
            name: "Anna",
            breeds: "mike"
          })
        ]
      );
    };

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App))