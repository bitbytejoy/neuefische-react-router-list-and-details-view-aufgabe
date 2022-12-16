import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useCharacters from "./useCharacters";

export type Character = {
  id: number;
  name: string;
}

export default function Root () {
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();
  const characters = useCharacters();

  return (
    <div>
      {!characters?.length ? "No data" : (
        <ul>
          {characters.map(({id, name}) => (
            <li key={id}>
              <Link to={`/hello/${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div>
        <form onSubmit={e => {
          e.preventDefault();
          navigate(`/hello/${id}`)
        }}>
          <input onChange={e => setId(e.currentTarget.value)} type={"number"}/>
          <button>GO</button>
        </form>

      </div>
    </div>
  )
}