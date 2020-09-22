import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {
      // state data makanan
      makanan: [
        {
          id: 122,
          item: "Mie Ayam",
          harga: 10000,
          deskripsi: "mie ayam dengan resep turnun temurun",
          src:
            "https://cdn.pixabay.com/photo/2020/07/07/04/54/tom-yum-noodle-5379242_960_720.jpg"
        },
        {
          id: 123,
          item: "Nasi Kucing Pedesan",
          harga: 2500,
          deskripsi: "nasi dengan lauk ikan tongkol peda",
          src:
            "https://cdn.idntimes.com/content-images/community/2019/12/155271332658394-14750db9-77f5-4ba3-a5bd-1f6690b67e3a-71e3846eed74138dcdeb9cb5c08ff736.png"
        },
        {
          id: 125,
          item: "Nasi Kucing Ayam Suir",
          harga: 2700,
          deskripsi: "nasi dengan lauk ayam suir",
          src:
            "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
        },
        {
          id: 126,
          item: "Magelangan",
          harga: 12500,
          deskripsi: "Magelangan",
          src:
            "https://2.bp.blogspot.com/-BVbjWn7rkEs/VtL3mGKf-7I/AAAAAAAAAFE/nrK9gMmdu6g/s1600/magelangan.Jpeg"
        },
        {
          id: 120,
          item: "Nasi Sarden",
          harga: 8500,
          deskripsi: "nasi dengan lauk ikan tongkol peda",
          src:
            "https://cdn1-production-images-kly.akamaized.net/DhXJOoGjkSamDiQl4_100bE-HRI=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2988447/original/082196100_1575612900-shutterstock_635052485.jpg"
        },
        {
          id: 150,
          item: "Sate Puyuh",
          harga: 1500,
          deskripsi: "sate telor burung puyuh",
          src:
            "https://cdn-2.tstatic.net/style/foto/bank/images/sate-telur-puyuh_20171122_173155.jpg"
        },
        {
          id: 151,
          item: "Sate Usus",
          harga: 1500,
          deskripsi: "sate usus ayam",
          src:
            "https://img-global.cpcdn.com/recipes/e161c0840d797bf9/751x532cq70/sate-usus-pedas-foto-resep-utama.jpg"
        },
        {
          id: 152,
          item: "Sate Ati Ampela",
          harga: 3500,
          deskripsi: "sate ati ampela",
          src:
            "https://images.unsplash.com/photo-1561626423-a51b45aef0a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 153,
          item: "Mendoan",
          harga: 8500,
          deskripsi: "Mendoan 8 buah dengan sambal kecap",
          src:
            "https://cdn2.tstatic.net/manado/foto/bank/images/tempe-mendoan-daun-jeruk-236236.jpg"
        },
        {
          id: 154,
          item: "Nugget",
          harga: 10500,
          deskripsi: "Nugget 8 buah dengan saos",
          src:
            "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
        },
        {
          id: 156,
          item: "Krupuk Mlarat",
          harga: 3500,
          deskripsi: "Kerupuk mlarat dan sambal",
          src:
            "https://tempatwisataindonesia.id/wp-content/uploads/2017/01/Kerupuk-Melarat-1.jpg"
        }
      ],

      // state data minuman
      minuman: [
        {
          id: 310,
          item: "Bad Day freeze",
          harga: 3000,
          deskripsi: "guday sasetan",
          src:
            "https://images.unsplash.com/7/color-correct-coffee.JPG?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        },
        {
          id: 311,
          item: "Nutrisari jeruk",
          harga: 3000,
          deskripsi: "Nutrisari Jeruk",
          src:
            "https://images.unsplash.com/photo-1572874272417-c06a8ad7d402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 312,
          item: "Teh Anget",
          harga: 5000,
          deskripsi: "tea jus",
          src:
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80"
        },
        {
          id: 313,
          item: "Kapal Api",
          harga: 3500,
          deskripsi: "kapal api sasetan",
          src:
            "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 314,
          item: "Luwak White Coffe",
          harga: 3000,
          deskripsi: "luwak white coffe sasetan",
          src:
            "https://images.unsplash.com/photo-1468418143278-41595b1a4c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
        },
        {
          id: 321,
          item: "Americano",
          harga: 15000,
          deskripsi: "kopi americano",
          src:
            "https://images.unsplash.com/photo-1544681369-310c49478a6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        },

        {
          id: 323,
          item: "Long Black",
          harga: 18000,
          deskripsi: "Long black",
          src:
            "https://images.unsplash.com/photo-1517789439268-317443633a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 325,
          item: "Espresso",
          harga: 13000,
          deskripsi: "espresso",
          src:
            "https://images.unsplash.com/photo-1566873886396-030e4c892e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        },
        {
          id: 326,
          item: "Caramel Macchiato",
          harga: 27000,
          deskripsi: "Machiatio dengan caramel",
          src:
            "https://images.unsplash.com/photo-1579888071069-c107a6f79d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 327,
          item: "Cappuccino Scuro",
          harga: 26000,
          deskripsi: "Capuccino with love taste",
          src:
            "https://images.unsplash.com/photo-1590233722406-fbec1abdde3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        },
        {
          id: 328,
          item: "Cappuccino",
          harga: 21000,
          deskripsi: "Machiatio dengan caramel",
          src:
            "https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 329,
          item: "Short Black",
          harga: 20000,
          deskripsi: "Machiatio dengan caramel",
          src:
            "https://images.unsplash.com/photo-1527882702270-7094b7fdcd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
        },
        {
          id: 330,
          item: "Latte Macchiato",
          harga: 29000,
          deskripsi: "Machiatio dengan caramel",
          src:
            "https://images.unsplash.com/photo-1585747733279-8f64c2b71381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 340,
          item: "Jus Alpukat",
          harga: 11000,
          deskripsi: "jus alpukat",
          src:
            "https://images.unsplash.com/photo-1583525999977-2b928def9ab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 341,
          item: "Jus Tomat",
          harga: 5000,
          deskripsi: "jus tomat",
          src:
            "https://images.unsplash.com/photo-1598215439218-f79b46925d3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 342,
          item: "Jus Wortel",
          harga: 19000,
          deskripsi: "sesuai nama item",
          src:
            "https://images.unsplash.com/photo-1542444459-b54d41b491c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80"
        },
        {
          id: 343,
          item: "Jus Jambu",
          harga: 9000,
          deskripsi: "Jus jambu",
          src:
            "https://images.unsplash.com/photo-1577620934834-42cf7718c374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 344,
          item: "Jus Strawberry",
          harga: 9000,
          deskripsi: "jus strawberry raja wakanda",
          src:
            "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
        }
      ]
    },
    // ini untuk menampung search
    search: '',
    // ini untuk menampung keranjang
    card: [],
    // ini untuk menampung transaksi
    transaksi: [],
    // ini untuk menamung detail tranasaksi
    detailTransaksi: []

  },

  getters: {
    getData: state => {
      return state.products.makanan;
    },
    getDataM: state => {
      return state.products.minuman;
    },
    card: state => {
      return state.card;
    }
  },
  actions: {
    addItemToCard({ commit }, item) {
      commit("addItem", item);
    },
    addList({ commit }, id) {
      commit("addListM", id);
    },
    reduceList({ commit }, id) {
      commit("reduceListM", id);
    },
    removeList({ commit }, id) {
      commit("removeListM", id);
    }
  },
  mutations: {
    addItem(state, item) {
      const addItems = state.card.find(product => product.id === item.id);
      if (addItems) {
        addItems.qty++;
      } else {
        this.state.card.push({ ...item, qty: 1 });
      }
    },
    addListM(state, id) {
      let list = state.card.find(product => product.id === id);
      list.qty++;
    },
    reduceListM(state, id) {
      let list = state.card.find(product => product.id === id);
      if (list.qty > 1) {
        list.qty--;
      } else {
        state.card = state.card.filter(product => product.id !== id);
      }
    },
    removeListM(state, id) {
      state.card = state.card.filter(product => product.id !== id);
    },
    // searching 
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  modules: {}
});
