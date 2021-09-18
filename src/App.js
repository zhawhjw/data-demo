import logo from './logo.svg';
import { Ars } from 'ars-arsenal'
import xhr from "xhr";

import './App.css';
import 'ars-arsenal/style.css';


let options = {
  autoComplete: true, // Show or hide autocomplete results

  resource: 'photo', // the noun used for selection, i.e. "Pick a photo"

  // Configure the root element's HTML attributes. default = {}
  rootAttributes: {
    className: 'my-custom-class another-custom-class',
    'data-test': 'my-integration-selector-helper'
  },

  // The base URL for API interaction
  url: 'photo/resource/endpoint',

  // How to display the items. Can be "table" or "gallery"
  mode: 'gallery',

  // What table columns to display, and in what order
  columns: ['id', 'name', 'caption', 'attribution', 'preview'],

  multiselect: false,

  listUrl: function(url) {
    // Used to build the URL that fetches lists of records.
    return url
  },

  listQuery: function({ search, page, sort }) {
    // Use this function to rename query parameters before building
    // the listUrl URL
    //
    // Any data returned from this function will be stringified into
    // query parameters
    return { search, page, sort }
  },

  showUrl: function(url, id) {
    // Used to build the URL that fetches a single record
    return `${url}/${id}`
  },

  onError: function(response) {
    // format errors before they are sent as a "string" value
    // to the component
    return response.code + ': ' + response.message
  },

  onFetch: function(response) {
    // format the response, useful if you do not control the JSON
    // response from your endpoint
    return response.data
  },

  onChange: function(id) {
    // Whenever a new item is picked, this event is triggered
    console.log('The value was changed to %s', id)
  },

  request: function(url, callback) {
    // Behavior to configure networking. Return an XMLHTTPRequest
    return xhr(url, callback)
  },

  logger: function(level, message) {
    // Override this method to handle usage warnings and issues
    // ArsArsenal considers errors with API interaction. Useful
    // for monitoring.
    switch (level) {
      case 'warning':
        console.warn(message)
        break
      case 'error':
        console.error(message)
        break
      default:
        console.log(message)
        break
    }
  }
}

function App() {
  return (
    <Ars options={options} />
  );
}

export default App;
