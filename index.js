/*!
 * Teo.JS cookies middleware
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 11/28/16
 */

"use strict";

const Cookies = require("cookies");

module.exports = {
    extension(app, options = {}) {  // see https://github.com/pillarjs/cookies
        app.middleware(function* (next) {
            this.req.cookies = this.res.cookies = new Cookies(this.req, this.res, options);
            yield next;
        });
    }
};