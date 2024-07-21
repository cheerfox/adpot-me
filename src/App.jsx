import { createRoot } from "react-dom/client";
import Pet from "./Pet";

// component must return the markup from React.createElement
const App = () => {
  return (
    <div>
      <h1>Adpot Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
