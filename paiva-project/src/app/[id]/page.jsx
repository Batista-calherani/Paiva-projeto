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
            <Link href={'/'}>Voltar</Link>
            <div className="sm:conteiner h-fit ">
                
                {produto && <>
                    <p>102938120938</p>
                    <img src={produto.image} alt="" className=" rounded float-start" />
                </>}
                
            </div>
        </>
    )
}