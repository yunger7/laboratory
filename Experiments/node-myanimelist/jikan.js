import { Jikan } from "node-myanimelist";
import { getRelatedAnime } from "./utils.js";

const getProfile = async (username) => {
	const user = Jikan.user(username);
	const profile = await user.profile();
	console.log(profile);
};

const getAnimelist = async (username) => {
	const user = Jikan.user(username);
	const animelist = await user.animelist().all();
	console.log(animelist);
};

const getAnime = async (id) => {
	try {
		const anime = await Jikan.anime(id).info();
		console.log('> success', anime);
	}
	catch (error) {
		console.log('> error', error);
	}
};

const searchAnime = async query => {
	const result = await Jikan.search().anime({ q: query });
	console.log(result);
};

const getFullAnime = async id => {
	try {
		const anime = await Jikan.anime(id).info();
		const related = await getRelatedAnime(anime);
		anime.related = related;
		console.log('> success', anime);
	} catch (error) {
		console.log('> error', error);
	}
};

// getProfile("yunger");
// getAnimelist("yunger");
// getAnime(123123123);
// searchAnime('steins gate');

// getFullAnime(39783);
// getFullAnime(41587);
// getFullAnime(41623);
