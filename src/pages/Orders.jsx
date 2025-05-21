import PageHeader from "../components/PageHeader.jsx"
import OrderData from "../assets/Order.json"
import { useNavigate } from "react-router-dom";
export default function Orders (){
    const navigate = useNavigate();
    return (
        <div id="order-container">
            <PageHeader
                title="Orders"
                breadcrumb={["Orders", "Orders List"]}>
                <button
    onClick={() => navigate("/orders/add")}
    className="bg-hijau text-white px-4 py-2 rounded-lg"
>   
    Add Order
</button>
            </PageHeader>
            <div className="mt-8 overflow-x-auto">
                {/* Tabel untuk menampilkan daftar orders */}
                <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-hijau text-white">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                            <th className="px-6 py-4 text-left font-semibold">Customer Name</th>
                            <th className="px-6 py-4 text-left font-semibold">Status</th>
                            <th className="px-6 py-4 text-left font-semibold">Total Price</th>
                            <th className="px-6 py-4 text-left font-semibold">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over orders and display each row */}
                        {OrderData.map((order) => (
                            <tr
                                key={order.orderID}
                                className="hover:bg-gray-100 transition-all"
                            >
                                <td className="border-t border-gray-300 px-6 py-4">{order.orderID}</td>
                                <td className="border-t border-gray-300 px-6 py-4">{order.customerName}</td>
                                <td className={`border-t border-gray-300 px-6 py-4 ${
                                    order.status === "Completed" ? "text-green-600" :
                                    order.status === "Pending" ? "text-yellow-500" : "text-red-500"
                                }`}>
                                    {order.status}
                                </td>
                                <td className="border-t border-gray-300 px-6 py-4">${order.totalPrice.toFixed(2)}</td>
                                <td className="border-t border-gray-300 px-6 py-4">{order.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}