import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { FiActivity, FiPieChart } from "react-icons/fi";

const PIE_COLORS = ["#1F6F63", "#3D5A80", "#A9761E", "#B23A2E", "#6B5B95", "#3E9C8C"];

function Charts({ summary }) {

  if (!summary) return null;

  return (

    <div className="chart-grid">

      <div className="chart-card">

        <h2><FiActivity /> Attacks per hour</h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <AreaChart
            data={summary.attacks_per_hour}
          >

            <defs>
              <linearGradient id="attackFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1F6F63" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#1F6F63" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="2 6" stroke="#E4E1D9" vertical={false} />

            <XAxis dataKey="hour" stroke="#6F6C66" fontSize={12} tickLine={false} axisLine={{ stroke: "#E4E1D9" }} />

            <YAxis stroke="#6F6C66" fontSize={12} tickLine={false} axisLine={false} />

            <Tooltip
              contentStyle={{
                background: "#FFFFFF",
                border: "1px solid #E4E1D9",
                borderRadius: "10px",
                fontSize: "13px",
                boxShadow: "0 12px 28px rgba(28,27,25,0.10)"
              }}
            />

            <Legend wrapperStyle={{ fontSize: "13px" }} />

            <Area
              type="monotone"
              dataKey="count"
              stroke="#1F6F63"
              strokeWidth={2.5}
              fill="url(#attackFill)"
              dot={{ r: 3, fill: "#1F6F63", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="chart-card">

        <h2><FiPieChart /> Attack types</h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <PieChart>

            <Pie
              data={summary.attack_types}
              dataKey="value"
              nameKey="name"
              innerRadius={62}
              outerRadius={100}
              paddingAngle={2}
            >
              {summary.attack_types && summary.attack_types.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke="#FFFFFF" strokeWidth={2} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#FFFFFF",
                border: "1px solid #E4E1D9",
                borderRadius: "10px",
                fontSize: "13px",
                boxShadow: "0 12px 28px rgba(28,27,25,0.10)"
              }}
            />

            <Legend wrapperStyle={{ fontSize: "13px" }} />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Charts;