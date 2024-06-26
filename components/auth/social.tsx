"use client"

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = ()=> {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button className="w-full" size={'lg'} variant={"outline"} onClick={()=>{}}>
                <FaGoogle className="h-5 w-5" />
            </Button>
            <Button className="w-full" size={'lg'} variant={"outline"} onClick={()=>{}}>
                <FaGithub className="h-5 w-5" />
            </Button>
            
        </div>
    )
}


export default Social;
