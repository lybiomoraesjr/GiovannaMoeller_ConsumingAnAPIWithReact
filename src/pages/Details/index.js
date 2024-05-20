import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Página de detalhes</h1>
    </div>
  );
}

export default Details;
