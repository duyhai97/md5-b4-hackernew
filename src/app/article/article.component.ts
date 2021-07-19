import { Component, OnInit } from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = {};
  articles: Article[] = [
    {
      id:1,
      title: 'Javascript',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      id:2,
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      id:3,
      title: ' REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      id:4,
      title: ' Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      id:5,
      title: 'Web Server',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
    console.log(124, this.articles);
  }

  // remoteArticle(id: any){
  //   console.log(23214, id);
  //   delete this.articles[id]
  // }

}
