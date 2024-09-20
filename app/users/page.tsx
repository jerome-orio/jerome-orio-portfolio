import Image from 'next/image';
import React from 'react'

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    photo: string;
    country: string;
};

const UsersPage = async () => {
    const res = await fetch('https://fake-json-api.mock.beeceptor.com/users', { next : { revalidate: 60*5 }}); //refresh data fetching after 5 mins
    const users: Users[]  = await res.json();
  return (
    <>
        <div>UsersPage</div>
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <>
                                <tr key={user.id}>
                                    <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-hexagon-2 h-12 w-12">
                                            <Image width={10} height={10}
                                            src={user.photo}
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.country}</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                </>
                            );
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default UsersPage