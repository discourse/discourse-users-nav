import { apiInitializer } from "discourse/lib/api";
import { i18n } from "discourse-i18n";

export default apiInitializer((api) => {
  api.addNavigationBarItem({
    name: "users",
    href: "/u",
    title: i18n(themePrefix("users_nav.title")),
    displayName: i18n(themePrefix("users_nav.display_name")),
  });
});
