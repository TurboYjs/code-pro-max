import Link from "next/link";

export default function NotFound() {
    return(
        <div className="w-screen h-screen bg-background justify-center items-center flex">
            <h1 className="font-titles font-bold text-2xl">Não tem nada aqui!</h1>
            <Link href={"/"}>Voltar para o início</Link>
        </div>
    )
}