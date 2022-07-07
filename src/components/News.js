import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  articles =[
    {
    "source": {
    "id": null,
    "name": "Johnchow.com"
    },
    "author": "John Chow",
    "title": "Elon Musk Secretly Fathered Twins with Neuralink Exec Who Reported to Him",
    "description": "Elon Musk, the world’s richest man, has been revealed to have fathered twins with Shivon Zilis, a Neuralink executive who reports directly to him. The news was discovered through court records obtained by Business Insider. Musk and Zilis sought to change the …",
    "url": "https://johnchow.com/elon-musk-secretly-fathered-twins-with-neuralink-exec-who-reported-to-him/",
    "urlToImage": "https://johnchow.com/wp-content/uploads/2022/07/elon-zilis.jpg",
    "publishedAt": "2022-07-07T16:06:06Z",
    "content": "Elon Musk, the worlds richest man, has been revealed to have fathered twins with Shivon Zilis, a Neuralink executive who reports directly to him. The news was discovered through court records obtaine… [+2091 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Motley Fool"
    },
    "author": "newsfeedback@fool.com (Chris Neiger)",
    "title": "Why Tesla's Stock Is Inching Higher Today",
    "description": "Investors were looking for some positive EV news and found some today.",
    "url": "https://www.fool.com/investing/2022/07/07/why-teslas-stock-is-inching-higher-today/",
    "urlToImage": "https://g.foolcdn.com/editorial/images/688894/2120x920_mx-forestfront34.png",
    "publishedAt": "2022-07-07T15:59:37Z",
    "content": "What happened \r\nShares of Tesla(TSLA 4.08%) were gaining ground today, on seemingly no company-specific news. Instead, investors may be pushing the electric vehicle (EV) stock higher on positive comm… [+1594 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Brittany Miller",
    "title": "Elon Musk after twin reveal: ‘Doing my best to help the underpopulation crisis’",
    "description": "The Tesla CEO's tweets on birth rates have been revisited on the news that he secretly welcomed twins late last year.",
    "url": "https://nypost.com/2022/07/07/elon-musk-after-twin-reveal-tweets-he-is-helping-underpopulation/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/07/elon-musk-overpopulation-tweets-comp-1-1.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2022-07-07T15:56:07Z",
    "content": "Elon Musk is just “doing his part” to increase the population, the Tesla CEO quipped on Twitter last month.\r\nOn the heels of reports that the billionaire quietly welcomed twins with Shivon Zilis, an … [+1990 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Independent Journal Review",
    "title": "Elon Musk Seemingly Responds to Report He Had Twins With an Executive at One of His Startups",
    "description": "Tesla CEO Elon Musk appeared to respond to a report that had twins with one of his top executives. According to a report from Insider, court documents show he quietly had twins with Shivon Zilis last November. In April, Musk and Zilis filed a petition to chan…",
    "url": "https://freerepublic.com/focus/f-chat/4076705/posts",
    "urlToImage": null,
    "publishedAt": "2022-07-07T15:51:18Z",
    "content": "Skip to comments.\r\nElon Musk Seemingly Responds to Report He Had Twins With an Executive at One of His Startups\r\nIndependent Journal Review ^\r\n | July 7, 2022 at 11:43am\r\n | By Savannah Rychcik\r\nPost… [+2855 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Portland Mercury"
    },
    "author": "Isabella Garcia",
    "title": "Good Morning, News: Questionable Gunshot Surveillance Could Come to Portland, COVID in Oregon, and Bye Bye Boris",
    "description": "by Isabella Garcia\n \n \n \n The Mercury provides news and fun every single day—but your help is essential. If you believe Portland benefits from smart, local journalism and arts coverage, please consider making a small monthly contribution, because without you,…",
    "url": "https://www.portlandmercury.com/blogtown/2022/07/07/43951472/good-morning-news-questionable-gunshot-surveillance-could-come-to-portland-covid-in-oregon-and-bye-bye-boris",
    "urlToImage": "https://media1.fdncms.com/portmerc/imager/u/large/43952381/1657208705-gettyimages-1241752403.jpg",
    "publishedAt": "2022-07-07T15:50:33Z",
    "content": "The Mercury provides news and fun every single daybut your help is essential. If you believe Portland benefits from smart, local journalism and arts coverage, please consider making a small monthly c… [+4553 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "How-To Geek"
    },
    "author": "Corbin Davenport",
    "title": "Volkswagen’s New Battery Factories Could Lead to Cheaper EVs",
    "description": "Batteries are the most important component of any electric vehicle, but many car makers don’t make their own batteries. Volkswagen just revealed it’s creating a subsidiary company to manufacture battery cells for EVs.",
    "url": "https://www.howtogeek.com/816664/volkswagen%e2%80%99s-new-battery-factories-could-lead-to-cheaper-evs/",
    "urlToImage": "https://www.howtogeek.com/wp-content/uploads/2022/07/vw-battery-factory.jpg?height=200p&trim=2,2,2,2",
    "publishedAt": "2022-07-07T15:50:19Z",
    "content": "Volkswagen\r\nBatteries are the most important component of any electric vehicle, but many car makers don’t make their own batteries. Volkswagen just revealed it’s creating a subsidiary company to manu… [+1559 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Raw Story"
    },
    "author": "Agence France-Presse",
    "title": "Elon Musk says doing 'best' to boost birth rates",
    "description": "Elon Musk said Thursday that he was helping combat falling birth rates after it was reported that he had twins last year with an executive at one of his companies.\"Doing my best to help the underpopulation crisis,\" tweeted the billionaire tech entrepreneur, w…",
    "url": "https://www.rawstory.com/elon-musk-says-doing-best-to-boost-birth-rates/",
    "urlToImage": "https://www.rawstory.com/media-library/elon-musk.jpg?id=30071978&width=1200&coordinates=0%2C69%2C0%2C96&height=600",
    "publishedAt": "2022-07-07T15:47:47Z",
    "content": "\"I'm a proud Tunisian woman standing here,\" said Jabeur, who was the first Arab player to make a Slam semi-final.\r\nBefore Thursday, South Africans Irene Bowder Peacock, at the 1927 French Open, and R… [+3099 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Extra"
    },
    "author": "Extra Staff",
    "title": "Elon Musk Secretly Welcomes Twins with Shivon Zilis (Report)",
    "description": "It looks like Tesla CEO Elon Musk is a dad again.\n Musk, 51, reportedly welcomed twins with Neurolink exec Shivon Zilis, 36, last year.\n According to Business Insider, Elon and Shivon filed papers to change the twins’ names “to have their father’s last name a…",
    "url": "https://extratv.com/2022/07/07/elon-musk-secretly-welcomes-twins-with-shivon-zilis-report/",
    "urlToImage": "https://extra-images.akamaized.net/image/34/16by9/2022/04/25/344e4061f6084e9c87e328ea24708196_xl.jpg",
    "publishedAt": "2022-07-07T15:47:23Z",
    "content": "It looks like Tesla CEO Elon Musk is a dad again.\n Musk, 51, reportedly welcomed twins with Neurolink exec Shivon Zilis, 36, last year.\n According to Business Insider, Elon and Shivon filed papers to… [+886 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Daily Caller"
    },
    "author": "Sarah Weaver",
    "title": "‘I Hope You Have Big Families’: Elon Musk Vows To ‘Help The Underpopulation Crisis’",
    "description": "Tesla founder Elon Musk took to Twitter Thursday to lament the collapsing birth rate, vowing to do his best to, &quot;help the underpopulation crisis.&quot;",
    "url": "https://dailycaller.com/2022/07/07/big-families-elon-musk-underpopulation-crisis-twitter/",
    "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2022/06/GettyImages-1238367009-scaled-e1655412238997.jpg",
    "publishedAt": "2022-07-07T15:43:44Z",
    "content": "Tesla founder Elon Musk took to Twitter to lament the collapsing birth rate, vowing to do his best to, “help the underpopulation crisis.”\r\n“A collapsing birth rate is the biggest danger civilization … [+1723 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TheGrio"
    },
    "author": "Associated Press",
    "title": "U.S. jobless claims rise to 235k, most in nearly six months",
    "description": "WASHINGTON (AP) — More Americans applied for unemployment benefits last week and while layoffs remain low, it was the fifth\nThe post U.S. jobless claims rise to 235k, most in nearly six months appeared first on TheGrio.",
    "url": "http://thegrio.com/2022/07/07/u-s-jobless-claims-rise-to-235k-most-in-nearly-six-months/",
    "urlToImage": "https://thegrio.com/wp-content/uploads/2022/07/AP-Unemployment-Claims-Help-Wanted-Sign-scaled.jpg",
    "publishedAt": "2022-07-07T15:43:15Z",
    "content": "Applications for jobless aid for the week ending July 2 rose to 235,000, up 4,000 from the previous week and the most since mid-January.\r\nWASHINGTON (AP) More Americans applied for unemployment benef… [+3147 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Seeking Alpha"
    },
    "author": "Logan Kane",
    "title": "50% Drop For The S&P? Why Michael Burry And 'Dr. Doom' Nouriel Roubini Think So",
    "description": "Known as Dr. Doom, Nouriel Roubini has published an essay arguing that the S&P 500 will fall roughly 50%. Read what investors should know about SPY here.",
    "url": "https://seekingalpha.com/article/4522205-50-percent-drop-for-the-s-and-p-500-why-michael-burry-and-dr-doom-nouriel-roubini-think-so",
    "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1304573995/image_1304573995.jpg?io=getty-c-w750",
    "publishedAt": "2022-07-07T15:40:00Z",
    "content": "Byrdyak\r\nNouriel Roubini (known by the press as \"Dr. Doom\") recently authored an essay calling for a stagflationary debt crisis and a 50% bear market in stocks. Dr. Michael Burry (the star of The Big… [+10869 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Raw Story"
    },
    "author": "Brad Reed",
    "title": "Internal messages from Herschel Walker advisers show 'concerns that he isn’t mentally fit for the job': report",
    "description": "New reporting from The Daily Beast reveals that advisers to Trump-backed Georgia Senate candidate Herschel Walker have serious reservations about his fitness for the job.\n\nA person described as a \"closely connected adviser\" to Walker's Senate campaign has sha…",
    "url": "https://www.rawstory.com/herschel-walker-2657624246/",
    "urlToImage": "https://www.rawstory.com/media-library/trump-sees-herschel-walker-as-unstoppable-candidate-in-georgia-but-many-in-gop-are-wary.jpg?id=26923714&width=1200&coordinates=0%2C133%2C0%2C134&height=600",
    "publishedAt": "2022-07-07T15:27:52Z",
    "content": "She and Musk, who became the richest person in the world last year, in April filed a petition with a Texas court for the children to \"have their father's last name and contain their mother's last nam… [+1492 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Richard Lawler",
    "title": "Court docs reveal secret Elon Musk children with long-term Musk exec",
    "description": "Business Insider reports that Elon Musk is the father of twins with Shivon Zilis, who is an executive at his company Neuralink, a board member at the AI nonprofit he co-founded, OpenAI, and a former Tesla employee.",
    "url": "https://www.theverge.com/2022/7/7/23198199/elon-musk-children-neuralink-open-ai-exec-twins",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/QI_p4vavM60sk6ARz8Ao-X7se6U=/0x423:4205x2625/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23690132/1240015769.jpg",
    "publishedAt": "2022-07-07T15:24:40Z",
    "content": "The revelation comes after Musk and his companies have faced allegations of sexual impropriety and harassment\r\nAccording to a report by Business Insider, Elon Musk is the father of twin children with… [+2585 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Fred Lambert",
    "title": "Elon Musk suggests Tesla will make ‘highly configurable Robovan’ for people and cargo",
    "description": "Elon Musk suggests that Tesla will make a “highly configurable Robovan” to transport both people and cargo. The comment comes after the CEO announced that Tesla will make a dedicated electric vehicle to work as a “robotaxi.”\n more…\nThe post Elon Musk suggests…",
    "url": "https://electrek.co/2022/07/07/elon-musk-tesla-make-highly-configurable-robovan-people-cargo/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/02/Tesla-electric-solar-van-e1613089867802.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-07-07T15:22:23Z",
    "content": "Elon Musk suggests that Tesla will make a “highly configurable Robovan” to transport both people and cargo. The comment comes after the CEO announced that Tesla will make a dedicated electric vehicle… [+2432 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "funemployed",
    "title": "Who is Shivon Zilis? Meet reported mother of Elon Musk's secret twins",
    "description": "The Tesla co-founder welcomed secret twin babies with Zilis, one of his top executives at Neuralink, in November 2021. In April of the following year, the parents requested the infants’ monikers... #icehockeyteam #justinemusk #yaleuniversity #shivonzilis #boa…",
    "url": "https://biztoc.com/p/hzcxut8w?ref=rss",
    "urlToImage": "https://cdn.biztoc.com/og/hzcxut8w.jpg",
    "publishedAt": "2022-07-07T15:20:02Z",
    "content": "The Tesla co-founder welcomed secret twin babies with Zilis, one of his top executives at Neuralink, in November 2021. In April of the following year, the parents requested the infants monikers be ch… [+789 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Ariel Zilber",
    "title": "Elon Musk confirms fathering twins with Neuralink exec Shivon Zilis",
    "description": "Elon Musk confirmed on Thursday that he is fathered twins with an executive at his brain chip company Neuralink just weeks before welcoming his second child with Canadian pop star Grimes.",
    "url": "https://nypost.com/2022/07/07/elon-musk-confirms-twins-with-neuralink-exec-shivon-zilis/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/07/elon-musk-overpopulation-tweets-comp-1.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2022-07-07T15:18:46Z",
    "content": "Elon Musk confirmed on Thursday that he is fathered twins with an executive at his brain chip company Neuralink just weeks before welcoming his second child with Canadian pop star Grimes.\r\n“Doing my … [+3580 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Jon Markman, Contributor, \n Jon Markman, Contributor\n https://www.forbes.com/sites/fast-forward-investing/",
    "title": "Why Disrupters Like FedEx Are Ditching Their Private Clouds",
    "description": "It’s time for investors to sell shares of Digital Realty Trust (DLR).",
    "url": "https://www.forbes.com/sites/jonmarkman/2022/07/07/why-disrupters-like-fedex-are-ditching-their-private-clouds/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/62c6f92360a5309d6e23ddea/0x0.jpg?format=jpg&width=1200",
    "publishedAt": "2022-07-07T15:18:35Z",
    "content": "Private Server Farms Might Become A Thing Of The Past Photo: Marijan Murat/dpa (Photo by Marijan ... [+] Murat/picture alliance via Getty Images)\r\ndpa/picture alliance via Getty Images\r\nThe corporate… [+4248 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Mail"
    },
    "author": "Ronny Reyes",
    "title": "Musk says he is 'doing my best to help the underpopulation crisis'",
    "description": "On Thursday, the Tesla CEO suggested that his company should invest in smart minivans for people and cargo, a vehicle usually associated with big families as it's revealed he fathered nine kids.",
    "url": "https://www.dailymail.co.uk/news/article-10991801/Musk-says-doing-best-help-underpopulation-crisis.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2022/07/07/14/59992347-0-image-a-32_1657201902276.jpg",
    "publishedAt": "2022-07-07T15:18:34Z",
    "content": "Elon Musk has joked that he is helping the world's 'underpopulation crisis' and that Tesla should make a 'Robovan for people and cargo' a day after it was revealed that he has fathered twins with an … [+16915 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Raw Story"
    },
    "author": "Agence France-Presse",
    "title": "WNBA player Brittney Griner pleads guilty to drug charges in Russian court",
    "description": "Brittney Griner, a US basketball star detained in Russia, pleaded guilty to drug smuggling charges in court on Thursday but said she did not intend to break Moscow's laws.The WNBA star said in court in the town of Khimki outside Moscow that she \"would like to…",
    "url": "https://www.rawstory.com/wnba-player-brittney-griner-pleads-guilty-to-charges-in-russian-court/",
    "urlToImage": "https://www.rawstory.com/media-library/us-wnba-basketball-superstar-brittney-griner-arrives-to-a-hearing-at-the-khimki-court-outside-moscow-on-july-1-2022-kirill-kudryavtsev-afp-file.jpg?id=30068348&width=1200&coordinates=0%2C54%2C0%2C54&height=600",
    "publishedAt": "2022-07-07T15:16:00Z",
    "content": "She and Musk, who became the richest person in the world last year, in April filed a petition with a Texas court for the children to \"have their father's last name and contain their mother's last nam… [+1492 chars]"
    }
    ];

    constructor(){
      super();
      

      this.state = {
        article : this.articles, 
        loading : false
      }
      console.log(this.article);
    }

  render() {   
    return (
      <div>
        <h2>Top Headlines</h2>
        
        <div className="container">
          <div className="row">
          {this.state.article.map((element)=>
            {return <div className="col-md-4">
            <NewsItem title={element.title} context={element.description} imageUrl={element.urlToImage} url={element.url}/>
            </div>}
          )}
          </div>
        </div>
        </div>
    )
  }
}
