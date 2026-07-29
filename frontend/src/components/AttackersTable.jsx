import { FiTarget } from "react-icons/fi";

function AttackersTable({ summary }) {

  if (!summary || !summary.top_attackers) return null;

  return (

    <div className="table-card">

      <h2><FiTarget /> Top attackers</h2>

      <table>

        <thead>

          <tr>

            <th>IP address</th>

            <th>Attack count</th>

          </tr>

        </thead>

        <tbody>

          {summary.top_attackers.map((attacker, index) => (

            <tr key={index}>

              <td className="mono">{attacker.ip}</td>

              <td className="mono">{attacker.count}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AttackersTable;