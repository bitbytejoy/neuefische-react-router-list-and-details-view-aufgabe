import {useEffect, useState} from "react";
import {Character} from "./Root";
import axios from "axios";

export default function useCharacter (id: string|undefined) {
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);
    })();
  }, [id]);

  return character;
}