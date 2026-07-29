import {
  FiFileText,
  FiTarget,
  FiAlertOctagon,
  FiGlobe
} from "react-icons/fi";

function StatsCards({ summary }) {

  if (!summary) return null;

  return (

    <div className="stats-grid">

      <div className="stat-card accent-ink">
        <div className="stat-top">
          <span className="stat-label">Total logs</span>
          <FiFileText className="stat-icon" />
        </div>
        <span className="stat-value">{summary.total_logs}</span>
      </div>

      <div className="stat-card accent-danger">
        <div className="stat-top">
          <span className="stat-label">Total attacks</span>
          <FiTarget className="stat-icon" />
        </div>
        <span className="stat-value">{summary.total_attacks}</span>
      </div>

      <div className="stat-card accent-warn">
        <div className="stat-top">
          <span className="stat-label">High severity</span>
          <FiAlertOctagon className="stat-icon" />
        </div>
        <span className="stat-value">{summary.high_severity}</span>
      </div>

      <div className="stat-card accent-info">
        <div className="stat-top">
          <span className="stat-label">Countries</span>
          <FiGlobe className="stat-icon" />
        </div>
        <span className="stat-value">
          {summary.attack_countries
            ? summary.attack_countries.length
            : 0}
        </span>
      </div>

    </div>

  );

}

export default StatsCards;