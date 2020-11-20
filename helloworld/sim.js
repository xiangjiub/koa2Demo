const koa = require('koa');
const app = new koa();
const router = require('koa-router')();

router.get('/',function (ctx,next){
    ctx.body = 'koa2 helloworld';
})


router.get('/:id',function (ctx,next){
    console.log(ctx.params);
    ctx.body = `${ctx.params.id}`;
})
// 处理多url
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);