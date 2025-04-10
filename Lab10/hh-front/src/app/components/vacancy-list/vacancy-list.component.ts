import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Vacancy } from '../../interfaces/vacancy';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
  providers: [ApiService]
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];
  loading = false;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['companyId'] && this.companyId) {
      this.loadVacancies();
    }
  }

  loadVacancies(): void {
    this.loading = true;
    this.error = '';
    this.apiService.getVacanciesByCompany(this.companyId).subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loading = false;
        console.log('Vacancies loaded:', data);
      },
      error: (err) => {
        console.error('Error loading vacancies:', err);
        this.error = 'Не удалось загрузить вакансии';
        this.loading = false;
      }
    });
  }
}
