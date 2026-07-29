import { FiUploadCloud, FiDownload, FiFolder } from "react-icons/fi";

function Buttons({
  uploadFile,
  loadDemo,
  exportReport,
  setFile
}) {
  return (
    <div className="toolbar">

      <label className="file-field">
        <span>Log file</span>
        <input
          type="file"
          accept=".log"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      <div className="toolbar-actions">

        <button className="btn btn-ghost" onClick={loadDemo}>
          <FiFolder />
          Load demo
        </button>

        <button className="btn btn-ghost" onClick={exportReport}>
          <FiDownload />
          Export report
        </button>

        <button className="btn btn-primary" onClick={uploadFile}>
          <FiUploadCloud />
          Analyze log
        </button>

      </div>

    </div>
  );
}

export default Buttons;