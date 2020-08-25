export default {
    state: {
        view: 'resume-view'
    },

    mutations: {
        'view:set'(state, view) {
            state.view = view;
        }
    },

    getters: {
        view(state) {
            return state.view
        },
    }
}