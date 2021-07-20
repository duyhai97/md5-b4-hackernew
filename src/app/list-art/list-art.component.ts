import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Article} from "../article";

@Component({
  selector: 'app-list-art',
  templateUrl: './list-art.component.html',
  styleUrls: ['./list-art.component.css']
})
export class ListArtComponent implements OnInit {

  article: Article = {};
  articles: Article[] = [];

  constructor(private data:DataService) {
    this.article = data.article;
    this.articles = data.articles
  }

  ngOnInit(): void {
  }

}
