import Login from './login';
import Company from './company';
import Goods from './goods';
import Home from './home';
import User from './user';
import Shop from './shop';

export default [
    ...Login,
    ...Company,
    ...Goods,
    ...Home,
    ...User,
    ...Shop,
];
// const files = require.context('.', false, /\.ts$/);
// const modules: any = {};

// files.keys().forEach((key: string) => {
//   if (key === './index.ts') return;
//   modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default;
// });

// export default modules;
