import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { getUser } from 'src/app/utils/localStorage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user = {} as User;

  formLogin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.user = getUser();
  }

  signIn() {
    if (this.login(this.formLogin.value)) {
      this.router.navigate(['/dashboard']);
    } else {
      Swal.fire('email ou senha errada', '', 'error');
    }
  }

  login({ email, pass }: User) {
    if (email !== this.user.email) return;

    if (pass !== this.user.pass) return;

    return true;
  }
}
