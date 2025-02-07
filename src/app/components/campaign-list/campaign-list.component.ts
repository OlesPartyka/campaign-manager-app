import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class CampaignListComponent implements OnInit {
  campaigns: Campaign[] = [];

  constructor(
    private campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaigns = data;
    });
  }

  deleteCampaign(id: number): void {
    this.campaignService.deleteCampaign(id);
  }

  editCampaign(id: number): void {
    this.router.navigate([`/campaign/${id}`]);
  }
}
