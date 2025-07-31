import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Ravichandran Ashwin: A spin legend who redefined Indian cricket",
      "description": "The legendary spinner shocked the cricket world on Wednesday with his sudden retirement.",
      "url": "http://www.bbc.co.uk/news/articles/ckgxeq82ydvo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6b48/live/240e69b0-bd37-11ef-a2ca-e99d0c9a24e3.jpg",
      "publishedAt": "2024-12-19T13:37:21.9281466Z",
      "content": "More compellingly, of nine bowlers with 500-plus Test wickets, Ashwin's strike rate (50.73 balls per wicket) is the best.\r\nThese are remarkable numbers for a player once seen as a white-ball speciali… [+1181 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "India to play Champions Trophy matches at neutral venue",
      "description": "India will play its matches at the 2025 Champions Trophy in Pakistan at a neutral venue, the International Cricket Council has announced.",
      "url": "http://www.bbc.co.uk/sport/cricket/articles/c2ldxxw4de4o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/547d/live/103531d0-bdfa-11ef-8e9d-2d56144e0daf.jpg",
      "publishedAt": "2024-12-19T12:07:16.8757928Z",
      "content": "India will play their matches at next year's Champions Trophy at a neutral venue, the International Cricket Council has announced.\r\nThe eight-team tournament in February and March is being held in Pa… [+1059 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles : this.articles,
      loading : false
      }  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
          
            return <div className="col-md-4" key={element.url} >
                   <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          }
          
          )}
          
        </div>
       
      </div>
    )
  }
}

export default News
