
interface HeaderProps{
    label: string
}

const Header: React.FC <HeaderProps> = ({label})=> {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="font-semibold text-3xl">Auth</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}

export default Header;
