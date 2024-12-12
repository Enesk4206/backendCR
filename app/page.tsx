"use client";
import { get } from "http";
import { getAPI, postAPI } from "../services/fetchAPI"
import { useState, useEffect } from "react"
import toast from "react-hot-toast";

export default function Home() {
  const [users, setUsers] = useState([]);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // Veri kontrolü

    try {
      const res = await postAPI('/Add', data);  

      if (res?.message === 'Başarıyla işlendi') {
        toast.success("Başarıyla eklendi");
      } else {
        toast.error("Bir şeyler ters gitti");
      }
    } catch (err) {
      toast.error("Bir hata oluştu");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
          getAPI('/GetAll').then((res) => {
          if (res) {
            const get = setUsers(res.data[0])
          }
        });
      
      } catch (err) {
        console.error('Veri alınırken hata oluştu:', err); 
      }
    };

    fetchUsers(); 
  }, [users])

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-5 text-center">Admin Tablosuna Veri Ekleme</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Gönder
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Kullanıcılar:</h2>
        </div>


      </div>
      </>
  );
}
