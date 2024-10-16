import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomOption, QuillEditorComponent } from 'ngx-quill';
import Quill from 'quill';
var Block = Quill.import('blots/block');


['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((tagName) => {
  class ClassBlot extends Block {
    static create(value: any) {
      let node = super.create();
      if (value) {
        node.setAttribute('class', value);  // Set the class attribute
      }
      return node;
    }

    static formats(node: { getAttribute: (arg0: string) => any; }) {
      return node.getAttribute('class');  // Return the class for formatting
    }

    format(name: string, value: any) {
      if (name === 'class' && value) {
        this['domNode'].setAttribute('class', value);
      } else {
        super.format(name, value);
      }
    }
  }

  ClassBlot['blotName'] = tagName+ 'customClass';
  ClassBlot['tagName'] = tagName;  // Apply to divs or any other tag

  Quill.register(ClassBlot);
})


export const NgxQuillCustomOptions: CustomOption[] = [

];


export const NgxQuillModules = {

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ngx-quill-test';

  control = new FormControl('');
  options = NgxQuillCustomOptions
  modules = NgxQuillModules

  @ViewChild(QuillEditorComponent) editor!: QuillEditorComponent;

  ngOnInit(){
    this.control.setValue(this.y());
  }

  ngAfterViewInit(){
  }

  x(){
    console.log(this.control.getRawValue());
  }

  y(){
    return`

<body>

    <h2 class="test">FaxR Transmission</h2>

    <p class="cool">Page 2</p>

</body>

`
  }
}

