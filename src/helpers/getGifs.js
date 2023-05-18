export const getGifs =async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z2WGF9xS40kmabtSt3OUEvwtwm7X7S31&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


    return gifs;
}
