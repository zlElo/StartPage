function search() {
    var search_value = document.getElementById('search-value').value
    location = 'https://www.qwant.com/?q=' + search_value
    return false
}