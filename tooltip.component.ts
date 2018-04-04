import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'pzv-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

    @Input() message: string;
    constructor() { }

    ngOnInit() { }

}
