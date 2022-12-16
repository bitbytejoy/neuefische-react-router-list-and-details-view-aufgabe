import {useEffect, useState} from "react";
import {Character} from "./Root";
import axios from "axios";

export default function useCharacters () {
  const [characters, setCharacters] = useState<Character[]>();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(response.data.results);
    })();
  }, []);

  return characters;
}