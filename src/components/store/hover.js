export default {
    state: {
        skillHovered: false,
        projectsHovered: false,
        experienceHovered: false,
        aboutMeHovered: false
    },

    mutations: {
        'hover:setSkills'(state, skillHovered) {
            state.skillHovered = skillHovered;
        },
        'hover:setProjects'(state, projectsHovered) {
            state.projectsHovered = projectsHovered;
        },
        'hover:setExperience'(state, experienceHovered) {
            state.experienceHovered = experienceHovered;
        },
        'hover:setAboutMe'(state, aboutMeHovered) {
            state.aboutMeHovered = aboutMeHovered;
        },
    },

    getters: {
        skillHovered(state) {
            return state.skillHovered
        },
        projectsHovered(state) {
            return state.projectsHovered
        },
        experienceHovered(state) {
            return state.experienceHovered
        },
        aboutMeHovered(state) {
            return state.aboutMeHovered
        },
    }
}