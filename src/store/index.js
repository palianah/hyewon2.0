import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "@/db";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    user: {
      loggedIn: false,
      data: null
    }
  },
  mutations: {
    ...vuexfireMutations,
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    bindBooks: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("books", db.collection("books"));
    }),
    unbindBooks: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef("books");
    }),
    writeToBooks: firestoreAction(() => {
      // return the promise so we can await the write
      return db.collection("books").add({
        title: "writing",
        imgs: [
          "https://firebasestorage.googleapis.com/v0/b/hyewonshin-ab2ff.appspot.com/o/book%2Fbowling_bild1.jpg?alt=media&token=6575bf6f-d3c9-40f6-a1f0-a2196a5df464"
        ]
      });
    }),
    async fetchUser({ commit }) {
      await firebase.auth().onAuthStateChanged(user => {
        commit("SET_LOGGED_IN", user !== null);
        if (user) {
          commit("SET_USER", {
            email: user.email
          });
        } else {
          commit("SET_USER", null);
        }
      });
    }
  },
  modules: {}
});
