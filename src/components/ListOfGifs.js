import React, {useEffect, useState} from "react"
import Gif from "./Gif"
import GetGifs from "./GetGifs"

const INITIL_PAGE = 0

export default function ListOfGifs ({ params }) {
    const { keyword } = params
    const {gifs, setGifs} = useState([])


    useEffect(function () {
        setLoading(true)
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
      }, [keyword])

    return <div className="gifBox">
    {
        gifs.map(({id, title, url}) => 
            <Gif
                key={id}
                id={id}
                title={title}
                url={url}
            />
        )
    }
    </div>
}