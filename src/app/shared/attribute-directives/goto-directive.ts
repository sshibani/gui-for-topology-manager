import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ITopologyItem } from './../models/contracts/itopologyitem';

@Directive({ selector: '[GoTo]' })
export class GoToDirective {
    private _router: Router;
    constructor(router: Router) {
        this._router = router;
    }

    @Input('GoTo') model: ITopologyItem;
    @Input('Path') path: string;

    @HostListener("click") onClick() {
        console.log("click" + this.path);
        let link = ['/' + this.path, this.model.Id];
        this._router.navigate(link);
    }

}



// import { Directive, HostListener , Input } from '@angular/core';
// import { Router } from '@angular/router';

// import { ITopologyItem } from './../models/contracts/itopologyitem';

// @Directive({ selector: '[GoTO]' })
// export class GoToDirective {
//     private _router;

//     constructor(router: Router) {
//         console.log("goto");
//         this._router = router;
//     }

//     @Input('GoTo') Model : ITopologyItem;

//     @HostListener('mouseenter') onMouseEnter() {
//         console.log(this.Model);
//         // let link = ['/environment', this.Model.Id];
//         // this._router.navigate(link);
//     }

// }
