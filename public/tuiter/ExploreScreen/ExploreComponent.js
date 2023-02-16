import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
  return(`
            <div class="row">
                       <!-- search field and cog -->
                        <div class="position-relative d-flex align-content-center">
                         <input class="form-control rounded-pill ps-5 w-100" placeholder="Search Tuiter">
                         <i class="fa fa-search wd-search"></i>
                         <a class="wd-gear float-end ps-3"><i class="fa fa-cog fa-2x"></i></a>
                         </div>
           </div>
           <ul class="nav mb-2 mt-1 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
                  <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                  <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
              <img class = "mt-1" src="../../images/starship.jpg" width="100%">
              <h2 class="position-absolute bottom-0 text-light fw-bolder ms-2">SpaceX's Starship</h2>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

