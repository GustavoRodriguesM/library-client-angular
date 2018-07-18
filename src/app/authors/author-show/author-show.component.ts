import { ActivatedRoute } from '@angular/router';
import { AuthorService } from './../author.service';
import { Author } from './../author';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-author-show',
  templateUrl: './author-show.component.html',
  styleUrls: ['./author-show.component.css']
})
export class AuthorShowComponent implements OnInit {

  author: Author = new Author();
  @Input() id = "";

  constructor(
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.idAuthor)
      this.id = this.activatedRoute.snapshot.params.idAuthor;

    this.authorService
      .findById(this.id)
      .subscribe( data => this.author = data);
  }

}
