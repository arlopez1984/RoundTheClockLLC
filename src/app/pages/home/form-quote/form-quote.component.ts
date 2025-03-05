import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import {  SmsService } from '../../../services/email/sms-service.service';

@Component({
  selector: 'app-form-quote',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-quote.component.html',
  styleUrl: './form-quote.component.css'
})
export class FormQuoteComponent {
  message: string = '';
  
  quoteForm: FormGroup;
  

  constructor(private fb: FormBuilder, private smsService: SmsService) {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  async onSubmit() {
    if (this.quoteForm.valid) {
      try {
            const name = this.quoteForm.value.name;
            const email = this.quoteForm.value.email;
            const phone = this.quoteForm.value.phone;

           this.message = `${name} quiere una cotización de Round24, su email es ${email} y su teléfono es ${phone}`;
            
            await this.smsService.sendSMS('+13057960980',this.message);
            alert('📧 SMS enviado correctamente');
            this.quoteForm.reset(); // Limpia el formulario después de enviar

          } catch (error) {
            alert('❌ Error al enviar el email');
            console.error(error);
          } 
    } else {
      console.log('Formulario inválido');
    }
  }
}
