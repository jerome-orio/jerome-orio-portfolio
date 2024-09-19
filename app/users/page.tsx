import React from 'react'

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next : { revalidate: 60*5 }}); //refresh data fetching after 5 mins
    const users: Users[]  = await res.json();
  return (
    <>
        <div>UsersPage</div>
        <div>
            {users.map((user) => {
                return <div key={user.id}>{user.name}</div>;
                }
            )}
        </div>
    </>
  )
}

export default UsersPage