// Contentful API details
const spaceId = "28s4t9brspwb"
const environmentId = "master"
const accessToken = "ea1fM7QlXrHQKmP8PNdmG-OYEgExAisGOWq49w4EObo"

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`

const grabData = function () {
  // Fetch, parse and return contentful data
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Make data more simple to handle by looping over each item in the data
      return data.items.map(item => {
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
  console.log(data)
})
