const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


app.get('/api/customers',(req,res) =>{
    res.send([
        {
          'id' : 1,
          'image' : 'https://source.unsplash.com/user/max_duz/64x64',
          'name' : '홍길동',
          'birthday' : '1111',
          'gender' : '남자',
          'job' : '대학생'
        
        },
        {
          'id' : 2,
          'image' : 'https://source.unsplash.com/user/max_duz/64x64',
          'name' : '최정일',
          'birthday' : '2222',
          'gender' : '남자',
          'job' : '워윅'
        
        },
        {
          'id' : 3,
          'image' : 'https://source.unsplash.com/user/max_duz/64x64',
          'name' : '남광준',
          'birthday' : '3333',
          'gender' : '남자',
          'job' : '자크'
        
        }
      ]);
});

app.listen(port,() => console.log(`Listning on port ${port}`));
