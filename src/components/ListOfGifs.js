import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import GetGifs from './GetGifs'

export default function ListOfGifs ({ params }) {
    const { keyword } = params
    const {loading, setLoading} = useState(false)

    const {gifs, setGifs} = useState([])


    useEffect(function () {
        setLoading(true)
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if (loading) return <p className='pagLoading'>Cargando...</p>

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