"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
exports.bookSchema = Joi.object({
    blogpost: Joi.number().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    published: Joi.object({
        publisher: Joi.string().required(),
        year: Joi.number()
            .min(800)
            .max(2222)
            .required(),
    }),
});
//# sourceMappingURL=books.schema.js.map