const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');

app.use(async(ctx,next) => {
    await next();
});

// 配置中间件
app.use(views('views', {
    extension: 'pug' 
}))

// 配置中间件的公共数据
app.use(async(ctx,next) =>{
    ctx.state.info = '公共信息';
    await next();
})

router.get('/',async (ctx,next) => {
    await ctx.render('index',{
        title: 'Hello Koa 2!'
      });

})

router.get('/news',async (ctx,next) => {
    ctx.body = '这是新闻页';
})

app.use(router.routes()); // 启动路由
app.use(router.allowedMethods());

app.listen(4002);