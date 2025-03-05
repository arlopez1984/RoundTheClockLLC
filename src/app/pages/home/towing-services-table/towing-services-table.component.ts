import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-towing-services-table',
  imports: [CommonModule],
  templateUrl: './towing-services-table.component.html',
  styleUrl: './towing-services-table.component.css'
})
export class TowingServicesTableComponent {
  towingServices = [
    { id: 1, name: 'Emergency Towing', description: 'Asistencia 24/7 para emergencias.' },
    { id: 2, name: 'Vehicle Transport', description: 'Transporte seguro de vehículos.' },
    { id: 3, name: 'Accident Towing', description: 'Remolque de vehículos accidentados.' },
    { id: 4, name: 'Luxury Vehicle Transport', description: 'Transporte de autos de lujo.' },
    { id: 5, name: 'Motorcycle Transport', description: 'Remolque seguro para motocicletas.' },
    { id: 6, name: 'Heavy Machinery Towing', description: 'Remolque de maquinaria pesada.' },
    { id: 7, name: 'Fuel Supply', description: 'Suministro de combustible en carretera.' }
  ];
}
