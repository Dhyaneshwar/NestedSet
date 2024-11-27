import "./App.css";
import { useFetch } from "./customHooks/useFetch";

function App() {
  const { data, loading, error } = useFetch("https://api.mocki.io/v2/7brybvwl");

  if (loading) {
    return <h1>Data is loading</h1>;
  }

  if (error) {
    return <h1>Error while loading</h1>;
  }

  return (
    <h1 className="bg-slate-500 text-center text-2xl font-semibold">
      {JSON.stringify(data)}
    </h1>
  );
}

export default App;
