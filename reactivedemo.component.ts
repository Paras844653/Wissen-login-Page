import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {


  
  public title= "mY mY kaY ahe he"

 

  constructor(private fb:FormBuilder) { }

  public frmRegister =this.fb.group({
      Uname : this.fb.control('',[Validators.required,Validators.minLength(4)]),
      Mobile : this.fb.control('',[Validators.required,Validators.pattern(/\+91\d{10}/)]),
      Photos :this.fb.array([this.fb.control('')])
  });

  get Uname(){
    return this.frmRegister.get('Uname') as FormControl;
  };

  get  Mobile(){
    return this.frmRegister.get('Mobile') as FormControl;
  };

  get Photos(){
    return this.frmRegister.get('Photos') as FormArray;

  };
  
  ngOnInit(): void {
  }

  public SubmitForm(formdata:any){
    alert(JSON.stringify(formdata));

  }

 public AddMore(){
   this.Photos.push(this.fb.control(''));
 }

 public Removedata(index:number){
    this.Photos.removeAt(index);
 }


}
