"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
exports.userSchema = Joi.object({
    firstName: Joi.string()
        .min(2)
        .max(30)
        .required(),
    lastName: Joi.string()
        .min(2)
        .max(30)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    phone: Joi.string()
        .required(),
    isAdmin: Joi.boolean()
        .required(),
    verified: Joi.boolean()
        .required(),
});
//# sourceMappingURL=users.schema.js.map