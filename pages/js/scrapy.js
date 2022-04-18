$('#search').change(function () {
  $('#img-urls').empty();
  dumpImages($('#search').val());
});

// Traverse the  tree, and print the folder and nodes.
function dumpImages(query) {
  const items = document.getElementsByClassName(query);
  dumpNodes(items);
  // $('#img-urls').append(dumpNodes(items));
}

function dumpNodes(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    $('#img-urls').append(nodes[i].getAttribute("data-src"));
  }
}