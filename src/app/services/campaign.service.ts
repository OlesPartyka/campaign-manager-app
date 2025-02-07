import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Campaign } from '../models/campaign.model';


@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private campaigns: Campaign[] = [
    {
      id: 1,
      name: 'Campaign 1',
      keywords: ['auto', 'sales'],
      bidAmount: 10,
      fund: 100,
      status: true,
      town: 'Warsaw',
      radius: 10,
    },
    {
      id: 2,
      name: 'Campaign 2',
      keywords: ['auto', 'sales'],
      bidAmount: 5,
      fund: 50,
      status: false,
      town: 'Warsaw',
      radius: 15,
    },
    {
      id: 3,
      name: 'Campaign 3',
      keywords: ['auto', 'sales'],
      bidAmount: 5,
      fund: 50,
      status: false,
      town: 'Warsaw',
      radius: 15,
    },
  ];

  private campaignsSubject = new BehaviorSubject<Campaign[]>(this.campaigns);

  constructor() {}

  getCampaigns(): Observable<Campaign[]> {
    return this.campaignsSubject.asObservable();
  }

  addCampaign(campaign: Campaign): void {
    campaign.id = Date.now();

    this.campaigns.push(campaign);
    this.campaignsSubject.next([...this.campaigns]);
  }

  updateCampaign(updatedCampaign: Campaign): void {
    const index = this.campaigns.findIndex((c) => c.id === updatedCampaign.id);
    if (index !== -1) {
      this.campaigns[index] = updatedCampaign;
      this.campaignsSubject.next([...this.campaigns]);
    }
  }

  deleteCampaign(id: number): void {
    this.campaigns = this.campaigns.filter((c) => c.id !== id);
    this.campaignsSubject.next([...this.campaigns]);
  }
}
