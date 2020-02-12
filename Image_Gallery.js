var div = document.querySelector('.row');

var images = [
  'https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1488503648513-9b838ea1125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80',
  'https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  
  'https://images.unsplash.com/photo-1504204267155-aaad8e81290d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  
  'https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
  
  'https://images.unsplash.com/photo-1523681504355-8b4860f99a58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  
  'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1119&q=80',
  
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80',
  
 ' https://images.unsplash.com/photo-1485858018726-534f32e41b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
]

images.forEach((image) => {
  div.innerHTML += `
        <div class="col-lg-4">
      <div class="thumbnail">
       <img src="${image}">
       </div>
    </div>
`
});
