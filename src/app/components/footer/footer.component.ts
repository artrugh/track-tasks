import { UiService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  hasRoute(route: string) {
    return this.uiService.hasRoute(route);
  }
}
