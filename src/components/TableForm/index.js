import React from 'react';
import { IoMdMore } from "react-icons/io";

const data = [
    { id: 1, transactionId: "2103931293301", date: "21/01/2023", name: "Countney Henry", status: "Pending", amount: "$3.972" },
    { id: 2, transactionId: "2103931293302", date: "10/02/2023", name: "Tom", status: "Success", amount: "$5.10" },
    { id: 3, transactionId: "2103931293303", date: "18/02/2023", name: "Jacob", status: "Success", amount: "$50" },
    { id: 4, transactionId: "2103931293304", date: "21/01/2023", name: "Jhon", status: "Pending", amount: "$100" },
    { id: 5, transactionId: "2103931293305", date: "21/01/2023", name: "Wilson", status: "Success", amount: "$20" },
]

const TableForm = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200 border border-gray-300 mt-5 rounded">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-300">
              No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              TRANSACTION NUMBER
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              DATE
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              OWNER
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              STATUS
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-sm font-semibold text-gray-500">
              {item.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-sm font-semibold text-black-500">
              {item.transactionId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-sm font-semibold text-gray-500">
              {item.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-sm font-semibold text-gray-500">
              {item.name}
            </td>
            <td className={`px-6 py-4 whitespace-nowrap border-b border-gray-300 text-sm font-semibold ${
              item.status === 'Pending' ? 'text-red-500' : 
              item.status === 'Success' ? 'text-green-600' : 'text-gray-500'
            }`}>
              {item.status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-black-300 text-sm font-semibold text-black flex items-center justify-between">
              <span>{item.amount}</span>
              <IoMdMore className="h-5 w-5 text-gray-500 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
      </table>
  )
}

export default TableForm