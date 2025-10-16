import { Link } from "react-router-dom";

export default function CardItem({ id, title, price, description, category, image }) {
  return (
    <div className="text-black bg-white rounded-lg shadow-lg p-4 mb-6 flex flex-col items-center w-sm mx-auto">

      <img src={image} className="w-32 h-32 object-contain mb-4 rounded" />

      <h1 className="text-xl font-bold mb-2 text-center">{title}</h1>

      <h3 className="text-lg font-semibold mb-2">R$ {price}</h3>

      <Link to={`/produto/${id}`}> 
        <button className="rounded-lg bg-amber-500 px-4 py-2 text-white font-semibold hover:bg-amber-600 transition">Ver detalhes</button>
      </Link>
    </div>
  )
}