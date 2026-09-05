import { useform } from "react-hook-form";
import { useMutation } from "@tanstack/react-query" ;

import { createPokemon } from "../services/pokemonService";


export default function PokemonForm() {
  const { register, handleSubmit, reset } = useform();


  const { mutate: create } = useMutation({
    mutationFn: createPokemon,
    onSuccess: () => {
        alert("Pokemon created successfully");
      reset();
    },
    onError: () => {
        alert("Error creating Pokemon");
    }
  });
}

function onSubmit(data) {
   create(data);
 }


 return (
   <form
     onSubmit={handleSubmit(onSubmit)}
     className="flex flex-col gap-4 max-w-md"
   >
     <input placeholder="Nome" {...register("name")} />
     <input placeholder="Tipo" {...register("type")} />
     <input type="number" placeholder="Nível" {...register("level")} />
     <button type="submit">Cadastrar</button>
   </form>
 );
