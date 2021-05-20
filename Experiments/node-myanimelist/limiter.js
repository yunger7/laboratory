import { Jikan } from "node-myanimelist";
import Bottleneck from "bottleneck";

const anime = Jikan.anime(5341);

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 500,
});

async function getAnimeDetails() {
  try {
    const info = await limiter.schedule(() => anime.info());
    const stats = await limiter.schedule(() => anime.stats());
    const episodes = await limiter.schedule(() => anime.episodes());

    console.log(info, stats, episodes);

  } catch (error) {
    console.log(error);
  }
}

getAnimeDetails();
