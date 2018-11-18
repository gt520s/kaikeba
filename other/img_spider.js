/**
 * @Created by Jason
 * @Date: 2018/11/16 22:06
 */

const request = require('./request')
const fs = require('fs');

(async()=>{
    let {body} = await request('https://www.baidu.com/img/bd_logo1.png?where=super')
    fs.writeFile('baiLogo.png',body, err=>{
        console.log(err)
    })
})()

