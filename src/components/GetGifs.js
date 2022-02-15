const apiKey = 'V1ciDNHasDhkbac7tdI8nqf613clHyKv'

export default function GetGifs ({keyword = '', limit = 20, page = 0 } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data = []} = response
        if (Array.isArray(data)) {
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        }
    })
}