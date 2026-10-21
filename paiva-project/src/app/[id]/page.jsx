"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import products from '@/products.json';
import Link from "next/link";

export default function Produto() {

    const params = useParams();
    const [produto, setProduto] = useState();

    useEffect(() => {
        const produtoFound = products.find(p => p.id == params.id);
        setProduto(produtoFound);
    }, [])

    return (
        <>
            <main className="col-12">
                {produto && <>

                    <h1 className="fg-black" >{produto.nome}</h1>
                    <figure className="figure align-items-center">
                        <img src={produto.image} className=" img-thumbnail w-25 rounded-3" alt="..." />
                        <figcaption className="figure-caption">
                            {produto.nome}
                        </figcaption>
                    </figure>

                    <p className="fg-black" >{produto.descri}</p>
                    <h3 className="fg-black" >{produto.categoria}</h3>
                </>}
                <Link href={'/'}>Voltar</Link>
            </main>
        </>
    )
}