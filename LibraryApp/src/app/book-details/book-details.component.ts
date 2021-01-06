import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from '../shared/book-detail.model';
import { BookDetailService } from '../shared/book-detail.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {
  

  constructor(public service:BookDetailService,
    private toastr:ToastrService,private router:Router) { }
    public showModal : boolean = false;
    public searchInput1 :string;
    public searchInput2 :string;
    public searchInput3 :string;
    public searchInput4 :string;
    public searchInput5 :string;

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:BookDetail){
    this.service.formData = Object.assign({}, selectedRecord);

  }
  onLogout(){
    this.router.navigateByUrl('/login')
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
    this.service.deleteBookDetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted Successfully");
      },
      err=>{console.log(err)}
    )
    }


  }
  search1(){
    
    
    if (this.searchInput1!=""){
      
      
      this.service.list = this.service.list.filter(res => {
        return res.bookName.toLocaleLowerCase().includes(this.searchInput1.toLocaleLowerCase());
      });
      

    
    }else if(this.searchInput1 == "" ){
      this.service.refreshList();
    }

    
    
  }
  search2(){
    
    
    if (this.searchInput2!=""){
      
      
      this.service.list = this.service.list.filter(res => {
        return res.isbn.toLocaleLowerCase().includes(this.searchInput2.toLocaleLowerCase());
      });
      

    
    }else if(this.searchInput2 == "" ){
      this.service.refreshList();
    }
    
  }
  search3(){
    
    
    if (this.searchInput3!=""){
      
      
      this.service.list = this.service.list.filter(res => {
        return res.author.toLocaleLowerCase().includes(this.searchInput3.toLocaleLowerCase());
      });
      

    
    }else if(this.searchInput3 == "" ){
      this.service.refreshList();
    }
    
  }
  search4(){
    
    
    if (this.searchInput4!=""){
      
      
      this.service.list = this.service.list.filter(res => {
        return res.category.toLocaleLowerCase().includes(this.searchInput4.toLocaleLowerCase());
      });
      

    
    }else if(this.searchInput4 == "" ){
      this.service.refreshList();
    }
    
  }
  search5(){
    
    
    if (this.searchInput5!=""){
      
      
      this.service.list = this.service.list.filter(res => {
        return res.publisher.toLocaleLowerCase().includes(this.searchInput5.toLocaleLowerCase());
      });
      

    
    }else if(this.searchInput5 == "" ){
      this.service.refreshList();
    }
    
  }

}
