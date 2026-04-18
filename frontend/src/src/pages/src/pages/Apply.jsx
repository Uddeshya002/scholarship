import axios from "axios";

export default function Apply() {
  const apply = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/apply",
      {},
      { headers: { Authorization: token } }
    );

    alert(`Status: ${res.data.status} (${res.data.probability}%)`);
  };

  return (
    <div>
      <h1>Apply Scholarship</h1>
      <button onClick={apply}>Apply</button>
    </div>
  );
}
