import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask = false;
  private subject = new Subject<boolean>();

  constructor(private router: Router) {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(action: (v: boolean) => void): Subscription {
    return this.subject.subscribe(action);
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
