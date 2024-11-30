import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StudentService } from '../student.service';
import { isNil } from 'lodash';
import { ObjStudent } from '../Obj/obj-student';
@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'], 
})
export class MainHomeComponent implements OnInit {

  public listStudents: ObjStudent[] = [];
  public dataAvailable: boolean = false;
  public noData: boolean = false;

  constructor(private studentService: StudentService, private cdr: ChangeDetectorRef) {}

  public getStudent() {
    this.studentService.getData().subscribe({
      next: value => {
      this.dataAvailable = !this.dataAvailable;
      setTimeout(()=>{
        this.listStudents = value;
      }, 2000)
      },
      error: error => {
        this.dataAvailable = false;
      },
      complete:() => {

      }
    })
  }

  checkElements() {
    this.noData = true;
    console.log(this.noData)
  }

  public ngOnInit(): void {
    this.getStudent();
    console.log(this.listStudents)
  }
}
