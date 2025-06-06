import Component from "@ember/component";
import { classNames } from "@ember-decorators/component";
import DNavigation from "discourse/components/d-navigation";

@classNames("users-top-outlet", "add-nav")
export default class AddNav extends Component {
  <template>
    <div class="list-controls navigation-container clearfix">
      <DNavigation @filterMode="users" />
    </div>
  </template>
}
