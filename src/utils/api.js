const BASE_API  = 'https://yts.lt/api/v2/'

class Api {
	async getSuggestion(id) {
		try{
			const query = await fetch(BASE_API+"movie_suggestions.json?movie_id="+id);
			const {data} = await query.json();
			return data.movies;
		}catch(e) {
			return [];
		}
	}
	async getMovies() {
	    const query = await fetch(`${BASE_API}list_movies.json?`);
	    const { data } = await query.json();
	    return data.movies
	}
	async getDetails(id) {
	    const query = await fetch(`${BASE_API}movie_details.json?movie_id=${id}`);
	    const { data } = await query.json();
	    return data.movie
	}
	async searchMovie(title) {
	    const query = await fetch(`${BASE_API}list_movies.json?limit=10&sort_by=rating&query_term=${title}`);
	    const { data } = await query.json();
	    return data.movies
	}
}

export default new Api();