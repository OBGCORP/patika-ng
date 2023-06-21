import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges{
  @ViewChild('divElement') divElement?: ElementRef<HTMLDivElement>;

  hello: string = 'abcde';
  helloParagraph: string = '<p id="demo"> Welcome to Angular! </p>';
  selectedOption: string = 'option2';
  uniqueId: string = 'abc';
  todoList: string[] = [
    'Angular component olusturulacak',
    'Angular template yapisi incelenecek',
    'Angular *ngFor Ekranda gosterilecek'
  ];

  creationDate = new Date(2023, 5, 21);
  amount = 1350.85;

  currentAmount = 2;

  constructor(
    private todoService: TodoService
  ){  };

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges function works with', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit function works');
    console.log(this.divElement);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit function works');
    console.log(this.divElement);
  }

  handleButtonClick(){
    if(this.divElement){
      console.log(this.divElement.nativeElement);
      this.divElement.nativeElement.style.fontSize = '30px';
    };
    this.hello = 'abcdef';
  };
  
  handleHelloTextChange(value: string){
    this.hello = value;
  }

  handleSignUpButtonClick(){
    // kayit olma islemi
  }

  handleLogInButtonClick(){
    // giris yapma islemi
  }

  handleAddNewTodoItem(){
    this.todoService.addTodoItem({
      id: 2,
      title: 'New Todo Item'
    })
  }
}