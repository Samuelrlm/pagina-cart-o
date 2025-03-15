import { useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent";
import instance from "../../api/instance";


export default function PageCartoes(){
    const [cartoes, setCartoes] = useState([])

    async function GetCartoes(){
        const response = await instance.get("/creditcards")
        setCartoes(response.data)
    }

    useEffect(
        () => {
            GetCartoes()
        }, []
    )

    return (
        <div className="w-full h-screen flex flex-wrap">
            {
                cartoes.map(
                    (cartao) => {
                        return (
                            <CardComponent
                                key={cartao._id}
                                nome={cartao.name}
                                numero={cartao.number}
                            />
                        )
                    }
                )
            }
        </div>
    )
}