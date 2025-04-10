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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  selectCompany(companyId: number): void {
    this.selectedCompanyId = companyId; 
  }

}
