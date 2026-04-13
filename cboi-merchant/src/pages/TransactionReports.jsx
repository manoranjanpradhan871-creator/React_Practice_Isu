import { useState } from "react";
import { submitReport, getReportStatus } from "../api/reportService";
import { validateDates } from "../utils/validate";

export default function TransactionReports() {
  const [startDate, setStartDate] = useState("21/01/2026");
  const [endDate, setEndDate] = useState("21/01/2026");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const vpa = "20250930071606-iservuqrsbrp@cbin";

  const handleFetch = async () => {
    const error = validateDates(startDate, endDate);
    if (error) return alert(error);

    setLoading(true);

    try {
      const res = await submitReport({
        startDate,
        endDate,
        vpa_id: vpa,
        mode: "both",
      });

      setData(res.data.data || []);
    } catch (err) {
      alert(err?.response?.data?.statusDescription || "Error");
    }

    setLoading(false);
  };

  const handleDownload = async () => {
    setLoading(true);

    try {
      const res = await submitReport({
        startDate,
        endDate,
        vpa_id: vpa,
        mode: "excel",
      });

      const queryId = res.data.query_id;

      let status = "PENDING";

      while (status !== "READY") {
        const statusRes = await getReportStatus(queryId);
        status = statusRes.data.data.status;

        if (status === "READY") {
          window.open(statusRes.data.data.signed_url);
          break;
        }

        await new Promise((r) => setTimeout(r, 3000));
      }
    } catch (err) {
      alert("Download failed");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Transaction Reports</h2>

      <input value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <br /><br />

      <button onClick={handleFetch}>Fetch Report</button>
      <button onClick={handleDownload}>Download Excel</button>

      {loading && <p>Loading...</p>}

      <table border="1">
        <thead>
          <tr>
            <th>Account</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Txn ID</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.Account_Number}</td>
              <td>{item.Transaction_Amount}</td>
              <td>{item["Date_&_Time"]}</td>
              <td>{item.Transaction_Id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}