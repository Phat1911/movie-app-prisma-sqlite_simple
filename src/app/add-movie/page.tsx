import { addMovie } from "@/actions"
import Form from "@/components/Form"
import { Button } from "@/components/ui/button"

const page = () => {
    return (
        <div className="text-black h-screen flex justify-center">
            <form action={addMovie} className="w-[85%] mt-[30px] space-y-2">
                <h1 className="font-bold text-3xl">Add a New Movie</h1><br />
                <Form />
                <Button type="submit" className="w-[100%] cursor-pointer">Add Movie</Button>
            </form>
        </div>
    )
}

export default page