import { render } from '@testing-library/react';


function Customer (props){
    return (
        <div>
            <CustomerProfile image = {props.image} id = {props.id}/>
            <CustomerInfo name = {props.name} birthday = {props.birthday} gender = {props.gender} job = {props.job}/>
        </div>
       
    )
}

function CustomerProfile (props){
    return (
            <div>
                <img src = {props.image} alt='Prifileimg' />
                <h2>{props.id}</h2>
            </div>
    )
    
}

function CustomerInfo(props){

    function test(id){
        alert(id);
    }

    return (
            <div>
                <h2 onClick={() => {test('123')}} style={{cursor:'pointer'}}>{props.name}</h2>
                <p>{props.birthday}</p>
                <p>{props.gender}</p>
                <p>{props.job}</p>
            </div>
    )
    
}


export default Customer