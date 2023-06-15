import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { Task } from '../../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{

  constructor(private d:DuLieuService, private router: Router) {}
  listTask:any;
  ngOnInit(): void {
    this.d.getTask().subscribe ( data => this.listTask = data);
  }

  deleteTask(id:number) {
    if (confirm ('Xóa nhé?') ==true) {
      this.d.deleteTask(id).subscribe(data => {
        alert('Xóa dự án thành công!');
        this.router.navigate(['/list-task'])
    })
  }
}
  // listTask:Task[] = [
  //   {id:1, nameTask:'Phân tích yêu cầu', projectID:1, staffID:1,description:"Phân tích các yêu cầu của khách hàng để team thực hiện",status:0,priority:1 },
  //   {id:2, nameTask:'Thực hiện layout cho ứng dụng', projectID:1, staffID:2,description:"Thực hiện layout website, chú ý kỹ responsive",status:0,priority:1 },
  //   {id:3, nameTask:'Tìm hiểu yêu cầu của khách hàng', projectID:2, staffID:3,description:"Đến công ty và ghi nhận các yêu cầu của khách hàng",status:0,priority:2 },
  //   {id:4, nameTask:'Đăng ký thành viên', projectID:3, staffID:4,description:"Thực hiện chức năng đăng ký, có capcha, mail kích hoạt",status:0,priority:1 },
  //   {id:5, nameTask:'Đổi pass, quên pass', projectID:1, staffID:4,description:"Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ",status:0,priority:1 },
  //   {id:6, nameTask:'Testing 1', projectID:4, staffID:3,description:"Kiểm tra mọi form chức năng theo các case đã liệt kê",status:0,priority:2 },
  //   {id:7, nameTask:'Triển khai website', projectID:5, staffID:4,description:"Triển khai website lên hosting đã mua",status:0,priority:2 },
  //   {id:8, nameTask:'Hướng dẫn sử dụng và bàn giao', projectID:5, staffID:1,description:"Hướng dẫn sử dụng cho khách hàng",status:0,priority:2 },
  //   {id:9, nameTask:'Testing 2', projectID:4, staffID:2,description:"Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án",status:0,priority:2 },
  // ]
  // constructor() { }
  // tukhoa:string='';
  // LTask:Task[]=[];
  // ngOnInit(): void {
  //   this.LTask=this.listTask;
  // }
  // checkTask() {
  //   console.log(this.tukhoa);
  //   this.listTask = this.LTask.filter(p=>p.nameTask.includes(this.tukhoa))
  // }
  
}
