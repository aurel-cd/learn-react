import { createContext, useState } from "react";

const FavouritesContext =  createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetuup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {

  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetuup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetuup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites(prevUserFavourites => {
      return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
  };

  
  return (
  <FavouritesContext.Provider value={context}>
    {props.children}
  </FavouritesContext.Provider>
  );
}

export default FavouritesContext;