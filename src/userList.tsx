import React from "react";

interface User {
  id: number;
  login: string;
}

interface UserListProps {
  searchData: User[];
}

const UserList = React.memo(({ searchData }: UserListProps) => {
  return (
    <div>
      {searchData?.map((user: User) => (
        <div key={user?.id}>{user?.login}</div>
      ))}
    </div>
  );
});

export default UserList;
