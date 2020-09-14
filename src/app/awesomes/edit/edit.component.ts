import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AwesomeService} from '../../services/awesome.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private active: ActivatedRoute) {
  }

  id = +this.active.snapshot.paramMap.get('id');
  awesome;
  editForm: FormGroup;

  ngOnInit(): void {
    this.editForm = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
    this.awesomeService.getId(this.id).subscribe(data => {
      this.awesome = data;
      this.editForm.patchValue(this.awesome);
    });
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.awesomeService.edit(this.id, this.editForm.value).subscribe(data => {
      this.router.navigate(['awesomes']);
    });
  }
  // tslint:disable-next-line:typedef
  delete (){
    this.awesomeService.delete(this.id).subscribe(data => {
      this.router.navigate(['awesomes']);
    });
  }

}
