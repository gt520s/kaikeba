/**
 * @Created by Jason
 * @Date: 2018/11/18 19:50
 */

const _ = require('underscore')
const exchangeRate = require('./exchange')
console.log(exchangeRate.exchangeRate(100))

const user = [
	{user:'jason',age:23},
	{user:'ds',age:43},
	{user:'blue',age:13},
]
const a = _.max(user,user=>user.age)
console.log(a)

