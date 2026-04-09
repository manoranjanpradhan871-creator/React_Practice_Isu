import StatusCard from "./components/StatusCard";

function App() {
  return (
    <div>
      <StatusCard type="success" message="Success!" />
      <StatusCard type="error" message="Error!" />
    </div>
  );
}

export default App;