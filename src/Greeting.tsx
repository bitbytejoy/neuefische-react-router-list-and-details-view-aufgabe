import {useParams} from "react-router-dom";
import useCharacter from "./useCharacter";

export default function Greeting () {
  const {id} = useParams<{id: string}>();
  const character = useCharacter(id);

  return (
    <div>
      {character
        ? <h1>Hello {character.name}</h1>
        : <div>Character not found</div>}
    </div>
  )
}