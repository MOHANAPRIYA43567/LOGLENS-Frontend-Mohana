import { useState } from "react";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Buttons from "./components/Buttons";
import StatsCards from "./components/StatsCards";
import Charts from "./components/Charts";
import CountryTable from "./components/CountryTable";
import AttackersTable from "./components/AttackersTable";
import LogsTable from "./components/LogsTable";
import Footer from "./components/Footer";

function App() {

  const [file, setFile] = useState(null);

  const [logs, setLogs] = useState([]);

  const [summary, setSummary] = useState(null);

  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {

    if (!file) {

      alert("Please select a log file");

      return;

    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await axios.post(

        "https://web-production-55a5a2.up.railway.app/upload",

        formData

      );

      setLogs(response.data.logs);

      setSummary(response.data.summary);

    } catch (err) {

      console.log(err);

      alert("Upload Failed");

    }

    setLoading(false);

  };

  const loadDemo = async () => {

    try {

      setLoading(true);

      const response = await axios.get(

        "https://web-production-55a5a2.up.railway.app/demo"

      );

      setLogs(response.data.logs);

      setSummary(response.data.summary);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  };

  const exportReport = () => {

    window.open(

      "https://web-production-55a5a2.up.railway.app/export",

      "_blank"

    );

  };

  return (

    <div className="container">

      <Header />

      <Buttons

        uploadFile={uploadFile}

        loadDemo={loadDemo}

        exportReport={exportReport}

        setFile={setFile}

      />

      {loading &&

      <div className="loading">

        <span className="spinner"></span>

        Analyzing log file…

      </div>

      }

      <StatsCards summary={summary} />

      <Charts summary={summary} />

      <div className="two-column">

        <CountryTable summary={summary} />

        <AttackersTable summary={summary} />

      </div>

      <LogsTable logs={logs} />

      <Footer />

    </div>

  );

}

export default App;