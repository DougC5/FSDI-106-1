
//Store todos here
let db = [];
let listLength = 0;
let impString = `<div id='toggleImp' class="alert alert-primary my-0 py-1 px-2" role="alert">Normal</div>`;
let impValue = 'Normal';

function Todo(text, location, importanceHTML, importanceString) {
    this.text = text;
    this.location = location;
    this.importanceHTML = importanceHTML;
    this.importanceString = importanceString;
}

$(document).ready(function () {
    $('#button').click(createTodo);
    
    //Sets default imnportance indicator to 'normal'
    $(impString).insertAfter('.dropdown-menu');

    //remove button functionality
    $('#list').on('click', 'button', function (e){
        e.target.parentElement.parentElement.parentElement.remove();
    });


    //Build list items from user inputs
    $('.dropdown-menu').click(function (e) {
        let item = e.target.textContent;
        $('#inputSection #toggleImp').remove();

    //Set impValue from 'Normal' to: 'High' or 'Low'
        impValue = item;

        if (item === 'High') {
            item = `<div id='toggleImp' class="alert alert-danger my-0 py-1 px-2" role="alert">High</div>`
            $(item).insertAfter('.dropdown-menu');
        }


        if (item === 'Low') {
            item = `<div id='toggleImp' class="alert alert-secondary my-0 py-1 px-2" role="alert">Low</div>`
            $(item).insertAfter('.dropdown-menu');

        }

        impString = item;
    });

    $('#addTodo').keypress(function (e) {
        console.log(e);
        if (e.keyCode == 13) {
            createTodo();
        }
    })



});



function createTodo() {
    //Get Text
    //Create LI
    var text = $('#addTodo').val();
    //var imp = $('.dropdown-menu').text();
    let objTodo = new Todo(text, listLength, impString, impValue);
    db.push(objTodo);
    console.log(text, listLength, impString);

    listLength++;

    var li = `<li class="list-group-item">
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight align-self-center">${text}</div>
                <div class='p-2 form-inline align-self-center'>
                    <div class="p-2 bd-highlight align-self-center">Importance:</div>
                    ${impString}
                </div>
                    <div class="p-2 bd-highlight"><button id='removeButton' type="button" class="btn btn-danger align-self-end">Remove
                    </button>
                    </div>
                </div>
              </li>`;

    $('#list').append(li);
    $('#inputSection #toggleImp').remove();
    $('#addTodo').val('');
    
    // Reset Importance to 'Normal'
    impString = `<div id='toggleImp' class="alert alert-primary my-0 py-1 px-2" role="alert">Normal</div>`;
    $(impString).insertAfter('.dropdown-menu');
    
}
