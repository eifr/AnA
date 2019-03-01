import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Apt } from '../apt';
import { AptService } from '../apt.service';


@Component({
  selector: 'app-apts',
  templateUrl: './apts.component.html',
  styleUrls: ['./apts.component.scss']
})
export class AptsComponent implements OnInit {
  apts: Apt[];
  animal: string;
  name: string;
  state: string;

  constructor(private aptService: AptService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.state = 'homepage';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(searchApt, {
      // width: '40vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.searchApps(data.formArray);
        }
      });

  }

  ngOnInit() {
    this.getApts();
  }

  getApts(): void {
    this.aptService.getApts()
      .subscribe(apts => this.apts = apts);
  }

  searchApps(formArray: FormArray): void {
    this.aptService.searchApts(formArray)
      .subscribe(apts => {
        if (apts.length == 0) {
          this.snackBar.open("לא נמצאו דירות", "הבנתי 🤓", {
            duration: 10000,
          });
          this.getApts();
        } else {
          this.apts = apts;
          this.toSearchResult();
        }
      });


  }

  toHomepage() {
    this.state = 'homepage';
    this.getApts();

  }
  toSearchResult() {
    this.state = 'search';
  }

}

export interface City {
  value: string;
  viewValue: string;
}
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'searchApt-dialog',
  templateUrl: 'searchApt-dialog.html',

})
export class searchApt {
  submitted = false;
  isLinear = true;
  ImageFile: File[];
  cities: City[] = [
    { value: 'תל אביב', viewValue: 'תל אביב' },
    { value: 'רמת גן', viewValue: 'רמת גן' },
    { value: 'חולון', viewValue: 'חולון' },
    { value: 'גבעתיים', viewValue: 'גבעתים' }
  ];

  formGroup: FormGroup;
  first: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<searchApt>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private aptService: AptService) { }

  ngOnInit() {
    this.first = this.formBuilder.group({
      location: ['', Validators.required],
    });
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.first,
        this.formBuilder.group({
          rooms: ['', Validators.required],
          sqrMtr: ['', Validators.required],
        }),
        this.formBuilder.group({
          parking: [false, Validators.required],
          storage: [false, Validators.required],
          price: ['', Validators.required]
        })
      ])
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }


  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return (value / 1000) + " א'";
    }

    return value;
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

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

}
