import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';

const customers = [
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
]

function App(){
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer key={c.id} name={c.name} birthday = {c.birthday} gender = {c.gender} job={c.job}  id = {c.id} image = {c.image}/>

          )
        })
      }

    </div>
  )

}

export default App;
