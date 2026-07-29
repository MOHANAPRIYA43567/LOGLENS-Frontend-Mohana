import { FiMap } from "react-icons/fi";

function CountryTable({ summary }) {

  if (!summary || !summary.attack_countries) return null;

  return (

    <div className="table-card">

      <h2><FiMap /> Attack sources</h2>

      <table>

        <thead>

          <tr>

            <th>Country</th>

            <th>Attack count</th>

          </tr>

        </thead>

        <tbody>

          {summary.attack_countries.map((country, index) => (

            <tr key={index}>

              <td>{country.country}</td>

              <td className="mono">{country.count}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default CountryTable;