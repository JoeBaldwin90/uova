# Uova
A menu/webstie for a hypothetical cafe in London. The menu items are dynamic; managed by a hypothetical client "Uova" using the CMS [Contentful](https://www.contentful.com).

## Intention
To integrate with a third-party CMS via their API to control the content displayed in my app.  

##### Timeframe
2 days

## Process
I started by building the app with static HMTL/CSS. I then uploaded all of my assets and data to Contentful. 

I used the [Content Delivery API documentation](https://www.contentful.com/developers/docs/references/content-delivery-api/) to generate the API endpoint I needed to build a dynamic version of my app. I then used AJAX to parse this data and Javascript to inject HTML structure and content into the main section of my app. 

## Technologies
- HTML / CSS
- Javascript
- AJAX
- Thrid-party CMS

## Challenges
The hardest part of this project was pulling in the image url from the JSON data. The image url was stored in a different part of the data tree to the data I was accessing to populate my menu item titles, descriptions and prices. 

Here's how I overcame this problem:
- I created a variable for the "Asset" block of data named `assets`.
- I created a variable `imageId` for the image ID stored in the `items.fields` block of JSON data. 
- I used `.find()` to return the object in the asset data block which had an image ID matching `imageId`. 
- I stored that object as a variable named `imageData` to make it easier to work with.
- I then accessed the url within the object (`imageData.fields.file.url`) and set it to equal `imageUrl`. Phew! 
- Finally, I created a new path in the data for the image url (`item.fields.image`) and set the value as `imageUrl`. This meant that my image url could be used elegantly (`<img src="${item.image}" />`) with the injected HTML content. 

[This image](https://bit.ly/2Z5VZN9) shows how the data is separated. It also contains a few markers and code snippets for how I went about finding the object `imageData` that I needed to grab the image url from.  

## Lessons learned
Sometimes JSON data comes in unexpected forms and isn't always easy to work with. But, there is always a way to access disparate data and make it more useable by creating variables. 

## Future develoment
There are lots of advancements that can be made with this project because Contentful's API is [so flexible](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/links-to-asset). The next thing I'd like to do with this app is to create a search, or ordering tool that allows users to re-order the menu items by cuisine type or product price. The [order and re-order](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/order) options look like a good place to start for the latter. 
