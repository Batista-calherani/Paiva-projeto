"use client";
import { useEffect, useState } from "react";
import products from '@/products.json';
import Link from "next/link";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", idade: "" });

    useEffect(() =>{
        setProdutos(products);
    }, []);

    const handlePopup = (product) => {
      setSelectedProduct(product);
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
      setSelectedProduct(null);
      setFormData({ name: "", idade: "" }); // Reset form data
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.idade < 18) {
        alert("Você precisa ter 18 anos ou mais para continuar.");
        return;
      }
      // Continue com o envio do formulário
      window.location.href = `/${selectedProduct.id}`;
    };
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

  return (<>
    <div className="container"> 
      <div className="d-grid grid-cols-4 justify-items-center gap-4 justify-content-center ">
      
      {produtos.map((p) => {
            const handleClick = () => {
              if (p.nome === "Bebida alcoólica") {
                handlePopup(p);
              } else {
                window.location.href = `/${p.id}`;
              }
            };

            return (
              <div key={p.id} className="card col-md-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img src={p.image} className="card-img-top" alt={p.nome} />
                  <h5 className="mt-3 mb-2">{p.nome}</h5>
                  <p className="card-text text-muted">{p.descri}</p>
                  <button
                    type="button"
                    className="btn theme-danger btn-subtle"
                    onClick={handleClick}
                  >
                    Click me
                  </button>
                  <small className="text-muted d-block mt-2">
                    Last updated {getRandomInt(61)} mins ago
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white p-4 rounded" style={{ width: "400px" }}>
            <h5 className=" fg-black mb-3">Formulário para {selectedProduct?.nome}</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className=" fg-black form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className=" fg-black form-label">
                  Idade
                </label>
                <input
                  min="1"
                  type="number"
                  className="form-control"
                  id="idade"
                  placeholder="Digite sua idade"
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={closePopup}
              >
                Cancelar
              </button>
              <Link href={`/${selectedProduct.id}`} >
                <button className="btn btn-primary">
                  Enviar
                </button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

