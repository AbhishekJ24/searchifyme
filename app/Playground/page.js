"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

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
      console.error(error);
    }
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = users.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div>
      <h1 className="text-5xl font-extrabold mt-8 mb-8 text-center">Welcome to Playground</h1>
      <header className='flex justify-center'>
        <nav className="px-16 flex items-center justify-between">
          <div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-1 px-4 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 ml-4 rounded-lg" type="submit">Filter</motion.button>
            </form>
          </div>
        </nav>
      </header>
      <div className="px-4 py-8 mt-10 flex justify-center">
        <table className="w-max text-xl">
          <thead>
            <tr className="tableh h-14">
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((user) => (
              <tr className="tablec text-center" key={user.id}>
                <td className="px-4 py-2">{user.firstName + " " + user.lastName}</td>
                <td className="px-4 py-2">{user.address.address + ", " + user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
