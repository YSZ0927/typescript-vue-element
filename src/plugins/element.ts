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
    Table,
    TableColumn,
    Tooltip,
    Carousel,
    CarouselItem,
    Input,
    Upload,
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
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Input);
Vue.use(Upload);

Vue.prototype.$msgbox = MessageBox;
