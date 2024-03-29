"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (text) => {
    // the function is a type guard and the return value is a type predicate
    return typeof text === "string" || text instanceof String;
};
const parseName = (name) => {
    if (!isString(name)) {
        throw new Error("Incorrect or missing name");
    }
    return name;
};
const parseSsn = (ssn) => {
    if (!isString(ssn)) {
        throw new Error("Incorrect or missing ssn");
    }
    return ssn;
};
const parseOccupation = (occupation) => {
    if (!isString(occupation)) {
        throw new Error("Incorrect or missing occupation");
    }
    return occupation;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!isString(date) || !isDate(date)) {
        throw new Error("Incorrect date: " + date);
    }
    return date;
};
const isGender = (param) => {
    return Object.values(types_1.Gender)
        .map((g) => g.toString())
        .includes(param);
};
const parseGender = (gender) => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error("Incorrect gender: " + gender);
    }
    return gender;
};
const toNewPatientEntry = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Incorrect or missing data");
    }
    if ("name" in object &&
        "ssn" in object &&
        "dateOfBirth" in object &&
        "gender" in object &&
        "occupation" in object) {
        const newEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
        };
        return newEntry;
    }
    throw new Error("Incorrect data: a field missing");
};
exports.default = toNewPatientEntry;
