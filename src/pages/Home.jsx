import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const [items, setItems] = useState([]);
  const APIItems = import.meta.env.VITE_API_ITEMS;
  const APICategorias = import.meta.env.VITE_API_CATEGORIAS;

  useEffect(() => {
    fetch(APICategorias)
      .then(response => response.json())
      .then(data => setCategorias(data))
      .catch(erro => console.log(erro));
  }, []);

  useEffect(() => {
    fetch(APIItems)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(erro => console.log(erro));
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
      {categorias.map((categoria) => (
        <div key={categoria} className="mb-8">
          <h3 className="text-center text-3xl font-bold text-white h-10 capitalize w-full bg-black">{categoria}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {items.filter(item => item.category === categoria).map((pegaItem) => (
              <CardItem key={pegaItem.id} {...pegaItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
