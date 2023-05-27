import { Component } from '@angular/core';
import { Project } from '../project';
import { Staff } from '../staff';
import { Task } from '../task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listProject:Project[] = [
    {id: 1, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 2, nameProject: 'Cay xanh cong vien', dateStart: '2023-04-12', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 3, nameProject: 'Website Van hoa Viet', dateStart: '2023-05-11', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 4, nameProject: 'Website Du lich Bui', dateStart: '2021-03-11', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 5, nameProject: 'Quan ly nha thuoc Vinh AN', dateStart: '2022-12-01', price: 3340000, leader: 1, member: [1,2,3]}, 
  ]
  listStaff:Staff[] = [
    {id: 1, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 2, lastName: 'tran', firstName: 'nhi', dateOfBirth: '2003-17-03', gender: false, area: 'brvt'},
    {id: 3, lastName: 'le', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 4, lastName: 'bui', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 5, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: false, area: 'brvt'},
  ]
  listTask:Task[] = [
    {id:1, nameTask:'Phân tích yêu cầu', projectID:1, staffID:1,description:"Phân tích các yêu cầu của khách hàng để team thực hiện",status:0,priority:1 },
    {id:2, nameTask:'Thực hiện layout cho ứng dụng', projectID:1, staffID:2,description:"Thực hiện layout website, chú ý kỹ responsive",status:0,priority:1 },
    {id:3, nameTask:'Tìm hiểu yêu cầu của khách hàng', projectID:2, staffID:3,description:"Đến công ty và ghi nhận các yêu cầu của khách hàng",status:0,priority:2 },
    {id:4, nameTask:'Đăng ký thành viên', projectID:3, staffID:4,description:"Thực hiện chức năng đăng ký, có capcha, mail kích hoạt",status:0,priority:1 },
    {id:5, nameTask:'Đổi pass, quên pass', projectID:1, staffID:4,description:"Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ",status:0,priority:1 },
    {id:6, nameTask:'Testing 1', projectID:4, staffID:3,description:"Kiểm tra mọi form chức năng theo các case đã liệt kê",status:0,priority:2 },
    {id:7, nameTask:'Triển khai website', projectID:5, staffID:4,description:"Triển khai website lên hosting đã mua",status:0,priority:2 },
    {id:8, nameTask:'Hướng dẫn sử dụng và bàn giao', projectID:5, staffID:1,description:"Hướng dẫn sử dụng cho khách hàng",status:0,priority:2 },
    {id:9, nameTask:'Testing 2', projectID:4, staffID:2,description:"Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án",status:0,priority:2 },
  ]

}
