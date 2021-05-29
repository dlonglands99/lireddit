import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from 'path';

//export this as the type of wahtever MikroORM.init() expects as the first parameter

export default {
    dbName: 'lireddit',
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    password: 'postgres',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];