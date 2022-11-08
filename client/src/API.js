const API_URL = "http://localhost:5000";

export async function listLogEntries() {
  try {
    const res = await fetch(`${API_URL}/api/logs`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function createLogEntry(entry) {
  const res = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(entry),
  });
  return res.json();
}
