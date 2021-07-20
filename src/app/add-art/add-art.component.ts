import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.css']
})
export class AddArtComponent implements OnInit {
  article: Article = {};
  articles : Article[] = []

  constructor(private data:DataService) {
    this.article = data.article;
    this.articles = data.articles;
  }

  ngOnInit(): void {
  }

  addNewArticle(){
    this.article = this.data.article;
    this.article.likes=0;
    this.articles.push(this.article);
    console.log(124, this.articles);
  }

}
