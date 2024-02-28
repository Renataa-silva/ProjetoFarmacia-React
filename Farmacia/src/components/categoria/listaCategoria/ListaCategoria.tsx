import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  async function buscarCategorias() {

      await buscar('/categorias', setCategorias, {
        headers: "",
      });
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;