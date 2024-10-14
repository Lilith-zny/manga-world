import { defineStore } from 'pinia'
import axios from 'axios'

export const useMangaStore = defineStore('manga', {
  state: () => ({
    mangas: [],
  }),
  actions: {
    filterProducts (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    },
    async fetchProducts(){
      try{
        const response = await axios.get('http://localhost:5000/api/product');
        this.mangas = response.data
      }catch(e){
        console.log(e)
      }
    }
  }
})
