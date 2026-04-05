function Navbar({ role, setRole }) {
  return (
    <div className="navbar">
      <h1>Finance Dashboard</h1>

      <div>
        <span style={{ marginRight: "10px" }}>Role:</span>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;