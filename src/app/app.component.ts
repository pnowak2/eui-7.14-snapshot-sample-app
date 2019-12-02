import { Component } from '@angular/core';
import { EclBreadcrumb, EclAppShellSearchEvent } from '@eui/ecl-core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    breadcrumbs: Array<EclBreadcrumb> = [
        { label: 'Home', url: '/' },
        { label: 'European Commission', url: '/' },
        { label: 'ECL', url: '.', isCurrent: true },
    ];

    onSiteHeaderSearch(evt: EclAppShellSearchEvent) {
        console.log('site header search', evt);
    }
}
