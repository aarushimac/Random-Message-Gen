var usernames = ["@activistnyc", "@culturestrike", "@legallyblackuk", "@officiallifeinleggings", "@variantspaceart", "@monachalabi", "@pinkprotest", "@annieelainey", "@sarainfox", "@harnaamkaur", "@proteststencil", "@enamasiama", "@kinfolknetwork", "@recipesforselflove", "@kuchenga", "@theimtiredproject", "@aaron__philip", "@sadasiangirls", "@sistersuncut", "@waiwainu", "@indigenousgoddessgang"]
function display() {
  var activist = usernames[Math.floor(Math.random()*usernames.length)]
  console.log(activist)
  return activist
}
// THIS:
// const final = document.querySelector('.outputuser')
// IS THE SAME AS DOING THIS:
const final = $('.outputuser')
// THIS:
// final.addEventListener('click', display);
// IS THE SAME AS DOING THIS:

$(document).ready(function(){
  $('button').click(function() {
    display()
    $('h2').text(display())
  }

)


})
