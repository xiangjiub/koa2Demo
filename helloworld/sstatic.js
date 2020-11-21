const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');

app.use(async(ctx,next) =>{
    await next();
})
// 配置模板引擎
app.use(views('views'),{
    extension:'pug'
})
// 配置中间件
app.use(bodyparser());

// 配置静态web服务的中间件  可以配置多个
app.use(static('public'))

router.get('/',async(ctx,next) =>{
    ctx.body = '首页';
})

router.get('/news',async (ctx, next) => {
    ctx.body = '新闻页面';
})

router.post('/doAdd', async (ctx, next) => {
    // 获取表单提交的数据
    ctx.body = ctx.request.body;
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4002);
