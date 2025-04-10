import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { ApiService } from '../../services/api.service';
import { Company } from 'app/interfaces/company';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, VacancyListComponent], 
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId?: number;
  loading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка при загрузке компаний';
        this.loading = false;
        console.error('Error fetching companies:', err);
      }
    });
  }

  selectCompany(companyId: number): void {
    this.selectedCompanyId = companyId; 
  }
}