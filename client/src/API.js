const API_URL = "http://localhost:5000";

async function listLogEntries() {
  try {
    const res = await fetch(`${API_URL}/api/logs`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default listLogEntries;
