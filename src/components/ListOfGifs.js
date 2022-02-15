import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import GetGifs from './GetGifs'

const INITIAL_PAGE = 0

export default function ListOfGifs ({ params }) {
    const { keyword } = params
    const [page, setPage] = useState(INITIAL_PAGE)
    const [gifs, setGifs] = useState([])
    const isFirstpage = page == 0

    useEffect(function () {
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
            })
    }, [keyword])

    useEffect(function () {
        GetGifs({keyword, page})
        .then(pageCounter => {
            setGifs( pageCounter )
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
        <button disabled={isFirstpage} onClick={() => setPage(page - 1)}>Previous page</button>
        <button onClick={() => setPage(page + 1)}>Next page</button>
    </div>
}