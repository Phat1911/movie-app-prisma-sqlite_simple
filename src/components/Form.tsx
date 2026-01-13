import { Button } from "./ui/button"

const Form = () => {
    return (
        <div className="w-[100%]">
            <label htmlFor="title" className="font-bold">Title</label><br />
            <input className="w-[100%] outline-1 text-[12px] rounded-[5px] focus:outline-black p-[10px_10px]" type="text" name="title" /><br />

            <label htmlFor="description" className="font-bold">Description</label><br />
            <input className="w-[100%] outline-1 text-[12px] rounded-[5px] focus:outline-black p-[10px_10px]" type="text" name="description" /><br />

            <label htmlFor="image" className="font-bold">Image URL</label><br />
            <input className="w-[100%] outline-1 text-[12px] rounded-[5px] focus:outline-black p-[10px_10px]" type="text" name="image" /><br />

        </div>
    )
}

export default Form