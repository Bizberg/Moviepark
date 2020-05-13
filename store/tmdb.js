export const state = () => ({
  genresList: []
})

export const mutations = {
  SET_GENRES_LIST(state, list) {
    state.genresList = list
  }
}

export const actions = {
  async setGenreList({ commit }) {
    await this.$axios.get(`${process.env.BASE_URL}/tmdb/genresListDummy`)
      .then((res) => {
        console.log('CALLING SET_GENRES_LIST ')

        commit('SET_GENRES_LIST', res.data.genres)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const getters = {

}
