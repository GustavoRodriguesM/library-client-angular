import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../author.service';
import { Author } from '../../core/interfaces/author';

@Component({
  selector: 'lib-author-show',
  templateUrl: './author-show.component.html',
  styleUrls: ['./author-show.component.css']
})
export class AuthorShowComponent implements OnInit {

  author: Author = new Author();

  constructor(
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.idAuthor;

    this.authorService
      .findById(id)
      .subscribe( data => this.author = data);
  }

}
