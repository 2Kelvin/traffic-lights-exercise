var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function TrafficLight() {
  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      walk = _React$useState2[0],
      setWalk = _React$useState2[1];

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return React.createElement(
    "div",
    { className: "trafficLight" },
    React.createElement(
      "button",
      { onClick: handleClick },
      "Change to ",
      walk ? "Stop" : "Walk"
    ),
    React.createElement(
      "h1",
      { style: { color: walk ? "darkgreen" : "darkred" } },
      walk ? "Walk" : "Stop"
    )
  );
}

export default function App() {
  return React.createElement(TrafficLight, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));