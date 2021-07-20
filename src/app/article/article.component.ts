import { Component,OnInit } from '@angular/core';
import {Article} from "../article";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {



  article: Article = {};
  articles: Article[] = [];

  constructor(private data :DataService) {
    this.article =data.article;
    this.articles = data.articles
  }

  ngOnInit(): void {
  }


}
