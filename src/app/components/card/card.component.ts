import { Component, Input } from '@angular/core';
import { ObjStudent } from '../../Obj/obj-student';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
constructor(){}
@Input() student: ObjStudent;
}
