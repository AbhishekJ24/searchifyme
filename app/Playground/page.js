"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const page = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://dummyjson.com/users/search?q=${searchTerm}`);
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold mt-8 mb-8 text-center">PlayGround</h1>
        <header>
          <nav className="px-16 flex items-center justify-between">
            <div>
              <form onSubmit={handleSearch} className='flex justify-center gap-2 items-center'>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="py-1 px-4 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <motion.button whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg" type="submit">Filter</motion.button>
              </form>
            </div>
          </nav>
        </header>
        <div className="mx-auto px-4 py-8 overflow-x-scroll">
          <table className="min-w-full table-auto text-xl">
            <thead>
              <tr className="tableh h-16">
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className=" tablec text-center" key={user.id}>
                  <td className="px-4 py-2">{user.firstName + " " + user.lastName}</td>
                  <td className="px-4 py-2">{user.age}</td>
                  <td className="px-4 py-2">{user.gender}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.address.address + ", " + user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default page
