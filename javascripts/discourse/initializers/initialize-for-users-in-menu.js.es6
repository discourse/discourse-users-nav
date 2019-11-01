import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-users-to-top-menu",
  initialize() {
    withPluginApi("0.8", api => {
      api.addNavigationBarItem({
        name: "users",
        href: "/u",
        title: I18n.t(themePrefix("users_nav.title")),
        displayName: I18n.t(themePrefix("users_nav.display_name"))
      });
    });
  }
};
