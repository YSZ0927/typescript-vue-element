import Vue from 'vue';
import {
    Button,
    Container,
    Header,
    Main,
    Menu,
    Aside,
    Submenu,
    MenuItem,
    MenuItemGroup,
    MessageBox,
} from 'element-ui';

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Aside);
Vue.use(MenuItemGroup);

Vue.prototype.$msgbox = MessageBox;
