import { Jikan } from "node-myanimelist";

export const emptyObject = (obj) => {
  return Object.keys(obj).length === 0;
}

export async function getRelatedAnime(anime) {
  if (!emptyObject(anime.related)) {
		const related = [];

	  Object.keys(anime.related).map(key => anime.related[key].map(relatedAnime => {
			const { mal_id, type, name } = relatedAnime;
			related.push({
				mal_id,
				type,
				name,
				relation: key,
			});
	  }));

    for (const [index, relatedAnime] of related.entries()) {
      let moreInfo = null;

      if (relatedAnime.type === "anime") {
        moreInfo = await Jikan.anime(relatedAnime.mal_id).info();
        if (moreInfo.aired.from) related[index].date = moreInfo.aired.from.slice(0, 4); 
      }
      if (relatedAnime.type === "manga") {
        moreInfo = await Jikan.manga(relatedAnime.mal_id).info();
        if (moreInfo.published.from) related[index].date = moreInfo.published.from.slice(0, 4);
      }

      related[index].image_url = moreInfo.image_url;
    }

    return related;
	}

  return false;
}

export const delay = ms => new Promise(res => setTimeout(res, ms));
