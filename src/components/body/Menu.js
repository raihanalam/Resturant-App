import React, {Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

import {Modal, ModalBody, ModalHeader,Button } from 'reactstrap';

import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../redux/actionCreators";

import Loading from './Loading'

const mapStateToProps = state =>{
     return {
          dishes: state.dishes,
          comments: state.comments
     }
}

const mapDispatchProps = dispatch =>{
     return {
         addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
         fetchDishes: ()=> dispatch(fetchDishes())
     }
 }

class Menu extends Component { 
     state={
          selectedDish: null,
          modalOpen: false
     }
     onDishSelect = dish => {
          this.setState({
               selectedDish: dish, 
               modalOpen: !this.state.modalOpen
          });
     }

     toggleModal = ()=>{
          this.setState({
               modalOpen: !this.state.modalOpen
          });
     }

     componentDidMount(){
          this.props.fetchDishes();
     }


     render(){
          document.title = 'Menu';

          if(this.props.dishes.isLoading){
               return(
                    <Loading/>
               )
          }         
          else{
               const menu = this.props.dishes.dishes.map(item=>{ 
                    return(
                         <MenuItem 
                              dish={item} 
                              key={item.id} 
                              DishSelect={() => this.onDishSelect(item)}
                         />
                    );
               })  
               let dishDetail = null;
               if (this.state.selectedDish != null){
                    const comments = this.props.comments.filter(comment => {
                         return comment.dishId === this.state.selectedDish.id;
                    })
                    dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment}/>
     
               }
               return (
                    <div className="container">
                      <div className="item-containers" style={{display: "flex", flexWrap:"wrap"}}>
                            {menu}
                      </div>
              
                      <Modal isOpen={this.state.modalOpen}>
                         <ModalHeader>
                          <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalHeader>
                        <ModalBody>
                          {dishDetail}
                        </ModalBody>
                        
                      </Modal>
                    </div>
               );

          } 

     }

}

export default connect(mapStateToProps, mapDispatchProps) (Menu); 
