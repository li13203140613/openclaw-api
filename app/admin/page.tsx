"use client";

import { useMemo, useState } from "react";

type EmailItem = {
  id: number;
  email: string;
  source: string;
  site: string;
  createdAt: string;
};

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<EmailItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasData = useMemo(() => items.length > 0, [items.length]);

  async function loadEmails() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/emails", {
        headers: adminKey ? { "x-admin-key": adminKey } : {},
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Failed to load data");
        return;
      }
      setItems(data.emails || []);
      setTotal(data.total || 0);
    } catch {
      setError("Network error. Please retry.");
    } finally {
      setLoading(false);
    }
  }

  async function exportCsv() {
    setError("");
    try {
      const response = await fetch("/api/admin/export", {
        headers: adminKey ? { "x-admin-key": adminKey } : {},
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Export failed");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `openclaw-emails-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError("Export failed. Please retry.");
    }
  }

  return (
    <main className="site-wrap">
      <section className="card">
        <h1>OpenClaw API Admin</h1>
        <p className="section-copy">
          Review emails submitted from homepage and model pages.
          <code> ADMIN_KEY </code>
          is required if configured.
        </p>
        <div className="admin-toolbar">
          <input
            type="password"
            placeholder="Optional: enter ADMIN_KEY"
            value={adminKey}
            onChange={(event) => setAdminKey(event.target.value)}
            aria-label="Admin key"
          />
          <button onClick={loadEmails} disabled={loading}>
            {loading ? "Loading..." : "Load Emails"}
          </button>
          <button onClick={exportCsv}>Export CSV</button>
        </div>
        {error ? <p className="form-message error">{error}</p> : null}
      </section>

      <section className="card">
        <h2>Email List</h2>
        <p className="section-copy">Total: {total}</p>

        {hasData ? (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Source</th>
                  <th>Site</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.source}</td>
                    <td>{item.site}</td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="section-copy">
            No data yet. Submit one email from the homepage to test.
          </p>
        )}
      </section>
    </main>
  );
}
