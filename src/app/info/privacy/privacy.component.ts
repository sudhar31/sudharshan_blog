import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: false,
  
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  isChecked = false;
  errorMessage = '';

  onSubmit() {
    if (!this.isChecked) {
      this.errorMessage = 'Please accept the Privacy Policy before submitting.';
    } else {
      this.errorMessage = ''; 
    }
  }
}
