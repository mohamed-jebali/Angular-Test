import {  Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss',
})
export class MainHomeComponent implements OnInit {

constructor(private studentService: StudentService){}

listStudents:any;


getStudent(){
  this.studentService.getData().subscribe(dataStudents => {
    this.listStudents = dataStudents
    console.log(this.listStudents)
  })
}

  public ngOnInit(): void {

    this.getStudent();
  }
}
