const WhoToFollowListItem = (who) => {
  return(`
       <li class="list-group-item">
          <div class="row">
            <div class="col-2 mt-1 ">
              <img class = "rounded-circle" src="${who.avatarIcon}" height=40px>
            </div>
            <div class="col-7 float-start">
              <div class="fw-bolder">${who.userName}</div>
              <div class="text-secondary fw-normal">@${who.handle}</div>
            </div>
            <div class="col-3">
              <button class="btn-primary rounded-pill float-end mt-1">Follow</button></div>
          </div>
        </li>
   `);
}
export default WhoToFollowListItem;


