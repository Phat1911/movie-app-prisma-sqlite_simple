"use server"

import AllMovies from "@/components/AllMovies";
import { db } from "../../../utils/prisma";
import Link from "next/link";

export default async function Page() {
    const movies = await db.movie.findMany();
    return <div className="m-[30px] space-y-10">
        <AllMovies movies={movies} />;
        <Link href="/add-movie" className="bg-black text-white rounded-lg cursor-poiter font-bold p-[10px] ">Add movie</Link> 
    </div>
}