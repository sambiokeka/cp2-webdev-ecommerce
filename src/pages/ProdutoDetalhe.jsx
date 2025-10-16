import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);
  const APIItems = import.meta.env.VITE_API_ITEMS;
  useEffect(() => {
    fetch(APIItems + id)
      .then(response => response.json())
      .then(data => setProduto(data))
      .catch(erro => console.log(erro));
  }, []); 

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-10 text-black">
      <img src={produto.image} className="w-40 h-40 object-contain mx-auto mb-4" />

      <h1 className="text-2xl font-bold mb-2 text-center">{produto.title}</h1>

      <h3 className="text-lg font-semibold mb-2 text-center">R$ {produto.price}</h3>

      <p className="mb-4 text-center">{produto.description}</p>

      <div className="flex justify-center">
        <Link to="/" className="px-4 py-2 rounded bg-amber-500 text-white">Voltar</Link>
      </div>
    </div>
  );
}
