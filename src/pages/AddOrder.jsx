import { useNavigate } from "react-router-dom";

export default function AddOrder() {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-2xl mx-auto mt-10 p-6">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add Order</h2>
            <form className="space-y-6">
                <div>
                    <input
                        className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder = "Select Customer">
                        
                    </input>
                </div>
                <div>
                    <input
                        type="date"
                        className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Order Item(s)"
                        className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-4 justify-start">
                    <button
                        type="button"
                        onClick={() => navigate("/customers")}
                        className="w-32 py-3 rounded-lg bg-gray-300 text-gray-700 font-semibold transition-all hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/orders")}
                        className="w-32 py-3 rounded-lg bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
