import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';

// Input - decorator
// input - special function

// DATA
import { DUMMY_USERS } from '../dumy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

interface User {
  id: string,
  avatar: string,
  name: string
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // input is equivalent to prop in react
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar1!: string; // ! - exclamation to ignore initializer error
  @Input({required: true }) name1!: string;

  @Input({required: true}) user!: User; // telling typescript we ll get here an object

 // output - decorator
 @Output() select = new EventEmitter<string>(); // this is custom event

 // output - 
 // select = output<string>(); // generic type feature -> this output does not create any kind of signal(compared to input) - this is just EventEmitter

 
 // instead of using @Input decorator, we can use input signal functions
 avatar2 = input<string>('default_avatar'); // value of property that is gonna be received - generic type - input function produces signal
 name2 = input.required<string>(); // syntax if value is required
//-> inputs from above are read only

  users = DUMMY_USERS;

  // in typescript, you can define the type of a variable just by typing name
  //selectedUser = DUMMY_USERS[randomIndex]; // compared to react, this can be considered as state since we can use it to update user interface

  // signals example
  selectedUser2 = signal(DUMMY_USERS[randomIndex]);


  // image path with signals
  imagePath2 = computed(() => 'assets/users/' + this.selectedUser2().avatar);

  // getter - method that gets the value of a property - without signals
  get imagePath3() {
     return 'assets/users/' + this.selectedUser2().avatar;
  }

  get imagePath() {
    return 'assets/users/' + this.avatar1;
  }

  imagePathSignal = computed(() => {
    return 'assets/users/' + this.avatar2(); // if avatar2 changes, this method/function will be recomputed
  })



  // method
  onSelectUser() {
    // console.log('User clicked');
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // generates random number in the range of DUMMY_USERS.length
    // this.selectedUser2.set(DUMMY_USERS[randomIndex])

    this.select.emit(this.id); // emits value id which can be consumed on another place 
  }

}
