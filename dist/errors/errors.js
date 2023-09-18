"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
function joi(message) {
    return {
        type: "joiError",
        message: message
    };
}
function notFound(resource) {
    if (resource === void 0) { resource = "Item"; }
    return {
        type: "notFound",
        message: "".concat(resource, " n\u00E3o foi encontrado!")
    };
}
function conflict(resource) {
    if (resource === void 0) { resource = "Item"; }
    return {
        type: "conflict",
        message: resource === "Item" ? "Item j\u00E1 existe e n\u00E3o pode ser duplicado!" : "Origem e o destino tem que ser distintos"
    };
}
function unprocessableEntity(resource, err) {
    if (resource === void 0) { resource = "Item"; }
    return {
        type: "unprocessableEntity",
        message: resource === "Flight" ? "A data do vôo deve ser maior que a data atual" : resource === "Schema" ? err : resource === "Dates" ? "bigger-date e smaller-date devem ser passados juntos" : "" ? err : resource === "dayjs" ? "A data tem que ser depois do dia de hoje" : ""
    };
}
function badRequest(resource) {
    if (resource === void 0) { resource = "Item"; }
    return {
        type: "badRequest",
        message: resource === "Date" ? "smaller-date deve ser menor que bigger-date" : "Invalid page value"
    };
}
function internalServerError(resource) {
    if (resource === void 0) { resource = "Item"; }
    return {
        type: "internalServerError",
        message: "Too many results"
    };
}
exports.errors = { joi: joi, notFound: notFound, conflict: conflict, unprocessableEntity: unprocessableEntity, badRequest: badRequest, internalServerError: internalServerError };
