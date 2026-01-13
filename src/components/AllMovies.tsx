"use client";

import { DelMovie, UpdMovie } from "@/actions"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DialogDemo from "./FormEdit";

const AllMovies = ({ movies }: any) => {
    const [isOpen, setIsOpen] = useState <boolean> (false);

    const setOpen = (val: boolean) => { setIsOpen(val) };

    return (
        <div className="flex space-x-10 space-y-2">
            {movies && movies.map((movie: any) => (
                <section key={movie.id} className="space-y-2">
                    <img src={movie.image} width={150} alt="" />
                    <p>{movie.title}</p>
                    <p>{movie.description}</p>

                    <div className="flex space-x-2">
                        <DialogDemo movie={movie} />
                        <form action={DelMovie}>
                            <input type="hidden" name="id" defaultValue={movie.id} />
                            <Button type="submit" className="hover:bg-white hover:text-black duration-500">Delete</Button>
                        </form>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default AllMovies;