"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
var validateSchema = function (schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            res.status(422).send(validation.error.message);
        }
        else {
            next();
        }
    };
};
exports.validateSchema = validateSchema;
