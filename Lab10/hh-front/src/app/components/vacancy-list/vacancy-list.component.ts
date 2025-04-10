import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Импорт HttpClientModule
import { Vacancy } from 'app/interfaces/vacancy';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Добавьте HttpClientModule сюда
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.companyId) {
      this.apiService.getVacanciesByCompany(this.companyId).subscribe((data) => {
        this.vacancies = data;
      });
    }
  }
}
