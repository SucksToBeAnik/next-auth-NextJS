"use client"
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean
}

const LoginButton:React.FC<LoginButtonProps> = ({children,mode="redirect",asChild})=> {
    const router = useRouter()

    function onClick(){
        router.push("/auth/login")
    }

    if(mode === "modal"){
        // Todo: 
        return (
            <span>TODO: Implement Modal</span>
        )
    }


    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}

export default LoginButton;
