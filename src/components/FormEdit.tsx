import { DelMovie, UpdMovie } from "@/actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogDemo({movie}: any) {
  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-black text-white">Edit</Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
            <form action={UpdMovie}>
                <DialogHeader>
                    <DialogTitle>Edit</DialogTitle>
                </DialogHeader>
                <input type="hidden" name="id" defaultValue={movie.id} />
                <div className="grid gap-4">
                    <div className="grid gap-3">
                    <Label htmlFor="name-1">Title</Label>
                    <Input id="name-1" name="title" defaultValue={movie.title}/>
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="username-1">Description</Label>
                    <Input id="username-1" name="des" defaultValue={movie.description}/>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}
