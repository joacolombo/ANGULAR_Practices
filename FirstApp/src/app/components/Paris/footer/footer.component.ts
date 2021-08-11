import { Component } from "@angular/core";

@Component({
    selector: 'app-footer-paris',
    templateUrl: './footer.component.html',
    styleUrls:['./footer.component.css']
})

export class FooterComponentParis{
    public CopyrightDate = new Date().getFullYear();
}