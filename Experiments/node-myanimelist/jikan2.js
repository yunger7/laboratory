import { Jikan } from "node-myanimelist";

const getAnime = async (id) => {
  const anime = Jikan.anime(id);

  try {
    const info = await anime.info();
    const charactersStaff = await anime.charactersStaff();
    const stats = await anime.stats();
    const episodes = await anime.episodes();
    const recommendations = await anime.recommendations()
  
    const data = {
      ...info,
      stats: {
        completed: stats.completed,
        plan_to_watch: stats.plan_to_watch,
        watching: stats.watching,
        dropped: stats.dropped,
        on_hold: stats.on_hold,
        scores: stats.scores,
        total: stats.total,
      },
      characters: charactersStaff.characters,
      staff: charactersStaff.staff,
      recommendations: recommendations.recommendations,
      episodes: episodes.episodes,
    }
  
    console.log(data);

  } catch (error) {
    console.log("error");
  }
}

getAnime(39783);