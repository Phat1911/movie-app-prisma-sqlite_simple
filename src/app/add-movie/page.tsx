import { addMovie } from "@/actions"
import { Button } from "@/components/ui/button"

const page = () => {
    return (
        <div className="text-black h-screen flex justify-center">
            <form action={addMovie} className="w-[85%] mt-[30px] space-y-2">
                <h1 className="font-bold text-3xl">Add a New Movie</h1><br />

                <label htmlFor="title" className="font-bold">Title</label><br />
                <input className="w-[100%] outline-1 text-[12px] rounded-[5px] focus:outline-black p-[10px_10px]" type="text" name="title" /><br />

                <label htmlFor="description" className="font-bold">Description</label><br />
                <input className="w-[100%] outline-1 text-[12px] rounded-[5px] focus:outline-black p-[10px_10px]" type="text" name="description" /><br />

                <label htmlFor="image" className="font-bold">Image URL</label><br />
                <input className="w-[100%] outline-1 text-[12px] rounded-[5px] focus:outline-black p-[10px_10px]" type="text" name="image" /><br />

                <Button type="submit" className="w-[100%] cursor-pointer">Add Movie</Button>
            </form>
        </div>
    )
}

export default page