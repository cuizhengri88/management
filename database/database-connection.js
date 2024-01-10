const fs = require('fs');
const data = fs.readFileSync('./database/database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const mybatisMapper = require('mybatis-mapper');


const connection = mysql.createConnection({
    host:conf.host,
    user: conf.user,
    password:conf.password,
    prot:conf.port,
    database:conf.database
  });


module.exports = {
    
    conn : function(){
        return connection
    },
    Mmapper: function(){
        return mybatisMapper;
    }
}

