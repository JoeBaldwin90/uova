// Contentful API details
const spaceId = "28s4t9brspwb"
const environmentId = "master"
const accessToken = "ea1fM7QlXrHQKmP8PNdmG-OYEgExAisGOWq49w4EObo"

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`

const grabData = function () {
  // Fetch & parse json data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  	.catch(error => {
  		console.log("error")
  })
}

grabData()
