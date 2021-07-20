import { Injectable } from '@angular/core';
import {Article} from "../article";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  article: Article = {};
  // @ts-ignore
  articles: Article[] = [
    {

      title: 'Javascript',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
      likes: 8
    },

    {

      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      likes:3
    },
    {

      title: ' REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7',
      likes:5
    },
    {

      title: ' Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/',
      likes:7
    },
    {
      title: 'Web Server',
      url: 'https://ruslanspivak.com/lsbaws-part1/',
      likes:6
    }
  ];

  // addNewArticle() {
  //   this.articles.push(this.article);
  //   console.log(124, this.articles);
  // }


  constructor() { }
}
