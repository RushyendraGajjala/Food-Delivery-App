import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="bg-white transition-transform duration-300 ease-in-out">
            <SheetTitle className="mx-auto mt-3">
                <span>Welcome to PuEats.com!</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex mx-4">
                <Button className="flex-1 font-bold bg-orange-500">Log in</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
