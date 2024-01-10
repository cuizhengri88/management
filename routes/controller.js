
const sqlconnection = require("../database/database-connection");

const conn = sqlconnection.conn();

const Mmapper = sqlconnection.Mmapper();

Mmapper.createMapper(['./database/mapper/customer-mapper.xml']);


exports.mainView = function (req, res) {
    let param = {
        csNo: '202020202'
      };


    let format = {language: 'sql' , indent:' '};
    let query = Mmapper.getStatement('Customer','selectCustomer',param,format);

    conn.query(query,function(err,rows,fields){
        if(!err){
          console.log("suc");
          res.send(rows);
        }else{
          console.log("err : "+err);
        }
      });
}

exports.ckUserKey = function(req,res){

  if(req.session.userKey){
      res.send('세션이 이미 존재 정상 로그인 처리 ');
  }
  else {  
      //req.session.test = "test string";
      res.send('로그인 페이지 이동 ');
  }
}

exports.userLogin = function(req,res){

  let param = {
    id: 'admin',
    pw: 'aspn1234'
  };


let format = {language: 'sql' , indent:' '};
let query = Mmapper.getStatement('Customer','selectLogin',param,format);
console.log(query);


conn.query(query,function(err,rows,fields){
    if(!err){
      console.log("selectLogin");

      res.send(rows);
    }else{
      console.log("err : "+err);
    }
  });

}

