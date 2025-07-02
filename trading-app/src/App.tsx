import Dashboard from "./components/Dashboard";
import RuleSettings from "./components/RuleSettings";
import TradeHistory from "./components/TradeHistory";

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl p-4">Trading App</h1>
      <Dashboard />
      <RuleSettings />
      <TradeHistory />
    </div>
  );
};

export default App;
