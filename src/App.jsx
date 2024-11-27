import "./App.css";
import { contactModalCommonColumns } from "./const/tableData";
import { useFetch } from "./customHooks/useFetch";
import CustomTable from "./utils/CustomTable";

function App() {
  const { data, loading, error } = useFetch("https://api.mocki.io/v2/7brybvwl");

  if (loading) {
    return <h1>Data is loading</h1>;
  }

  if (error) {
    return <h1>Error while loading</h1>;
  }

  return <CustomTable rowData={data} columnData={contactModalCommonColumns} />;
}

export default App;
