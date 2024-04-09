const franc= require("franc")
const langs = require("langs")
const input = process.argv[2]
const langcode = franc(input)
const language = langs.where("3",langcode)
console.log(language.name)