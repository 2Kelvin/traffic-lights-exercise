function TrafficLight() {
  const [walk, setWalk] = React.useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <div className="trafficLight">
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
        {walk ? "Walk" : "Stop"}
      </h1>
    </div>
  );
}

export default function App() {
  return <TrafficLight />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
