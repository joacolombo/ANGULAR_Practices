import { Component } from "@angular/core";

@Component({
    selector: 'app-footer-london',
    templateUrl: './footer.component.html',
    styleUrls:['./footer.component.css']
})

export class FooterComponentLondon{
    public CopyrightDate = new Date().getFullYear();
}