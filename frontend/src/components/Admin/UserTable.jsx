export default function UserTable({ users }) {
  return (
    <div className="table-container">
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>

          {users.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Users Found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>
                  {user.isActive ? (
                    <span style={{ color: "green", fontWeight: "600" }}>
                      Active
                    </span>
                  ) : (
                    <span style={{ color: "red", fontWeight: "600" }}>
                      Inactive
                    </span>
                  )}
                </td>

                <td>
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>
    </div>
  );
}