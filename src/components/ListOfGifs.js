import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import GetGifs from './GetGifs'

export default function ListOfGifs ({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([])


    useEffect(function () {
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
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