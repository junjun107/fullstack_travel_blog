const API_URL = "http://localhost:5000";

async function listLogEntries() {
  const res = await fetch(`${API_URL}/api/logs`);
  return res.json();
}

export default listLogEntries;
