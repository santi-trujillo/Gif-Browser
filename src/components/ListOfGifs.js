import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import GetGifs from './GetGifs'

const INITIAL_PAGE = 1

export default function ListOfGifs ({ params }) {
    const { keyword } = params
    const [page, setPage] = useState(INITIAL_PAGE)
    const [gifs, setGifs] = useState([])


    useEffect(function () {
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
            })
    }, [keyword])

    useEffect(function () {
        GetGifs({keyword, page})
        .then(nextPage => {
            setGifs(prevGifs => prevGifs.concat(nextPage))
        })
    }, [page])

    return <div className="gifBox">
        {
            gifs.map(({id, title, url}, index) => 
                <Gif
                    key={`${id}-${index}`}
                    id={id}
                    title={title}
                    url={url}
                />
            )
        }
        <button onClick={() => setPage(1)}>Next page</button>
    </div>
}