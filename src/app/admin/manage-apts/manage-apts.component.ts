import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AptService } from '../../apt.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-manage-apts',
  templateUrl: './manage-apts.component.html',
  styleUrls: ['./manage-apts.component.scss']
})
export class ManageAptsComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }



  openDialog(): void {
    const dialogRef = this.dialog.open(addApt, {
      // width: '40vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

}


@Component({
  selector: 'addApt-dialog',
  templateUrl: 'addApt-dialog.html',
})
export class addApt {
  registerForm: FormGroup;
  submitted = false;
  ImageFile: File[];
  @ViewChild('aptImage') apt_image;

  constructor(
    public dialogRef: MatDialogRef<addApt>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private aptService: AptService) {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      floor: ['', Validators.required],
      rooms: ['', Validators.required],
      sqrMtr: ['', Validators.required],
      parking: ['', Validators.required],
      storage: ['', Validators.required],
      arnona: ['', Validators.required],
      vaad: ['', Validators.required],
      price: ['', Validators.required],
      aptImage: [null, Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onFileChanged(event: any) {
    const Image = this.apt_image.nativeElement;
    this.ImageFile = [];
    if (event.target.files.length > 5) alert("מותר להעלות עד 5 תמונות");
    if (Image.files && Image.files[0] && event.target.files.length <= 5) {
      Array.from(event.target.files).forEach(file => {
        this.ImageFile.push(<File>file);
      });
    }
  }


  onSubmit(): void {
    const uploadData = new FormData();
    uploadData.append('city', this.registerForm.controls['city'].value);
    uploadData.append('description', this.registerForm.controls['description'].value);
    uploadData.append('address', this.registerForm.controls['address'].value);
    uploadData.append('floor', this.registerForm.controls['floor'].value);
    uploadData.append('rooms', this.registerForm.controls['rooms'].value);
    uploadData.append('sqrMtr', this.registerForm.controls['sqrMtr'].value);
    uploadData.append('parking', this.registerForm.controls['parking'].value ? "1" : "0");
    uploadData.append('storage', this.registerForm.controls['storage'].value ? "1" : "0");
    uploadData.append('arnona', this.registerForm.controls['arnona'].value);
    uploadData.append('vaad', this.registerForm.controls['vaad'].value);
    uploadData.append('price', this.registerForm.controls['price'].value);

    this.ImageFile.forEach(file => {
      uploadData.append(file.name, file, file.name);
    })

    this.aptService.addApt(uploadData).toPromise()
    .then(() => {
      alert("דירה נוספה בהצלחה");
      this.dialogRef.close();
    });


  }

  /* onSubmit() {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
 
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  } */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
