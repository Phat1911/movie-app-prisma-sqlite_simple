import { allMovie, DelMovie, UpdMovie } from "@/actions"
import { Button } from "@/components/ui/button";

const ALlMovie = async () => {
    const movies = await allMovie();
    return (
        <div className="flex space-x-2 space-y-2">
            {movies.map((movie) => (
                <form action={UpdMovie} key={movie.id} className="space-y-2">
                    <img src={movie.image} width={150} alt="" />

                    <input type="hidden" defaultValue={movie.id} name="id" />
                    <input type="text" defaultValue={movie.title} name="title" /> <br />
                    <input type="text" defaultValue={movie.description} name="des" />

                    <div className="flex space-x-2">
                        <Button type="submit">Save</Button>
                        <Button formAction={DelMovie}>Delete</Button>
                    </div>
                </form>
            ))}
        </div>
    )
}

export default ALlMovie