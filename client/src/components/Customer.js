import { render } from '@testing-library/react';


function Customer (props){
    return (
        <div>
            {/* <CustomerProfile image = {props.image} id = {props.id}/> */}
            <CustomerInfo name = {props.name} position = {props.position} id = {props.id}/>
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
                <p>{props.position}</p>
                <p>{props.id}</p>
            </div>
    )
}

export default Customer