import Root from "./theme-files";

const jsNation = {
  name: "jsnation-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen: false
    }
  },
  actions: {
    theme: {
      openMenu: ({state}) => {
        state.theme.isMenuOpen = true
      },
      closeMenu: ({state}) => {
        state.theme.isMenuOpen = false
      }
    }
  }
};

export default jsNation