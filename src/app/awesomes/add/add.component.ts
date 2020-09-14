import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AwesomeService} from '../../services/awesome.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  awesome;
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    this.awesomeService.add(this.addForm.value).subscribe(data => {
      this.router.navigate(['awesomes']);
    });
  }

}
