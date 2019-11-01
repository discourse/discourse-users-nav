import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-users-to-top-menu",
  initialize() {
    withPluginApi("0.8", api => {
      api.addNavigationBarItem({
        name: "users",
        href: "/u",
        title: I18n.t(themePrefix("display_name")),
        displayName: I18n.t(themePrefix("title"))
      });
    });
  }
};
