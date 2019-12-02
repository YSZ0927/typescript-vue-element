import Vue from 'vue';
import {
    Button,
    Dialog,
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
    Select,
    Cascader,
    Option,
    OptionGroup,
    Tag,
    Step,
    Steps,
    Message,
} from 'element-ui';

Vue.use(Button);
Vue.use(Dialog);
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
Vue.use(Select);
Vue.use(Cascader);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Tag);
Vue.use(Step);
Vue.use(Steps);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
