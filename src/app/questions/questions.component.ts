import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})


export class QuestionsComponent {

 
  @ViewChild('content')
  div!: ElementRef;

  script:any = `<html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    console.log('I am in the function 1') 
    console.log(window);
    
    window.onload = function(){
      console.log('asdddd');
    }
    
    $(window).on('load', function() {
      console.log('I am in the function') 
    })
  </script>
  <body>
 

  </body>

  </html>`;


constructor(private sanitizer: DomSanitizer) {

this.script = this.sanitizer.bypassSecurityTrustHtml(this.script);

}

ngAfterViewInit() {

let scripts = this.div.nativeElement.getElementsByTagName('script');

var script = document.createElement('script');
script.src = scripts[0].src;
document.body.appendChild(script);


setTimeout(() => {
eval(scripts[1].text);
}, 1000);


// eval(scripts[0].text);
}

}
