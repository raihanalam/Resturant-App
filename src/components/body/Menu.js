import React, {Component } from "react";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

import {Modal, ModalBody, ModalHeader,Button } from 'reactstrap';

class Menu extends Component { 
     state={
          dishes: DISHES,
          comments: COMMENTS,
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


     render(){
          document.title = 'Menu';
          const menu = this.state.dishes.map(item=>{ 
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
               const comments = this.state.comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
               })
               dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments}/>

          }
          return (
               <div className="container">
                 <div className="item-containers" style={{display: "flex", flexWrap:"wrap"}}>
                       {menu}
                 </div>
         
                 <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
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

export default Menu;
