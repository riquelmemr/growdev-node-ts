"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudent = exports.listStudents = exports.deleteStudent = exports.createStudent = void 0;
const create_student_1 = __importDefault(require("./create-student"));
exports.createStudent = create_student_1.default;
const delete_student_1 = __importDefault(require("./delete-student"));
exports.deleteStudent = delete_student_1.default;
const list_students_1 = __importDefault(require("./list-students"));
exports.listStudents = list_students_1.default;
const update_student_1 = __importDefault(require("./update-student"));
exports.updateStudent = update_student_1.default;
