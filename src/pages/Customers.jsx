import CustomerData from "../assets/Customer.json";
import PageHeader from "../components/PageHeader.jsx"
import { useNavigate } from "react-router-dom";
export default function Customers (){
    const navigate = useNavigate();
    return (
        <div id="customers-container">
            <PageHeader
                title="Customers"
                breadcrumb={["Customers", "Customer List"]}>
                <button
                    onClick={() => navigate("/customers/add")}
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                    >   
                    Add Customer
                </button>
            </PageHeader>
            <div className="mt-8 overflow-x-auto">
                {/* Tabel untuk menampilkan daftar pelanggan */}
                <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-hijau text-white">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold">Customer ID</th>
                            <th className="px-6 py-4 text-left font-semibold">Customer Name</th>
                            <th className="px-6 py-4 text-left font-semibold">Email</th>
                            <th className="px-6 py-4 text-left font-semibold">Phone</th>
                            <th className="px-6 py-4 text-left font-semibold">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over customers and display each row */}
                        {CustomerData.map((customer) => (
                            <tr
                                key={customer.customerID}
                                className="hover:bg-gray-100 transition-all"
                            >
                                <td className="border-t border-gray-300 px-6 py-4">{customer.customerID}</td>
                                <td className="border-t border-gray-300 px-6 py-4">{customer.customerName}</td>
                                <td className="border-t border-gray-300 px-6 py-4">{customer.email}</td>
                                <td className="border-t border-gray-300 px-6 py-4">{customer.phone}</td>
                                <td className="border-t border-gray-300 px-6 py-4">{customer.loyalty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )   
}