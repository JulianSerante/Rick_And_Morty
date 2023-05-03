let myFavorites = [];

const postFav = (req, res) => {
 const {id, name, status, species, gender, origin, image} = req.body;
 const characterFound = myFavorites.find(fav => fav.id === id)

    try {

        if(characterFound) throw Error ('El personaje ya se encuentra en favoritos');

        const character = {
            id, 
            name, 
            status, 
            species, 
            gender, 
            origin, 
            image, 
        }
        myFavorites.push(character);
        return res.status(200).json(myFavorites);
    
    } catch(error) {
    return res.status(400).json({message: 'Not Found'})
    }   
}


const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);


    return res.status(200).json(myFavorites);
};


module.exports = {
    postFav,
    deleteFav
}