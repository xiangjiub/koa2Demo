const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

app.use(async(ctx,next) => {
    await next();
});

router.get('/',async (ctx,next) => {
    ctx.body = '这是一个首页';
})

router.get('/news',async (ctx,next) => {
    ctx.body = '这是新闻页';
})

app.use(router.routes()); // 启动路由
app.use(router.allowedMethods());

app.listen(4002);