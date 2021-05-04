import Kitsu from "kitsu";

const kitsu = new Kitsu();

const getAnime = async (query) => {
	const res = await kitsu.get("anime", {
		params: {
			filter: {
				text: query,
			},
      page: {
        limit: 1,
      },
		},
	});

  console.log(res);
};

const getCoverImage = async (query) => {
  try {
    const coverImage = await kitsu
      .get("anime", {
        params: {
          filter: {
            text: query,
          },
          fields: {
            anime: "coverImage",
          },
          page: {
            limit: 1,
          },
        },
      })
      .then(res => {
        if (res.meta.count) {
          return res.data[0].coverImage;
        }
      });

    console.log('> success', coverImage);
  }
  catch (error) {
    console.log('> error', error);
  }

};

// getAnime("The Quintessential Quintuplets 2");
// getCoverImage("The Quintessential Quintuplets 2");
