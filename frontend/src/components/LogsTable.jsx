import { useState } from "react";
import { FiList, FiSearch } from "react-icons/fi";

function LogsTable({ logs }) {

  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter((log) =>

    log.ip.toLowerCase().includes(search.toLowerCase()) ||

    log.attack.toLowerCase().includes(search.toLowerCase()) ||

    log.path.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div className="table-card">

      <div className="table-header">

        <h2><FiList /> Parsed logs</h2>

        <div className="search-field">
          <FiSearch />
          <input

            type="text"

            placeholder="Search IP, attack, or path"

            value={search}

            onChange={(e) => setSearch(e.target.value)}

          />
        </div>

      </div>

      <table>

        <thead>

          <tr>

            <th>IP</th>

            <th>Method</th>

            <th>Status</th>

            <th>Path</th>

            <th>Attack</th>

            <th>Severity</th>

          </tr>

        </thead>

        <tbody>

          {filteredLogs.map((log, index) => (

            <tr key={index}>

              <td className="mono">{log.ip}</td>

              <td className="mono">{log.method}</td>

              <td className="mono">{log.status}</td>

              <td className="mono">{log.path}</td>

              <td>

                <span

                  className={`attack-badge ${log.attack
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}

                >

                  {log.attack}

                </span>

              </td>

              <td>

                <span

                  className={`severity ${log.severity.toLowerCase()}`}

                >

                  {log.severity}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default LogsTable;