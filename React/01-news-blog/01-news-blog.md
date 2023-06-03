# News site

Based on the data from the file news article, you need to build a news site.

The data is an array of objects. Each object looks like this:

```
  {
    "Article": "KARACHI: The Sindh government has decided to bring down public transport fares by 7 per cent due to massive reduction in petroleum product prices by the federal government, Geo News reported.Sources said reduction in fares will be applicable on public transport, rickshaw, taxi and other means of traveling.Meanwhile, Karachi Transport Ittehad (KTI) has refused to abide by the government decision.KTI President Irshad Bukhari said the commuters are charged the lowest fares in Karachi as compare to other parts of the country, adding that 80pc vehicles run on Compressed Natural Gas (CNG). Bukhari said Karachi transporters will cut fares when decrease in CNG prices will be made.",
    "Date": "1/1/2015",
    "Heading": "sindh govt decides to cut public transport fares by 7pc kti rej",
    "NewsType": "business"
  }
```

Use as many features from what we have learned so far as you can. E.g. Context API, toasts, routes etc.



## Tasks

1. Build a header that contains a search box with a button and a menu
   1. when the user clicks the search button he should be redirected to the search results page. The search text should also be passed to that page so the user can see the search results. If the search text is empty, then the user should be informed that he needs to type a text.
   2. The menu should include links to homepage, sports, business, contact.
   3. Add a site logo
   4. Add a '+' button. When clicked the user should go to the add a news article page

2. Build the homepage. It should contain the 10 most recent news from the category sport and the 10 most recent articles from the business category.
   1. Create an article card. It should contain:
      1.  Article heading
      2.  Article category
      3.  Publication date
      4.  A random image from `https://picsum.photos/` or `https://lorem.space/api`
3.  Build an article page so when the user clicks on the card, he should be redirected that article page.
    1.  In the page should be rendered all information from the article.
    2.  Also there should be a link to the category page the article belongs to
4. build a page for the sports articles and another one for the business articles. The user should be able to search only these categories while on these 2 pages. That is when the user is at the sports page, he should be able to search only the sports articles
5. create the add news article page. The user should be able to type the heading, select the publication date, type the main article and add an image from his local computer.
6. create a contact page where the users can send a message to the site which should include user's name, email, message subject and the message itself. When the user presses the send button then the app should send the message to the `post` api from this site: `https://jsonplaceholder.typicode.com/` and then after the successful response, render a toast with a `thank you` message