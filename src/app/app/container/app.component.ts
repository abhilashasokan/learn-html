import { Component, OnDestroy } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/model/category';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly isLoading: BehaviorSubject<boolean>;
  readonly isLoading$: Observable<boolean>;
  categories$: Observable<Category>;
  currentUrl: string;
  isCollapsed = true;
  title = 'HTML';

  constructor(private layoutService: LayoutService, private router: Router, private route: ActivatedRoute) {
    this.isLoading = new BehaviorSubject(false);
    this.isLoading$ = this.setupIsLoading();

    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url.split('/')[1] ? event.url.split('/')[1] : 'cms';
        this.title = this.currentUrl === 'software' ? 'Software for business' : 'HTML';
        this.setupCategories();
      }
    });
  }

  private setupIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setupCategories(): void {
    this.categories$ = this.layoutService.getCategories(this.currentUrl);
  }
}
