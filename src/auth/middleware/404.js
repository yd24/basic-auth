'use strict';

function error404(request, response, next) {
    response.status(404).send('404 Resource not found.');
}

module.exports = error404;