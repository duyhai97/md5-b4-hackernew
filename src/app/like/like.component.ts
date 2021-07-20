import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Article} from "../article";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  article: Article = {};
  articles : Article[] = []

  likes:any;


  constructor(private data:DataService) {
    this.article = data.article;
    this.articles = data.articles
    // this.likes = this.data.articles[0].likes
    // for (let i = 0; i < data.articles.length; i++) {
    //   this.likes = data.articles[].likes
    // }
    }

    likeThis(){
      // this.likes = this.data.articles[1].likes
      // @ts-ignore
      let number = this.data.articles[0].likes++;
      console.log(111, );
    }

  ngOnInit(): void {
  }
  }




