import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNil } from 'lodash';
import { ObjStudent } from '../../Obj/obj-student';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss',
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class ListStudentsComponent {
constructor(){}
public utenteInfo: string;
public userImage: string;
public stipendio: number;
@Output() newItemEvent = new EventEmitter<string>();
@Input () listStudents :ObjStudent[];


public userSettings () {

  const userInfo = prompt("Inserisci il nome dell'utente");

  const regex = /\d/g

  if(isNil(userInfo) || typeof userInfo != 'string' || userInfo.match(regex)){
    alert("Dati non validi!")
    this.utenteInfo = null
  }
  else{
    this.userImage = "https://i.pinimg.com/736x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg";
    this.utenteInfo = userInfo
    this.stipendio = 1400;
  }

}

public deleteStudent (student:ObjStudent) {
  const index = this.listStudents.indexOf(student);
  this.listStudents.splice(index,1);

  if(this.listStudents.length == 0){
    this.newItemEvent.emit("Non ci sono piu dati disponibili")
  }

}

}
