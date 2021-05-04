import Kitsu from "kitsu";
import { Jikan } from "node-myanimelist";

const kitsu = new Kitsu();
const getAnime = async () => {
  const anime = await Jikan.anime(39783).info();
  
  const coverImage = await kitsu.get("anime", {
    params: {
      filter: {
        text: anime.title_english,
      },
      fields: {
        anime: "coverImage"
      },
      page: {
        limit: 1,
      }
    },
  }).then(res => res.data[0].coverImage);

  return {
    ...anime,
    coverImage,
  };
}

getAnime().then(res => console.log(res));