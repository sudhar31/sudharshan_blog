import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: false,
  
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  isChecked = false;
  errorMessage = '';

  onSubmit() {
    if (!this.isChecked) {
      this.errorMessage = 'Please accept the Terms and Conditions before submitting.';
    } else {
      this.errorMessage = '';
    }
  }
}
