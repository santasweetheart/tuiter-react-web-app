const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
      <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fas fa-home"></i><span class="d-none d-xl-block ps-1"> Home</span></a>
        <a href="" class="list-group-item list-group-item-action active d-flex align-items-center">
          <i class="fas fa-hashtag"></i>  <span class="d-none d-xl-block ps-1"> Explore</span></a>
        <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fas fa-bell"></i> <span class="d-none d-xl-block ps-1"> Notifications</span></a>
        <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fas fa-envelope"></i><span class="d-none d-xl-block ps-1"> Messages</span></a>
        <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fas fa-bookmark"></i> <span class="d-none d-xl-block ps-1"> Bookmarks</span></a>
        <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fas fa-list"></i> <span class="d-none d-xl-block ps-1"> Lists</span></a>
        <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fas fa-user"></i> <span class="d-none d-xl-block ps-1"> Profile</span></a>
        <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="fa-solid fa-ellipsis fa-sm"></i>
          <span class="d-none d-xl-block ps-1"> More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;


