// Contentful API details
const spaceId = "28s4t9brspwb"
const environmentId = "master"
const accessToken = "ea1fM7QlXrHQKmP8PNdmG-OYEgExAisGOWq49w4EObo"

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`

const sectionTag = document.querySelector("section.grid")

const grabData = function () {
  // Fetch, parse and return contentful data
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Store assets contained in the data
      const assets = data.includes.Asset

      // Make data more simple to handle by looping over each item in the data
      return data.items.map(item => {
        // Set image url
        let imageUrl = "assets/image5.jpg"
        // Store image ID from data item
        const imageId = item.fields.image.sys.id
        // Return true if asset ID matches image ID
        const imageData = assets.find(asset => {
          return asset.sys.id == imageId
        })

        if (imageData) {
          imageUrl = imageData.fields.file.url
        }
        item.fields.image = imageUrl
        // Then create new array of objects for the fields data in each item
        return item.fields
      })
    })
  	.catch(error => {
  		console.log("error")
  })
}

grabData().then(data => {
  // Do something with the data

  // Remove loader
  sectionTag.innerHTML = ""

  // Build HTML structure and inject JSON data as content
  data.forEach(item => {
    sectionTag.innerHTML = sectionTag.innerHTML + `
    <div class="item">
      <img src="${item.image}" />
      <div class="title">
        <p>${item.title}</p>
        <p>${item.price}</p>
      </div>
      <p>${item.description}</p>
    </div>
    `
  })

})
