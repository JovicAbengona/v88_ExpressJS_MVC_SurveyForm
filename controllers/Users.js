module.exports = {
    index: (request, response) => {
        response.render("../views/index");
    },
    result: (request, response) => {
        response.render("../views/result", {data: request.body});
    }
}