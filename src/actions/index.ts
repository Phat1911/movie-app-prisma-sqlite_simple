"use server";

import { redirect } from "next/navigation";
import { db } from "../../utils/prisma";

export async function addMovie(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;

    const movie = await db.movie.create({
        data: {
            title: title,
            description: description,
            image: image,
        },
    });
    console.log(movie);
    redirect("/all-movie");
}

export async function DelMovie(formData: FormData) {
    const id = formData.get("id") as string;
    await db.movie.delete({
        where: { id: id },
    });
} 

export async function UpdMovie(formData: FormData) {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const des = formData.get("des") as string;

    const movie = await db.movie.update({
        where: {id: id},
        data: {
            title: title,
            description: des,
        },
    });

    console.log(movie);
}


