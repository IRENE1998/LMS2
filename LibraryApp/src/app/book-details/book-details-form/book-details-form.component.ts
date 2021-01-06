//import { error } from '@angular/compiler/src/util';
import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { BookDetail} from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styles: [
  ]
})
export class BookDetailsFormComponent implements OnInit {

  constructor(public service:BookDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.bookId == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form);

 
  }

  insertRecord(form:NgForm){ 
      this.service.postBookDetail().subscribe(
    res=>{
     this.resetForm(form);
     this.service.refreshList();
     this.toastr.success('Added Successfully')
    },
    err =>{console.log(err);}
  );


  }
  updateRecord(form:NgForm){
    this.service.putBookDetail().subscribe(
      res=>{
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.info('Updated Successfully')
      },
      err =>{console.log(err);}
    );
  

  }
  


resetForm(form:NgForm){
  form.form.reset();
  this.service.formData= new BookDetail();
}
}
