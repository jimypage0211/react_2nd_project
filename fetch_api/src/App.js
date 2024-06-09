import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

const baseURL = "https://jsonplaceholder.typicode.com/";

function App() {
  const [requestType, setRequestType] = useState("users");
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const modURL = baseURL + requestType;
    const fetchRequest = async () => {
      try {
        const response = await fetch(modURL);
        if (!response.ok){
          throw new Error(`Response not OK. Error code ${response.status}`)
        }
        setData(await response.json())
        setFetchError(null)
      } catch (error) {
        setFetchError(error)
      } finally {
        return fetchError;
      }
    };
    fetchRequest();
  },[requestType]);

  console.log(data);
  
  return <div className="App"> 
    <Form requestType={requestType} setRequestType={setRequestType}/>
    <Table data={data}/>
  </div>;
}

export default App;
