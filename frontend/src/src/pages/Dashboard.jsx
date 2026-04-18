import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total: {stats.total}</p>
      <p>Approved: {stats.approved}</p>
      <p>Rejected: {stats.rejected}</p>
    </div>
  );
}
