const oauth = require(global.__base + 'middlewares/oauth');
const page = async(ctx, next) => {

    ctx.body = await ctx.service.like.book.get();
};

module.exports = {
    page: page,
    method: 'get',    // 请求方式  get请求，post请求，all请求（全部请求）  默认all
    before: [oauth],      // 存放中间件
    after: []
};