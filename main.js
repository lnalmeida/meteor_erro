import { Template } from 'meteor/templating';


import './main.html';
import { Notes } from './lib/collections';


Template.body.helpers({
  /*
  notes:
  [
        {text:'Minha nota 1'},
        {text:'Minha nota 2'},
        {text:'Minha nota 3'}
      ]*/
  
  notes(){
    return Notes.find().fetch();
  }
});
