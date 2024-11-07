function getImgUrl (name){
    return new URL(`../../public/static/assets/books/${name}`, import.meta.url)
}

export default getImgUrl