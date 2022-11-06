
  $(document).ready(function () {
    $('#addImage').click(function () {
      var imageUrl = $('#imageUrl').val();
      var cardHtml = `<div class="card mt-5 ml-5" style="width: 25rem">
      <img src="${imageUrl}"
        class="card-img-down"
        alt="..." />
      <div
        class="card-body d-flex justify-content-between align-items-center">
        <a
          class="card-title"
          download="image.jpg"
          href="${imageUrl}"
          >Download</a
          <p>
        <button id="btn" type="button"><i class="fa-solid fa-thumbs-up"></i><span id="display">0</span></button>
        <button id="BTNN" type="button"><i class="fa-solid fa-thumbs-down"></i><span id="DISPLAYY">0</span></button>
        </p>
      
        <script type="text/javascript">
            var count = 0;
            var btn = document.getElementById("btn");
            var disp = document.getElementById("display");
      
            btn.onclick = function () {
                count++;
                disp.innerHTML = count;
            }
        </script>
        <script type="text/javascript">
            var count2 = 0;
            var BTNN = document.getElementById("BTNN");
            var DISPLAYY = document.getElementById("DISPLAYY");
      
            BTNN.onclick = function () {
                count2 ++;
                DISPLAYY.innerHTML = count2;
            }
        </script>
        </button>
      </div>
    </div>`;
      $('#imageContainer').append(cardHtml);
    });
  });
