"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStyle = void 0;
let styleElement = document.createElement('style');
document.head.appendChild(styleElement);
let styleSheet = styleElement.sheet;
let index = 0;
function CreateStyle(rules) {
    let result = {};
    for (let key in rules) {
        var newKey = key + '-' + (index++);
        result[key] = newKey;
        CreateRule(`.${newKey}`, rules[key]);
    }
    return result;
}
exports.CreateStyle = CreateStyle;
function CreateRule(path, properties) {
    let rule = [path, ' { '];
    for (let key in properties) {
        if (key.startsWith(':')) {
            CreateRule(path + key, properties[key]);
        }
        else if (key.startsWith('&')) {
            CreateRule(path + key.substring(1), properties[key]);
        }
        else {
            var value = properties[key];
            if (typeof (value) == 'string') {
                key = key.replace(/[A-Z]/g, s => '-' + s.toLowerCase());
                rule.push(key, ' : ', value, '; ');
            }
            else {
                console.error('css property value must be string.', key);
            }
        }
    }
    rule.push(' }');
    styleSheet.insertRule(rule.join(''));
}
