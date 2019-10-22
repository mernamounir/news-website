


var row = document.getElementById("postsRow");
var links = document.getElementsByClassName("nav-link");
var posts ;
var category = 'general';
var req = new XMLHttpRequest();

getPosts(category);

for(var i=0;i<links.length ;i++)
    {
        links[i].addEventListener("click",function(e){


            category =   e.target.innerHTML;
            getPosts(category);
            
        })
    }



function getPosts(category)
{
    var url  =`https://newsapi.org/v2/top-headlines?country=us&category=`+category+`&apiKey=d34d49ce3a794aca80d1ae821239b0eb`

        req.open('GET' , url);

        req.onreadystatechange = function()
        {
            if(req.readyState == 4 && req.status == 200 )
                {
                    posts = JSON.parse( req.response); 
                    posts = posts.articles;
                    displayPosts();
                }
            else
                {
                // console.log("connection  error");
                }    
        }
        req.send();

}



function displayPosts()
{
    var temp ="";
    for(var i =0  ; i <posts.length ; i++)
        {
                temp +=`   
                <div class="col-md-3">
                <a href="`+posts[i].url+`">
                <div class="post">
                    <img src="`+posts[i].urlToImage+`" class="img-fluid"/>
                    <h6>`+posts[i].title+`</h6>
                    <p class="text-muted">`+posts[i].description+`</p>
                </div>
                </a>
    
    
            </div>`
        }

     row.innerHTML = temp;   
}











