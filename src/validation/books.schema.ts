import * as Joi from '@hapi/joi';

export const bookSchema = Joi.object({
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
