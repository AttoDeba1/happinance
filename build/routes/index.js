"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var sql = require("mssql");
var router = express.Router();
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var selected_city, sql, items, cities;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selected_city = req.query.city;
                    sql = require('mssql');
                    items = [{ "id": 1, "ville": "Lille", "departement": 59, "temperature": 19.7, "jour": "2/1/2022" },
                        { "id": 2, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 21.8, "jour": "10/1/2022" },
                        { "id": 3, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 9.1, "jour": "6/30/2022" },
                        { "id": 4, "ville": "Loos", "departement": 59, "temperature": 36.2, "jour": "8/14/2022" },
                        { "id": 5, "ville": "Armentières", "departement": 59, "temperature": 14.9, "jour": "11/14/2021" },
                        { "id": 6, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 18.9, "jour": "7/15/2022" },
                        { "id": 7, "ville": "Lille", "departement": 59, "temperature": 27.5, "jour": "2/6/2022" },
                        { "id": 8, "ville": "Lezennes", "departement": 59, "temperature": 15.1, "jour": "2/2/2022" },
                        { "id": 9, "ville": "Loos", "departement": 59, "temperature": 38.1, "jour": "12/20/2021" },
                        { "id": 10, "ville": "Lezennes", "departement": 59, "temperature": 30.7, "jour": "11/8/2021" },
                        { "id": 11, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 10.3, "jour": "12/16/2021" },
                        { "id": 12, "ville": "Lezennes", "departement": 59, "temperature": 10.1, "jour": "9/26/2022" },
                        { "id": 13, "ville": "Loos", "departement": 59, "temperature": 26.9, "jour": "3/14/2022" },
                        { "id": 14, "ville": "Lille", "departement": 59, "temperature": 2.0, "jour": "10/29/2021" },
                        { "id": 15, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 22.2, "jour": "7/18/2022" },
                        { "id": 15, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 22.2, "jour": "7/18/2022" },
                        { "id": 16, "ville": "Dunkerque", "departement": 59, "temperature": 24.4, "jour": "9/10/2022" },
                        { "id": 17, "ville": "Lezennes", "departement": 59, "temperature": 0.8, "jour": "2/26/2022" },
                        { "id": 18, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 23.1, "jour": "6/10/2022" },
                        { "id": 19, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 25.6, "jour": "7/9/2022" },
                        { "id": 20, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 27.7, "jour": "8/19/2022" },
                        { "id": 21, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 20.7, "jour": "1/9/2022" },
                        { "id": 22, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 27.0, "jour": "12/4/2021" },
                        { "id": 23, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 37.4, "jour": "7/18/2022" },
                        { "id": 24, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 38.6, "jour": "5/18/2022" },
                        { "id": 25, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 12.2, "jour": "1/21/2022" },
                        { "id": 26, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 16.8, "jour": "4/9/2022" },
                        { "id": 27, "ville": "Loos", "departement": 59, "temperature": 36.4, "jour": "6/17/2022" },
                        { "id": 28, "ville": "Lille", "departement": 59, "temperature": 2.6, "jour": "2/8/2022" },
                        { "id": 29, "ville": "Loos", "departement": 59, "temperature": 13.2, "jour": "6/17/2022" },
                        { "id": 30, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 36.4, "jour": "9/19/2022" },
                        { "id": 31, "ville": "Loos", "departement": 59, "temperature": 37.8, "jour": "8/2/2022" },
                        { "id": 32, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 38.1, "jour": "5/13/2022" },
                        { "id": 33, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 31.0, "jour": "12/3/2021" },
                        { "id": 34, "ville": "Armentières", "departement": 59, "temperature": 16.9, "jour": "1/6/2022" },
                        { "id": 35, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 14.3, "jour": "6/16/2022" },
                        { "id": 36, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 35.6, "jour": "4/23/2022" },
                        { "id": 37, "ville": "Armentières", "departement": 59, "temperature": 20.1, "jour": "1/21/2022" },
                        { "id": 38, "ville": "Lezennes", "departement": 59, "temperature": 38.9, "jour": "12/19/2021" },
                        { "id": 39, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 38.2, "jour": "5/24/2022" },
                        { "id": 40, "ville": "Dunkerque", "departement": 59, "temperature": 15.8, "jour": "5/11/2022" },
                        { "id": 41, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 24.9, "jour": "8/26/2022" },
                        { "id": 42, "ville": "Loos", "departement": 59, "temperature": 9.9, "jour": "8/11/2022" },
                        { "id": 43, "ville": "Dunkerque", "departement": 59, "temperature": 22.3, "jour": "9/14/2022" },
                        { "id": 44, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 37.2, "jour": "8/7/2022" },
                        { "id": 45, "ville": "Lezennes", "departement": 59, "temperature": 27.6, "jour": "10/8/2021" },
                        { "id": 46, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 12.8, "jour": "6/27/2022" },
                        { "id": 47, "ville": "Lezennes", "departement": 59, "temperature": 13.7, "jour": "6/1/2022" },
                        { "id": 48, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 34.9, "jour": "5/1/2022" },
                        { "id": 49, "ville": "Lille", "departement": 59, "temperature": 24.0, "jour": "9/20/2022" },
                        { "id": 50, "ville": "Lezennes", "departement": 59, "temperature": 38.7, "jour": "4/29/2022" },
                        { "id": 51, "ville": "Loos", "departement": 59, "temperature": 25.2, "jour": "8/4/2022" },
                        { "id": 52, "ville": "Armentières", "departement": 59, "temperature": 29.9, "jour": "9/16/2022" },
                        { "id": 53, "ville": "Lille", "departement": 59, "temperature": 17.1, "jour": "6/2/2022" },
                        { "id": 54, "ville": "Armentières", "departement": 59, "temperature": 34.9, "jour": "1/26/2022" },
                        { "id": 55, "ville": "Dunkerque", "departement": 59, "temperature": 33.1, "jour": "3/27/2022" },
                        { "id": 56, "ville": "Armentières", "departement": 59, "temperature": 28.5, "jour": "12/17/2021" },
                        { "id": 57, "ville": "Loos", "departement": 59, "temperature": 1.7, "jour": "1/3/2022" },
                        { "id": 58, "ville": "Lille", "departement": 59, "temperature": 5.0, "jour": "3/15/2022" },
                        { "id": 59, "ville": "Loos", "departement": 59, "temperature": 1.6, "jour": "11/12/2021" },
                        { "id": 60, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 24.9, "jour": "10/6/2021" },
                        { "id": 61, "ville": "Lille", "departement": 59, "temperature": 10.6, "jour": "4/21/2022" },
                        { "id": 62, "ville": "Dunkerque", "departement": 59, "temperature": 20.3, "jour": "4/8/2022" },
                        { "id": 63, "ville": "Loos", "departement": 59, "temperature": 17.9, "jour": "5/4/2022" },
                        { "id": 64, "ville": "Dunkerque", "departement": 59, "temperature": 11.8, "jour": "6/1/2022" },
                        { "id": 65, "ville": "Lezennes", "departement": 59, "temperature": 31.2, "jour": "6/25/2022" },
                        { "id": 66, "ville": "Lezennes", "departement": 59, "temperature": 3.0, "jour": "4/16/2022" },
                        { "id": 67, "ville": "Armentières", "departement": 59, "temperature": 30.6, "jour": "7/6/2022" },
                        { "id": 68, "ville": "Armentières", "departement": 59, "temperature": 33.4, "jour": "3/3/2022" },
                        { "id": 69, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 30.1, "jour": "11/5/2021" },
                        { "id": 70, "ville": "Lille", "departement": 59, "temperature": 31.9, "jour": "11/11/2021" },
                        { "id": 71, "ville": "Lille", "departement": 59, "temperature": 24.9, "jour": "8/21/2022" },
                        { "id": 72, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 33.5, "jour": "7/4/2022" },
                        { "id": 73, "ville": "Dunkerque", "departement": 59, "temperature": 16.9, "jour": "3/24/2022" },
                        { "id": 74, "ville": "Lille", "departement": 59, "temperature": 14.8, "jour": "11/22/2021" },
                        { "id": 75, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 9.4, "jour": "4/9/2022" },
                        { "id": 76, "ville": "Loos", "departement": 59, "temperature": 35.5, "jour": "4/26/2022" },
                        { "id": 77, "ville": "Armentières", "departement": 59, "temperature": 10.1, "jour": "9/4/2022" },
                        { "id": 78, "ville": "Armentières", "departement": 59, "temperature": 13.2, "jour": "10/25/2021" },
                        { "id": 79, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 30.7, "jour": "8/11/2022" },
                        { "id": 80, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 17.9, "jour": "6/4/2022" },
                        { "id": 81, "ville": "Armentières", "departement": 59, "temperature": 28.4, "jour": "6/17/2022" },
                        { "id": 82, "ville": "Lezennes", "departement": 59, "temperature": 25.0, "jour": "11/7/2021" },
                        { "id": 83, "ville": "Lille", "departement": 59, "temperature": 21.9, "jour": "8/6/2022" },
                        { "id": 84, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 34.4, "jour": "11/13/2021" },
                        { "id": 85, "ville": "Loos", "departement": 59, "temperature": 34.4, "jour": "3/31/2022" },
                        { "id": 86, "ville": "Lille", "departement": 59, "temperature": 9.4, "jour": "6/23/2022" },
                        { "id": 87, "ville": "Dunkerque", "departement": 59, "temperature": 16.9, "jour": "11/1/2021" },
                        { "id": 88, "ville": "Lezennes", "departement": 59, "temperature": 19.2, "jour": "4/27/2022" },
                        { "id": 89, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 18.8, "jour": "10/29/2021" },
                        { "id": 90, "ville": "Lezennes", "departement": 59, "temperature": 12.8, "jour": "7/31/2022" },
                        { "id": 91, "ville": "Loos", "departement": 59, "temperature": 27.2, "jour": "7/5/2022" },
                        { "id": 92, "ville": "Lezennes", "departement": 59, "temperature": 33.6, "jour": "1/24/2022" },
                        { "id": 93, "ville": "Lezennes", "departement": 59, "temperature": 23.7, "jour": "11/29/2021" },
                        { "id": 94, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 17.5, "jour": "7/21/2022" },
                        { "id": 95, "ville": "Dunkerque", "departement": 59, "temperature": 4.1, "jour": "3/23/2022" },
                        { "id": 96, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 7.6, "jour": "9/17/2022" },
                        { "id": 97, "ville": "Lille", "departement": 59, "temperature": 31.6, "jour": "3/23/2022" },
                        { "id": 98, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 32.9, "jour": "9/8/2022" },
                        { "id": 99, "ville": "Loos", "departement": 59, "temperature": 1.6, "jour": "4/15/2022" },
                        { "id": 100, "ville": "Lezennes", "departement": 59, "temperature": 35.9, "jour": "4/3/2022" },
                        { "id": 101, "ville": "Lille", "departement": 59, "temperature": 16.2, "jour": "5/29/2022" },
                        { "id": 102, "ville": "Lezennes", "departement": 59, "temperature": 6.9, "jour": "7/23/2022" },
                        { "id": 103, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 29.7, "jour": "4/5/2022" },
                        { "id": 104, "ville": "Dunkerque", "departement": 59, "temperature": 12.1, "jour": "2/27/2022" },
                        { "id": 105, "ville": "Loos", "departement": 59, "temperature": 6.3, "jour": "7/24/2022" },
                        { "id": 106, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 20.1, "jour": "1/14/2022" },
                        { "id": 107, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 10.3, "jour": "12/22/2021" },
                        { "id": 108, "ville": "Lezennes", "departement": 59, "temperature": 33.1, "jour": "6/26/2022" },
                        { "id": 109, "ville": "Dunkerque", "departement": 59, "temperature": 16.3, "jour": "3/17/2022" },
                        { "id": 110, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 23.5, "jour": "7/14/2022" },
                        { "id": 111, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 23.9, "jour": "10/8/2021" },
                        { "id": 112, "ville": "Armentières", "departement": 59, "temperature": 23.9, "jour": "2/28/2022" },
                        { "id": 113, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 34.8, "jour": "6/6/2022" },
                        { "id": 114, "ville": "Armentières", "departement": 59, "temperature": 30.5, "jour": "2/22/2022" },
                        { "id": 115, "ville": "Dunkerque", "departement": 59, "temperature": 29.0, "jour": "2/18/2022" },
                        { "id": 116, "ville": "Lezennes", "departement": 59, "temperature": 20.5, "jour": "5/23/2022" },
                        { "id": 117, "ville": "Loos", "departement": 59, "temperature": 21.4, "jour": "10/28/2021" },
                        { "id": 118, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 16.9, "jour": "7/6/2022" },
                        { "id": 119, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 37.2, "jour": "3/8/2022" },
                        { "id": 120, "ville": "Loos", "departement": 59, "temperature": 32.8, "jour": "7/25/2022" },
                        { "id": 121, "ville": "Loos", "departement": 59, "temperature": 27.9, "jour": "3/13/2022" },
                        { "id": 122, "ville": "Lezennes", "departement": 59, "temperature": 35.1, "jour": "5/24/2022" },
                        { "id": 123, "ville": "Lille", "departement": 59, "temperature": 33.1, "jour": "2/27/2022" },
                        { "id": 124, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 28.7, "jour": "10/23/2021" },
                        { "id": 125, "ville": "Armentières", "departement": 59, "temperature": 8.7, "jour": "12/13/2021" },
                        { "id": 126, "ville": "Lezennes", "departement": 59, "temperature": 4.6, "jour": "3/4/2022" },
                        { "id": 127, "ville": "Lezennes", "departement": 59, "temperature": 12.9, "jour": "12/22/2021" },
                        { "id": 128, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 0.5, "jour": "8/22/2022" },
                        { "id": 129, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 34.4, "jour": "9/19/2022" },
                        { "id": 130, "ville": "Lezennes", "departement": 59, "temperature": 36.9, "jour": "8/19/2022" },
                        { "id": 131, "ville": "Lille", "departement": 59, "temperature": 4.3, "jour": "4/24/2022" },
                        { "id": 132, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 37.8, "jour": "4/23/2022" },
                        { "id": 133, "ville": "Dunkerque", "departement": 59, "temperature": 33.8, "jour": "3/18/2022" },
                        { "id": 134, "ville": "Dunkerque", "departement": 59, "temperature": 24.2, "jour": "8/23/2022" },
                        { "id": 135, "ville": "Dunkerque", "departement": 59, "temperature": 28.8, "jour": "9/19/2022" },
                        { "id": 136, "ville": "Lezennes", "departement": 59, "temperature": 3.0, "jour": "12/24/2021" },
                        { "id": 137, "ville": "Dunkerque", "departement": 59, "temperature": 27.2, "jour": "3/8/2022" },
                        { "id": 138, "ville": "Lezennes", "departement": 59, "temperature": 13.5, "jour": "12/17/2021" },
                        { "id": 139, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 9.3, "jour": "10/1/2022" },
                        { "id": 140, "ville": "Lille", "departement": 59, "temperature": 32.3, "jour": "11/22/2021" },
                        { "id": 141, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 9.9, "jour": "2/2/2022" },
                        { "id": 142, "ville": "Armentières", "departement": 59, "temperature": 37.9, "jour": "7/5/2022" },
                        { "id": 143, "ville": "Lille", "departement": 59, "temperature": 14.7, "jour": "3/25/2022" },
                        { "id": 144, "ville": "Dunkerque", "departement": 59, "temperature": 34.5, "jour": "8/20/2022" },
                        { "id": 145, "ville": "Lezennes", "departement": 59, "temperature": 17.3, "jour": "1/13/2022" },
                        { "id": 146, "ville": "Loos", "departement": 59, "temperature": 26.7, "jour": "5/28/2022" },
                        { "id": 147, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 17.1, "jour": "7/14/2022" },
                        { "id": 148, "ville": "Lille", "departement": 59, "temperature": 10.5, "jour": "7/4/2022" },
                        { "id": 149, "ville": "Dunkerque", "departement": 59, "temperature": 26.3, "jour": "11/19/2021" },
                        { "id": 150, "ville": "Lezennes", "departement": 59, "temperature": 37.2, "jour": "7/12/2022" },
                        { "id": 151, "ville": "Lezennes", "departement": 59, "temperature": 20.9, "jour": "5/29/2022" },
                        { "id": 152, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 0.9, "jour": "11/3/2021" },
                        { "id": 153, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 17.1, "jour": "9/1/2022" },
                        { "id": 154, "ville": "Loos", "departement": 59, "temperature": 2.4, "jour": "11/22/2021" },
                        { "id": 155, "ville": "Lille", "departement": 59, "temperature": 1.2, "jour": "12/7/2021" },
                        { "id": 156, "ville": "Lille", "departement": 59, "temperature": 17.7, "jour": "4/15/2022" },
                        { "id": 157, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 28.8, "jour": "3/12/2022" },
                        { "id": 158, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 6.9, "jour": "8/10/2022" },
                        { "id": 159, "ville": "Lezennes", "departement": 59, "temperature": 9.9, "jour": "11/21/2021" },
                        { "id": 160, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 36.1, "jour": "10/27/2021" },
                        { "id": 161, "ville": "Lezennes", "departement": 59, "temperature": 27.3, "jour": "12/5/2021" },
                        { "id": 162, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 38.9, "jour": "2/7/2022" },
                        { "id": 163, "ville": "Armentières", "departement": 59, "temperature": 14.3, "jour": "4/11/2022" },
                        { "id": 164, "ville": "Armentières", "departement": 59, "temperature": 20.6, "jour": "6/19/2022" },
                        { "id": 165, "ville": "Lille", "departement": 59, "temperature": 0.6, "jour": "4/12/2022" },
                        { "id": 166, "ville": "Dunkerque", "departement": 59, "temperature": 28.2, "jour": "9/12/2022" },
                        { "id": 167, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 0.5, "jour": "12/18/2021" },
                        { "id": 168, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 23.0, "jour": "3/17/2022" },
                        { "id": 169, "ville": "Dunkerque", "departement": 59, "temperature": 26.3, "jour": "10/22/2021" },
                        { "id": 170, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 32.7, "jour": "8/19/2022" },
                        { "id": 171, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 34.1, "jour": "4/8/2022" },
                        { "id": 172, "ville": "Loos", "departement": 59, "temperature": 20.8, "jour": "1/20/2022" },
                        { "id": 173, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 34.2, "jour": "10/7/2021" },
                        { "id": 174, "ville": "Armentières", "departement": 59, "temperature": 0.6, "jour": "2/11/2022" },
                        { "id": 175, "ville": "Armentières", "departement": 59, "temperature": 15.6, "jour": "4/7/2022" },
                        { "id": 176, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 18.4, "jour": "7/26/2022" },
                        { "id": 177, "ville": "Loos", "departement": 59, "temperature": 5.7, "jour": "11/5/2021" },
                        { "id": 178, "ville": "Lille", "departement": 59, "temperature": 16.2, "jour": "12/11/2021" },
                        { "id": 179, "ville": "Lezennes", "departement": 59, "temperature": 25.5, "jour": "11/30/2021" },
                        { "id": 180, "ville": "Lezennes", "departement": 59, "temperature": 23.0, "jour": "6/17/2022" },
                        { "id": 181, "ville": "Loos", "departement": 59, "temperature": 0.5, "jour": "7/10/2022" },
                        { "id": 182, "ville": "Lezennes", "departement": 59, "temperature": 23.4, "jour": "6/3/2022" },
                        { "id": 183, "ville": "Armentières", "departement": 59, "temperature": 9.3, "jour": "5/28/2022" },
                        { "id": 184, "ville": "Lezennes", "departement": 59, "temperature": 13.0, "jour": "9/13/2022" },
                        { "id": 185, "ville": "Armentières", "departement": 59, "temperature": 29.8, "jour": "8/8/2022" },
                        { "id": 186, "ville": "Armentières", "departement": 59, "temperature": 5.2, "jour": "6/2/2022" },
                        { "id": 187, "ville": "Armentières", "departement": 59, "temperature": 28.1, "jour": "4/2/2022" },
                        { "id": 188, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 18.8, "jour": "7/13/2022" },
                        { "id": 189, "ville": "Lezennes", "departement": 59, "temperature": 12.2, "jour": "7/31/2022" },
                        { "id": 190, "ville": "Lille", "departement": 59, "temperature": 33.1, "jour": "9/22/2022" },
                        { "id": 191, "ville": "Lille", "departement": 59, "temperature": 27.8, "jour": "7/3/2022" },
                        { "id": 192, "ville": "Loos", "departement": 59, "temperature": 34.2, "jour": "8/14/2022" },
                        { "id": 193, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 14.3, "jour": "4/6/2022" },
                        { "id": 194, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 29.6, "jour": "3/21/2022" },
                        { "id": 195, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 22.8, "jour": "7/22/2022" },
                        { "id": 196, "ville": "Lille", "departement": 59, "temperature": 11.8, "jour": "9/21/2022" },
                        { "id": 197, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 1.7, "jour": "3/20/2022" },
                        { "id": 198, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 16.4, "jour": "9/30/2022" },
                        { "id": 199, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 19.3, "jour": "10/4/2022" },
                        { "id": 200, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 0.7, "jour": "2/15/2022" },
                        { "id": 201, "ville": "Loos", "departement": 59, "temperature": 26.7, "jour": "6/19/2022" },
                        { "id": 202, "ville": "Lezennes", "departement": 59, "temperature": 38.4, "jour": "1/27/2022" },
                        { "id": 203, "ville": "Loos", "departement": 59, "temperature": 6.5, "jour": "11/7/2021" },
                        { "id": 204, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 13.0, "jour": "11/20/2021" },
                        { "id": 205, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 5.6, "jour": "7/19/2022" },
                        { "id": 206, "ville": "Armentières", "departement": 59, "temperature": 10.6, "jour": "9/25/2022" },
                        { "id": 207, "ville": "Armentières", "departement": 59, "temperature": 29.7, "jour": "1/1/2022" },
                        { "id": 208, "ville": "Dunkerque", "departement": 59, "temperature": 27.7, "jour": "1/1/2022" },
                        { "id": 209, "ville": "Lille", "departement": 59, "temperature": 6.7, "jour": "1/20/2022" },
                        { "id": 210, "ville": "Loos", "departement": 59, "temperature": 36.2, "jour": "3/5/2022" },
                        { "id": 211, "ville": "Armentières", "departement": 59, "temperature": 16.8, "jour": "12/24/2021" },
                        { "id": 212, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 9.8, "jour": "10/19/2021" },
                        { "id": 213, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 25.3, "jour": "12/11/2021" },
                        { "id": 214, "ville": "Dunkerque", "departement": 59, "temperature": 12.2, "jour": "4/10/2022" },
                        { "id": 215, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 24.9, "jour": "6/2/2022" },
                        { "id": 216, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 1.9, "jour": "8/20/2022" },
                        { "id": 217, "ville": "Lezennes", "departement": 59, "temperature": 7.6, "jour": "1/10/2022" },
                        { "id": 218, "ville": "Lille", "departement": 59, "temperature": 13.2, "jour": "10/9/2021" },
                        { "id": 219, "ville": "Dunkerque", "departement": 59, "temperature": 39.5, "jour": "6/2/2022" },
                        { "id": 220, "ville": "Loos", "departement": 59, "temperature": 20.1, "jour": "9/21/2022" },
                        { "id": 221, "ville": "Dunkerque", "departement": 59, "temperature": 4.9, "jour": "11/12/2021" },
                        { "id": 222, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 33.8, "jour": "5/3/2022" },
                        { "id": 223, "ville": "Lezennes", "departement": 59, "temperature": 2.3, "jour": "6/29/2022" },
                        { "id": 224, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 17.5, "jour": "7/4/2022" },
                        { "id": 225, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 28.9, "jour": "3/21/2022" },
                        { "id": 226, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 25.4, "jour": "6/1/2022" },
                        { "id": 227, "ville": "Lezennes", "departement": 59, "temperature": 22.9, "jour": "6/11/2022" },
                        { "id": 228, "ville": "Armentières", "departement": 59, "temperature": 5.3, "jour": "6/4/2022" },
                        { "id": 229, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 19.7, "jour": "12/28/2021" },
                        { "id": 230, "ville": "Loos", "departement": 59, "temperature": 6.5, "jour": "12/7/2021" },
                        { "id": 231, "ville": "Lille", "departement": 59, "temperature": 15.7, "jour": "8/24/2022" },
                        { "id": 232, "ville": "Loos", "departement": 59, "temperature": 4.9, "jour": "1/12/2022" },
                        { "id": 233, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 20.8, "jour": "10/2/2022" },
                        { "id": 234, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 17.5, "jour": "1/27/2022" },
                        { "id": 235, "ville": "Loos", "departement": 59, "temperature": 39.4, "jour": "1/8/2022" },
                        { "id": 236, "ville": "Loos", "departement": 59, "temperature": 6.6, "jour": "8/30/2022" },
                        { "id": 237, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 35.1, "jour": "3/11/2022" },
                        { "id": 238, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 36.6, "jour": "2/17/2022" },
                        { "id": 239, "ville": "Armentières", "departement": 59, "temperature": 24.6, "jour": "1/5/2022" },
                        { "id": 240, "ville": "Lille", "departement": 59, "temperature": 39.4, "jour": "4/15/2022" },
                        { "id": 241, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 0.3, "jour": "10/24/2021" },
                        { "id": 242, "ville": "Lezennes", "departement": 59, "temperature": 0.8, "jour": "4/9/2022" },
                        { "id": 243, "ville": "Dunkerque", "departement": 59, "temperature": 20.6, "jour": "1/8/2022" },
                        { "id": 244, "ville": "Lezennes", "departement": 59, "temperature": 3.6, "jour": "5/2/2022" },
                        { "id": 245, "ville": "Lezennes", "departement": 59, "temperature": 29.6, "jour": "7/29/2022" },
                        { "id": 246, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 6.6, "jour": "12/21/2021" },
                        { "id": 247, "ville": "Lille", "departement": 59, "temperature": 16.4, "jour": "2/9/2022" },
                        { "id": 248, "ville": "Lille", "departement": 59, "temperature": 8.7, "jour": "2/12/2022" },
                        { "id": 249, "ville": "Lezennes", "departement": 59, "temperature": 6.7, "jour": "4/21/2022" },
                        { "id": 250, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 2.2, "jour": "10/5/2021" },
                        { "id": 251, "ville": "Lezennes", "departement": 59, "temperature": 14.8, "jour": "10/28/2021" },
                        { "id": 252, "ville": "Loos", "departement": 59, "temperature": 35.4, "jour": "8/23/2022" },
                        { "id": 253, "ville": "Dunkerque", "departement": 59, "temperature": 23.0, "jour": "12/7/2021" },
                        { "id": 254, "ville": "Lille", "departement": 59, "temperature": 1.3, "jour": "12/16/2021" },
                        { "id": 255, "ville": "Loos", "departement": 59, "temperature": 22.4, "jour": "10/19/2021" },
                        { "id": 256, "ville": "Armentières", "departement": 59, "temperature": 35.9, "jour": "10/18/2021" },
                        { "id": 257, "ville": "Dunkerque", "departement": 59, "temperature": 37.6, "jour": "1/23/2022" },
                        { "id": 258, "ville": "Armentières", "departement": 59, "temperature": 38.1, "jour": "6/6/2022" },
                        { "id": 259, "ville": "Lille", "departement": 59, "temperature": 1.6, "jour": "11/22/2021" },
                        { "id": 260, "ville": "Lezennes", "departement": 59, "temperature": 1.8, "jour": "12/4/2021" },
                        { "id": 261, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 22.8, "jour": "12/11/2021" },
                        { "id": 262, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 7.1, "jour": "6/24/2022" },
                        { "id": 263, "ville": "Loos", "departement": 59, "temperature": 7.8, "jour": "6/7/2022" },
                        { "id": 264, "ville": "Lille", "departement": 59, "temperature": 30.4, "jour": "1/7/2022" },
                        { "id": 265, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 28.0, "jour": "4/4/2022" },
                        { "id": 266, "ville": "Lille", "departement": 59, "temperature": 0.4, "jour": "6/17/2022" },
                        { "id": 267, "ville": "Armentières", "departement": 59, "temperature": 8.6, "jour": "4/25/2022" },
                        { "id": 268, "ville": "Dunkerque", "departement": 59, "temperature": 30.1, "jour": "6/20/2022" },
                        { "id": 269, "ville": "Lezennes", "departement": 59, "temperature": 24.1, "jour": "4/8/2022" },
                        { "id": 270, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 33.6, "jour": "12/1/2021" },
                        { "id": 271, "ville": "Dunkerque", "departement": 59, "temperature": 11.3, "jour": "11/24/2021" },
                        { "id": 272, "ville": "Lille", "departement": 59, "temperature": 35.6, "jour": "4/12/2022" },
                        { "id": 273, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 26.6, "jour": "2/18/2022" },
                        { "id": 274, "ville": "Lezennes", "departement": 59, "temperature": 8.3, "jour": "2/11/2022" },
                        { "id": 275, "ville": "Lille", "departement": 59, "temperature": 9.1, "jour": "5/14/2022" },
                        { "id": 276, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 21.6, "jour": "7/25/2022" },
                        { "id": 277, "ville": "Armentières", "departement": 59, "temperature": 16.5, "jour": "1/29/2022" },
                        { "id": 278, "ville": "Loos", "departement": 59, "temperature": 8.7, "jour": "2/8/2022" },
                        { "id": 279, "ville": "Lezennes", "departement": 59, "temperature": 21.2, "jour": "11/18/2021" },
                        { "id": 280, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 4.8, "jour": "6/5/2022" },
                        { "id": 281, "ville": "Dunkerque", "departement": 59, "temperature": 17.3, "jour": "9/30/2022" },
                        { "id": 282, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 21.5, "jour": "4/30/2022" },
                        { "id": 283, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 20.5, "jour": "3/7/2022" },
                        { "id": 284, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 29.6, "jour": "5/19/2022" },
                        { "id": 285, "ville": "Loos", "departement": 59, "temperature": 24.5, "jour": "11/1/2021" },
                        { "id": 286, "ville": "Lille", "departement": 59, "temperature": 2.8, "jour": "7/22/2022" },
                        { "id": 287, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 29.9, "jour": "1/19/2022" },
                        { "id": 288, "ville": "Lille", "departement": 59, "temperature": 4.0, "jour": "9/16/2022" },
                        { "id": 289, "ville": "Lille", "departement": 59, "temperature": 13.9, "jour": "6/14/2022" },
                        { "id": 290, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 0.9, "jour": "8/8/2022" },
                        { "id": 291, "ville": "Armentières", "departement": 59, "temperature": 11.8, "jour": "5/28/2022" },
                        { "id": 292, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 33.0, "jour": "3/17/2022" },
                        { "id": 293, "ville": "Lille", "departement": 59, "temperature": 2.9, "jour": "3/12/2022" },
                        { "id": 294, "ville": "Marcq-en-Barœul", "departement": 59, "temperature": 22.7, "jour": "4/23/2022" },
                        { "id": 295, "ville": "Loos", "departement": 59, "temperature": 17.8, "jour": "7/31/2022" },
                        { "id": 296, "ville": "Armentières", "departement": 59, "temperature": 38.2, "jour": "2/23/2022" },
                        { "id": 297, "ville": "Loos", "departement": 59, "temperature": 7.3, "jour": "8/24/2022" },
                        { "id": 298, "ville": "Noyelles-lès-Seclin", "departement": 59, "temperature": 1.8, "jour": "12/12/2021" },
                        { "id": 299, "ville": "Loos", "departement": 59, "temperature": 7.4, "jour": "6/17/2022" },
                        { "id": 300, "ville": "Villeneuve d Ascq", "departement": 59, "temperature": 11.6, "jour": "4/28/2022" }];
                    return [4 /*yield*/, getTemperatures()];
                case 1:
                    items = _a.sent();
                    cities = ["Armentières", "Lille", "Villeneuve d Ascq", "Marcq-en-Barœul", "Dunkerque", "Loos", "Lezennes", "Noyelles-lès-Seclin"];
                    res.render('index', { title: 'Happinance APP', cities: cities, items: items, selected_city: selected_city });
                    return [2 /*return*/];
            }
        });
    });
});
var getTemperatures = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, sql.connect('Server=localhost,1433;Database=happinance;User Id=sa;Password=bigStrongPwd.123;Encrypt=false')];
            case 1:
                _a.sent();
                return [4 /*yield*/, sql.query(__makeTemplateObject(["select * from Temperature where id = ", ""], ["select * from Temperature where id = ", ""]), value)];
            case 2:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/, result];
            case 3:
                err_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports = router;
