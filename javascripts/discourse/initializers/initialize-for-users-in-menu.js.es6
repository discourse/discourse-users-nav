import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-users-to-top-menu",
  initialize() {
    withPluginApi("0.8", api => {
      console.log(I18n.t(themePrefix("users_nav.display_name")));
      console.log(I18n.t(themePrefix("users_nav.help_text")));
      api.addNavigationBarItem({
        name: "users",
        href: "/u",
        title: I18n.t(themePrefix("foobar")),
        displayName: I18n.t(themePrefix("foobar"))
      });
    });
  }
};
