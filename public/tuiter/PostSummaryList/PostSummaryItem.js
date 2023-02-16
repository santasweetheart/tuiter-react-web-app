const PostSummaryList = (post) => {
  return(`
        <li class="list-group-item">
          <div class="row">
            <div class="col-7 col-lg-9">
              <div class="text-secondary">${post.topic}</div>
              <div class="fw-bolder">${post.userName} <i class="fa-solid fa-circle"></i><span class="text-secondary fw-normal"> - ${post.time}</span></div>
              <div class="fw-bolder text-break">${post.title}</div>
            </div>
            <div class="col-5 col-lg-3"> <img class="float-end" src="${post.image}" height="100px"> </div>
          </div>
        </li>
   `);
}
export default PostSummaryList;

