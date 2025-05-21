import bgImage from '../assets/error.png';
export default function Error400() {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <h1 className="text-6xl font-bold mb-4">400</h1>
      <p className="text-lg mb-6">Bad Request – Something went wrong with your request.</p>

      <div className="w-full max-w-md flex items-center bg-white rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-4 py-2 text-black focus:outline-none"
        />
        <button className="bg-gray-800 text-white px-4 py-2">🔍</button>
      </div>

      <p className="mt-6 text-sm">
        Start from{' '}
        <a href="/" className="underline text-blue-400 hover:text-blue-200">
          home page
        </a>
      </p>
    </div>
    
  );
}
