import React from "react";

const UserList = React.memo(({ searchData }) => {
  return (
    <div>
      {searchData?.map((user) => (
        <div key={user?.id}>{user?.id}</div>
      ))}
    </div>
  );
});

export default UserList;
