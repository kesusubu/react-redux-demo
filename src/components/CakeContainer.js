import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'
 
function CakeContainer(props){
    return(
        <div>
            <h2>Number of cakes - { props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = disptch => {
    return {
        buyCake: () =>{
            disptch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)