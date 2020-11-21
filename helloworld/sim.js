const koa = require('koa');
const app = new koa();
const router = require('koa-router')();


app.use(async(ctx,next) =>{
    await next(); // 不写next  匹配到当前路由 不往下匹配
    // ctx.body = '这是一个中间件';
    if(ctx.status == 404){
        ctx.status = 404;
        ctx.body = '404页面'
    }else{
        console.log(ctx.url);
    }
})
router.get('/',async (ctx,next) =>{
    ctx.body = 'koa2 helloworld';
})


router.get('/:id', async function (ctx,next){
    console.log(ctx.params);
    ctx.body = `${ctx.params.id}`;
    // 获取动态路由的返回值
})

router.get('/news',async(ctx,next) =>{
    ctx.body='新闻页面';
})
// 处理多url
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);