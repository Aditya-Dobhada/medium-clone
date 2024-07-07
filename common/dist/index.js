"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBolgInput = exports.createBolgInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
    name: zod_1.default.string().optional()
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
exports.createBolgInput = zod_1.default.object({
    title: zod_1.default.string().min(3),
    content: zod_1.default.string().min(3),
});
exports.updateBolgInput = zod_1.default.object({
    title: zod_1.default.string().min(3),
    content: zod_1.default.string().min(3),
    id: zod_1.default.string()
});